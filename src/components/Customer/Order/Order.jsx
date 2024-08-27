import "./Order.scss";

import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import OrderDisplay from "./OrderDisplay/OrderDisplay";

const Order = () => {
  const [searchParams] = useSearchParams();
  const [index, setIndex] = useState(0);
  const [statusId, setStatusId] = useState(0);
  const underlineRef = useRef();
  const page = searchParams.get("Page");

  const handleActiveNav = (event, statusId, index) => {
    setIndex(index);
    setStatusId(statusId);
    console.log(underlineRef.current.style);
    underlineRef.current.style.width = `${event.target.offsetWidth}` + "px";
    underlineRef.current.style.left = `${event.target.offsetLeft}` + "px";
  };
  return (
    <>
      <div className="profile-inner">
        <div className="profile-title">Đơn hàng</div>
        <div className="order-wrapper">
          <div className="order-inner">
            <div className="order-nav">
                <div onClick={(e)=>handleActiveNav(e, 0, 0)} className={"nav-item"+(index === 0 ? " nav-item-active" : "")}>Tất cả</div>
                <div onClick={(e)=>handleActiveNav(e, 1009, 1)} className={"nav-item"+(index === 1 ? " nav-item-active" : "")}>Chờ xác nhận</div>
                <div onClick={(e)=>handleActiveNav(e, 1010, 2)} className={"nav-item"+(index === 2 ? " nav-item-active" : "")}>Nhận đơn</div>
                <div onClick={(e)=>handleActiveNav(e, 1011, 3)} className={"nav-item"+(index === 3 ? " nav-item-active" : "")}>Đóng gói</div>
                <div onClick={(e)=>handleActiveNav(e, 1012, 4)} className={"nav-item"+(index === 4 ? " nav-item-active" : "")}>Vận chuyển</div>
                <div onClick={(e)=>handleActiveNav(e, 1013, 5)} className={"nav-item"+(index === 5 ? " nav-item-active" : "")}>Kiểm hàng</div>
                <div onClick={(e)=>handleActiveNav(e, 1014, 6)} className={"nav-item"+(index === 6 ? " nav-item-active" : "")}>Hoàn Thành</div>
                <div onClick={(e)=>handleActiveNav(e, 1015, 7)} className={"nav-item"+(index === 7 ? " nav-item-active" : "")}>Từ chối</div>
                <div ref={underlineRef} className='nav-item-bd-bottom'></div>
            </div>
            <OrderDisplay 
              page={page === null ? 1 : page} 
              statusId={statusId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
