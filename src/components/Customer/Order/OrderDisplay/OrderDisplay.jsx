import "./OrderDisplay.scss"

import { useGetOrderBySearchParamsQuery } from "../../../../store/features/meronfarm/meronfarmApi";
import { getUserIdSession } from "../../../../services/authenticationService";
import { useState } from "react";
import Pagination from "../../../Pagination/Pagination"
import emptyLogo from "../../../../assets/images/empty/order_empty.png"
import _ from "lodash";
import OrderDetailModal from "../OrderDetailModal/OrderDetailModal";

const OrderDisplay = ({ page, statusId }) => {
    const { data: orders, error, isLoading } = useGetOrderBySearchParamsQuery({
        userId: getUserIdSession(),
        page: parseInt(page),
        limit: 8,
        orderStatus: statusId
    });
    const [isShow, setIsShow] = useState(false);
    const [orderDetail, setOrderDetail] = useState();
    const [totalPrice, setTotalPrice] = useState();

    const handleShowOrderDetail = (orderProducts, totalPrice) => {
        setOrderDetail(orderProducts)
        setTotalPrice(totalPrice)
        setIsShow(true)
    }
    return (
        <>
        <OrderDetailModal show={isShow} setIsShow={setIsShow} orderDetail={orderDetail} totalPrice={totalPrice} />
        <div className="meron-d-flex meron-t-header">
            <div className="meron-t-header__item meron-t__item meron-flex-2">Mã đơn hàng</div>
            <div className="meron-t-header__item meron-t__item meron-flex-1">Số lượng</div>
            <div className="meron-t-header__item meron-t__item meron-flex-1">Trạng thái</div>
            <div className="meron-t-header__item meron-t__item meron-flex-1">Tổng tiền</div>
        </div>
        <div className="meron-d-flex meron-t-body">
            {!error && !isLoading && orders && !_.isEmpty(orders) && orders.len > 0 ? (<>
                <div className="meron-d-flex meron-t-body__display set-min-heigth">
                    {orders.orders.map(order => {
                        return (
                            <div key={order.id} className="meron-t-body__item">
                                <div 
                                    className="meron-flex-2 meron-t__item code-product__font-style" 
                                    onClick={() => handleShowOrderDetail(order.orderProducts, order.totalPrice)}
                                >{order.id}</div>
                                <div className="meron-flex-1 meron-t__item">{order.totalQuantity}</div>
                                <div className="meron-flex-1 meron-t__item">{order.orderStatus?.status}</div>
                                <div className="meron-flex-1 meron-t__item price_font-style">{order.totalPrice}</div>
                            </div>
                        )
                    })}
                </div>
                <Pagination
                    index={parseInt(page)}
                    lastIndex={Math.ceil(orders.len / 8)}
                    linkAddress={`/customer/orders?Page=`}
                />
            </>) : (
                <div className="empty mt-5">
                    <img src={emptyLogo} alt="empty" />
                    <div className="empty-discription">
                        <span className="empty-title">Bạn chưa thích sản phẩm nào</span>
                        <span className="empty-text">
                        Hãy lựa chọn sản phẩm bạn yêu thích khi mua sắm để xem lại thuận tiện nhất
                        </span>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default OrderDisplay