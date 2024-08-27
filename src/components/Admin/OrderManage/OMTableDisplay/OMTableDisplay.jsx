import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotification, updateOrder } from "../../../../services/meronfarmService"
import { toastify } from "../../../../services/toastify"
import { useClickOutside } from "../../../../services/useHooks";

const OrderManageTableDisplay = ({index, order, orderStatuses, setIsShow, setTotalPrice, setOrderDetail}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();
    useClickOutside(setShowDropdown, ".om-dropdown");

    const handleShowOrderDetail = (orderProducts, totalPrice) => {
        setOrderDetail(orderProducts)
        setTotalPrice(totalPrice)
        setIsShow(true)
    }

    console.log(order)

    const handleUpdateOrder = async (order, orderStatusId) => {
        const request = {
            id: order.id,
            totalPrice: order.totalPrice,
            totalQuantity: order.totalQuantity,
            orderStatusId: orderStatusId,
            userId: order.userId
        }
        const response = await updateOrder(order.id, request);

        let typeResponse;
        if(response.status) {
            typeResponse = "success"
            const nextRequest = {
                message: "cập nhật trạng thái đơn hàng",
                orderId: order.id,
                receiverId: order.userId
            }
    
            const nextResponse = await addNotification(nextRequest);
            console.log(nextResponse)
            // console.log(new Date(nextResponse.dateTime).toLocaleString('en-GB').replace(",", ""))
        }
        else typeResponse = "error"
        toastify(true, typeResponse, response.message, dispatch)
        setShowDropdown(false);
    }
    return (
        <>
        <div key={order.id} className="meron-t-body__item">
            <div className="meron-flex-1 meron-t__item om-flex">{index+1}</div>
            <div 
                className="meron-flex-3 meron-t__item om-flex code-product__font-style"
                onClick={() => handleShowOrderDetail(order.orderProducts, order.totalPrice)}
            >{order.id}</div>
            <div className="meron-flex-2 meron-t__item om-flex">{order.user.name}</div>
            <div className="meron-flex-1 meron-t__item om-flex">{order.totalQuantity}</div>
            <div className="meron-flex-1 meron-t__item om-flex">{order.orderStatus.status}</div>
            <div className="meron-flex-1 meron-t__item om-flex price_font-style">{order.totalPrice}</div>
            <div className="meron-flex-1 om-flex">
                <button onClick={()=>setShowDropdown(!showDropdown)} className="om-btn" type="button">Update</button>
                <div className={`om-dropdown${showDropdown ? " active" : ""}`}>
                    {orderStatuses.orderStatuses.map(orderStatus => {
                        if(orderStatus.id > order.orderStatusId) {
                            return (
                                <div key={orderStatus.id} onClick={()=>handleUpdateOrder(order, orderStatus.id)} className="om-dropdown__item">{orderStatus.status}</div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderManageTableDisplay