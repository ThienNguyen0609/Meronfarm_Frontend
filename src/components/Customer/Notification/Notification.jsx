import './Notification.scss'

import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import NotificationDisplay from './NotificationDisplay/NotificationDisplay';

const Notification = () => {
    const [navIndex, setNavIndex] = useState(1);
    const [searchParams] = useSearchParams();
    const underlineRef = useRef();

    const page = searchParams.get('Page')

    const handleActiveNav = (event, index) => {
        setNavIndex(index)
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
                        <NotificationDisplay page={page === null ? 1 : page} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Notification