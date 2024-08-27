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
    const [productQuantity, setProductQuantity] = useState(0);
    const [productTotalItemQuantity, setProductTotalItemQuantity] = useState(0);

    const [productOrder, setProductOrder] = useState([]);
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
                    <CartProduct 
                        productOrder={productOrder}
                        setNormalPrice={setNormalPrice} 
                        setProductQuantity={setProductQuantity} 
                        setProductTotalItemQuantity={setProductTotalItemQuantity}
                        setProductOrder={setProductOrder} 
                    />
                    <CartSummary 
                        normalPrice={normalPrice} 
                        deliveryPrice={deliveryPrice}
                        discountPrice={discountPrice}
                        totalPrice={totalPrice}
                        productQuantity={productQuantity}
                        productTotalItemQuantity={productTotalItemQuantity}
                        productOrder={productOrder}
                        setProductOrder={setProductOrder}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart