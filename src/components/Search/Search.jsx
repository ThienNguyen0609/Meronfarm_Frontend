import "./Search.scss";

import Filter from "./Filter/Filter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";
import Result from "./Result/Result";
import Category from "./Category/Category";
import { useSelector } from "react-redux";

const Search = () => {
  const { pathName } = useSelector(state => state.path)
  const [searchParams] = useSearchParams();
  const page = searchParams.get("Page");
  const categoryId = searchParams.get("CategoryId");
  const sort = searchParams.get("Sort");
  const stock = searchParams.get("Stock")
  return (
    <>
      <div className="search-wrapper">
        <Filter categoryId={categoryId} sort={sort} />
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
              <span className="path-current">{pathName}</span>
            </div>
            <Category categoryId={categoryId} />
            <Result 
              page={page === null ? 1 : page} 
              categoryId={categoryId} 
              sort={sort}
              stock={stock}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
