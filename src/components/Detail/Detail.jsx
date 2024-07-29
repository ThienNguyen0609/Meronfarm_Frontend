import "./Detail.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../../services/meronfarmService";
import InfoDetail from "./InfoDetail/InfoDetail";
import _ from "lodash";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState({})
  const id = searchParams.get("id");
  useEffect(() => {
    const handleGetProduct = async (id) => {
      const response = await getProduct(id);
      if(response.status) setProduct(response.products[0])
    }

    handleGetProduct(id)
  }, [id])
  return (
    <>
      <div className="detail-wrapper">
        <div className="detail-inner b-width">
          <div className="path-link">
            <Link className="path-link-home" to={"/"}>
              Trang chủ
            </Link>
            <FontAwesomeIcon className="path-icon" icon={faAngleDoubleRight} />
            <span className="path-current">Chi tiết</span>
          </div>
          {product && !_.isEmpty(product) && <InfoDetail product={product} />}
        </div>
      </div>
    </>
  );
};

export default Detail;
