import './Cart.scss';

import { useEffect, useState } from 'react';
import CartProduct from './CartProduct/CartProduct';
import CartSummary from './CartSummary/CartSummary';
import { checkSession } from '../../services/authenticationService';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [normalPrice, setNormalPrice] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        setTotalPrice(normalPrice + deliveryPrice + discountPrice)
    }, [normalPrice, deliveryPrice, discountPrice])
    useEffect(() => {
        if(!checkSession()) navigate("/")
    }, [])
    return (
        <>
        <div className="cart-wrapper">
            <div className="cart-inner b-width">
                <div className="cart-content">
                    <CartProduct setNormalPrice={setNormalPrice} />
                    <CartSummary 
                        normalPrice={normalPrice} 
                        deliveryPrice={deliveryPrice}
                        discountPrice={discountPrice}
                        totalPrice={totalPrice}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart