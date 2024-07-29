import "./AddressDisplay.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faEdit } from '@fortawesome/free-regular-svg-icons';
import logo from '../../../../assets/images/product/HetHang/HetHang.png'
import _ from "lodash";
import { getSession } from "../../../../services/authenticationService";
import { useGetAddressBySearchParamsQuery } from "../../../../store/features/address/addressApi";
import Pagination from "../../../Pagination/Pagination";

const AddressDisplay = ({page}) => {
  const { data, error, isLoading } = useGetAddressBySearchParamsQuery({
    userId: getSession().data.id, 
    page: parseInt(page), 
    limit: 3
  })
  return (
    <>
      <div className="address-wrapper col-12">
        <div className="address-inner">
          {data && !_.isEmpty(data) && data.len > 0 ? (
          <>
          <div className="addresses"> 
            {data.addresses.map((item) => {
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
            lastIndex={Math.ceil(data.len / 3)} 
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
