import './Body.scss'

import { Outlet } from "react-router-dom"

const Body = () => {
    return (
        <>
        <div className="body-wrapper">
            <Outlet />
        </div>
        </>
    )
}

export default Body