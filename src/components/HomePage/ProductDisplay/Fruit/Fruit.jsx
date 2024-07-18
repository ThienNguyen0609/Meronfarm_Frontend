import "./Fruit.scss";

import Product from "../../Product/Product";
import { Link } from "react-router-dom";
import { useGetProductByCategoryIdQuery } from "../../../../store/features/product/productApi";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { setPathName } from "../../../../store/features/path/pathSlice";

const Fruit = () => {
  const { data, error, isLoading } = useGetProductByCategoryIdQuery(1);
  const dispatch = useDispatch();

  return (
    <>
      {!error && !isLoading && data && !_.isEmpty(data) && (
        <div className="product-container">
          <div className="product-content">
            <div className="product-title">
              <h4 className="upper-text">Trái cây</h4>
              <Link className="link" to={"/search?CategoryId=1"} onClick={() => dispatch(setPathName("Trái cây"))}>
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

export default Fruit;
