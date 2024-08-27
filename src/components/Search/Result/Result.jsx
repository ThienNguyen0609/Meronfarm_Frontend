import './Result.scss'

import ProductItem from '../../HomePage/ProductItem/ProductItem'
import Pagination from '../../Pagination/Pagination'
import OutOfStockLogo from '../../../assets/images/empty/product_empty.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useGetProductBySearchParamsQuery } from '../../../store/features/product/productApi'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const Result = ({search, page, categoryId, sort, stock}) => {
    const { data, error, isLoading } = useGetProductBySearchParamsQuery({
        search: search,
        categoryId: categoryId, 
        page: parseInt(page), 
        sort: sort === null ? "DEC_QUANTITYSOLD" : sort,
        stock: parseInt(stock === "all" || stock === null ? 0 : stock)
    })
    const [optSelected, setOptSelected] = useState("Sắp xếp theo số lượng bán giảm dần")
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
    useEffect(() => {
        setOptSelected("Sắp xếp theo số lượng bán giảm dần")
        setSelected(1)
    }, [categoryId])
    return (
        <>
        {!error && !isLoading && data && !_.isEmpty(data) && (
        <div className="result-wrapper">
            <div className="result-inner">
                <div className="header">
                    <div className="text">
                        <p className='title'>Tất cả danh mục</p>
                        <p className='quantity'>Kết quả {data.len} sản phẩm</p>
                    </div>
                    <div className="order">
                        <div className={"order-select"+(target ? " order-select-target" : "")} 
                            onClick={()=>{
                                setTarget(!target)
                                setActive(!active)
                            }}
                        >
                            <span>{optSelected}</span>
                            <span style={{marginBottom: "5px"}}><FontAwesomeIcon icon={faSortDown} /></span>
                            <div className={"order-dropdown"+(active ? " active" : "")}>
                                <Link to={`/search?${search !== 0 ? `q=${search}&` : ""}CategoryId=${categoryId}&Sort=DEC_QUANTITYSOLD${stock !== null ? `&Stock=${stock}` : ""}`} className={'dropdown-item'+(selected === 1 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(1)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo số lượng bán giảm dần</Link>
                                <Link to={`/search?${search !== 0 ? `q=${search}&` : ""}CategoryId=${categoryId}&Sort=INC_QUANTITYSOLD${stock !== null ? `&Stock=${stock}` : ""}`} className={'dropdown-item'+(selected === 2 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(2)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo số lượng bán tăng dần</Link>
                                <Link to={`/search?${search !== 0 ? `q=${search}&` : ""}CategoryId=${categoryId}&Sort=DEC_PRICE${stock !== null ? `&Stock=${stock}` : ""}`} className={'dropdown-item'+(selected === 3 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(3)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo giá giảm dần</Link>
                                <Link to={`/search?${search !== 0 ? `q=${search}&` : ""}CategoryId=${categoryId}&Sort=INC_PRICE${stock !== null ? `&Stock=${stock}` : ""}`} className={'dropdown-item'+(selected === 4 ? " selected" : "")} 
                                onClick={(e)=>{
                                    setSelected(4)
                                    setOptSelected(e.target.innerHTML)
                                }}>Sắp xếp theo giá tăng dần</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {(data.status === 1 && data.len !== 0) ? (
                    <>
                    <div className="result-display">
                        {data.products.map(item => {
                            return <ProductItem key={item.id} productItem={item} classItem={"p-item"} isFavor={false} />
                        })}
                    </div>
                    <Pagination index={parseInt(page)} lastIndex={Math.ceil(data.len / 10)} linkAddress={`/search?${search !== 0 ? `q=${search}&` : ""}CategoryId=${categoryId}${sort !== null ? `&Sort=${sort}` : ""}${stock !== null ? `&Stock=${stock}` : ""}&Page=`} />
                    </>
                ) : (
                    <div className='empty'>
                        <img src={OutOfStockLogo} alt='empty' />
                        <div className="empty-discription">
                            <span className='empty-title'>Không tìm thấy sản phẩm</span>
                            <span className='empty-text'>Sản phẩm bạn đang tìm hiện không tồn tại, hãy thử lại với các từ khóa khác</span>
                        </div>
                    </div>
                )}
            </div>
        </div>)
        }
        </>
    )
}

export default Result