import "./Drink.scss";

import Product from "../../Product/Product";
import { Link } from "react-router-dom";
import { useGetProductByCategoryIdQuery } from "../../../../store/features/product/productApi";
import { useDispatch } from "react-redux";
import { setPathName } from "../../../../store/features/path/pathSlice";
import _ from "lodash";

const Drink = () => {
  const { data, error, isLoading } = useGetProductByCategoryIdQuery(5);
  const dispatch = useDispatch();

  return (
    <>
      {!error && !isLoading && data && !_.isEmpty(data) && (
        <div className="product-container">
          <div className="product-content">
            <div className="product-title">
              <h4 className="upper-text">Đồ uống</h4>
              <Link className="link" to={"/search?CategoryId=5"} onClick={() => dispatch(setPathName("Đồ uống"))}>
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

export default Drink;
