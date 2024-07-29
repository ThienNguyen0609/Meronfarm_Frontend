import './Toastify.scss'

import { useDispatch, useSelector } from 'react-redux'
import { useCreateToast } from '../../services/useHooks';
import { useRef } from 'react';

const Toastify = () => {
    const toastMessage = useSelector(state => state.toast);
    const toastRef = useRef(null);
    const dispatch = useDispatch();

    useCreateToast(toastMessage, toastRef, dispatch)
    return (
        <>
        <div ref={toastRef} className="toastify-wrapper">
        </div>
        </>
    )
}

export default Toastify