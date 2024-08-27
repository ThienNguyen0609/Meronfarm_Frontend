import "./CartEmpty.scss"

import OutOfStockLogo from "../../../../assets/images/empty/product_empty.png"
import { Link } from "react-router-dom"

const CartEmpty = () => {
    return (
        <>
        <div className="empty empty-cart">
          <img src={OutOfStockLogo} alt="empty" />
          <div className="empty-discription">
            <span className="empty-title">Không có sản phẩm nào trong giỏ hàng</span>
            <span className="empty-text">
              Hãy chọn sản phẩm mà bạn muốn mua và thêm vào giỏ hàng
            </span>
          </div>
          <Link className="empty-btn" to={"/search?CategoryId=all"}>Mua hàng ngay</Link>
        </div>
        </>
    )
}

export default CartEmpty