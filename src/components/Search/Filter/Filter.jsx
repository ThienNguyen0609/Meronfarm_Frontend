import './Filter.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Filter = ({categoryId, sort}) => {
    const [filterText, setFilterText] = useState("Tất cả");
    const [selected, setSelected] = useState(1);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const filterNavigate = (Stock) => {
        navigate(`/search?CategoryId=${categoryId}${sort !== null ? `&Sort=${sort}` : ""}&Stock=${Stock}`)
    }
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if(!e.target.closest(".second-filter") && !e.target.closest(".filter-dropdown")) {
                setShow(false)
            }
        })
    }, [])
    useEffect(() => {
        setFilterText("Tất cả");
        setSelected(1);
    }, [categoryId])
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
                                setSelected(1)
                                setFilterText(e.target.innerHTML)
                                filterNavigate("all")
                            }}>Tất cả</div>
                            <div className={"dropdown-item"+(selected === 2 ? " selected" : "")} onClick={(e)=>{
                                setSelected(2)
                                setFilterText(e.target.innerHTML)
                                filterNavigate(1)
                            }}>Có hàng</div>
                            <div className={"dropdown-item"+(selected === 3 ? " selected" : "")} onClick={(e)=>{
                                setSelected(3)
                                setFilterText(e.target.innerHTML)
                                filterNavigate(2)
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