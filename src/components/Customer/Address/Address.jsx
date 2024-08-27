import './Address.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import CreateAddrModal from './CreateAddrModal/CreateAddrModal';
import AddressDisplay from './AddressDisplay/AddressDisplay';

const Address = () => {
    const [isShow, setIsShow] = useState(false);
    const [searchParams] = useSearchParams();
    const page = searchParams.get("Page");
    return (
        <>
        <div className="profile-inner ap-inner">
            <div className="profile-title ap-title">Danh sách địa chỉ</div>
            <button className='addr-btn' onClick={()=>setIsShow(true)}>
                <FontAwesomeIcon icon={faPlus} /> Thêm mới
            </button>
            <CreateAddrModal show={isShow} setIsShow={setIsShow} />
            <AddressDisplay page={page === null ? 1 : page} />
        </div>
        </>
    )
}

export default Address