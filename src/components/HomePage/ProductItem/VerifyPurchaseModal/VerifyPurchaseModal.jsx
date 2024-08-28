import  "./VerifyPurchaseModal.scss"

import Modal from "../../../Modal/Modal";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const VerifyPurchaseModal = ({ show, setIsShow, productItem }) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
        <Modal show={show} setIsShow={setIsShow}>
            <ModalHeader setIsShow={setIsShow}>
                Mua hàng
            </ModalHeader>
            <ModalBody>
                <div className="pd__display">
                    <div className="pd__image">
                        <img src={`../src/assets/images/product/${productItem.imageSrc}.png`} alt={`${productItem.imageSrc}`} />
                    </div>
                    <div className="pd__content">
                        <div className="pd__title">
                            <span className="pd__name">{productItem.name}</span>
                            <span className="pd__unit">{productItem.unit}</span>
                        </div>
                        <div className="pd__price">Đơn giá: <span>{productItem.price}</span></div>
                        <div className="pd__set-quantity">
                            <button
                                onClick={() => setQuantity(draft => --draft)}
                                className="pd__btn-minus"
                                type="button"
                                disabled={quantity === 1 ? true : false}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} />
                            <button
                                onClick={() => setQuantity(draft => ++draft)}
                                className="pd__btn-plus"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pd__summary">
                    <div className="pd__summary-font">Địa chỉ nhận hành: <span className="pd__address">ok</span></div>
                    <div className="pd__summary-font">Tổng số lượng: <span className="pd__total-quantity">{quantity}</span></div>
                    <div className="pd__summary-font">Tổng giá tiền: <span className="pd__total-price">{productItem.price*quantity}</span></div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="meron-form-button action-btn-color" type="button">Mua ngay</button>
                <button className="meron-form-button close-btn-color" type="button" onClick={() => setIsShow(!show)}>Đóng</button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default VerifyPurchaseModal