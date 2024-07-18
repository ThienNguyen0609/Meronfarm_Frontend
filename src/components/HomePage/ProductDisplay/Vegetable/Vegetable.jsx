import "./Vegetable.scss";

import Product from "../../Product/Product";
import { Link } from "react-router-dom";
import { useGetProductByCategoryIdQuery } from "../../../../store/features/product/productApi";
import { useDispatch } from "react-redux";
import { setPathName } from "../../../../store/features/path/pathSlice";
import _ from "lodash";

const Vegetable = () => {
  const { data, error, isLoading } = useGetProductByCategoryIdQuery(2);
  const dispatch = useDispatch();

  return (
    <>
      {!error && !isLoading && data && !_.isEmpty(data) && (
        <div className="product-container">
          <div className="product-content">
            <div className="product-title">
              <h4 className="upper-text">Rau củ</h4>
              <Link className="link" to={"/search?CategoryId=2"} onClick={() => dispatch(setPathName("Rau củ"))}>
                Xem tất cả
              </Link>
            </div>
            <Product product={data.products} />
          </div>
        </div>
      )}
    </>
  );
};

export default Vegetable;
