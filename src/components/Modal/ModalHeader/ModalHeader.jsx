import "./ModalHeader.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const ModalHeader = ({children, setIsShow}) => {
    return (
        <>
        <div className="meron-modal-header">
            <div className="modal-header__text">{children}</div>
            <div className="modal-header__icon" onClick={()=>setIsShow(false)}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
        </>
    )
}

export default ModalHeader