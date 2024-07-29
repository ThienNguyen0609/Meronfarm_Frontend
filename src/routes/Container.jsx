import { Outlet } from "react-router-dom"
import Toastify from "../components/Toastify/Toastify"

const Container = () => {
    return (
        <>
        <Toastify />
        <Outlet />
        </>
    )
}

export default Container