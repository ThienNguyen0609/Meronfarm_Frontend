import "./SearchHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchHeader = () => {
  return (
    <>
      <div className="search-input-wrapper">
        <div className="content">
          <span className="me-1">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input placeholder="Tìm kiếm sản phẩm..." />
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
