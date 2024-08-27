import AccountEmpty from "../../../../assets/images/empty/account_empty.png"
import _ from "lodash"
import { useGetUsersBySearchParamsQuery } from "../../../../store/features/meronfarm/meronfarmApi"
import Pagination from "../../../Pagination/Pagination"

const UserManageDisplay = ({page, searchString}) => {
    const { data: users, error, isLoading } = useGetUsersBySearchParamsQuery({
        page: parseInt(page),
        limit: 8,
        search: searchString
    })
    
    return (
        <>
        <div className="user-manage__table">
            <div className="meron-d-flex meron-t-header">
                <div className="meron-t-header__item meron-t__item meron-flex-1">STT</div>
                <div className="meron-t-header__item meron-t__item meron-flex-2">Tên Khách hàng</div>
                <div className="meron-t-header__item meron-t__item meron-flex-3">Email</div>
                <div className="meron-t-header__item meron-t__item meron-flex-1">Vai trò</div>
                <div className="meron-t-header__item meron-t__item meron-flex-1">Trạng thái</div>
            </div>
            <div className="meron-d-flex meron-t-body">
                {!error && !isLoading && !_.isEmpty(users.users) && users.len > 0 ? (<>
                    <div className="meron-d-flex meron-t-body__display">
                        {users.users.map((user, index) => {
                            return (
                                <div key={user.id} className="meron-t-body__item">
                                    <div className="meron-flex-1 meron-t__item">{index+1}</div>
                                    <div className="meron-flex-2 meron-t__item">{user.name}</div>
                                    <div className="meron-flex-3 meron-t__item">{user.email}</div>
                                    <div className="meron-flex-1 meron-t__item">{user.role.roleName}</div>
                                    <div className="meron-flex-1 meron-t__item">online</div>
                                </div>
                            )
                        })}
                    </div>
                    <Pagination 
                        index={parseInt(page)}
                        lastIndex={Math.ceil(users.len / 8)}
                        linkAddress={`/admin/user_manage?Page=`}
                    />
                </>) : (
                    <div className="empty empty-cart">
                        <img src={AccountEmpty} alt="empty" />
                        <div className="empty-discription">
                            <span className="empty-title">Không tìm thấy thông tin tài khoảng khách hàng</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default UserManageDisplay