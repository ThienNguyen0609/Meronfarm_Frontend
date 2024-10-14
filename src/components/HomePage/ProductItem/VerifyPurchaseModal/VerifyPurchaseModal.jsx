import  "./VerifyPurchaseModal.scss"

import Modal from "../../../Modal/Modal";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import ModalBody from "../../../Modal/ModalBody/ModalBody";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";
import { useGetAddressesByUserIdQuery } from "../../../../store/features/meronfarm/meronfarmApi";
import { getUserIdSession } from "../../../../services/authenticationService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import _ from "lodash";
import { useCreateOrder } from "../../../../services/useHooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const VerifyPurchaseModal = ({ show, setIsShow, productItem }) => {
    const { data: addresses, error, isLoading } = useGetAddressesByUserIdQuery(getUserIdSession())
    const [address, setAddress] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [active, setActive] = useState(false);
    const [productOrder, setProductOrder] = useState([
        {
            quantity: quantity,
            totalPrice: productItem.price*quantity,
            productId: productItem.id
        }
    ]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreateOrder = () => {
        useCreateOrder(1, productItem.price*quantity, address.addr, productOrder, setProductOrder, dispatch, navigate)
        setIsShow(false);
    }
    useEffect(() => {
        if(!error && !isLoading && !_.isEmpty(addresses.addresses)) setAddress(...addresses.addresses.filter(item => item.isDefault === true))
    }, [addresses])
    useEffect(() => {
        setProductOrder(draft => draft.map(item => {
            return {
                ...item,
                quantity: quantity,
                totalPrice: productItem.price*quantity
            }
        }))
    }, [quantity])
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
                    <div className="pd__summary-font pd__address-hover" onClick={()=>setActive(!active)}>Địa chỉ nhận hàng:{" "}
                        <span className="pd__address">{address.addr}</span>
                    </div>
                    <div className={"address-dropdown"+(active ? " active" : "")}>
                            <div className="addrerss-dropdown__title">Lựa chọn địa chỉ nhận hàng</div>
                            <div className="address-dropdown__list">
                                {!error && !isLoading && !_.isEmpty(addresses.addresses) && (
                                    addresses.addresses.map(item => {
                                        return (
                                            <div key={item.id} 
                                                className="address-dropdown__item" 
                                                onClick={()=>{
                                                    setAddress(item)
                                                    setActive(false)
                                                }}
                                            >
                                                {item.addr}
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        </div>
                    <div className="pd__summary-font">Tổng số lượng: <span className="pd__total-quantity">{quantity}</span></div>
                    <div className="pd__summary-font">Tổng giá tiền: <span className="pd__total-price">{productItem.price*quantity}</span></div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button 
                    className="meron-form-button action-btn-color" 
                    type="button"
                    onClick={()=>handleCreateOrder()}
                >Mua ngay</button>
                <button className="meron-form-button close-btn-color" type="button" onClick={() => setIsShow(!show)}>Đóng</button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default VerifyPurchaseModal