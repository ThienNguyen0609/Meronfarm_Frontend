import axios from '../configs/axios'

const getProduct = async (id) => {
    const response = await axios.get(`/Product/${id}`)
    return response
}

const addToCart = async (request) => {
    const response = await axios.post(`/ShoppingCart`, request)
    return response
}

const getProductCart = async (userId) => {
    const response = await axios.get(`/ShoppingCart/${userId}`)
    return response
}

const removeProductCart = async (id) => {
    const response = await axios.delete(`/ShoppingCart/${id}`)
    return response
}

const addAddress = async (request) => {
    const response = await axios.post(`/Address`, request)
    return response
}

export {
    getProduct,
    addToCart,
    getProductCart,
    removeProductCart,
    addAddress,
}