import "./SearchHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchHeader = () => {
  const [value, setVlaue] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="search-input-wrapper">
        <div className="content">
          <span className="me-1 search-icon" onClick={()=>navigate(`/search?q=${value.replace(" ", "%20")}&CategoryId=all`)}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input 
            placeholder="Tìm kiếm sản phẩm..." 
            autoComplete="off" 
            value={value}
            onChange={(e)=>setVlaue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
