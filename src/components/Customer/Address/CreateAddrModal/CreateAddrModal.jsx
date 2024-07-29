import "./CreateAddrModal.scss"

import Modal from '../../../Modal/Modal';
import ModalHeader from '../../../Modal/ModalHeader/ModalHeader';
import ModalBody from '../../../Modal/ModalBody/ModalBody';
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter"
import ProvinceForm from "./FormControll/ProvinceForm";
import DistrictForm from "./FormControll/DistrictForm";
import WardForm from "./FormControll/WardForm";
import AddressForm from "./FormControll/AdressForm";

import { useState } from "react";
import { getSession } from "../../../../services/authenticationService";
import { addAddress } from "../../../../services/meronfarmService";
import { toastify } from "../../../../services/toastify";
import { useDispatch } from "react-redux";

const CreateAddrModal = ({show, setIsShow}) => {
    const [provinceValue, setProvinceValue] = useState("");
    const [provinceId, setProvinceId] = useState(0);
    const [districtValue, setDistrictValue] = useState("");
    const [districtId, setDistrictId] = useState(0);
    const [wardValue, setWardValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        if(provinceValue.length > 0 && districtValue.length > 0 && wardValue.length > 0 && addressValue.length > 0) {
            const fullAddress = [addressValue,wardValue,districtValue,provinceValue].join(", ");
            const { data } = getSession();
            const request = {
                addr: fullAddress,
                userId: data.id
            }
            const response = await addAddress(request);
            setIsShow(!show)
            if(response.status) toastify(true, "success", response.message, dispatch)
            else toastify(true, "error", response.message, dispatch)
        }
        else toastify(true, "warning", "Hãy nhập đầy đủ", dispatch)
    }
    return (
        <>
        <Modal show={show} setIsShow={setIsShow}>
            <ModalHeader setIsShow={setIsShow}>Title</ModalHeader>
            <ModalBody>
                <div className="meron-form-group">
                    <ProvinceForm setProvinceId={setProvinceId} value={provinceValue} setValue={setProvinceValue} />
                    <DistrictForm setDistrictId={setDistrictId} provinceId={provinceId} value={districtValue} setValue={setDistrictValue} />
                    <WardForm districtId={districtId} value={wardValue} setValue={setWardValue} />
                    <AddressForm value={addressValue} setValue={setAddressValue} />
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="meron-form-button add-btn-color" type="button" onClick={() => handleSubmit()}>Thêm địa chỉ</button>
                <button className="meron-form-button close-btn-color" type="button" onClick={() => setIsShow(!show)}>Đóng</button>
            </ModalFooter>
        </Modal>
        </>
    )
}
export default CreateAddrModal