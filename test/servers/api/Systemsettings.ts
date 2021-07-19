// @ts-ignore
/* eslint-disable */
import { defHttp } from '/@/utils/http/axios';

/** 新增模板配置信息 POST /api/Systemsettings/Config_TemplateAdd */
export async function SystemsettingsConfigTemplateAddPOST(
  params: {
    // query
    /** 模板类型： 1标签模板 2 订单导入模板 3价格导入模板 4清关模板 */
    TemplateType?: number;
    /** 当前登录人 */
    UserId?: number;
    /** 模板名称 */
    TemplateName?: string;
    /** 平台 */
    PlatformName?: string;
    /** 清关类型 1国内报关 2国外清关 */
    ClearShutType?: number;
  },
  body: {
    /** 文件 */
    File?: string;
  },
  files?: File[],
  options?: { [key: string]: any },
) {
  const formData = new FormData();
  if (files) {
    formData.append('File', files[0] || '');
  }
  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(ele, typeof item === 'object' ? JSON.stringify(item) : item);
    }
  });

  return defHttp.post<boolean>({
    url: '/api/Systemsettings/Config_TemplateAdd',
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    ...(options || {}),
  });
}

/** 模板配置--根据id查询单条数据 GET /api/Systemsettings/Config_TemplateDataId */
export async function SystemsettingsConfigTemplateDataIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigTemplate>({
    url: '/api/Systemsettings/Config_TemplateDataId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 模板配置--逻辑删除单条数据 GET /api/Systemsettings/Config_TemplateDel */
export async function SystemsettingsConfigTemplateDelGET(
  params: {
    // query
    /** id */
    id?: number;
    /** 当前登录人id */
    UserId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/Systemsettings/Config_TemplateDel',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 模板配置--批量逻辑删除数据 POST /api/Systemsettings/Config_TemplateIsDel */
export async function SystemsettingsConfigTemplateIsDelPOST(
  params: {
    // query
    /** 当前登录人id */
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/Config_TemplateIsDel',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 模板配置--分页 GET /api/Systemsettings/Config_TemplatePage */
export async function SystemsettingsConfigTemplatePageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 1标签模板 2 订单导入模板 3价格导入模板 4清关模板 */
    type?: number;
    /** 名称 可空 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ConfigTemplateShowPageModel>({
    url: '/api/Systemsettings/Config_TemplatePage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 模板配置--修改 POST /api/Systemsettings/Config_TemplateUpt */
export async function SystemsettingsConfigTemplateUptPOST(
  body: API.ConfigTemplateUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/Config_TemplateUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 品名海关编码--新增 POST /api/Systemsettings/HSCodeAdd */
export async function SystemsettingsHSCodeAddPOST(
  body: API.configArchivesHSCodeDate,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/HSCodeAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 品名海关编码--逻辑删除单条数据 GET /api/Systemsettings/HSCodeDel */
export async function SystemsettingsHSCodeDelGET(
  params: {
    // query
    /** ID */
    id?: number;
    /** 当前登录人 */
    UserId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/Systemsettings/HSCodeDel',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 品名海关编码--导出 POST /api/Systemsettings/HSCodeExcel */
export async function SystemsettingsHSCodeExcelPOST(
  body: API.HSCodeExcel,
  options?: { [key: string]: any },
) {
  return defHttp.post<string>({
    url: '/api/Systemsettings/HSCodeExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 品名海关编码--导入 POST /api/Systemsettings/HSCodeExcels */
export async function SystemsettingsHSCodeExcelsPOST(
  params: {
    // query
    /** 登录人id */
    UserId?: number;
  },
  body: {
    /** 文件 */
    formCollection?: string;
  },
  files?: File[],
  options?: { [key: string]: any },
) {
  const formData = new FormData();
  if (files) {
    formData.append('formCollection', files[0] || '');
  }
  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(ele, typeof item === 'object' ? JSON.stringify(item) : item);
    }
  });

  return defHttp.post<boolean>({
    url: '/api/Systemsettings/HSCodeExcels',
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    ...(options || {}),
  });
}

/** 品名海关编码--根据id查询单条数据 GET /api/Systemsettings/HSCodeId */
export async function SystemsettingsHSCodeIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesHSCode>({
    url: '/api/Systemsettings/HSCodeId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 品名海关编码--批量逻辑删除数据 POST /api/Systemsettings/HSCodeIsDel */
export async function SystemsettingsHSCodeIsDelPOST(
  params: {
    // query
    /** 当前登录人 */
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/HSCodeIsDel',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 品名海关编码--分页 GET /api/Systemsettings/HSCodePage */
export async function SystemsettingsHSCodePageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 名称 可空 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesHSCodeShowPageModel>({
    url: '/api/Systemsettings/HSCodePage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 品名海关编码--修改 POST /api/Systemsettings/HSCodeUpt */
export async function SystemsettingsHSCodeUptPOST(
  body: API.configArchivesHSCodeUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/HSCodeUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 邮编规则--新增 POST /api/Systemsettings/PostcoderulesAdd */
export async function SystemsettingsPostcoderulesAddPOST(
  body: API.configArchivesPostcoderulesData,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/PostcoderulesAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 邮编规则--逻辑删除单条数据 GET /api/Systemsettings/PostcoderulesDel */
export async function SystemsettingsPostcoderulesDelGET(
  params: {
    // query
    id?: number;
    UserId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/Systemsettings/PostcoderulesDel',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 邮编规则--根据id查询单条数据 GET /api/Systemsettings/PostcoderulesId */
export async function SystemsettingsPostcoderulesIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesPostcoderules>({
    url: '/api/Systemsettings/PostcoderulesId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 邮编规则--批量逻辑删除数据 POST /api/Systemsettings/PostcoderulesIsDel */
export async function SystemsettingsPostcoderulesIsDelPOST(
  params: {
    // query
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/PostcoderulesIsDel',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 邮编规则--分页 GET /api/Systemsettings/PostcoderulesPage */
export async function SystemsettingsPostcoderulesPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 名称 可空 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesPostcoderulesShowPageModel>({
    url: '/api/Systemsettings/PostcoderulesPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 邮编规则--修改 POST /api/Systemsettings/PostcoderulesUpt */
export async function SystemsettingsPostcoderulesUptPOST(
  body: API.configArchivesPostcoderulesUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/PostcoderulesUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 偏远地区维护--新增 POST /api/Systemsettings/RemoteareaAdd */
export async function SystemsettingsRemoteareaAddPOST(
  body: API.configArchivesRemoteareaData,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/RemoteareaAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 偏远地区维护--逻辑删除单条数据 GET /api/Systemsettings/RemoteareaDel */
export async function SystemsettingsRemoteareaDelGET(
  params: {
    // query
    id?: number;
    UserId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/Systemsettings/RemoteareaDel',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 偏远地区维护--根据id查询单条数据 GET /api/Systemsettings/RemoteareaId */
export async function SystemsettingsRemoteareaIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesRemotearea>({
    url: '/api/Systemsettings/RemoteareaId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 偏远地区维护--批量逻辑删除数据 POST /api/Systemsettings/RemoteareaIsDel */
export async function SystemsettingsRemoteareaIsDelPOST(
  params: {
    // query
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/RemoteareaIsDel',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 偏远地区维护--分页 GET /api/Systemsettings/RemoteareaPage */
export async function SystemsettingsRemoteareaPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 名称 可空 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesRemoteareaShowPageModel>({
    url: '/api/Systemsettings/RemoteareaPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 偏远地区维护信息--修改 POST /api/Systemsettings/RemoteareaUpt */
export async function SystemsettingsRemoteareaUptPOST(
  body: API.configArchivesRemoteareaUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/RemoteareaUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 仓库地址维护--新增 POST /api/Systemsettings/RepositoryAdd */
export async function SystemsettingsRepositoryAddPOST(
  body: API.configArchivesRepositoryData,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/RepositoryAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 仓库地址维护--逻辑删除单条数据 GET /api/Systemsettings/RepositoryDel */
export async function SystemsettingsRepositoryDelGET(
  params: {
    // query
    id?: number;
    UserId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/Systemsettings/RepositoryDel',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 仓库地址维护--根据id查询单条数据 GET /api/Systemsettings/RepositoryId */
export async function SystemsettingsRepositoryIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesRepository>({
    url: '/api/Systemsettings/RepositoryId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 仓库地址维护--批量逻辑删除数据 POST /api/Systemsettings/RepositoryIsDel */
export async function SystemsettingsRepositoryIsDelPOST(
  params: {
    // query
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/RepositoryIsDel',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 仓库地址维护--分页 GET /api/Systemsettings/RepositoryPage */
export async function SystemsettingsRepositoryPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 名称 可空 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesRepositoryShowPageModel>({
    url: '/api/Systemsettings/RepositoryPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 仓库地址维护--修改 POST /api/Systemsettings/RepositoryUpt */
export async function SystemsettingsRepositoryUptPOST(
  body: API.configArchivesRepositoryUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/RepositoryUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 类型维护--新增 POST /api/Systemsettings/TypesAdd */
export async function SystemsettingsTypesAddPOST(
  body: API.configArchivesTypesData,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/TypesAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 类型维护--根据id查询单条数据 GET /api/Systemsettings/TypesId */
export async function SystemsettingsTypesIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesTypes>({
    url: '/api/Systemsettings/TypesId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 类型维护--批量逻辑删除数据 POST /api/Systemsettings/TypesIsDel */
export async function SystemsettingsTypesIsDelPOST(
  params: {
    // query
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/TypesIsDel',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 类型选项--新增 POST /api/Systemsettings/TypesOptionAdd */
export async function SystemsettingsTypesOptionAddPOST(
  body: API.configArchivesTypesOptionData,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/TypesOptionAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 类型选项--逻辑删除单条数据 GET /api/Systemsettings/TypesOptionDel */
export async function SystemsettingsTypesOptionDelGET(
  params: {
    // query
    id?: number;
    UserId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/Systemsettings/TypesOptionDel',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 类型选项--根据id查询单条数据 GET /api/Systemsettings/TypesOptionId */
export async function SystemsettingsTypesOptionIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesTypesOption>({
    url: '/api/Systemsettings/TypesOptionId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 类型选项--修改 POST /api/Systemsettings/TypesOptionUpt */
export async function SystemsettingsTypesOptionUptPOST(
  body: API.configArchivesTypesOptionUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/TypesOptionUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 类型维护--分页 GET /api/Systemsettings/TypesPage */
export async function SystemsettingsTypesPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 名称 可空 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.configArchivesTypesShowPageModel>({
    url: '/api/Systemsettings/TypesPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 类型维护--修改 POST /api/Systemsettings/TypesUpt */
export async function SystemsettingsTypesUptPOST(
  body: API.configArchivesTypesUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Systemsettings/TypesUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
