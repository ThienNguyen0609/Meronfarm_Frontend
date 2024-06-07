import './Vegetable.scss'

import Product from '../../Product/Product'
import { Link } from 'react-router-dom'

const Vegetable = () => {
    return (
        <>
        <div className='product-container'>
            <div className='product-content'>
                <div className='product-title'>
                    <h4 className='upper-text'>Rau củ</h4>
                    <Link className='link' to={"#"}>Xem tất cả</Link>
                </div>
                <Product product={initialProduct} />
            </div>
        </div>
        </>
    )
}

const initialProduct = [
    {id: 1, image: "src/assets/images/homepage/po_image_1.jpg", title: "Nấm kim châm", unit: "Túi 200 gr", sold: 0, many: "có nhiều", price: "22.000đ", address: "Hồ Chí Minh"},
    {id: 2, image: "src/assets/images/homepage/po_image_2.jpg", title: "Muối bọt", unit: "Túi 1 kg", sold: 5, many: "có ít", price: "35.000đ", address: "Hồ Chí Minh"},
    {id: 3, image: "src/assets/images/homepage/po_image_3.jpg", title: "Hông giòn chín", unit: "Phần 500 gr", sold: 0, many: "có nhiều", price: "30.000đ", address: "Hồ Chí Minh"},
    {id: 4, image: "src/assets/images/homepage/po_image_4.jpg", title: "Soài cát chu - Loại 1", unit: "1 kg", sold: 10, many: "có ít", price: "65.000đ", address: "Hồ Chí Minh"},
    {id: 5, image: "src/assets/images/homepage/po_image_5.jpg", title: "Cải thìa", unit: "Bó 250 gr", sold: 0, many: "có nhiều", price: "15.000đ", address: "Hồ Chí Minh"},
    {id: 6, image: "src/assets/images/homepage/po_image_6.jpg", title: "Bánh cuộn trái cây (180gr)", unit: "1 túi", sold: 0, many: "có ít", price: "75.000đ", address: "Hồ Chí Minh"},
]

export default Vegetable