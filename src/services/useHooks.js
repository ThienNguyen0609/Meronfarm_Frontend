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

const useClickOutside = (setIsShow) => {
    useEffect(() => {
        const handleCloseModal = (e) => {
            if (!e.target.closest(".meron-modal-content"))
                setIsShow(false)
        }
        document.addEventListener("mousedown", handleCloseModal);
        return () => {
            document.removeEventListener("mousedown", handleCloseModal);
        };
    }, [])
}

export {
    useCreateToast,
    useClickOutside
}