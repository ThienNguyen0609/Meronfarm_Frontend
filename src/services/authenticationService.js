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

export {
    userCheckEmailOrPhoneNumber,
    userLogin,
    userRegister,
    checkSession,
    setSession
}