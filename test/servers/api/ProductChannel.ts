// @ts-ignore
/* eslint-disable */
import { defHttp } from '/@/utils/http/axios';

/** 产品列表--新增数据 POST /api/ProductChannel/ProductAdd */
export async function ProductChannelProductAddPOST(
  body: API.ProductAdd,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ProductChannel/ProductAdd',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 产品列表--批量删除数据 POST /api/ProductChannel/ProductDelIds */
export async function ProductChannelProductDelIdsPOST(
  params: {
    // query
    /** 用户id */
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ProductChannel/ProductDelIds',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品列表--是否生效 POST /api/ProductChannel/ProductIsActive */
export async function ProductChannelProductIsActivePOST(
  params: {
    // query
    /** 产品状态 1生效  2失效 */
    IsActive?: number;
    /** 用户id */
    UserId?: number;
  },
  body: number[],
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ProductChannel/ProductIsActive',
    method: 'POST',
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品列表--修改数据 POST /api/ProductChannel/ProductUpt */
export async function ProductChannelProductUptPOST(
  body: API.ProductUpt,
  options?: { [key: string]: any },
) {
  return defHttp.post<boolean>({
    url: '/api/ProductChannel/ProductUpt',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
