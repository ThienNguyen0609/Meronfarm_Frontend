import "./AddressDisplay.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faEdit } from '@fortawesome/free-regular-svg-icons';
import logo from '../../../../assets/images/empty/product_empty.png'
import _ from "lodash";
import { getUserIdSession } from "../../../../services/authenticationService";
import { useGetAddressBySearchParamsQuery } from "../../../../store/features/meronfarm/meronfarmApi";
import Pagination from "../../../Pagination/Pagination";
import { removeAddress } from "../../../../services/meronfarmService";
import { toastify } from "../../../../services/toastify";
import { useDispatch } from "react-redux";

const AddressDisplay = ({page}) => {
  const { data: addresses, error, isLoading } = useGetAddressBySearchParamsQuery({
    userId: getUserIdSession(), 
    page: parseInt(page), 
    limit: 3
  })
  const dispatch = useDispatch();

  const handleDeleteAddress = async (addressId, isDefault) => {
    if(!isDefault) {
      const response = await removeAddress(addressId);
      if(response.status) toastify(true, "success", response.message, dispatch)
      else toastify(true, "error", response.message, dispatch)
    }
  }
  return (
    <>
      <div className="address-wrapper">
        <div className="address-inner">
          {!error && !isLoading && addresses && !_.isEmpty(addresses) && addresses.len > 0 ? (
          <>
          <div className="addresses"> 
            {addresses.addresses.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    "address-item" +
                    (item.isDefault ? " address-item-default" : "")
                  }
                >
                  <div className="address-item__inner">
                    <div className="defauld-address-stick"></div>
                    <div className="address-item__image">
                      <FontAwesomeIcon icon={faHouseUser} />
                    </div>
                    <div className="address-item__content">
                      <div className="user-info">
                        <span className="user-name">{item.user.name}</span>{" "}
                        <span className="phone-number">
                          ({item.user.phoneNumber})
                        </span>
                      </div>
                      <div className="user-address">{item.addr}</div>
                      <div className="action-status">
                        <div
                          className={
                            "status as-item" +
                            (item.isDefault ? " default-address" : "")
                          }
                        >
                          <FontAwesomeIcon
                            className="icon"
                            icon={faCheckCircle}
                          />
                          <span>Mặc định</span>
                        </div>
                        <div className="update as-item">
                          <FontAwesomeIcon className="icon" icon={faEdit} />
                          <span>Chỉnh sửa</span>
                        </div>
                        <div
                          className={
                            "delete as-item" +
                            (item.isDefault ? " default-disabled" : "")
                          }
                          onClick={() => handleDeleteAddress(item.id, item.isDefault)}
                        >
                          <FontAwesomeIcon className="icon" icon={faTrash} />
                          <span>Xóa</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination 
            index={parseInt(page)} 
            lastIndex={Math.ceil(addresses.len / 3)} 
            linkAddress={`/customer/addresses?Page=`} 
          />
          </>
          ) : (
            <div className="empty mt-5">
              <img src={logo} alt='empty' />
              <div className="empty-discription">
                <span className='empty-title'>Không tìm thấy địa chỉ</span>
                <span className='empty-text'>Hãy tạo mới địa chỉ</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddressDisplay;
