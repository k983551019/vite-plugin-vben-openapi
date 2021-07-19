// @ts-ignore
/* eslint-disable */
import { defHttp } from '/@/utils/http/axios';

/** 此处后端没有提供注释 DELETE /api/Price/Delete/${param0} */
export async function PriceDeleteDELETE(
  params: {
    // path
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return defHttp.delete<any>({
    url: '/api/Price/Delete/${param0}',
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Price/Get/${param0} */
export async function PriceGetGET(
  params: {
    // path
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return defHttp.get<string>({
    url: '/api/Price/Get/${param0}',
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 产品价格配置 GET /api/Price/GetProductPriceConfig */
export async function PriceGetProductPriceConfigGET(options?: { [key: string]: any }) {
  return defHttp.get<API.PriceTypePageModel>({
    url: '/api/Price/GetProductPriceConfig',
    method: 'GET',
    ...(options || {}),
  });
}

/** 新增价格 POST /api/Price/PostPrice */
export async function PricePostPricePOST(
  body: API.RequestItemPrice,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Price/PostPrice',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 设置区间规则 POST /api/Price/PostWeightRange */
export async function PricePostWeightRangePOST(
  body: API.RequestPrice,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/Price/PostWeightRange',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Price/Put/${param0} */
export async function PricePutPUT(
  params: {
    // path
    id: number;
  },
  body: string,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return defHttp.put<any>({
    url: '/api/Price/Put/${param0}',
    method: 'PUT',
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 价格动态列展示 GET /api/Price/ReturnColumn */
export async function PriceReturnColumnGET(
  params: {
    // query
    /** 产品Id */
    ProductId?: number;
    /** 区间重量分类名称 */
    WeightRangeType?: string;
  },
  options?: { [key: string]: any },
) {
  return defHttp.get<API.BasicColumn[]>({
    url: '/api/Price/ReturnColumn',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
