import './Address.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faEdit } from '@fortawesome/free-regular-svg-icons';
import { addresses } from '../../../context/address';

const Address = () => {
    return (
        <>
        <div className="profile-inner">
            <div className="profile-title">Danh sách địa chỉ</div>
            <div className="address-wrapper">
                <div className="address-inner">
                    <div className="addresses">
                        {addresses.map(item => {
                            return (
                            <div key={item.id} className={"address-item"+(item.default ? " address-item-default" : "")}>
                                <div className="address-item__inner">
                                    <div className="defauld-address-stick"></div>
                                    <div className="address-item__image">
                                        <FontAwesomeIcon icon={faHouseUser} />
                                    </div>
                                    <div className="address-item__content">
                                        <div className='user-info'><span className="user-name">{item.name}</span> <span className="phone-number">({item.phoneNumber})</span></div>
                                        <div className="user-address">{item.address}</div>
                                        <div className="action-status">
                                            <div className={"status as-item"+(item.default ? " default-color" : "")}><FontAwesomeIcon className='icon' icon={faCheckCircle} /><span>Mặc định</span></div>
                                            <div className="update as-item"><FontAwesomeIcon className='icon' icon={faEdit} /><span>Chỉnh sửa</span></div>
                                            <div className={"delete as-item"+(item.default ? " default-disabled" : "")}><FontAwesomeIcon className='icon' icon={faTrash} /><span>Xóa</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Address