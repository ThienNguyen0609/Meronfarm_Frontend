import "./OMDisplay.scss"

import OrderEmpty from "../../../../assets/images/empty/order_empty.png"
import _ from "lodash"
import { useGetOrdersBySearchParamsQuery, useGetOrderStatusQuery } from "../../../../store/features/meronfarm/meronfarmApi"
import Pagination from "../../../Pagination/Pagination"
import OrderDetailModal from "../../../Customer/Order/OrderDetailModal/OrderDetailModal"
import { useState } from "react"
import OrderManageTableDisplay from "../OMTableDisplay/OMTableDisplay"

const OrderManageDisplay = ({page, searchString}) => {
    const { data: orders, error: orderError, isLoading: orderLoading } = useGetOrdersBySearchParamsQuery({
        page: parseInt(page),
        limit: 8,
        search: searchString
    })
    const { data: orderStatuses, error: orderStatusError, isLoading: orderStatusLoading } = useGetOrderStatusQuery();
    const [isShow, setIsShow] = useState(false);
    const [orderDetail, setOrderDetail] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [address, setAddress] = useState();
    
    return (
        <>
        <OrderDetailModal show={isShow} setIsShow={setIsShow} orderDetail={orderDetail} totalPrice={totalPrice} address={address} />
        <div className="user-manage__table">
            <div className="meron-d-flex meron-t-header">
                <div className="meron-t-header__item meron-t__item meron-flex-1">STT</div>
                <div className="meron-t-header__item meron-t__item meron-flex-3">Mã đơn hàng</div>
                <div className="meron-t-header__item meron-t__item meron-flex-2">Chủ đơn hàng</div>
                <div className="meron-t-header__item meron-t__item meron-flex-1">Số lượng</div>
                <div className="meron-t-header__item meron-t__item meron-flex-1">Trạng thái</div>
                <div className="meron-t-header__item meron-t__item meron-flex-1">Tổng tiền</div>
                <div className="meron-t-header__item meron-t__item meron-flex-1"></div>
            </div>
            <div className="meron-d-flex meron-t-body">
                {!orderError && !orderStatusError &&
                !orderLoading && !orderStatusLoading &&
                !_.isEmpty(orders.orders) && !_.isEmpty(orderStatuses.orderStatuses) &&
                orders.len > 0 ? (<>
                    <div className="meron-d-flex meron-t-body__display">
                        {orders.orders.map((order, index) => {
                            return (
                                <OrderManageTableDisplay 
                                    key={order.id}
                                    index={index} 
                                    order={order} 
                                    orderStatuses={orderStatuses} 
                                    setIsShow={setIsShow}
                                    setOrderDetail={setOrderDetail}
                                    setTotalPrice={setTotalPrice}
                                    setAddress={setAddress}
                                />
                            )
                        })}
                    </div>
                    <Pagination 
                        index={parseInt(page)}
                        lastIndex={Math.ceil(orders.len / 8)}
                        linkAddress={`/admin/user_manage?Page=`}
                    />
                </>) : (
                    <div className="empty empty-cart">
                        <img src={OrderEmpty} alt="empty" />
                        <div className="empty-discription">
                            <span className="empty-title">Hiện không có đơn hàng nào</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default OrderManageDisplay