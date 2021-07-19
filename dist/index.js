"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vbenOpenAPI = exports.getSchema = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const swagger2openapi_1 = tslib_1.__importDefault(require("swagger2openapi"));
const serviceGenerator_1 = require("./serviceGenerator");
const mockGenerator_1 = require("./mockGenerator");
const log_1 = tslib_1.__importDefault(require("./log"));
const getImportStatement = (requestLibPath) => {
    if (requestLibPath && requestLibPath.startsWith('import')) {
        return requestLibPath;
    }
    if (requestLibPath) {
        return `import request from '${requestLibPath}'`;
    }
    return `import { defHttp } from '/@/utils/http/axios';`;
};
const converterSwaggerToOpenApi = (swagger) => {
    if (!swagger.swagger) {
        return swagger;
    }
    return new Promise((resolve, reject) => {
        swagger2openapi_1.default.convertObj(swagger, {}, (err, options) => {
            log_1.default(['💺 将 Swagger 转化为 openAPI']);
            if (err) {
                reject(err);
                return;
            }
            resolve(options.openapi);
        });
    });
};
const getSchema = (schemaPath) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (schemaPath.startsWith('http')) {
        const json = yield node_fetch_1.default(schemaPath).then((rest) => rest.json());
        return json;
    }
    const schema = require(schemaPath);
    return schema;
});
exports.getSchema = getSchema;
const getOpenAPIConfig = (schemaPath) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const schema = yield exports.getSchema(schemaPath);
    const openAPI = yield converterSwaggerToOpenApi(schema);
    if (!schema) {
        return null;
    }
    return openAPI;
});
// 从 appName 生成 service 数据
const vbenOpenAPI = (_a) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var { requestLibPath, schemaPath, mockFolder } = _a, rest = tslib_1.__rest(_a, ["requestLibPath", "schemaPath", "mockFolder"]);
    const openAPI = yield getOpenAPIConfig(schemaPath);
    const requestImportStatement = getImportStatement(requestLibPath);
    const serviceGenerator = new serviceGenerator_1.ServiceGenerator(Object.assign({ namespace: 'API', requestImportStatement }, rest), openAPI);
    serviceGenerator.genFile();
    if (mockFolder) {
        yield mockGenerator_1.mockGenerator({
            openAPI,
            mockFolder: mockFolder || './mocks/',
        });
    }
});
exports.vbenOpenAPI = vbenOpenAPI;
