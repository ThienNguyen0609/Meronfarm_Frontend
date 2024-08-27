import "./NotificationDisplay.scss"

import logo from "../../../../assets/images/avatar/hubtech-avatar.jpg";
import NotificationEmpty from "../../../../assets/images/empty/notification_empty.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { getUserIdSession } from "../../../../services/authenticationService";
import { useGetNotificationsBySearchParamsQuery } from "../../../../store/features/meronfarm/meronfarmApi";
import _ from "lodash";
import Pagination from "../../../Pagination/Pagination";

const NotificationDisplay = ({page}) => {
  const { data: notifications, error, isLoading } = useGetNotificationsBySearchParamsQuery({
    userId: getUserIdSession(),
    page: parseInt(page),
    limit: 8,
  });
  return (
    <>
      {!error && !isLoading && !_.isEmpty(notifications.notifications) && notifications.len > 0 ? (
        <>
          <div className="meron-d-flex meron-t-body__display set-min-nheigth">
            {notifications.notifications.map((notification, index) => {
              return (
                <div key={notification.id} className="notification-item">
                  <div className="notification-item__avatar">
                    <img src={logo} alt="avatar" />
                  </div>
                  <div className="notification-item__text">
                    <div className="notification-item__text-top">
                      <span>MERONFARM</span> {notification.message}{" "}
                      <span>{notification.orderId}</span>
                    </div>
                    <div className="notification-item__text-bot">
                      <div>
                        Ngày nhận:{" "}
                        {new Date(notification.dateTime)
                          .toLocaleString("en-GB")
                          .replace(",", "")}
                      </div>
                      <div className="status-action">
                        {/* {item.status && <div className="status"><FontAwesomeIcon className='status-icon' icon={faCheckCircle} /><span>Đã đọc</span></div>} */}
                        <div className="status">
                          <FontAwesomeIcon
                            className="status-icon"
                            icon={faCheckCircle}
                          />
                          <span>Đã đọc</span>
                        </div>
                        <div className="action">Xóa</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            index={parseInt(page)}
            lastIndex={Math.ceil(notifications.len / 8)}
            linkAddress={`/admin/notification_manage?Page=`}
          />
        </>
      ) : (
        <div className="empty empty-cart">
          <img src={NotificationEmpty} alt="empty" />
          <div className="empty-discription">
            <span className="empty-title">
              Hiện không có thông báo về đặt hàng
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationDisplay;