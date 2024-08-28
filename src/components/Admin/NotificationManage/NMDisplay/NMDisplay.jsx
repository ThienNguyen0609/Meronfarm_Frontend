import "./NMDisplay.scss"

import NotificationEmpty from "../../../../assets/images/empty/notification_empty.png"
import Pagination from "../../../Pagination/Pagination"
import OrderDetailModal from "../../../Customer/Order/OrderDetailModal/OrderDetailModal"
import { useGetNotificationsBySearchParamsQuery } from "../../../../store/features/meronfarm/meronfarmApi"
import { getUserIdSession } from "../../../../services/authenticationService"
import { useState } from "react"
import _ from "lodash"

const NotificationManageDisplay = ({page}) => {
    const { data: notifications, error, isLoading } = useGetNotificationsBySearchParamsQuery({
        userId: getUserIdSession(),
        page: parseInt(page),
        limit: 8
    })
    const [isShow, setIsShow] = useState(false);
    const [orderDetail, setOrderDetail] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [address, setAddress] = useState();

    const handleShowOrderDetail = (orderProducts, totalPrice, address) => {
        setOrderDetail(orderProducts)
        setTotalPrice(totalPrice)
        setAddress(address)
        setIsShow(true)
    }

    console.log(notifications)
    
    return (
        <>
        <OrderDetailModal show={isShow} setIsShow={setIsShow} orderDetail={orderDetail} totalPrice={totalPrice} address={address} />
        <div className="user-manage__table">
            <div className="meron-d-flex meron-t-header">
                <div className="meron-t-header__item meron-t__item meron-flex-1">STT</div>
                <div className="meron-t-header__item meron-t__item meron-flex-2">Tên Khách hàng</div>
                <div className="meron-t-header__item meron-t__item meron-flex-3">Mã đơn hàng</div>
                <div className="meron-t-header__item meron-t__item meron-flex-2">Thông báo</div>
                <div className="meron-t-header__item meron-t__item meron-flex-2">Ngày đặt</div>
                <div className="meron-t-header__item meron-t__item meron-flex-1"></div>
            </div>
            <div className="meron-d-flex meron-t-body">
                {!error && !isLoading && !_.isEmpty(notifications.notifications) && notifications.len > 0 ? (<>
                    <div className="meron-d-flex meron-t-body__display">
                        {notifications.notifications.map((notification, index) => {
                            return (
                                <div key={notification.id} className="meron-t-body__item">
                                    <div className="meron-flex-1 meron-t__item">{index+1}</div>
                                    <div className="meron-flex-2 meron-t__item">{notification.order.user.name}</div>
                                    <div 
                                        className="meron-flex-3 meron-t__item code-product__font-style"
                                        onClick={()=>handleShowOrderDetail(notification.order.orderProducts, notification.order.totalPrice, notification.order.address)}
                                    >{notification.orderId}</div>
                                    <div className="meron-flex-2 meron-t__item">{notification.message}</div>
                                    <div className="meron-flex-2 meron-t__item">{new Date(notification.dateTime).toLocaleString('en-GB').replace(",", "")}</div>
                                    <div className="meron-flex-1 meron-t__item delete__font-style">xóa</div>
                                </div>
                            )
                        })}
                    </div>
                    <Pagination 
                        index={parseInt(page)}
                        lastIndex={Math.ceil(notifications.len / 8)}
                        linkAddress={`/admin/notification_manage?Page=`}
                    />
                </>) : (
                    <div className="empty empty-cart">
                        <img src={NotificationEmpty} alt="empty" />
                        <div className="empty-discription">
                            <span className="empty-title">Hiện không có thông báo về đặt hàng</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default NotificationManageDisplay