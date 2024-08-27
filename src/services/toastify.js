import { setToast } from "../store/features/toastify/toastifySlice";

const toastify = (isShow, type, message, dispatch) => {
    const toast = {
        isShow: isShow,
        type: type,
        message: message
    }
    dispatch(setToast(toast))
}

export {
    toastify
}