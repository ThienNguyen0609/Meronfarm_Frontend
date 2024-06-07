import './Filter.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Filter = () => {
    const [filterText, setFilterText] = useState("Tất cả");
    const [selected, setSelected] = useState(1);
    const [show, setShow] = useState(false);
    const findAll = () => {
        console.log("all")
    }
    const findGoodsAvailable = () => {
        console.log("available")
    }
    const findOutOfStock = () => {
        console.log("out of stock")
    }
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if(!e.target.closest(".second-filter") && !e.target.closest(".filter-dropdown")) {
                setShow(false)
            }
        })
    }, [])
    return (
        <>
        <div className="filter-wrapper">
            <div className="filter-inner">
                <div className="filter-content">
                    <div className='first-filter filter-css'><FontAwesomeIcon icon={faFilter} /><span>Lọc</span></div>
                    <div className='second-filter filter-css' onClick={()=>setShow(!show)}>
                        <span>{filterText}</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                        <div className={"filter-dropdown" + (show ? " active" : "")}>
                            <div className={"dropdown-item"+(selected === 1 ? " selected" : "")} onClick={(e)=>{
                                findAll()
                                setSelected(1)
                                setFilterText(e.target.innerHTML)
                            }}>Tất cả</div>
                            <div className={"dropdown-item"+(selected === 2 ? " selected" : "")} onClick={(e)=>{
                                findGoodsAvailable()
                                setSelected(2)
                                setFilterText(e.target.innerHTML)
                            }}>Có hàng</div>
                            <div className={"dropdown-item"+(selected === 3 ? " selected" : "")} onClick={(e)=>{
                                findOutOfStock()
                                setSelected(3)
                                setFilterText(e.target.innerHTML)
                            }}>Hết hàng</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Filter