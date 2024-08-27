import "./ViewedDisplay.scss";

import OutOfStockLogo from "../../../../assets/images/empty/product_empty.png";
import ProductItem from "../../../HomePage/ProductItem/ProductItem";
import Pagination from "../../../Pagination/Pagination";
import { useGetProductViewedBySearchParamsQuery } from "../../../../store/features/meronfarm/meronfarmApi";
import { getUserIdSession } from "../../../../services/authenticationService";
import _ from "lodash";

const ViewedDisplay = ({ page }) => {
  const { data: productViewed, error, isLoading } = useGetProductViewedBySearchParamsQuery({
    userId: getUserIdSession(),
    page: parseInt(page),
    limit: 8,
  });
  return (
    <>
      <div className="viewed-wrapper">
        <div className="viewed-inner">
          {!error && !isLoading && productViewed && !_.isEmpty(productViewed) && productViewed.len > 0 ? (
            <>
              <div className="viewed">
                {productViewed.productVieweds.map((item) => {
                  return (
                    <ProductItem
                      key={item.id}
                      productItem={item.product}
                      classItem={"c-item"}
                      isFavor={false}
                    />
                  );
                })}
              </div>
              <Pagination
                index={parseInt(page)}
                lastIndex={Math.ceil(productViewed.len / 8)}
                linkAddress={`/customer/viewed-products?Page=`}
              />
            </>
          ) : (
            <div className="empty mt-5">
              <img src={OutOfStockLogo} alt="empty" />
              <div className="empty-discription">
                <span className="empty-title">Bạn chưa xem sản phẩm nào</span>
                <span className="empty-text">
                  Hãy lựa chọn sản phẩm khi mua sắm để xem lại thuận tiện nhất
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewedDisplay;
