import "./AdminPage.scss"

import UserManage from "./UserManage/UserManage"
import OrderManage from "./OrderManage/OrderManage"
import NotificationManage from "./NotificationManage/NotificationManage"

import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const AdminPage = () => {
    const { page } = useParams();
    const [currentPath, setCurrentPath] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if(page === "user_manage") {
            setCurrentPage(0);
            setCurrentPath("Quản lý tài khoảng")
        }
        else if(page === "order_manage") {
            setCurrentPage(1);
            setCurrentPath("Quản lý đơn hàng")
        }
        else {
            setCurrentPage(2);
            setCurrentPath("Quản lý thông báo")
        }
    }, [page])
    return (
        <>
        <div className="admin-page__wrapper">
            <div className="admin-page__header">
                <div className="admin-page__header-inner">
                    <NavLink to={"/admin/user_manage"} className="admin-page__header-item">Quản lý tài khoảng</NavLink>
                    <NavLink to={"/admin/order_manage"} className="admin-page__header-item">Quản lý đơn hàng</NavLink>
                    <NavLink to={"/admin/notification_manage"} className="admin-page__header-item">Quản lý thông báo</NavLink>
                </div>
            </div>
            <div className="admin-page__inner b-width">
                <div className="path-link">
                    <Link className="path-link-home" to={"/"}>Trang chủ</Link>
                    <FontAwesomeIcon className="path-icon" icon={faAngleDoubleRight} />
                    <span className="path-previous">Admin</span>
                    <FontAwesomeIcon className="path-icon" icon={faAngleDoubleRight} />
                    <span className="path-current">{currentPath}</span>
                </div>
                <div className="admin-page__content">
                    {currentPage === 0 && <UserManage />}
                    {currentPage === 1 && <OrderManage />}
                    {currentPage === 2 && <NotificationManage />}
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminPage