import './Voucher.scss';

import emptyVoucher from "../../../assets/images/empty/voucher_empty.png"

const Voucher = () => {
    return (
        <>
        <div className="profile-inner">
            <div className="profile-title">Voucher khuyến mãi</div>
            <div className="voucher-wrapper">
                <div className="empty mt-5">
                <img src={emptyVoucher} alt='empty' />
                <div className="empty-discription">
                    <span className='empty-title'>Không có voucher</span>
                    <span className='empty-text'>Hãy tìm thêm voucher để lưu vào đây và áp mã cho đơn hàng của bạn</span>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Voucher