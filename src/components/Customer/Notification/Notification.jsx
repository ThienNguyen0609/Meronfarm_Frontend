import './Notification.scss'

import logo from "../../../assets/images/avatar/hubtech-avatar.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { notification } from '../../../context/notification'
import { useSearchParams } from 'react-router-dom'
import Pagination from '../../Pagination/Pagination'

const Notification = () => {
    const [navIndex, setNavIndex] = useState(1);
    const [searchParams] = useSearchParams();
    const underlineRef = useRef();

    const page = searchParams.get('Page')

    const handleActiveNav = (event, index) => {
        setNavIndex(index)
        console.log(underlineRef.current.style )
        underlineRef.current.style.width = `${event.target.offsetWidth}`+'px'
        underlineRef.current.style.left = `${event.target.offsetLeft}`+'px';
    }
    return (
        <>
        <div className="profile-inner">
            <div className="profile-title">Thông báo của tôi</div>
            <div className="notification-wrapper">
                <div className="notification-inner">
                    <div className="notification-nav">
                        <div onClick={(e)=>handleActiveNav(e, 1)} className={"nav-item"+(navIndex === 1 ? " nav-item-active" : "")}>Thông báo chung</div>
                        <div onClick={(e)=>handleActiveNav(e, 2)} className={"nav-item"+(navIndex === 2 ? " nav-item-active" : "")}>Thông báo khuyến mãi</div>
                        <div onClick={(e)=>handleActiveNav(e, 3)} className={"nav-item"+(navIndex === 3 ? " nav-item-active" : "")}>Thông báo đơn hàng</div>
                        <div onClick={(e)=>handleActiveNav(e, 4)} className={"nav-item"+(navIndex === 4 ? " nav-item-active" : "")}>Thông báo hệ thống</div>
                        <div ref={underlineRef} className='nav-item-bd-bottom'></div>
                    </div>
                    <div className="notification-content">
                        {notification.map(item => {
                            return (
                            <div key={item.id} className="notification-item">
                                <div className="notification-item__avatar">
                                    <img src={logo} alt="avatar" />
                                </div>
                                <div className="notification-item__text">
                                    <div className='notification-item__text-top'><span>{item.name}</span> {item.text} <span>{item.productId}</span></div>
                                    <div className='notification-item__text-bot'>
                                        <div>Ngày nhận: {item.date}</div>
                                        <div className="status-action">
                                            {item.status && <div className="status"><FontAwesomeIcon className='status-icon' icon={faCheckCircle} /><span>Đã đọc</span></div>}
                                            <div className="action">Xóa</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    {notification.length >= 5 && (
                        <div className="notification-pagination">
                            <Pagination index={page ? parseInt(page) : 1} lastIndex={5} linkAddress={"/customer/notification?Category=all&Page="} />
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Notification