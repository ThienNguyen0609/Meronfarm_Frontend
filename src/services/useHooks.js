import { useEffect } from 'react';
import { toastify } from './toastify';

const useCreateToast = (toastMessage, toastRef, dispatch) => {
    useEffect(() => {
        if (toastMessage.isShow) {
            const node = document.createElement("div");

            node.classList.add("toast-item")
            if (toastMessage.type === "success") node.classList.add("toast-success")
            else if (toastMessage.type === "warning") node.classList.add("toast-warning")
            else node.classList.add("toast-error")
            node.innerHTML = `${toastMessage.message}`
            toastRef.current.appendChild(node);

            setTimeout(() => {
                toastRef.current.removeChild(node)
            }, 5000)
            toastify(false, "", "", dispatch)
        }
    }, [toastMessage.isShow])
}

const useClickOutside = (setIsShow, className) => {
    useEffect(() => {
        const handleCloseModal = (e) => {
            if (!e.target.closest(className))
                setIsShow(false)
        }
        document.addEventListener("mousedown", handleCloseModal);
        return () => {
            document.removeEventListener("mousedown", handleCloseModal);
        };
    }, [])
}

const useCustomerPage = (service, setPathText, setPageIndex, setDivActive) => {
    useEffect(() => {
        switch (service) {
            case "information":
                setPathText("Thông tin tài khoản");
                setPageIndex(1);
                break;
            case "change-password":
                setPathText("Thay đổi mật khẩu");
                setPageIndex(2);
                break;
            case "notification":
                setPathText("Thông báo của tôi");
                setPageIndex(3);
                break;
            case "orders":
                setPathText("Quản lý đơn hàng");
                setPageIndex(4);
                break;
            case "addresses":
                setPathText("Sổ địa chỉ");
                setPageIndex(5);
                break;
            case "vouchers":
                setPathText("Voucher khuyến mãi");
                setPageIndex(6);
                break;
            case "viewed-products":
                setPathText("Sản phẩm đã xem");
                setPageIndex(7);
                setDivActive(true)
                break;
            case "favorite-products":
                setPathText("Sản phẩm yêu thích");
                setPageIndex(8);
                setDivActive(true)
                break;
        }
      }, [service])
}

const useRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export {
    useCreateToast,
    useClickOutside,
    useCustomerPage,
    useRandomString
}