// @ts-ignore
/* eslint-disable */
import { defHttp } from '/@/utils/http/axios';

/** 添加费用项目 POST /api/ConfigBaseData/AddChargeItem */
export async function ConfigBaseDataAddChargeItemPOST(
  body: API.ConfigBaseDataChargeItem,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/AddChargeItem',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加固定费用 POST /api/ConfigBaseData/AddFixCharge */
export async function ConfigBaseDataAddFixChargePOST(
  body: API.ConfigBaseDataFixCharge,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/AddFixCharge',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加关键词 POST /api/ConfigBaseData/AddKeyword */
export async function ConfigBaseDataAddKeywordPOST(
  body: API.ConfigBaseDataKeyword,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/AddKeyword',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加问题类型维护 POST /api/ConfigBaseData/AddQuestiontype */
export async function ConfigBaseDataAddQuestiontypePOST(
  body: API.ConfigBaseDataQuestiontype,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/AddQuestiontype',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 批量删除费用项目 POST /api/ConfigBaseData/BatchChargeItem */
export async function ConfigBaseDataBatchChargeItemPOST(
  body: API.BathPostModel,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/BatchChargeItem',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 批量删除固定费用 POST /api/ConfigBaseData/BatchDelFixCharge */
export async function ConfigBaseDataBatchDelFixChargePOST(
  body: API.BathPostModel,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/BatchDelFixCharge',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 批量删除品名关键词 POST /api/ConfigBaseData/BatchDelKeyword */
export async function ConfigBaseDataBatchDelKeywordPOST(
  body: API.BathPostModel,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/BatchDelKeyword',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 批量删除问题类型维护 POST /api/ConfigBaseData/BatchQuestiontype */
export async function ConfigBaseDataBatchQuestiontypePOST(
  body: API.BathPostModel,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/BatchQuestiontype',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除一条费用项目 GET /api/ConfigBaseData/DelChargeItem */
export async function ConfigBaseDataDelChargeItemGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
    /** 用户Id */
    userId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/ConfigBaseData/DelChargeItem',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除一条固定费用 GET /api/ConfigBaseData/DelFixCharge */
export async function ConfigBaseDataDelFixChargeGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
    /** 用户Id */
    userId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/ConfigBaseData/DelFixCharge',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除一条品名关键词 GET /api/ConfigBaseData/DelKeyword */
export async function ConfigBaseDataDelKeywordGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
    /** 用户Id */
    userId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/ConfigBaseData/DelKeyword',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除一条问题类型维护 GET /api/ConfigBaseData/DelQuestiontype */
export async function ConfigBaseDataDelQuestiontypeGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
    /** 用户Id */
    userId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/ConfigBaseData/DelQuestiontype',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑费用项目 POST /api/ConfigBaseData/EditChargeItem */
export async function ConfigBaseDataEditChargeItemPOST(
  body: API.ConfigBaseDataChargeItem,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/EditChargeItem',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 编辑固定费用 POST /api/ConfigBaseData/EditFixCharge */
export async function ConfigBaseDataEditFixChargePOST(
  body: API.ConfigBaseDataFixCharge,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/EditFixCharge',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 编辑品名关键词 POST /api/ConfigBaseData/EditKeyword */
export async function ConfigBaseDataEditKeywordPOST(
  body: API.ConfigBaseDataKeyword,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/EditKeyword',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 编辑问题类型维护 POST /api/ConfigBaseData/EditQuestiontype */
export async function ConfigBaseDataEditQuestiontypePOST(
  body: API.ConfigBaseDataQuestiontype,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ConfigBaseData/EditQuestiontype',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取一条费用项目 GET /api/ConfigBaseData/GetChargeItemById */
export async function ConfigBaseDataGetChargeItemByIdGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataChargeItem>({
    url: '/api/ConfigBaseData/GetChargeItemById',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取费用项目列表 GET /api/ConfigBaseData/GetChargeItemList */
export async function ConfigBaseDataGetChargeItemListGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 问题类型维护 */
    ChargeItemName?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataChargeItemListPageModel>({
    url: '/api/ConfigBaseData/GetChargeItemList',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取一条固定费用 GET /api/ConfigBaseData/GetFixChargeById */
export async function ConfigBaseDataGetFixChargeByIdGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataFixCharge>({
    url: '/api/ConfigBaseData/GetFixChargeById',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取固定费用列表 GET /api/ConfigBaseData/GetFixChargeList */
export async function ConfigBaseDataGetFixChargeListGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 费用项目Id */
    ChargeItemId?: number;
    /** 应付结算公司Id */
    CustomerId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataFixChargeListPageModel>({
    url: '/api/ConfigBaseData/GetFixChargeList',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取一条品名关键词 GET /api/ConfigBaseData/GetkeywordById */
export async function ConfigBaseDataGetkeywordByIdGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataKeyword>({
    url: '/api/ConfigBaseData/GetkeywordById',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取品名关键词列表 GET /api/ConfigBaseData/GetkeywordList */
export async function ConfigBaseDataGetkeywordListGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 品名关键词 */
    keywordName?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataKeywordListPageModel>({
    url: '/api/ConfigBaseData/GetkeywordList',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取一条问题类型维护 GET /api/ConfigBaseData/GetQuestiontype */
export async function ConfigBaseDataGetQuestiontypeGET(
  params: {
    // query
    /** 主键Id */
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataQuestiontype>({
    url: '/api/ConfigBaseData/GetQuestiontype',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取问题类型维护列表 GET /api/ConfigBaseData/GetQuestiontypeList */
export async function ConfigBaseDataGetQuestiontypeListGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 问题类型维护 */
    questiontype?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigBaseDataQuestiontypeListPageModel>({
    url: '/api/ConfigBaseData/GetQuestiontypeList',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
