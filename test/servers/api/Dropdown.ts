// @ts-ignore
/* eslint-disable */
import { defHttp } from '/@/utils/http/axios';

/** 起运港 GET /api/Dropdown/Dropdown_AirPort */
export async function DropdownDropdownAirPortGET(
  params: {
    // query
    /** 非必填项 起运港中文名称 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownAirPort[]>({
    url: '/api/Dropdown/Dropdown_AirPort',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 费用项目 GET /api/Dropdown/Dropdown_ChargeItem */
export async function DropdownDropdownChargeItemGET(
  params: {
    // query
    /** 费用项目 */
    CName?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownChargeItem[]>({
    url: '/api/Dropdown/Dropdown_ChargeItem',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 币种 GET /api/Dropdown/Dropdown_Code */
export async function DropdownDropdownCodeGET(
  params: {
    // query
    /** 币种名称 */
    code?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownCode[]>({
    url: '/api/Dropdown/Dropdown_Code',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 客服代码和客服名称 GET /api/Dropdown/Dropdown_CodeOrName */
export async function DropdownDropdownCodeOrNameGET(
  params: {
    // query
    /** 非必填项 客服代码或客服名称 */
    strName?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownCustomer[]>({
    url: '/api/Dropdown/Dropdown_CodeOrName',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理/公司名称 GET /api/Dropdown/Dropdown_Company */
export async function DropdownDropdownCompanyGET(options?: { [key: string]: any }) {
  return defHttp.get<API.DropdownCompany[]>({
    url: '/api/Dropdown/Dropdown_Company',
    method: 'GET',
    ...(options || {}),
  });
}

/** 结算公司 GET /api/Dropdown/Dropdown_Customer */
export async function DropdownDropdownCustomerGET(
  params: {
    // query
    /** 结算公司 */
    CnName?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownCustomer[]>({
    url: '/api/Dropdown/Dropdown_Customer',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 国家/目的国 GET /api/Dropdown/Dropdown_Nation */
export async function DropdownDropdownNationGET(
  params: {
    // query
    /** 国家代码或中文名称或英文名称 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownNation[]>({
    url: '/api/Dropdown/Dropdown_Nation',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 所属分公司 GET /api/Dropdown/Dropdown_Organization */
export async function DropdownDropdownOrganizationGET(
  params: {
    // query
    /** 公司名称 */
    CnName?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownOrganization[]>({
    url: '/api/Dropdown/Dropdown_Organization',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 类型 (包括 产品名称(运输方式)) GET /api/Dropdown/Dropdown_type */
export async function DropdownDropdownTypeGET(
  params: {
    // query
    /** 类型Id 3产品名称(运输方式) 4问题类型 */
    typeId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownType[]>({
    url: '/api/Dropdown/Dropdown_type',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户 GET /api/Dropdown/Dropdown_User */
export async function DropdownDropdownUserGET(
  params: {
    // query
    /** 非必填项 用户名称 */
    strName?: string;
    /** 角色Id  25客服员-操作员 2业务员-销售员 */
    roleId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.DropdownUser[]>({
    url: '/api/Dropdown/Dropdown_User',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
