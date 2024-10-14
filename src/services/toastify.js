import store from "../store/store";
import { setToast } from "../store/features/toastify/toastifySlice";

const toastify = (type, message) => {
    const toast = {
        isShow: type !== null && message !== null ? true : false,
        type: type,
        message: message
    }
    store.dispatch(setToast(toast))
}

export {
    toastify
}