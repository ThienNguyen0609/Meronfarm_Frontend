import _ from "lodash"
import axios from "../configs/axios"

// API

const userCheckEmailOrPhoneNumber = async (request) => {
    const response = await axios.post("/check_user", request);
    return response
}

const userLogin = async (request) => {
    const response = await axios.post("/login", request);
    return response
}

const userRegister = async (request) => {
    const response = await axios.post("/register", request);
    return response
}

// service

const checkSession = () => {
    const session = JSON.parse(localStorage.getItem("account"))
    if(session && !_.isEmpty(session) && session.isAuthenticated) 
        return true;
    return false;
}

const setSession = (isAuthenticated, accessToken, dataRes) => {
    let data = {
        isAuthenticated: isAuthenticated,
        token: accessToken,
        data: dataRes
    }
    localStorage.setItem("account", JSON.stringify(data));
}

const getSession = () => {
    return JSON.parse(localStorage.getItem("account"))
}

const getUserIdSession = () => {
    const session = JSON.parse(localStorage.getItem("account"))
    return session.data.id
}

const checkAuthority = () => {
    const session = JSON.parse(localStorage.getItem("account"))
    if(session.data.roleId === 2) return true
    return false
}

export {
    userCheckEmailOrPhoneNumber,
    userLogin,
    userRegister,
    checkSession,
    setSession,
    getSession,
    getUserIdSession,
    checkAuthority
}