// @ts-ignore
/* eslint-disable */
import { defHttp } from '/@/utils/http/axios';

/** 编辑订单 PUT /api/OrderAdmin/EditOrder/${param0} */
export async function OrderAdminEditOrderPUT(
  params: {
    // query
    /** 订单编辑类型 1订单编辑 2入库订单编辑 */
    orderEditType?: number;
    // path
    /** 订单id */
    id: number;
  },
  body: API.EditOrder,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return defHttp.put<boolean>({
    url: '/api/OrderAdmin/EditOrder/${param0}',
    method: 'PUT',
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出清关资料 POST /api/OrderAdmin/ExportclearShut */
export async function OrderAdminExportclearShutPOST(
  body: API.OrderSearch,
  options?: { [key: string]: any },
) {
  return defHttp.post<string>({
    url: '/api/OrderAdmin/ExportclearShut',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出订单 POST /api/OrderAdmin/ExportOrder */
export async function OrderAdminExportOrderPOST(
  body: API.OrderSearch,
  options?: { [key: string]: any },
) {
  return defHttp.post<string>({
    url: '/api/OrderAdmin/ExportOrder',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 已出库列表 POST /api/OrderAdmin/GetOutlibraryList */
export async function OrderAdminGetOutlibraryListPOST(
  body: API.OutlibraryListSearch,
  options?: { [key: string]: any },
) {
  return defHttp.post<API.OutlibraryListPageOutlibrary>({
    url: '/api/OrderAdmin/GetOutlibraryList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 已入库列表 POST /api/OrderAdmin/GetUplibraryList */
export async function OrderAdminGetUplibraryListPOST(
  body: API.UplibraryListSearch,
  options?: { [key: string]: any },
) {
  return defHttp.post<API.UplibraryListPageUplibrary>({
    url: '/api/OrderAdmin/GetUplibraryList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 投保 POST /api/OrderAdmin/HandlePacket */
export async function OrderAdminHandlePacketPOST(
  body: API.RequestInsure,
  options?: { [key: string]: any },
) {
  return defHttp.post<string>({
    url: '/api/OrderAdmin/HandlePacket',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导入订单 POST /api/OrderAdmin/ImportOrder */
export async function OrderAdminImportOrderPOST(options?: { [key: string]: any }) {
  return defHttp.post<string>({
    url: '/api/OrderAdmin/ImportOrder',
    method: 'POST',
    ...(options || {}),
  });
}

/** 问题清单/放行 POST /api/OrderAdmin/IsRelease */
export async function OrderAdminIsReleasePOST(body: number[], options?: { [key: string]: any }) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/IsRelease',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 是否撤消签出 POST /api/OrderAdmin/ISUndocheckout */
export async function OrderAdminISUndocheckoutPOST(
  params: {
    // query
    /** 4撤销签出 5确定签出 */
    OrderState?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/ISUndocheckout',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单详情 GET /api/OrderAdmin/OrderDetails/${param0} */
export async function OrderAdminOrderDetailsGET(
  params: {
    // path
    /** 订单Id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return defHttp.get<API.OrderDetails>({
    url: '/api/OrderAdmin/OrderDetails/${param0}',
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 订单列表 POST /api/OrderAdmin/OrderList */
export async function OrderAdminOrderListPOST(
  body: API.OrderSearch,
  options?: { [key: string]: any },
) {
  return defHttp.post<API.OrderListPageOrderModel>({
    url: '/api/OrderAdmin/OrderList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 完成主单出库 POST /api/OrderAdmin/OrderOutlibrary */
export async function OrderAdminOrderOutlibraryPOST(
  params: {
    // query
    /** 出库操作员(登陆用户) */
    UserInsideId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/OrderOutlibrary',
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 完成主单入库 POST /api/OrderAdmin/OrderUplibrary */
export async function OrderAdminOrderUplibraryPOST(
  params: {
    // query
    /** 入库操作员(登陆用户) */
    UserInsideId?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/OrderUplibrary',
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 问题清单 POST /api/OrderAdmin/QuestionsList */
export async function OrderAdminQuestionsListPOST(
  body: API.QuestionsListSearch,
  options?: { [key: string]: any },
) {
  return defHttp.post<API.QuestionsDataPageQuestions>({
    url: '/api/OrderAdmin/QuestionsList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 退件 POST /api/OrderAdmin/ReturnPcs */
export async function OrderAdminReturnPcsPOST(
  params: {
    // query
    /** 退件类型 */
    ReturnType?: number;
    /** 描述 */
    content?: string;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/ReturnPcs',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 问题状态 POST /api/OrderAdmin/SaveQuetionState */
export async function OrderAdminSaveQuetionStatePOST(
  params: {
    // query
    /** 问题状态值  1已放行 2未处理 3已退件 4收件人拒收 5退回海外仓 6海关扣件 7再次派送 */
    stateValue?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/SaveQuetionState',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加转单号 POST /api/OrderAdmin/SaveTransferorder */
export async function OrderAdminSaveTransferorderPOST(
  params: {
    // query
    /** 订单Id */
    id?: number;
    /** 新转单号 */
    transferorder?: string;
    /** 问题状态值 4收件人拒收 5退回海外仓 6海关扣件 7再次派送 */
    stateValue?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/SaveTransferorder',
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 扫描出库 GET /api/OrderAdmin/ScancodeOutlibraryList */
export async function OrderAdminScancodeOutlibraryListGET(
  params: {
    // query
    /** 入库操作员(登陆用户) */
    UserInsideId?: number;
    /** 用扫描枪扫描单号 */
    orderNo?: string;
    /** 用扫描枪扫描出库袋号 */
    OutPackageNo?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.OrderScancodeOutlibraryListOutlibraryData>({
    url: '/api/OrderAdmin/ScancodeOutlibraryList',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 扫描打印 GET /api/OrderAdmin/ScancodePrint */
export async function OrderAdminScancodePrintGET(
  params: {
    // query
    /** 扫描单号 */
    ScancodeOrderNo?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.ScancodePrint>({
    url: '/api/OrderAdmin/ScancodePrint',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 扫描入库 GET /api/OrderAdmin/ScancodeUplibraryList */
export async function OrderAdminScancodeUplibraryListGET(
  params: {
    // query
    /** 入库操作员(登陆用户) */
    UserInsideId?: number;
    /** 用扫描枪获取条形码或手动输入 */
    barcode?: string;
    /** 用扫描枪获取客户袋号或手动输入 */
    customerBagNumber?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.OrderScancodeUplibraryListUplibraryData>({
    url: '/api/OrderAdmin/ScancodeUplibraryList',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 设置体积重长宽高 POST /api/OrderAdmin/SetVolumeWeight */
export async function OrderAdminSetVolumeWeightPOST(
  params: {
    // query
    /** 扫描单号 */
    orderNo?: string;
    /** 体积长 */
    volumeLong?: number;
    /** 体积宽 */
    volumewidth?: number;
    /** 体积高 */
    volumeHeight?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/SetVolumeWeight',
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 提交预报 POST /api/OrderAdmin/Submitforecast */
export async function OrderAdminSubmitforecastPOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/Submitforecast',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 订单状态 PUT /api/OrderAdmin/UpdateOrderState/${param0} */
export async function OrderAdminUpdateOrderStatePUT(
  params: {
    // query
    /** 订单状态： 1草稿订单 2已确认 3预报订单 4出货订单(客)/入库订单(自) 5出库订单(自) 6暂不处理 7已删除 */
    orderState?: number;
    // path
    /** 订单Id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return defHttp.put<boolean>({
    url: '/api/OrderAdmin/UpdateOrderState/${param0}',
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 已入库扣件 POST /api/OrderAdmin/UplibraryBuckle */
export async function OrderAdminUplibraryBucklePOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/OrderAdmin/UplibraryBuckle',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 已入库列表-导出清关资料 GET /api/OrderAdmin/UplibraryExportClearcloseFile */
export async function OrderAdminUplibraryExportClearcloseFileGET(
  params: {
    // query
    /** 用户Id */
    uid?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.UplibraryList>({
    url: '/api/OrderAdmin/UplibraryExportClearcloseFile',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 已入库列表-导出订单 GET /api/OrderAdmin/UplibraryExportOrder */
export async function OrderAdminUplibraryExportOrderGET(
  params: {
    // query
    /** 用户Id */
    uid?: number;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.UplibraryList>({
    url: '/api/OrderAdmin/UplibraryExportOrder',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
