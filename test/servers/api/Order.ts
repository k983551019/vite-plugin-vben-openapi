// @ts-ignore
/* eslint-disable */
import { defHttp } from '/@/utils/http/axios';

/** 获取当前用户的常用收件人列表 GET /api/Order/Order_BaseInfo_ConsigneeGetList */
export async function OrderOrderBaseInfoConsigneeGetListGET(
  params: {
    // query
    userid?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.OrderConsignee[]>({
    url: '/api/Order/Order_BaseInfo_ConsigneeGetList',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理--订单列表新增 POST /api/Order/Order_BaseInfoAdd */
export async function OrderOrderBaseInfoAddPOST(
  body: API.OrderBaseInfoData,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Order/Order_BaseInfoAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 订单管理--订单列表复制创建 GET /api/Order/Order_BaseInfoCopy */
export async function OrderOrderBaseInfoCopyGET(
  params: {
    // query
    id?: number;
    uid?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<boolean>({
    url: '/api/Order/Order_BaseInfoCopy',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理--订单列表获取单条数据 GET /api/Order/Order_BaseInfoGetId */
export async function OrderOrderBaseInfoGetIdGET(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.OrderBaseInfoUpt>({
    url: '/api/Order/Order_BaseInfoGetId',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理--订单列表分页查询 GET /api/Order/Order_BaseInfoPage */
export async function OrderOrderBaseInfoPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 开始时间 */
    begindate?: string;
    /** 结束时间 */
    enddate?: string;
    /** 币种名称 */
    currency?: string;
    /** 客户订单号 */
    OrderNo?: string;
    /** 转单号 */
    TurnNumber?: string;
    /** 目的地id 不选择为0 */
    mid?: number;
    /** 运输方式id 不选择为0 */
    yid?: number;
    /** 收件人id 不选择为0 */
    sid?: number;
    /** 用户id  必填 */
    uid?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.OrderBaseInfoShowPageModels>({
    url: '/api/Order/Order_BaseInfoPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理--问题单分页查询 GET /api/Order/Order_BaseInfoProblemPage */
export async function OrderOrderBaseInfoProblemPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 运输方式id 可空 */
    tid?: number;
    /** 问题类型id 可空 */
    oid?: number;
    /** 订单号或转单号 */
    OrderNo?: string;
    /** 是否扣件  0否   1是   2全部 */
    istrue?: number;
    /** 用户id  必填 */
    uid?: number;
    /** 开始时间 */
    begindate?: string;
    /** 结束时间 */
    enddate?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ProblemOrderPageModel>({
    url: '/api/Order/Order_BaseInfoProblemPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理--退件清单分页查询 GET /api/Order/Order_BaseInfoReturnPage */
export async function OrderOrderBaseInfoReturnPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 运输方式id */
    tid?: number;
    /** 退件类型id */
    rid?: number;
    /** 订单号或转单号 */
    OrderNo?: string;
    /** 客户订单号 */
    OriginalorderNo?: string;
    /** 用户id */
    uid?: number;
    /** 开始时间 */
    begindate?: string;
    /** 结束时间 */
    enddate?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ReturnListPageModel>({
    url: '/api/Order/Order_BaseInfoReturnPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理--跟踪清单分页查询 GET /api/Order/Order_BaseInfoTrackPage */
export async function OrderOrderBaseInfoTrackPageGET(
  params: {
    // query
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 开始时间 */
    begindate?: string;
    /** 结束时间 */
    enddate?: string;
    /** 目的国  必填不选传0 */
    mid?: number;
    /** 客户订单号 */
    OrderNo?: string;
    /** 收件人电话 */
    CNumber?: string;
    /** 运输方式 必填不选传0 */
    yid?: number;
    /** 订单号或转单号 */
    TOrderNo?: string;
    /** 状态 必填不选传0 */
    State?: number;
    /** 用户id 必填 */
    uid?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.TrackListPageModel>({
    url: '/api/Order/Order_BaseInfoTrackPage',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单管理--订单列表修改 POST /api/Order/Order_BaseInfoUpt */
export async function OrderOrderBaseInfoUptPOST(
  body: API.OrderBaseInfoUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Order/Order_BaseInfoUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 订单导出 POST /api/Order/OrderExport */
export async function OrderOrderExportPOST(
  params: {
    // query
    /** 订单id  多个用,分割 */
    Id?: string;
    /** 用户id */
    UserId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.post<string>({
    url: '/api/Order/OrderExport',
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量导入订单 POST /api/Order/OrderImportList */
export async function OrderOrderImportListPOST(
  params: {
    // query
    /** 登录人 */
    UserId?: number;
    /** 运输方式ID */
    TransportId?: number;
    /** 包裹类型 */
    PackageType?: number;
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
    url: '/api/Order/OrderImportList',
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    ...(options || {}),
  });
}

/** 查询运单轨迹 POST /api/Order/PolandDPDGetTrajectory */
export async function OrderPolandDPDGetTrajectoryPOST(
  body: API.DPDTrajectoryParameters,
  options?: { [key: string]: any },
) {
  return defHttp.post<API.DPDTrajectoryParametersResponse[]>({
    url: '/api/Order/PolandDPDGetTrajectory',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 生成标签--测试地址 POST /api/Order/PolandDPDLabel */
export async function OrderPolandDPDLabelPOST(
  body: API.DPDLabelParameters,
  options?: { [key: string]: any },
) {
  return defHttp.post<API.DPDLabelParametersResponse>({
    url: '/api/Order/PolandDPDLabel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 生成转单号--测试地址 POST /api/Order/PolandDPDOrderNumber */
export async function OrderPolandDPDOrderNumberPOST(
  body: API.DPDOrderParameters,
  options?: { [key: string]: any },
) {
  return defHttp.post<API.DPDOrderParametersResponse>({
    url: '/api/Order/PolandDPDOrderNumber',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
