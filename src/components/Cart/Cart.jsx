import './Cart.scss';

import CartProductItem from './CartProductItem/CartProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { productCart } from '../../context/productCart';

const Cart = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [normalPrice, setNormalPrice] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=>{
        setTotalPrice(normalPrice + deliveryPrice + discountPrice)
    }, [normalPrice, deliveryPrice, discountPrice])
    return (
        <>
        <div className="cart-wrapper">
            <div className="cart-inner b-width">
                <div className="cart-content">
                    <div className="cart-product">
                        <div className="cart-text">Sản phẩm (0)</div>
                        <div className="cart-display">
                            <div className="mrow display-bd display-pd">
                                <div className="mcol-5 display-font" style={{paddingLeft: "25px"}}>Tên sản phẩm</div>
                                <div className="mcol-3 display-font dp">Số lượng</div>
                                <div className="mcol-2 display-font">Thành tiền</div>
                                <div style={{width: "36px"}}></div>
                            </div>
                            <div className="mrow display-bd display-pd">
                                <div className="opt">
                                    <input type="checkbox" checked={isChecked} onChange={e=>setIsChecked(e.target.checked)} />
                                    <div className='checkbox-inner'></div>
                                </div>
                                <div className='display-font'>ALL</div>
                            </div>
                            <div className="cart-list">
                                {productCart.map(item => {
                                    return (
                                        <CartProductItem key={item.id} product={item} isAllChecked={isChecked} productPrice={setNormalPrice} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="cart-summary">
                        <div className="cart-summary__top">
                            <div className='d-flex justify-content-between font-style'>
                                <div><span className='font-color'><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Địa chỉ nhận hàng</div>
                                <div className='font-color' style={{cursor: "pointer"}}>Thay đổi</div>
                            </div>
                            <div className="cart-summary__address">
                                <div className='name font-style'>Địa chỉ mặc định <span className='font-style-2'>(0827 578 477)</span></div>
                                <div className='address font-style-1'>Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh</div>
                            </div>
                            <div className="d-flex justify-content-between font-style">
                                <div><span className='font-color'><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Khuyến mãi</div>
                                <div className='font-color' style={{cursor: "pointer"}}>Có thể chọn 0</div>
                            </div>
                            <button className='cart-summary__btn'><FontAwesomeIcon icon={faTag} />Chọn hoặc nhập khuyến mãi</button>
                        </div>
                        <div className="cart-summary__bot">
                            <div className="crow">
                                <p>Tạm tính</p>
                                <p>{normalPrice}đ</p>
                            </div>
                            <div className="crow">
                                <p>Phí giao hàng</p>
                                <p>{deliveryPrice}đ</p>
                            </div>
                            <div className="crow">
                                <p>Giảm giá</p>
                                <p>{discountPrice}đ</p>
                            </div>
                            <div className="crow total-price">
                                <p>Tổng tiền:</p>
                                <p style={{color: "rgb(235, 64, 61)", fontWeight: "700"}}>{totalPrice}đ</p>
                            </div>
                            <button className='cart-summary__btn'>Thanh toán (1 sản phẩm)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart