import "./FavouriteDisplay.scss";

import OutOfStockLogo from "../../../../assets/images/empty/product_empty.png";
import ProductItem from "../../../HomePage/ProductItem/ProductItem";
import Pagination from "../../../Pagination/Pagination";
import { useGetFavouriteBySearchParamsQuery } from "../../../../store/features/meronfarm/meronfarmApi";
import { getUserIdSession } from "../../../../services/authenticationService";
import _ from "lodash";

const FavouriteDisplay = ({ page }) => {
  const { data: favourites, error, isLoading } = useGetFavouriteBySearchParamsQuery({
    userId: getUserIdSession(),
    page: parseInt(page),
    limit: 8,
  });
  return (
    <>
      <div className="favourite-wrapper">
        <div className="favourite-inner">
          {!error && !isLoading && favourites && !_.isEmpty(favourites) && favourites.len > 0 ? (
            <>
              <div className="favourite">
                {favourites.favourites.map((item) => {
                  return (
                    <ProductItem
                      key={item.id}
                      productItem={item.product}
                      classItem={"c-item"}
                      isFavor={true}
                    />
                  );
                })}
              </div>
              <Pagination
                index={parseInt(page)}
                lastIndex={Math.ceil(favourites.len / 8)}
                linkAddress={`/customer/favorite-products?Page=`}
              />
            </>
          ) : (
            <div className="empty mt-5">
              <img src={OutOfStockLogo} alt="empty" />
              <div className="empty-discription">
                <span className="empty-title">Bạn chưa thích sản phẩm nào</span>
                <span className="empty-text">
                  Hãy lựa chọn sản phẩm bạn yêu thích khi mua sắm để xem lại thuận tiện nhất
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavouriteDisplay;
