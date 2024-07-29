import axios from "../configs/VNAPIaxios"

const getProvinces = async () => {
    return await axios.get("https://vapi.vnappmob.com/api/province/")
}

const getDistricts = async (provinceId) => {
    return await axios.get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
}

const getWards = async (districtId) => {
    return await axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
}

export {
    getProvinces,
    getDistricts,
    getWards
}