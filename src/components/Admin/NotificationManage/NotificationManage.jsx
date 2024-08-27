// import "./NotificationManage.scss"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import NotificationManageDisplay from "./NMDisplay/NMDisplay";

const NotificationManage = () => {
    const [searchParams] = useSearchParams();

    const page = searchParams.get("Page");
    return (
        <>
        <div className="manage__wrapper">
            <div className="manage__inner">
                <NotificationManageDisplay 
                    page={page === null ? 1 : page} 
                />
            </div>
        </div>
        </>
    )
}

export default NotificationManage