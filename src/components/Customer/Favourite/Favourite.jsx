import "./Favourite.scss";

import { useSearchParams } from "react-router-dom";
import FavouriteDisplay from "./FavouriteDisplay/FavouriteDisplay";

const Favourite = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("Page");
  return (
    <>
      <div className="profile-inner">
        <div className="profile-title">Sản phẩm yêu thích</div>
        <FavouriteDisplay page={page === null ? 1 : page} />
      </div>
    </>
  );
};

export default Favourite;
