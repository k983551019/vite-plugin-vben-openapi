// @ts-ignore
/* eslint-disable */

declare namespace API {
  type ConfigBaseDataChargeItem = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 费用中文名称 */
    CName?: string;
    /** 费用英文名称 */
    EName?: string;
    /** 费用代码 */
    Code?: string;
    /** 中文单位 */
    CNunit?: string;
    /** 英文单位 */
    ENunit?: string;
  };

  type ConfigBaseDataFixCharge = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 应付结算公司 关联 CAMS库中的 Customer表 */
    CustomerId?: number;
    /** 费用项目Id 关联 费用项目表 Config_BaseData_CostItems */
    ChargeItemId?: number;
    /** 单价 */
    UnitPrice?: number;
    /** 币种  关联CAMS库中的  select Code from CurrencyType 表 */
    CurrencyTypeId?: number;
    /** 数量 */
    Quantity?: number;
    /** 应收应付 0应收 1应付 */
    ChargeCategory?: number;
    /** 所属分公司Id  属于那些分公司的费用。 关联CAMS库中的   Select Name from Organization where Flag=4 */
    OrgId?: number;
  };

  type ConfigBaseDataKeyword = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 关键字 */
    keyword?: string;
    /** 品名语种 1中文品名  2英文品名 */
    keylanguage?: number;
    /** 处理方式 1删除关键字  2文字标记（红色）3替换 */
    Handlemethod?: number;
    /** 替换词 */
    ReplaceKeyword?: string;
  };

  type ConfigBaseDataQuestiontype = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 问题类型 */
    Questiontype?: string;
    /** 问题描述 */
    Questiondescribe?: string;
    /** 处理方式 1扣件 2退件 3货物破损 */
    Handlemethod?: number;
  };

  type BathPostModel = {
    /** 主键Id */
    id?: number[];
    /** 用户Id */
    userId?: number;
  };

  type ConfigBaseDataChargeItemList = {
    /** 主键Id */
    Id?: number;
    /** 费用中文名称 */
    CName?: string;
    /** 费用英文名称 */
    EName?: string;
    /** 费用代码 */
    Code?: string;
    /** 中文单位 */
    CNunit?: string;
    /** 英文单位 */
    ENunit?: string;
    /** 创建人 */
    UserName?: string;
    /** 创建日期 */
    CreationTime?: string;
  };

  type ConfigBaseDataChargeItemListPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: ConfigBaseDataChargeItemList[];
  };

  type ConfigBaseDataFixChargeList = {
    /** 主键Id */
    Id?: number;
    /** 结算公司 */
    ForShort?: string;
    /** 费用项目 */
    CName?: string;
    /** 单价 */
    UnitPrice?: number;
    /** 币种 */
    Code?: string;
    /** 数量 */
    Quantity?: number;
    /** 应收/应付 */
    ChargeCategory?: string;
    /** 所属分公司 */
    Name?: string;
    /** 创建人 */
    UserName?: string;
    /** 创建日期 */
    CreationTime?: string;
  };

  type ConfigBaseDataFixChargeListPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: ConfigBaseDataFixChargeList[];
  };

  type ConfigBaseDataKeywordList = {
    /** 主键Id */
    Id?: number;
    /** 关键字 */
    keyword?: string;
    /** 品名语种 */
    keylanguage?: string;
    /** 处理方式 */
    Handlemethod?: string;
    /** 替换词 */
    ReplaceKeyword?: string;
    /** 创建人 */
    UserName?: string;
    /** 创建日期 */
    CreationTime?: string;
  };

  type ConfigBaseDataKeywordListPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: ConfigBaseDataKeywordList[];
  };

  type ConfigBaseDataQuestiontypeList = {
    /** 主键Id */
    Id?: number;
    /** 问题类型 */
    Questiontype?: string;
    /** 问题描述 */
    Questiondescribe?: string;
    /** 处理方式 */
    Handlemethod?: string;
    /** 创建人 */
    UserName?: string;
    /** 创建日期 */
    CreationTime?: string;
  };

  type ConfigBaseDataQuestiontypeListPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: ConfigBaseDataQuestiontypeList[];
  };

  type DropdownAirPort = {
    /** 主键Id */
    Id?: number;
    /** 起运港Code */
    AirPortCode?: string;
    /** 起运港中文名称 */
    CnName?: string;
    /** 起运港英文名称 */
    EnName?: string;
  };

  type DropdownChargeItem = {
    /** 主键Id */
    Id?: number;
    /** 费用项目名称 */
    CName?: string;
  };

  type DropdownCode = {
    /** 主键Id */
    Id?: number;
    /** 币种名称 */
    Code?: string;
  };

  type DropdownCustomer = {
    /** 主键Id */
    Id?: number;
    /** 客户代码 */
    Code?: string;
    /** 客户名称 */
    ForShort?: string;
  };

  type DropdownCompany = {
    /** 机构Id */
    OrgId?: number;
    /** 公司名称 */
    ShortName?: string;
  };

  type DropdownNation = {
    /** 主键Id */
    Id?: number;
    /** 代码 */
    Code?: string;
    /** 中文名称 */
    CnName?: string;
    /** 英文名称 */
    EnName?: string;
  };

  type DropdownOrganization = {
    /** 主键Id */
    Id?: number;
    /** 结算公司 */
    Name?: string;
    /** Flag=4 */
    Flag?: number;
  };

  type DropdownType = {
    /** 主键Id */
    Id?: number;
    /** 类型选项名称 */
    TypesOptionName?: string;
  };

  type DropdownUser = {
    /** 主键Id */
    Id?: number;
    /** 操作员 */
    CnName?: string;
    /** 操作员英文名称 */
    EnName?: string;
    /** 操作员简称 */
    UserName?: string;
  };

  type OrderConsignee = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** --客户Id 关联cams库的 Customer表 */
    CustomerId?: number;
    /** --目的地Id 对应cams库的 目的地s表 */
    destinationId?: number;
    /** --收件人名 */
    ConsigneeName?: string;
    /** --详细地址 */
    Detailsaddress?: string;
    /** --州 */
    ConsigneeState?: string;
    /** --城市 */
    CityName?: string;
    /** --区 */
    ConsigneeArea?: string;
    /** --邮编 */
    Zipcode?: string;
    /** --税号类别 1,2... */
    taxNoType?: number;
    /** --税号 */
    taxNo?: string;
    /** --联系电话 */
    ContactNumber?: string;
    /** --收件人邮箱 */
    Email?: string;
  };

  type GoodsInfo = {
    /** --中文品名 */
    CName?: string;
    /** --英文品名 */
    EName?: string;
    /** --单个商口重量（KG） */
    SingleGoodsWeight?: number;
    /** --产品数量 */
    Quantity?: number;
    /** --货值 */
    TotalAmount?: number;
    /** --配货 */
    settingGoods?: string;
    /** --海关编码 */
    HScode?: string;
    /** 材质 */
    Material?: string;
    /** 用途 */
    UseWay?: string;
  };

  type OrderBaseInfoData = {
    /** 客户Id 关联cams库的 Customer表     * */
    CustomerId?: number;
    /** 订单状态 1草稿订单 3预报订单   * */
    OrderState?: number;
    /** --订单来源 1客户自用系统 2系统建单 3批量建单  * */
    Ordersource?: number;
    /** --运输方式Id		* */
    TransportId?: number;
    /** --渠道Id 关联于 渠道Channel		* */
    ChannelId?: number;
    /** --原单号/客户订单号，ERP对接传 web端可空 */
    OriginalorderNo?: string;
    /** --包裹类型			* */
    PackageType?: number;
    /** --关税类型			* */
    TariffType?: number;
    /** --代收货款 */
    CollectionPay?: number;
    /** --代收货款币种 */
    PayCurrencyCode?: string;
    /** --备注 */
    Remarks?: string;
    /** --电池类型(数据从系统配置表中取) */
    BatteryType?: number;
    /** --包裹件数 默认为1 */
    PackagesNums?: number;
    /** 是否把收件人保存到常用列表   0否  1是 */
    is_whether?: number;
    /** --目的地国家Id */
    Consignee_DestinationId?: number;
    /** --收件人名 */
    ConsigneeName?: string;
    /** --详细地址 */
    Consignee_Detailsaddress?: string;
    /** --州 */
    Consignee_ConsigneeState?: string;
    /** --城市 */
    Consignee_CityName?: string;
    /** --区 */
    Consignee_ConsigneeArea?: string;
    /** --邮编 */
    Consignee_Zipcode?: string;
    /** --税号类别 1,2... */
    Consignee_taxNoType?: number;
    /** --税号 */
    Consignee_taxNo?: string;
    /** --联系电话 */
    Consignee_ContactNumber?: string;
    /** --收件人邮箱 */
    Consignee_Email?: string;
    /** --发货地（国家） */
    SendNationId?: number;
    /** --发件人名 */
    SendingName?: string;
    /** --联系电话 */
    Sending_ContactNumber?: string;
    /** --省州 */
    Sending_ProvinceState?: string;
    /** --城市 */
    Sending_CityName?: string;
    /** --地区 */
    Sending_Area?: string;
    /** --门牌号 */
    Sending_HouseNumber?: string;
    /** 货物信息--新增时用 */
    order_Goods?: GoodsInfo[];
  };

  type GoodsInfoUpt = {
    /** --中文品名 */
    CName?: string;
    /** --英文品名 */
    EName?: string;
    /** --单个商口重量（KG） */
    SingleGoodsWeight?: number;
    /** --产品数量 */
    Quantity?: number;
    /** --货值 */
    TotalAmount?: number;
    /** --配货 */
    settingGoods?: string;
    /** --海关编码 */
    HScode?: string;
    /** 材质 */
    Material?: string;
    /** 用途 */
    UseWay?: string;
    /** 货物id */
    Id?: number;
    /** 订单id */
    Order_BaseInfoId?: number;
  };

  type OrderBaseInfoUpt = {
    /** 订单id */
    id?: number;
    /** 客户Id 关联cams库的 Customer表 */
    CustomerId?: number;
    /** 订单状态 1草稿订单 2已确认 3预报订单 4出货订单(客)/入库订单(自) 5出库订单(自) 6暂不处理 7已删除  8换标 */
    Ordersource?: number;
    /** --运输方式Id */
    TransportId?: number;
    /** --渠道Id 关联于 渠道Channel */
    ChannelId?: number;
    /** --订单号，建单的时候自动生成 */
    OrderNo?: string;
    /** --转单号，调用dpd获得的 */
    Transferorder?: string;
    /** --原单号/客户订单号，api对接获得的 */
    OriginalorderNo?: string;
    /** --包裹类型 1,2 */
    PackageType?: number;
    /** --关税类型 1,2.. */
    TariffType?: number;
    /** --代收货款 */
    CollectionPay?: number;
    /** --代收货款币种 */
    PayCurrencyCode?: string;
    /** --备注 */
    Remarks?: string;
    /** --电池类型(数据从系统配置表中取) */
    BatteryType?: number;
    /** --包裹件数 默认为1 */
    PackagesNums?: number;
    /** --货物币种 */
    is_whether?: number;
    /** 常用收件人信息Id   关联订单信息 Order_Consignee */
    Order_ConsigneeId?: number;
    /** --目的地国家Id */
    Consignee_DestinationId?: number;
    /** --收件人名 */
    ConsigneeName?: string;
    /** --详细地址 */
    Consignee_Detailsaddress?: string;
    /** --州 */
    Consignee_ConsigneeState?: string;
    /** --城市 */
    Consignee_CityName?: string;
    /** --区 */
    Consignee_ConsigneeArea?: string;
    /** --邮编 */
    Consignee_Zipcode?: string;
    /** --税号类别 1,2... */
    Consignee_taxNoType?: number;
    /** --税号 */
    Consignee_taxNo?: string;
    /** --联系电话 */
    Consignee_ContactNumber?: string;
    /** --收件人邮箱 */
    Consignee_Email?: string;
    /** --发货地（国家） */
    SendNationId?: number;
    /** --发件人名 */
    SendingName?: string;
    /** --联系电话 */
    Sending_ContactNumber?: string;
    /** --省州 */
    Sending_ProvinceState?: string;
    /** --城市 */
    Sending_CityName?: string;
    /** --地区 */
    Sending_Area?: string;
    /** --门牌号 */
    Sending_HouseNumber?: string;
    /** 货物信息--修改时用 */
    goodsInfoUpts?: GoodsInfoUpt[];
  };

  type OrderBaseInfoSet = {
    /** 序号 */
    RowIndex?: number;
    /** 订单id */
    Id?: number;
    /** 客户Id 关联cams库的 Customer表 */
    CustomerId?: number;
    /** 订单状态 1草稿订单 2已确认 3预报订单 4出货订单(客)/入库订单(自) 5出库订单(自) 6暂不处理 7已删除  8换标 */
    OrderState?: number;
    /** --订单来源 1客户自用系统 2系统建单 3批量建单 */
    Ordersource?: number;
    /** --运输方式 */
    TransportName?: string;
    /** --订单号，建单的时候自动生成 */
    OrderNo?: string;
    /** --转单号，调用dpd获得的 */
    Transferorder?: string;
    /** --原单号/客户订单号，api对接获得的 */
    OriginalorderNo?: string;
    /** --包裹类型 */
    PackageName?: string;
    /** --代收货款 */
    CollectionPay?: number;
    /** --代收货款币种 */
    PayCurrencyCode?: string;
    /** --包裹件数 默认为1 */
    PackagesNums?: number;
    /** --目的地国家Id */
    Consignee_DestinationId?: number;
    /** --收件人名 */
    ConsigneeName?: string;
    /** --邮编 */
    Consignee_Zipcode?: string;
    /** --联系电话 */
    Consignee_ContactNumber?: string;
    /** 货物总重量 */
    GoodsWeight?: number;
    /** 货物总货值 */
    GoodsValue?: number;
    /** 创建时间 */
    CreationTime?: string;
    /** 发货时间 */
    OutRepositoryTime?: string;
    /** 货物信息 */
    goodsInfos?: GoodsInfoUpt[];
  };

  type OrderBaseInfoShow = {
    /** 全部订单数量 */
    whole?: number;
    /** 草稿订单数量 */
    draft?: number;
    /** 以确认数量 */
    confirm?: number;
    /** 预报订单数量 */
    prediction?: number;
    /** 收货订单数量 */
    Rgoods?: number;
    /** 发货订单数量 */
    Dgoods?: number;
    /** 暂不处理订单数量 */
    Nothandle?: number;
    /** 已删除订单数量 */
    Deleted?: number;
    /** 订单信息 */
    Order_BaseInfos?: OrderBaseInfoSet[];
  };

  type OrderBaseInfoShowPageModels = {
    /** 当前页标 */
    page?: number;
    /** 总页数 */
    pageCount?: number;
    /** 数据总数 */
    total?: number;
    /** 页容量 */
    pageSize?: number;
    list?: OrderBaseInfoShow;
  };

  type ProblemOrder = {
    /** 订单id */
    Id?: number;
    /** --订单号，建单的时候自动生成 */
    OrderNo?: string;
    /** --转单号，调用dpd获得的 */
    Transferorder?: string;
    /** --原单号/客户订单号，api对接获得的 */
    OriginalorderNo?: string;
    /** 运输方式 */
    TransportName?: string;
    /** 问题类型 */
    QuestionName?: string;
    /** 问题描述 */
    Questiondescribe?: string;
    /** 是否放行 */
    IsRelease?: number;
    /** 放行时间 */
    Releasetime?: string;
  };

  type ProblemOrderPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: ProblemOrder[];
  };

  type ReturnList = {
    /** 订单id */
    Id?: number;
    /** --订单号，建单的时候自动生成 */
    OrderNo?: string;
    /** --转单号，调用dpd获得的 */
    Transferorder?: string;
    /** --原单号/客户订单号，api对接获得的 */
    OriginalorderNo?: string;
    /** 运输方式 */
    TransportName?: string;
    /** 退件类型 */
    ReturnName?: string;
    /** 最新轨迹 */
    Latesttrack?: string;
    /** 拒收时间 */
    rejectionTime?: string;
  };

  type ReturnListPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: ReturnList[];
  };

  type TrackList = {
    /** 订单id */
    Id?: number;
    /** --订单号，建单的时候自动生成 */
    OrderNo?: string;
    /** --转单号，调用dpd获得的 */
    Transferorder?: string;
    /** --原单号/客户订单号，api对接获得的 */
    OriginalorderNo?: string;
    /** 运输方式 */
    TransportName?: string;
    /** 国家名称 */
    NationName?: string;
    /** 轨迹类型 */
    trajectoryName?: string;
    /** 最新轨迹 */
    Latesttrack?: string;
    /** 签收/拒收 */
    rejectionTime?: string;
  };

  type TrackListPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: TrackList[];
  };

  type DPDTrajectoryParameters = {
    /** 获取轨迹类型       0  获取全部     1  获取最后一条轨迹 */
    GetTrajectoryType?: number;
    /** 运单 */
    Waybill?: string;
  };

  type DPDTrajectoryParametersResponse = {
    /** 业务代码 */
    businessCode?: string;
    /** 国家 */
    country?: string;
    /** 仓库名称 */
    depotName?: string;
    /** 事件说明   可以认为是运单的轨迹 */
    description?: string;
    /** 时间 */
    eventTime?: string;
    /** 运单 */
    waybill?: string;
  };

  type DPDLabelParameters = {
    /** 会话ID */
    SessionId?: number;
    /** 包装ID */
    PackageId?: number;
    /** 包裹 */
    ParcelId?: number;
    /** 运单 */
    Waybill?: string;
    /** 会话类型      0 国内    1 国际 */
    SessionType?: number;
    /** 策略          0 第一次出错时停止    1  忽略错误 */
    Strategy?: number;
    /** 文件类型   0 PDF    1 TIFF   2 PS   3 EPL   4 ZPL   5 XML    注 1和2 类型的拿不到 */
    FileType?: number;
    /** 文件格式   0 A4   1 LBL打印机 */
    FileFormat?: number;
    /** 标签类型   0 BIC3       1 EXTENDED */
    LabelType?: number;
  };

  type DPDLabelParametersResponse = {
    /** 标签地址 */
    LabelAddress?: string;
    /** 上传状态 */
    UploadType?: boolean;
  };

  type DPDOrderParameters = {
    /** 代码语言     不指定默认 PL */
    langCode?: string;
    /** 策略          0 第一次出错时停止    1  忽略错误      2  要么执行成功，要么执行失败 */
    Strategy?: number;
    /** 指定付款方     0  接收方           1    发送方           2  第三方 */
    DesignatedPayer?: number;
    /** 收件人名称 */
    ConsigneeName?: string;
    /** 收件人国家  不指定默认 PL */
    Consignee_Country?: string;
    /** 收件人地址 */
    Consignee_Address?: string;
    /** 收件人城市 */
    Consignee_CityName?: string;
    /** 收件人邮编 */
    Consignee_Zipcode?: string;
    /** 收件人邮箱 */
    Consignee_Email?: string;
    /** 收件人联系电话 */
    Consignee_ContactNumber?: string;
    /** 发件人名称 */
    SendingName?: string;
    /** 发件人联系电话 */
    Sending_ContactNumber?: string;
    /** 发件人国家  不指定默认 PL */
    Sending_Country?: string;
    /** 发件人地址 */
    Sending_Address?: string;
    /** 发件人城市 */
    Sending_CityName?: string;
    /** 发件人邮编 */
    Sending_Zipcode?: string;
    /** 发件人邮箱 */
    Sending_Email?: string;
    /** 代收货款 */
    CollectionPay?: string;
    /** 代收货款币种 */
    PayCurrencyCode?: string;
    /** 订单号 */
    OrderNumber?: string;
    /** 客户订单号      没有可以不传 */
    CustomerOrderNumber?: string;
    /** 指定包裹号(包裹号唯一)  可以不指定 */
    PackageNumber1?: string;
    /** 指定包裹号(包裹号唯一)  可以不指定 */
    PackageNumber2?: string;
    /** 包裹重量 */
    PackageWeight?: string;
    /** 包裹内容说明 */
    PackageDescription?: string;
    /** 顾客数据 */
    customerData?: string;
  };

  type DPDOrderParametersResponse = {
    /** 会话ID */
    SessionId?: number;
    /** 包装ID */
    PackageId?: number;
    /** 包裹 */
    ParcelId?: number;
    /** 运单 */
    Waybill?: string;
  };

  type EditOrder = {
    /** 订单号 */
    OrderNo?: string;
    /** 客户代码 和 客户名称 (通过客户Id获取) */
    CustomerId?: number;
    /** 产品名称 (运输方式) */
    TransportId?: number;
    /** 包裹件数 */
    PackagesNums?: number;
    /** 关税类型 */
    TariffType?: number;
    /** 代收货款金额 */
    CollectionPay?: number;
    /** 代收货款币种 */
    PayCurrencyCode?: string;
    /** 订单状态 */
    OrderState?: number;
    /** 客服员和业务员 */
    UserInsideId?: number;
    /** 客户订单号 */
    OriginalorderNo?: string;
    /** 代收货款付款方式  1到付 2预付 */
    Paymentmethod?: number;
    /** 收件人名称 */
    ConsigneeName?: string;
    /** 收件人地址1 */
    Consignee_address1?: string;
    /** 收件人地址2 */
    Consignee_address2?: string;
    /** 收件人地址3 */
    Consignee_address3?: string;
    /** 收件人电话 */
    Consignee_ContactNumber?: string;
    /** 收件人手机 */
    Consignee_phone?: string;
    /** 收件人国家Id */
    Consignee_DestinationId?: number;
    /** 收件人城市 */
    Consignee_CityName?: string;
    /** 收件人省 */
    Consignee_province?: string;
    /** 收件人邮编 */
    Consignee_Zipcode?: string;
    /** 收件人门牌号 */
    Consignee_HouseNumber?: string;
    /** 收件人Email */
    Consignee_Email?: string;
    /** 中文品名 */
    CName?: string;
    /** 英文品名 */
    EName?: string;
    /** 配货 （说明： 配货信息= 配货 * 产品数量） 注意是规则不是相乘 */
    settingGoods?: string;
    /** 产品数量 */
    Quantity?: number;
    /** 商品单重 */
    SingleGoodsWeight?: number;
    /** 总货值 */
    GoodsTotalAmount?: number;
    /** 货物币种 */
    GoodsCurrencyCode?: string;
    /** 材质 */
    Material?: string;
    /** 用途 */
    UseWay?: string;
    /** 海关编码 */
    HScode?: string;
    /** 销售链接 */
    Saleslink?: string;
    /** 修改用户Id */
    LastModifierUserId?: number;
    /** 预报状态  1未提交  2预报成功  3预报失败 */
    ForecastState?: number;
    /** 转单号 */
    Transferorder?: string;
    /** 客户袋号 */
    PackageNo?: string;
    /** 入库主单号 */
    ConsigneeMainOrderNO?: string;
    /** 入库件数 */
    UpRepositoryNums?: number;
    /** 收货实重 */
    CollectGoodweight?: number;
  };

  type OrderSearch = {
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 单号选项 1客户订单号、2订单号、3转单号、4入库主单号、5出库主单号、6客户袋号、7出库袋号、8航空主单号 */
    orderItem?: number;
    /** 单号选项所对应的选项单号值 */
    orderItemValues?: string;
    /** 客户代码 / 客户名称 --客户Id 关联cams库的 Customer表 */
    CustomerId?: number;
    /** 公司Id    select OrgId,ShortName from [Cams].dbo.company  where shortName like '%柏电%' */
    CompanyId?: number;
    /** 订单状态 1草稿订单、2确认订单、3预报订单、4入库订单、5出库订单、6暂不处理、7删除订单 */
    OrderState?: number;
    /** 订单来源  1客户自用系统 2系统建单 3批量建单 */
    Ordersource?: number;
    /** 产品名称Id （web端称运输方式） */
    TransportId?: number;
    /** 目的国家 */
    Consignee_Destination?: string;
    /** 偏远 */
    Isremote?: boolean;
    /** 预报时间开始时间  OrderState=3的时间 */
    ForecastTimeStrat?: string;
    /** 预报时间结束时间  OrderState=3的时间 */
    ForecastTimeEnd?: string;
    /** 创建日期开始时间 */
    CreationTimeStrat?: string;
    /** 创建日期结束时间 */
    CreationTimeEnd?: string;
    /** 收件人 */
    ConsigneeName?: string;
    /** 模板名称Id */
    TempFileId?: number;
    /** 类型Id */
    typeId?: number;
    /** 订单Id */
    Ids?: number[];
  };

  type OutlibraryListSearch = {
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 单号选项 1客户订单号、2订单号、3转单号、4出库主单号、5出库主单号、6客户袋号、7出库袋号、8航空主单号 */
    orderItem?: number;
    /** 单号选项所对应的选项单号值 */
    orderItemValues?: string;
    /** 客户代码 / 客户名称 --客户Id 关联cams库的 Customer表 */
    CustomerId?: number;
    /** 出库开始时间 */
    OutRepositoryTimeStrat?: string;
    /** 出库结束时间 */
    OutRepositoryTimeEnd?: string;
    /** 出库操作员 */
    UserInsideId?: number;
  };

  type OutlibraryList = {
    /** 主键Id */
    Id?: number;
    /** 出库时间 */
    OutRepositoryTime?: string;
    /** 出库袋号 */
    OutPackageNo?: string;
    /** 出库主单号 */
    ConsigneeMainOrderNO?: string;
    /** 订单号 */
    OrderNo?: string;
    /** 转单号 */
    Transferorder?: string;
    /** 出库包裹数 */
    OutRepositoryNums?: number;
    /** 产品名称 （运输方式） */
    TransportName?: string;
    /** 国家 */
    DestinationCName?: string;
    /** 预报重  货物信息中的  （单个商品重量KG X 产品数量 =  预报重） */
    PreWeight?: number;
    /** 收货实重 单位kG (订单重量(小包重量)，电子称称出来的重量) */
    CollectGoodweight?: number;
    /** 差异重/kg （差异重=收货实重 减 预报重） */
    SubWeight?: number;
    /** 计费重   说明：柏电对重量进位唯一的要求是不足50克按50克算，超过的复重是多少，计费重就是多少 */
    CalculateWeight?: number;
    /** 待收货款/PLN */
    CollectionPay?: number;
    /** 运费/USD    运费 = 产品价格*重量 */
    freight?: number;
    /** 客户代码 --关联cams库的 Customer表 */
    CustomerCode?: string;
    /** 客户名称 --客户Id 关联cams库的 Customer表 */
    ForShort?: string;
    /** 客户代码/ 客户简称 */
    CustomerId?: number;
    /** 品名 */
    CName?: string;
    /** 用户Id */
    UserInsideId?: number;
    /** 用户名 出库操作员 */
    UserName?: string;
    /** 航空主单号 */
    AviationMainOrderNo?: string;
  };

  type OutlibraryListPageOutlibrary = {
    /** 当前页标 */
    page?: number;
    /** 总页数 */
    pageCount?: number;
    /** 数据总数 */
    total?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 返回数据 */
    list?: OutlibraryList[];
    /** 总计票数 */
    Totalticket?: number;
    /** 当前票数 */
    CurrentTotalticket?: number;
  };

  type UplibraryListSearch = {
    /** 页码 */
    page?: number;
    /** 页容量 */
    pagesize?: number;
    /** 单号选项 1客户订单号、2订单号、3转单号、4入库主单号、5出库主单号、6客户袋号、7出库袋号、8航空主单号 */
    orderItem?: number;
    /** 单号选项所对应的选项单号值 */
    orderItemValues?: string;
    /** 客户代码 / 客户名称 --客户Id 关联cams库的 Customer表 */
    CustomerId?: number;
    /** 预报状态： 1未提交  2预报成功  3预报失败 */
    ForecastState?: number;
    /** 入库开始时间 */
    UpRepositoryTimeStrat?: string;
    /** 入库结束时间 */
    UpRepositoryTimeEnd?: string;
    /** 入库操作员 */
    UserInsideId?: number;
  };

  type UplibraryList = {
    /** 主键Id */
    Id?: number;
    /** 入库时间 */
    UpRepositoryTime?: string;
    /** 客户袋号 */
    PackageNo?: string;
    /** 入库主单号 */
    ConsigneeMainOrderNO?: string;
    /** 预报状态 */
    ForecastState?: string;
    /** 订单号 */
    OrderNo?: string;
    /** 转单号 */
    Transferorder?: string;
    /** 入库包裹数 */
    UpRepositoryNums?: number;
    /** 产品名称 （运输方式） */
    TransportName?: string;
    /** 国家 */
    DestinationCName?: string;
    /** 预报重  货物信息中的  （单个商品重量KG X 产品数量 =  预报重） */
    PreWeight?: number;
    /** 收货实重 单位kG (订单重量(小包重量)，电子称称出来的重量) */
    CollectGoodweight?: number;
    /** 差异重/kg （差异重=收货实重 减 预报重） */
    SubWeight?: number;
    /** 计费重   说明：柏电对重量进位唯一的要求是不足50克按50克算，超过的复重是多少，计费重就是多少 */
    CalculateWeight?: number;
    /** 待收货款/PLN */
    CollectionPay?: number;
    /** 运费/USD    运费 = 产品价格*重量 */
    freight?: number;
    /** 客户代码 --关联cams库的 Customer表 */
    CustomerCode?: string;
    /** 客户名称 --客户Id 关联cams库的 Customer表 */
    ForShort?: string;
    /** 客户代码/ 客户简称 */
    CustomerId?: number;
    /** 品名 */
    CName?: string;
    /** 用户Id */
    UserInsideId?: number;
    /** 用户名 入库操作员 */
    UserName?: string;
  };

  type UplibraryListPageUplibrary = {
    /** 当前页标 */
    page?: number;
    /** 总页数 */
    pageCount?: number;
    /** 数据总数 */
    total?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 返回数据 */
    list?: UplibraryList[];
    /** 总计票数 */
    Totalticket?: number;
    /** 当前票数 */
    CurrentTotalticket?: number;
  };

  type RequestInsure = {
    /** 订单号 */
    ids?: number[];
    /** 起运港 (前端绑定下拉框的Id值) */
    AirPortId?: number;
    /** 被保人  1发件人 2收件人 3投保人所在公司   (前端绑定下拉框的Id值) */
    Insured?: number;
  };

  type OrderDetails = {
    /** 订单号 */
    OrderNo?: string;
    /** 转单号 */
    Transferorder?: string;
    /** 客户代码 和 客户名称 (通过客户Id获取) */
    CustomerId?: number;
    /** 产品名称 (运输方式) */
    TransportId?: number;
    /** 包裹件数 */
    PackagesNums?: number;
    /** 代收货款金额 */
    CollectionPay?: number;
    /** 代收货款币种 */
    PayCurrencyCode?: string;
    /** 订单状态 */
    OrderState?: string;
    /** 客服员和业务员 */
    UserInsideId?: number;
    /** 客户订单号 */
    OriginalorderNo?: string;
    /** 收件人名称 */
    ConsigneeName?: string;
    /** 收件人地址1 */
    Consignee_address1?: string;
    /** 收件人地址2 */
    Consignee_address2?: string;
    /** 收件人地址3 */
    Consignee_address3?: string;
    /** 收件人电话 */
    Consignee_ContactNumber?: string;
    /** 收件人手机 */
    Consignee_phone?: string;
    /** 收件人国家Id */
    Consignee_DestinationId?: number;
    /** 收件人城市 */
    Consignee_CityName?: string;
    /** 收件人省 */
    Consignee_province?: string;
    /** 收件人邮编 */
    Consignee_Zipcode?: string;
    /** 收件人门牌号 */
    Consignee_HouseNumber?: string;
    /** 收件人Email */
    Consignee_Email?: string;
    /** 中文品名 */
    CName?: string;
    /** 英文品名 */
    EName?: string;
    /** 配货 （说明： 配货信息= 配货 * 产品数量） 注意是规则不是相乘 */
    settingGoods?: string;
    /** 产品数量 */
    Quantity?: number;
    /** 商品单重 */
    SingleGoodsWeight?: number;
    /** 总货值 */
    GoodsTotalAmount?: number;
    /** 货物币种 */
    GoodsCurrencyCode?: string;
    /** 材质 */
    Material?: string;
    /** 用途 */
    UseWay?: string;
    /** 海关编码 */
    HScode?: string;
    /** 销售链接 */
    Saleslink?: string;
    /** 修改用户Id */
    LastModifierUserId?: number;
    /** 预报状态 */
    ForecastState?: string;
    /** 客户袋号 */
    PackageNo?: string;
    /** 客户代码 */
    CustomerCode?: string;
    /** 客户名称 */
    ForShort?: string;
    /** 产品名称 */
    TransportName?: string;
    /** 关税类型 */
    TariffType?: string;
    /** 代收货款付款方式 */
    Paymentmethod?: string;
    /** 入库主单号 */
    ConsigneeMainOrderNO?: string;
    /** 入库件数 */
    UpRepositoryNums?: number;
    /** 收货实重 */
    CollectGoodweight?: number;
    /** 预报重  货物信息中的  （单个商品重量KG X 产品数量 =  预报重） */
    PreWeight?: number;
    /** 差异重/kg （差异重=收货实重 减 预报重） */
    SubWeight?: number;
    /** 运费 */
    freight?: number;
    /** 入库操作员Id */
    CnName?: string;
    /** 国家 */
    DestinationCName?: string;
    /** 投保状态 */
    InsuredState?: string;
    /** 保单号 */
    InsureNo?: string;
    /** 被保人 */
    Insured?: string;
    /** 应付保费 */
    InsuredName?: string;
    /** 应付保费 */
    Payablecost?: number;
    /** 投保币种 */
    InsuredCode?: string;
  };

  type OrderList = {
    /** 主键Id */
    Id?: number;
    /** 订单号 */
    OrderNo?: string;
    /** 创建时间 */
    CreationTime?: string;
    /** 订单状态 1草稿订单 2已确认 3预报订单 4出货订单(客)/入库订单(自) 5出库订单(自) 6暂不处理 7删除订单 */
    OrderState?: string;
    /** 转单号，调用dpd获得的 */
    Transferorder?: string;
    /** 客户代码 --关联cams库的 Customer表 */
    CustomerCode?: string;
    /** 客户名称 --客户Id 关联cams库的 Customer表 */
    ForShort?: string;
    /** 产品名称 */
    TransportName?: string;
    /** 渠道名称 */
    ChannelName?: string;
    /** 国家代码 */
    DestinationCode?: string;
    /** 目的国家中文名 */
    DestinationCName?: string;
    /** 目的国家英文名 */
    DestinationEName?: string;
    /** 收件人名称 */
    ConsigneeName?: string;
    /** 收件人电话 */
    Consignee_ContactNumber?: string;
    /** 收件人详细地址 */
    Consignee_Detailsaddress?: string;
    /** 收件人州 */
    Consignee_ConsigneeState?: string;
    /** 收件人城市 */
    Consignee_CityName?: string;
    /** 收件人Email */
    Consignee_Email?: string;
    /** 货物中文品名 */
    CName?: string;
    /** 货物英文品名 */
    EName?: string;
    /** 配货信息 */
    GoodsInfo?: string;
    /** 包裹件数 */
    PackagesNums?: string;
    /** 货值 */
    TotalAmount?: number;
    /** 货物币种 */
    GoodsCurrencyCode?: string;
    /** 重量 (单个商口重量（KG）) */
    SingleGoodsWeight?: number;
    /** 代收货款 */
    CollectionPay?: number;
    /** 代收货款币种 */
    PayCurrencyCode?: string;
    /** 发票件数 */
    invoiceNums?: number;
    /** 海关编码 */
    HScode?: string;
    /** 关税类型  1 DDU  2 DDP */
    TariffType?: string;
    /** 订单来源  1客户自用系统 2系统建单 3批量建单 */
    Ordersource?: string;
    /** 客户订单号 (原单号/客户订单号，api对接获得的) */
    OriginalorderNo?: string;
    /** 预报时间  (OrderState=3的时间) */
    ForecastTime?: string;
    /** 入库时间 (OrderState=4的时间) */
    UpRepositoryTime?: string;
    /** 出库时间  (OrderState=5的时间) */
    OutGoodsTime?: string;
    /** 偏远 */
    Isremote?: string;
    /** 总包号(出库袋号) */
    OutPackageNo?: string;
    /** 总价(总货值) */
    GoodsTotalAmount?: number;
  };

  type OrderListPageOrderModel = {
    /** 当前页标 */
    page?: number;
    /** 总页数 */
    pageCount?: number;
    /** 数据总数 */
    total?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 返回数据 */
    list?: OrderList[];
    /** 总计票数  (票数对应的是一个订单就是一票) */
    Totalticket?: number;
    /** 当前每页总计票数 */
    CurrentPageticket?: number;
    /** 总重量 (单位KG) */
    Weight?: number;
    /** 总件数 (包裹件数) */
    Totalpackage?: number;
  };

  type QuestionsListSearch = {
    /** 当前页标 */
    page?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 问题清单选项  1港前问题清单  2港后问题清单 */
    QuestionslistType?: number;
    /** 订单号  1订单号、2转单号 */
    OrderNoItem?: number;
    /** 单号自定义输入 */
    OrderNoValue?: string;
    /** 客服员和业务员和操作员 */
    UserInsideId?: number;
    /** 客户Id */
    CustomerId?: number;
    /** 产品名称 (运输方式) */
    TransportId?: number;
    /** 公司Id    关联 SELECT * FROM [cams].dbo.Company */
    CompanyId?: number;
    /** 时间类型  1收货时间  2问题创建时间 */
    TimeType?: number;
    /** 开始时间值 */
    TimeStartValue?: string;
    /** 结止时间值 */
    EndStartValue?: string;
    /** 港前问题状态 1已放行 2未处理 3已退件 */
    QuetionState1?: number;
    /** 港后问题状态 4收件人拒收 5退回海外仓 6海关扣件 7再次派送 */
    QuetionState2?: number;
    /** 问题类型 */
    QuetionType?: number;
  };

  type QuestionsData = {
    /** 主键Id */
    Id?: number;
    /** 订单号 */
    OrderNo?: string;
    /** 转单号 */
    Transferorder?: string;
    /** 转单号2 */
    Transferorder2?: string;
    /** 转单号3 */
    Transferorder3?: string;
    /** 转单号4 */
    Transferorder4?: string;
    /** 转单号5 */
    Transferorder5?: string;
    /** 问题状态 */
    QuetionState?: string;
    /** 问题类型 */
    Questiontype?: string;
    /** 问题描述 */
    Questiondescribe?: string;
    /** 处理类型 */
    handlerType?: string;
    /** 客户代码 */
    CustomerCode?: string;
    /** 客户名称 */
    ForShort?: string;
    /** 产品名称 （运输方式） */
    TransportName?: string;
    /** 渠道名称 */
    ChannelName?: string;
    /** 预报重  货物信息中的  （单个商品重量KG X 产品数量 =  预报重） */
    PreWeight?: number;
    /** 国家 */
    DestinationCName?: string;
    /** 收货实重 单位kG (订单重量(小包重量)，电子称称出来的重量) */
    CollectGoodweight?: number;
    /** 放行人 */
    ReleaseUser?: string;
    /** 放行时间 */
    Releasetime?: string;
    /** 收件人名 */
    ConsigneeName?: string;
    /** 收件人电话 */
    Consignee_ContactNumber?: string;
    /** 收件人详细地址 */
    Consignee_Detailsaddress?: string;
    /** 收件人城 */
    Consignee_CityName?: string;
    /** 收件人州 */
    Consignee_ConsigneeState?: string;
    /** 收件人Email */
    Consignee_Email?: string;
    /** 货物中文品名 */
    CName?: string;
    /** 货物英文品名 */
    EName?: string;
    /** 配货信息 */
    settingGoods?: string;
    /** 货物总价值/币种 */
    GoodsTotalAmountCode?: string;
    /** 付款方式 */
    Paymentmethod?: string;
    /** 获取订单时间 */
    GetCreationTime?: string;
    /** 问题创建时间 */
    QuestionCreationTime?: string;
    /** 公司 */
    ConpanyName?: string;
    /** 业务员 */
    salesman?: string;
    /** 客服员 */
    CustomerCName?: string;
  };

  type QuestionsDataPageQuestions = {
    /** 总计票 */
    Totalticket?: number;
    /** 当前票票 */
    Currentticket?: number;
    /** 当前页标 */
    page?: number;
    /** 总页数 */
    pageCount?: number;
    /** 数据总数 */
    total?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 返回数据 */
    list?: QuestionsData[];
  };

  type OrderScancodeOutlibraryList = {
    /** 订单号 */
    OrderNo?: string;
    /** 转单号 */
    Transferorder?: string;
    /** 出库件数 */
    UpRepositoryNums?: number;
    /** 产品名称 （运输方式） */
    TransportId?: number;
    /** 国家Id */
    Consignee_DestinationId?: number;
    /** 预报重  货物信息中的  （单个商品重量KG X 产品数量 =  预报重） */
    PreWeight?: number;
    /** 收货实重 单位kG (订单重量(小包重量)，电子称称出来的重量) */
    CollectGoodweight?: number;
    /** 差异重/kg （差异重=收货实重 减 预报重） */
    SubWeight?: number;
    /** 计费重   说明：柏电对重量进位唯一的要求是不足50克按50克算，超过的复重是多少，计费重就是多少 */
    CalculateWeight?: number;
    /** 待收货款/PLN */
    CollectionPay?: number;
    /** 运费/USD    运费 = 产品价格*重量 */
    freight?: number;
    /** 客户代码 --关联cams库的 Customer表 */
    CustomerCode?: string;
    /** 客户名称 --客户Id 关联cams库的 Customer表 */
    ForShort?: string;
    /** 客户代码/ 客户简称 */
    CustomerId?: number;
    /** 品名 */
    CName?: string;
    /** 用户Id */
    UserInsideId?: number;
    /** 用户名 出库操作员 */
    UserName?: string;
  };

  type OrderScancodeOutlibraryListOutlibraryData = {
    /** 打开扫描出库之前的 当前操作时间 */
    OutRepositoryTime?: string;
    /** 客户代码/ 出库操作员 （当前登陆人员） */
    CustomerCode?: string;
    /** 客户代码Id */
    CustomerId?: number;
    /** 操作员 */
    CnName?: string;
    /** 出库主单号  操作员所属公司代码-下家代码-当前时间yyyyMMddA(字母递增) */
    OutMainOrderNO?: string;
    /** 产品名称 （运输方式） */
    TransportName?: string;
    /** 产品名称Id */
    TransportId?: number;
    /** 国家Id */
    Consignee_DestinationId?: number;
    /** 国家名称 */
    DestinationCName?: string;
    /** 出货袋号，不能重复 */
    OutPackageNo?: string;
    /** 扫描单号：通过 订单号、转单号、客户订单号 */
    ScancodeOrderNo?: string;
    /** 出库件数  一票(订单)包裹就是一件 */
    PackagesNums?: number;
    /** 出库件数总计 */
    UpRepositoryNumsTotal?: number;
    /** 总实重 */
    WeightTotal?: number;
    /** 扫描出库数据 */
    list?: OrderScancodeOutlibraryList[];
  };

  type ScancodePrint = {
    /** 标签类型 1一键打印（标签纸） 2一键打印（A4） 3一键打印（发票） 4插件打印（标签纸） 5其他标签 */
    LabelType?: number;
    /** 原单号/客户订单号，api对接获得的 */
    OriginalorderNo?: string;
    /** 扫描单号 */
    ScancodeOrderNo?: string;
    /** 产品名称（运输方式） */
    TransportName?: string;
    /** 订单号 */
    OrderNo?: string;
    /** 收件人 */
    ConsigneeName?: string;
    /** 转单号，调用dpd获得的 */
    Transferorder?: string;
    /** 收件人联系电话 */
    Consignee_ContactNumber?: string;
    /** 收件地址 */
    Consignee_Detailsaddress?: string;
  };

  type OrderScancodeUplibraryList = {
    /** 订单号 */
    OrderNo?: string;
    /** 转单号 */
    Transferorder?: string;
    /** 入库件数 */
    UpRepositoryNums?: number;
    /** 产品名称 （运输方式） */
    TransportId?: number;
    /** 国家Id */
    Consignee_DestinationId?: number;
    /** 预报重  货物信息中的  （单个商品重量KG X 产品数量 =  预报重） */
    PreWeight?: number;
    /** 收货实重 单位kG (订单重量(小包重量)，电子称称出来的重量) */
    CollectGoodweight?: number;
    /** 差异重/kg （差异重=收货实重 减 预报重） */
    SubWeight?: number;
    /** 计费重   说明：柏电对重量进位唯一的要求是不足50克按50克算，超过的复重是多少，计费重就是多少 */
    CalculateWeight?: number;
    /** 待收货款/PLN */
    CollectionPay?: number;
    /** 运费/USD    运费 = 产品价格*重量 */
    freight?: number;
    /** 客户代码 --关联cams库的 Customer表 */
    CustomerCode?: string;
    /** 客户名称 --客户Id 关联cams库的 Customer表 */
    ForShort?: string;
    /** 客户代码/ 客户简称 */
    CustomerId?: number;
    /** 品名 */
    CName?: string;
    /** 用户Id */
    UserInsideId?: number;
    /** 用户名 入库操作员 */
    UserName?: string;
  };

  type OrderScancodeUplibraryListUplibraryData = {
    /** 打开扫描入库之前的 当前操作时间 （ 预报时间 OrderState=3的时间） */
    ForecastTime?: string;
    /** 客户代码/ 入库操作员 （当前登陆人员） */
    CustomerCode?: string;
    /** 客户代码Id */
    CustomerId?: number;
    /** 操作员 */
    CnName?: string;
    /** 入库主单号  客户代码-操作员所属公司代码-当前时间yyyyMMddA(字母递增) */
    ConsigneeMainOrderNO?: string;
    /** 产品名称 （运输方式） */
    TransportName?: string;
    /** 国家Id */
    Consignee_DestinationId?: number;
    /** 国家名称 */
    DestinationCName?: string;
    /** 预报重  货物信息中的  （单个商品重量KG X 产品数量 =  预报重） */
    PreWeight?: number;
    /** 收货实重 */
    CollectGoodweight?: number;
    /** 客户袋号 */
    PackageNo?: string;
    /** 扫描单号：通过 订单号、转单号、客户订单号 */
    ScancodeOrderNo?: string;
    /** 入库件数  一票(订单)包裹就是一件 */
    UpRepositoryNums?: number;
    /** 入库件数总计 */
    UpRepositoryNumsTotal?: number;
    /** 总实重 */
    WeightTotal?: number;
    /** 扫描入库数据 */
    list?: OrderScancodeUplibraryList[];
  };

  type PriceType = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
  };

  type PriceTypePageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: PriceType[];
  };

  type PriceCountry = {
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 价格对应国家表 */
    PriceId?: number;
    /** 国家Id */
    CountryId?: number;
  };

  type PriceWeightRange = {
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 价格主表Id */
    PriceId?: number;
    /** 区间名称 */
    RangeName?: string;
    /** 最小重量 */
    MinWeight?: number;
    /** 最大重量 */
    MaxWeight?: number;
    /** 产品Id */
    ProductId?: number;
    /** 区间重量分类名称 */
    WeightRangeType?: string;
  };

  type PriceOtherFee = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 价格主表Id */
    PriceId?: number;
    /** 重量区间名称 */
    ExtraFeeName?: string;
    /** 产品价格 */
    Price?: number;
    /** 业务价格 */
    CostPrice?: number;
    /** 费用类型 1操作费  2杂费 */
    ExtraFeeType?: number;
  };

  type RequestItemPrice = {
    /** 计费方式  0 首重续重   1 按重量区间 */
    PriceCalcType?: number;
    /** 币种 */
    CurrencyTypeId?: number;
    /** 价格主表Id */
    PriceId?: number;
    /** 国家Id */
    CountryId?: number;
    /** 价格对应国家 */
    countyrItem?: PriceCountry[];
    /** 区间重量区间 */
    Item?: PriceWeightRange[];
    /** 其他费用 */
    FeeItem?: PriceOtherFee[];
    /** 生效时间 */
    ActiveStartTime?: string;
    /** 失效时间 */
    ActiveEndTime?: string;
    /** 备注 */
    Mark?: string;
  };

  type RequestPrice = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 产品Id  说明：当价格类型为 0 产品Id 1渠道Id */
    ProductId?: number;
    /** 区间重量分类名称 */
    WeightRangeType?: string;
    /** 区间重量区间 */
    Item?: PriceWeightRange[];
  };

  type BasicColumn = {
    /** title */
    title?: string;
    /** dataIndex */
    dataIndex?: string;
  };

  type ProductAdd = {
    /** 当前登录用户ID */
    UserId?: number;
    /** 产品状态 1生效  2失效 */
    IsActive?: number;
    /** 产品类型 1单票计费 */
    ProductType?: number;
    /** 产品名称 */
    ProductName?: string;
    /** 计重类型 */
    WeighingType?: number;
    /** 货物类型 下拉数据以产品原形图的下拉数据为准 */
    GoodsType?: number;
    /** 体积系数 订 单扫描入库中的体积重 长* 宽*高/8000 这里的8000就是体积数 */
    CBMRate?: number;
    /** 产品代码 */
    ProducCode?: string;
    /** 派送时效 */
    DeliveryTimeEffect?: number;
    /** 标签模板 取模板配置模块中的标签模板 */
    LabeltemplateId?: number;
    /** 产品备注 */
    Remarks?: string;
    /** 首重最小值 */
    FirstweightMinvalue?: number;
  };

  type ProductUpt = {
    /** 当前登录用户ID */
    UserId?: number;
    /** 产品状态 1生效  2失效 */
    IsActive?: number;
    /** 产品类型 1单票计费 */
    ProductType?: number;
    /** 产品名称 */
    ProductName?: string;
    /** 计重类型 */
    WeighingType?: number;
    /** 货物类型 下拉数据以产品原形图的下拉数据为准 */
    GoodsType?: number;
    /** 体积系数 订 单扫描入库中的体积重 长* 宽*高/8000 这里的8000就是体积数 */
    CBMRate?: number;
    /** 产品代码 */
    ProducCode?: string;
    /** 派送时效 */
    DeliveryTimeEffect?: number;
    /** 标签模板 取模板配置模块中的标签模板 */
    LabeltemplateId?: number;
    /** 产品备注 */
    Remarks?: string;
    /** 首重最小值 */
    FirstweightMinvalue?: number;
    /** 产品Id */
    Id?: number;
  };

  type ConfigTemplate = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 模板类型： 1标签模板 2 订单导入模板 3价格导入模板 4清关模板 */
    TemplateType?: number;
    /** 模板名称 */
    TemplateName?: string;
    /** 平台 */
    PlatformName?: string;
    /** 模板格式 */
    TemplateFormat?: string;
    /** 模板文件Id 关联CAMS数据库的文件附件信息表, */
    FileId?: number;
    /** 清关类型 1国内报关 2国外清关 */
    ClearShutType?: number;
    /** 文件url */
    FileUrl?: string;
    /** 文件原名称 */
    SourceFileName?: string;
  };

  type ConfigTemplateShow = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 模板类型： 1标签模板 2 订单导入模板 3价格导入模板 4清关模板 */
    TemplateType?: number;
    /** 模板名称 */
    TemplateName?: string;
    /** 平台 */
    PlatformName?: string;
    /** 模板格式 */
    TemplateFormat?: string;
    /** 模板文件Id 关联CAMS数据库的文件附件信息表, */
    FileId?: number;
    /** 清关类型 1国内报关 2国外清关 */
    ClearShutType?: number;
    /** 文件url */
    FileUrl?: string;
    /** 文件原名称 */
    SourceFileName?: string;
    /** 序号 */
    RowIndex?: number;
    /** 创建人名称 */
    CreatorUserName?: string;
  };

  type ConfigTemplateShowPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: ConfigTemplateShow[];
  };

  type ConfigTemplateUpt = {
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
    /** id */
    Id?: number;
  };

  type configArchivesHSCodeDate = {
    /** 当前登录人 */
    UserId?: number;
    /** 海关编码 */
    HSCode?: string;
    /** 中文品名 */
    CName?: string;
    /** 英文品名 */
    EName?: string;
    /** 材质 */
    material?: string;
    /** 税则号 */
    Taxnumber?: string;
    /** 税率 */
    Taxrate?: string;
  };

  type HSCodeExcel = {
    /** id */
    Id?: number[];
    /** 文件名称 */
    ExcelName?: string;
  };

  type configArchivesHSCode = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 海关编码 */
    HSCode?: string;
    /** 中文品名 */
    CName?: string;
    /** 英文品名 */
    EName?: string;
    /** 材质 */
    material?: string;
    /** 税则号 */
    Taxnumber?: string;
    /** 税率 */
    Taxrate?: string;
  };

  type configArchivesHSCodeShow = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 海关编码 */
    HSCode?: string;
    /** 中文品名 */
    CName?: string;
    /** 英文品名 */
    EName?: string;
    /** 材质 */
    material?: string;
    /** 税则号 */
    Taxnumber?: string;
    /** 税率 */
    Taxrate?: string;
    /** 创建人 */
    CreatorUserName?: string;
  };

  type configArchivesHSCodeShowPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: configArchivesHSCodeShow[];
  };

  type configArchivesHSCodeUpt = {
    /** 当前登录人 */
    UserId?: number;
    /** 海关编码 */
    HSCode?: string;
    /** 中文品名 */
    CName?: string;
    /** 英文品名 */
    EName?: string;
    /** 材质 */
    material?: string;
    /** 税则号 */
    Taxnumber?: string;
    /** 税率 */
    Taxrate?: string;
    /** 主键 */
    Id?: number;
  };

  type configArchivesPostcoderulesData = {
    /** 当前登录人 */
    UserId?: number;
    /** 国家id */
    CountryId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间开始部分 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
  };

  type configArchivesPostcoderules = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 国家id */
    CountryId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间开始部分 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
  };

  type configArchivesPostcoderulesShow = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 国家id */
    CountryId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间开始部分 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
    /** 创建人名称 */
    CreatorUserName?: string;
    /** 国家中文名称 */
    CountryCnName?: string;
    /** 国家英文名称 */
    CountryEnName?: string;
    /** 国家代码 */
    CountryCode?: string;
    /** 城市中文名称 */
    CityCnName?: string;
    /** 城市英文名称 */
    CityEnName?: string;
    /** 行号 */
    RowIndex?: number;
  };

  type configArchivesPostcoderulesShowPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: configArchivesPostcoderulesShow[];
  };

  type configArchivesPostcoderulesUpt = {
    /** 当前登录人 */
    UserId?: number;
    /** 国家id */
    CountryId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间开始部分 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
    /** 主键 */
    Id?: number;
  };

  type configArchivesRemoteareaData = {
    /** 当前登录人 */
    UserId?: number;
    /** 国家id */
    CountryId?: number;
    /** 物流渠道id */
    ChannelId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
  };

  type configArchivesRemotearea = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 国家id */
    CountryId?: number;
    /** 物流渠道id */
    ChannelId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间开始部分 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
  };

  type configArchivesRemoteareaShow = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 国家id */
    CountryId?: number;
    /** 物流渠道id */
    ChannelId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间开始部分 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
    /** 创建人 */
    CreatorUserName?: string;
    /** 国家中文名称 */
    CountryCnName?: string;
    /** 国家英文名称 */
    CountryEnName?: string;
    /** 国家代码 */
    CountryCode?: string;
    /** 城市中文名称 */
    CityCnName?: string;
    /** 城市英文名称 */
    CityEnName?: string;
    /** 行号 */
    RowIndex?: number;
  };

  type configArchivesRemoteareaShowPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: configArchivesRemoteareaShow[];
  };

  type configArchivesRemoteareaUpt = {
    /** 当前登录人 */
    UserId?: number;
    /** 国家id */
    CountryId?: number;
    /** 物流渠道id */
    ChannelId?: number;
    /** 城市id */
    CityId?: number;
    /** 邮编区间 */
    Postcodestart?: string;
    /** 邮编区间结尾部分 */
    PostcodeEnd?: string;
    /** 主键 */
    Id?: number;
  };

  type configArchivesRepositoryData = {
    /** 当前登录人 */
    UserId?: number;
    /** 仓库名称 */
    RepositoryName?: string;
    /** 所属公司ID */
    OrgId?: number;
    /** 详细地址 */
    Detailaddress?: string;
    /** 联系人 */
    contacts?: string;
    /** 电话 */
    Telephone?: string;
  };

  type configArchivesRepository = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 仓库名称 */
    RepositoryName?: string;
    /** 所属公司ID */
    OrgId?: number;
    /** 详细地址 */
    Detailaddress?: string;
    /** 联系人 */
    contacts?: string;
    /** 电话 */
    Telephone?: string;
  };

  type configArchivesRepositoryShow = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 仓库名称 */
    RepositoryName?: string;
    /** 所属公司ID */
    OrgId?: number;
    /** 详细地址 */
    Detailaddress?: string;
    /** 联系人 */
    contacts?: string;
    /** 电话 */
    Telephone?: string;
    /** 创建人 */
    CreatorUserName?: string;
    /** 公司名称 */
    CompanyName?: string;
    /** 行号 */
    RowIndex?: number;
  };

  type configArchivesRepositoryShowPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: configArchivesRepositoryShow[];
  };

  type configArchivesRepositoryUpt = {
    /** 当前登录人 */
    UserId?: number;
    /** 仓库名称 */
    RepositoryName?: string;
    /** 所属公司ID */
    OrgId?: number;
    /** 详细地址 */
    Detailaddress?: string;
    /** 联系人 */
    contacts?: string;
    /** 电话 */
    Telephone?: string;
    /** ID */
    Id?: number;
  };

  type configArchivesTypesData = {
    /** 当前登录人 */
    UserId?: number;
    /** 类型名称 */
    TypesName?: string;
    /** 选项名称  可空 */
    TypesOptionName?: string[];
  };

  type configArchivesTypes = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 类型名称 */
    TypesName?: string;
  };

  type configArchivesTypesOptionData = {
    /** 当前登录人 */
    UserId?: number;
    /** 数据ID */
    Id?: number;
    /** 类型名称 */
    TypesOptionName?: string[];
  };

  type configArchivesTypesOption = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 类型id */
    config_archives_TypesId?: number;
    /** 选项名称 */
    TypesOptionName?: string;
  };

  type configArchivesTypesOptionUpt = {
    /** 当前登录人 */
    UserId?: number;
    /** 数据ID */
    Id?: number;
    /** 类型名称 */
    TypesOptionName?: string;
  };

  type configArchivesTypesOptionShow = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 类型id */
    config_archives_TypesId?: number;
    /** 选项名称 */
    TypesOptionName?: string;
    /** 创建人 */
    CreatorUserName?: string;
  };

  type configArchivesTypesShow = {
    Id?: number;
    /** 创建人Id */
    CreatorUserId?: number;
    /** 修改人Id */
    LastModifierUserId?: number;
    /** 创建日期 */
    CreationTime?: string;
    /** 修改日期 */
    LastModificationTime?: string;
    /** 逻辑删除  1删除    0正常 */
    IsDeleted?: number;
    /** 删除人Id */
    DeleterUserId?: number;
    /** 逻辑删除时间 */
    DeletionTime?: string;
    /** 类型名称 */
    TypesName?: string;
    /** 行号 */
    RowIndex?: number;
    /** 类型所属选项 */
    TypesOptions?: configArchivesTypesOptionShow[];
    /** 创建人 */
    CreatorUserName?: string;
  };

  type configArchivesTypesShowPageModel = {
    page?: number;
    pageCount?: number;
    total?: number;
    pageSize?: number;
    list?: configArchivesTypesShow[];
  };

  type configArchivesTypesUpt = {
    /** 当前登录人 */
    UserId?: number;
    /** ID */
    Id?: number;
    /** 类型名称 */
    TypesName?: string;
  };
}
