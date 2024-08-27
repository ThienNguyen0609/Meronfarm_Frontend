import "./ProductViewed.scss";

import { useSearchParams } from "react-router-dom";
import ViewedDisplay from "./ViewedDisplay/ViewedDisplay";

const ProductViewed = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("Page");
  return (
    <>
      <div className="profile-inner">
        <div className="profile-title">Sản phẩm đã xem</div>
        <ViewedDisplay page={page === null ? 1 : page} />
      </div>
    </>
  );
};

export default ProductViewed;
