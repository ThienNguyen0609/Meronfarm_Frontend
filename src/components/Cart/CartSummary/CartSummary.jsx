import "./CartSummary.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { getUserIdSession } from "../../../services/authenticationService";
import { useCreateOrder } from "../../../services/useHooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAddressesByUserIdQuery } from "../../../store/features/meronfarm/meronfarmApi";
import { useEffect, useState } from "react";
import _ from "lodash";
import AddressOptionModal from "./AddressOptionModal/AddressOptionModal";

const CartSummary = (props) => {
  const { data: addresses, error, isLoading } = useGetAddressesByUserIdQuery(getUserIdSession())
  const [address, setAddress] = useState({});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!error && !isLoading && !_.isEmpty(addresses.addresses)) setAddress(...addresses.addresses.filter(item => item.isDefault === true))
  }, [addresses])
  return (
    <>
      {!error && !isLoading && (
        <AddressOptionModal show={show} setIsShow={setShow} addresses={addresses} setAddress={setAddress} />
      )}
      <div className="cart-summary">
        <div className="cart-summary__top">
          <div className="d-flex justify-content-between font-style">
            <div>
              <span className="font-color">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>{" "}
              Địa chỉ nhận hàng
            </div>
            <div className="font-color" style={{ cursor: "pointer" }} onClick={()=>setShow(true)}>
              Thay đổi
            </div>
          </div>
          <div className="cart-summary__address">
            {!_.isEmpty(address) && (
              <>
              <div className="name font-style">
                {address.user.name}{" "}
                <span className="font-style-2">({address.user.phoneNumber})</span>
              </div>
              <div className="address font-style-1">
                {address.addr}
              </div>
              </>
            )}
          </div>
          <div className="d-flex justify-content-between font-style">
            <div>
              <span className="font-color">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>{" "}
              Khuyến mãi
            </div>
            <div className="font-color" style={{ cursor: "pointer" }}>
              Có thể chọn 0
            </div>
          </div>
          <button className="cart-summary__btn">
            <FontAwesomeIcon icon={faTag} />
            Chọn hoặc nhập khuyến mãi
          </button>
        </div>
        <div className="cart-summary__bot">
          <div className="crow">
            <p>Tạm tính</p>
            <p>{props.normalPrice}đ</p>
          </div>
          <div className="crow">
            <p>Phí giao hàng</p>
            <p>{props.deliveryPrice}đ</p>
          </div>
          <div className="crow">
            <p>Giảm giá</p>
            <p>{props.discountPrice}đ</p>
          </div>
          <div className="crow total-price">
            <p>Tổng tiền:</p>
            <p style={{ color: "rgb(235, 64, 61)", fontWeight: "700" }}>
              {props.totalPrice}đ
            </p>
          </div>
          <button onClick={()=>useCreateOrder(
            props.productQuantity, 
            props.totalPrice, 
            address.addr, 
            props.productOrder, 
            props.setProductOrder,
            dispatch,
            navigate
          )} className="cart-summary__btn">Thanh toán ({props.productQuantity} sản phẩm)</button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
