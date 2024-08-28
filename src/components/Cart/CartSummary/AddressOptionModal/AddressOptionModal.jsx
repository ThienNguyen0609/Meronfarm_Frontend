import "./AddressOptionModal.scss"

import Modal from "../../../Modal/Modal"
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader"
import ModalBody from "../../../Modal/ModalBody/ModalBody"
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter"
import _ from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const AddressOptionModal = ({show, setIsShow, addresses, setAddress}) => {
    const [optedAddress, setOptedAddress] = useState({})
    const [optedAddressId, setOptedAddressId] = useState(0);
    return (
        <>
        <Modal show={show} setIsShow={setIsShow}>
            <ModalHeader setIsShow={setIsShow}>
                Lựa chọn địa chỉ nhận hàng
            </ModalHeader>
            <ModalBody>
                <div className="address-list">
                {!_.isEmpty(addresses.addresses) && (
                    addresses.addresses.map(item => {
                        return (
                            <div key={item.id} 
                                className={`address-item ${optedAddressId === item.id ? " active" : ""}`} 
                                onClick={()=>{
                                    setOptedAddress(item)
                                    setOptedAddressId(item.id)
                                }}
                            >
                                <div className="name font-style">
                                    {item.user.name}{" "}
                                    <span className="font-style-2">({item.user.phoneNumber})</span>{" "}
                                    {item.isDefault && (
                                        <span className="font-style-3"><FontAwesomeIcon icon={faCheckCircle} /> Mặc định</span>
                                    )}
                                </div>
                                <div className="address font-style-1">
                                    {item.addr}
                                </div>
                            </div>
                        )
                    })
                )}
                </div>
            </ModalBody>
            <ModalFooter>   
                <button 
                    className="meron-form-button action-btn-color" 
                    type="button" 
                    onClick={() => {
                        setAddress(optedAddress)
                        setIsShow(!show)
                    }}
                >Chọn</button>
                <button className="meron-form-button close-btn-color" type="button" onClick={() => setIsShow(!show)}>Đóng</button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default AddressOptionModal