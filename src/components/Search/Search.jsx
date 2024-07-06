import "./Search.scss";

import Filter from "./Filter/Filter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";
import Result from "./Result/Result";
import Category from "./Category/Category";

const Search = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("Page");
  return (
    <>
      <div className="search-wrapper">
        <Filter />
        <div className="search-inner b-width">
          <div className="search-content">
            <div className="path-link">
              <Link className="path-link-home" to={"/"}>
                Trang chủ
              </Link>
              <FontAwesomeIcon
                className="path-icon"
                icon={faAngleDoubleRight}
              />
              <span className="path-current">Trái cây</span>
            </div>
            <Category />
            <Result page={page === null ? 1 : page} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
