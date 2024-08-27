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

const removeAddress = async (addressId) => {
    const response = await axios.delete(`/Address/${addressId}`)
    return response
}

const addFavouriteProduct = async (request) => {
    const response = await axios.post(`/Favourite`, request)
    return response
}

const addViewedProduct = async (request) => {
    const response = await axios.post(`/Viewed`, request)
    return response
}

const getFavouriteProduct = async (userId) => {
    const response = await axios.get(`/Favourite/${userId}`)
    return response
}

const createOrder = async (request) => {
    const response = await axios.post(`/Order`, request)
    return response
}

const updateOrder = async (orderId, request) => {
    const response = await axios.put(`/Order/${orderId}`, request)
    return response
}

const addOrderProducts = async (userId, request) => {
    const response = await axios.post(`/Order/OrderProducts/${userId}`, request)
    return response
}

const getAllUsers = async () => {
    const response = await axios.get(`/User`)
    return response
}

const addNotification = async (request) => {
    const response = await axios.post(`/Notification`, request)
    return response
}

export {
    getProduct,
    addToCart,
    getProductCart,
    removeProductCart,
    addAddress,
    removeAddress,
    addFavouriteProduct,
    getFavouriteProduct,
    addViewedProduct,
    createOrder,
    updateOrder,
    addOrderProducts,
    getAllUsers,
    addNotification
}