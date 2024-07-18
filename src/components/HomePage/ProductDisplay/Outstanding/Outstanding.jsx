import "./Outstanding.scss";

import Product from "../../Product/Product";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../../../../store/features/product/productApi";
import { useDispatch } from "react-redux";
import { setPathName } from "../../../../store/features/path/pathSlice";
import _ from "lodash";

const Outstanding = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const dispatch = useDispatch();

  return (
    <>
      {!error && !isLoading && data && !_.isEmpty(data) && (
        <div className="product-container">
          <div className="product-content">
            <div className="product-title">
              <h4 className="upper-text">Sản phẩm nổi bật</h4>
              <Link className="link" to={"/search?CategoryId=all"} onClick={() => dispatch(setPathName("Tất cả"))}>Xem tất cả</Link>
            </div>
            <Product product={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Outstanding;
