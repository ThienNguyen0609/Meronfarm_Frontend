import './Result.scss'

import ProductItem from '../../HomePage/ProductItem/ProductItem'
import Pagination from '../../Pagination/Pagination'
import { useEffect, useState } from 'react'

const Result = ({page}) => {
    const [optSelected, setOptSelected] = useState("Sắp xếp theo sao giảm dần")
    const [selected, setSelected] = useState(1)
    const [target, setTarget] = useState(false)
    const [active, setActive] = useState(false)
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if(!e.target.closest(".order-select") && !e.target.closest(".order-dropdown")) {
                setTarget(false)
                setActive(false)
            }
        })
    }, [])
    return (
        <>
        <div className="result-wrapper">
            <div className="result-inner">
                <div className="header">
                    <div className="text">
                        <p className='title'>Tất cả danh mục</p>
                        <p className='quantity'>Kết quả 177 sản phẩm</p>
                    </div>
                    <div className="order">
                        <div className={"order-select"+(target ? " order-select-target" : "")} 
                            onClick={()=>{
                                setTarget(!target)
                                setActive(!active)
                            }}
                        >
                            <span>{optSelected}</span>
                            <div className={"order-dropdown"+(active ? " active" : "")}>
                                <div className={'dropdown-item'+(selected === 1 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(1)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo sao giảm dần</div>
                                <div className={'dropdown-item'+(selected === 2 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(2)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo sao tăng dần</div>
                                <div className={'dropdown-item'+(selected === 3 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(3)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo giá giảm dần</div>
                                <div className={'dropdown-item'+(selected === 4 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(4)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo giá tăng dần</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="result-display">
                    {initialProduct.map(item => {
                        return <ProductItem key={item.id} productItem={item} />
                    })}
                </div>
                <Pagination index={parseInt(page)} lastIndex={6} linkAddress={"/search?CategoryID=123456&Page="} />
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
    {id: 7, image: "src/assets/images/homepage/po_image_1.jpg", title: "Nấm kim châm", unit: "Túi 200 gr", sold: 0, many: "có nhiều", price: "22.000đ", address: "Hồ Chí Minh"},
    {id: 8, image: "src/assets/images/homepage/po_image_2.jpg", title: "Muối bọt", unit: "Túi 1 kg", sold: 5, many: "có ít", price: "35.000đ", address: "Hồ Chí Minh"},
    {id: 9, image: "src/assets/images/homepage/po_image_3.jpg", title: "Hông giòn chín", unit: "Phần 500 gr", sold: 0, many: "có nhiều", price: "30.000đ", address: "Hồ Chí Minh"},
    {id: 10, image: "src/assets/images/homepage/po_image_4.jpg", title: "Soài cát chu - Loại 1", unit: "1 kg", sold: 10, many: "có ít", price: "65.000đ", address: "Hồ Chí Minh"},
    {id: 11, image: "src/assets/images/homepage/po_image_5.jpg", title: "Cải thìa", unit: "Bó 250 gr", sold: 0, many: "có nhiều", price: "15.000đ", address: "Hồ Chí Minh"},
    {id: 12, image: "src/assets/images/homepage/po_image_6.jpg", title: "Bánh cuộn trái cây (180gr)", unit: "1 túi", sold: 0, many: "có ít", price: "75.000đ", address: "Hồ Chí Minh"},
    {id: 13, image: "src/assets/images/homepage/po_image_1.jpg", title: "Nấm kim châm", unit: "Túi 200 gr", sold: 0, many: "có nhiều", price: "22.000đ", address: "Hồ Chí Minh"},
    {id: 14, image: "src/assets/images/homepage/po_image_2.jpg", title: "Muối bọt", unit: "Túi 1 kg", sold: 5, many: "có ít", price: "35.000đ", address: "Hồ Chí Minh"},
    {id: 15, image: "src/assets/images/homepage/po_image_3.jpg", title: "Hông giòn chín", unit: "Phần 500 gr", sold: 0, many: "có nhiều", price: "30.000đ", address: "Hồ Chí Minh"},
    {id: 16, image: "src/assets/images/homepage/po_image_4.jpg", title: "Soài cát chu - Loại 1", unit: "1 kg", sold: 10, many: "có ít", price: "65.000đ", address: "Hồ Chí Minh"},
    {id: 18, image: "src/assets/images/homepage/po_image_5.jpg", title: "Cải thìa", unit: "Bó 250 gr", sold: 0, many: "có nhiều", price: "15.000đ", address: "Hồ Chí Minh"},
    {id: 19, image: "src/assets/images/homepage/po_image_6.jpg", title: "Bánh cuộn trái cây (180gr)", unit: "1 túi", sold: 0, many: "có ít", price: "75.000đ", address: "Hồ Chí Minh"},
    {id: 20, image: "src/assets/images/homepage/po_image_1.jpg", title: "Nấm kim châm", unit: "Túi 200 gr", sold: 0, many: "có nhiều", price: "22.000đ", address: "Hồ Chí Minh"},
    {id: 21, image: "src/assets/images/homepage/po_image_2.jpg", title: "Muối bọt", unit: "Túi 1 kg", sold: 5, many: "có ít", price: "35.000đ", address: "Hồ Chí Minh"},
    {id: 22, image: "src/assets/images/homepage/po_image_3.jpg", title: "Hông giòn chín", unit: "Phần 500 gr", sold: 0, many: "có nhiều", price: "30.000đ", address: "Hồ Chí Minh"},
    {id: 23, image: "src/assets/images/homepage/po_image_4.jpg", title: "Soài cát chu - Loại 1", unit: "1 kg", sold: 10, many: "có ít", price: "65.000đ", address: "Hồ Chí Minh"},
    {id: 24, image: "src/assets/images/homepage/po_image_5.jpg", title: "Cải thìa", unit: "Bó 250 gr", sold: 0, many: "có nhiều", price: "15.000đ", address: "Hồ Chí Minh"},
    {id: 25, image: "src/assets/images/homepage/po_image_6.jpg", title: "Bánh cuộn trái cây (180gr)", unit: "1 túi", sold: 0, many: "có ít", price: "75.000đ", address: "Hồ Chí Minh"},
]

export default Result