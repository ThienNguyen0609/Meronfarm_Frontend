import "./OrderDetailModal.scss"

import Modal from "../../../Modal/Modal"
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader"
import ModalBody from "../../../Modal/ModalBody/ModalBody"
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter"
import _ from "lodash"

const OrderDetailModal = ({show, setIsShow, orderDetail, totalPrice, address}) => {
    return (
        <>
        <Modal show={show} setIsShow={setIsShow}>
            <ModalHeader setIsShow={setIsShow}>Title</ModalHeader>
            <ModalBody>
                <div className="order-detail__list">
                    {orderDetail && !_.isEmpty(orderDetail) && (
                        orderDetail.map(item => {
                            return (
                                <div key={item.id} className="order-detail__item">
                                    <div className="order-detail__item-image">
                                        <img src={`../../src/assets/images/product/${item.product.imageSrc}.png`} alt={`${item.product.imageSrc}`} />
                                    </div>
                                    <div className="order-detail__item-content">
                                        <div className="order-detail__item-title">{item.product.name}</div>
                                        <div className="order-detail__item-quantity-mass">
                                            <span className="meron-flex-1 responsive">S.Lượng: <span>{item.quantity}</span></span>
                                            <span className="meron-flex-1 responsive">K.Lượng: <span>{item.product.unit}</span></span>
                                        </div>
                                        <div className="order-detail__item-price">
                                            <span className="meron-flex-1 responsive">Đ.Giá: <span>{item.product.price}</span></span>
                                            <span className="meron-flex-1 responsive">T.Giá: <span>{item.totalPrice}</span></span></div>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
                <div className="address__display">
                    Địa chỉ nhận hàng: <span>{address}</span>
                </div>
                <div className="total-price__display">
                    Tổng giá đơn hàng: <span>{totalPrice}</span>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="meron-form-button close-btn-color" type="button" onClick={() => setIsShow(!show)}>Đóng</button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default OrderDetailModal