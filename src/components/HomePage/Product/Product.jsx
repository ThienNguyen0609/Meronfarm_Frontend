import "./Product.scss";

import ProductItem from "../ProductItem/ProductItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

const Product = ({product}) => {
  const listRef = useRef();
  const [position, setPosition] = useState(0);
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(true);

  const handleScrollToEnd = () => {
    const scrollWidth = listRef.current.scrollWidth;
    const offsetWidth = listRef.current.offsetWidth;
    listRef.current.scrollLeft += offsetWidth;
    setPosition((position) =>
      position >= scrollWidth - offsetWidth ? position : position + offsetWidth
    );
  };
  const handleScrollToStart = () => {
    const offsetWidth = listRef.current.offsetWidth;
    listRef.current.scrollLeft -= offsetWidth;
    setPosition((position) =>
      position <= 0 ? 0 : position - offsetWidth < 0 ? 0 : position - offsetWidth
    );
  };
  useEffect(() => {
    if (listRef.current) {
      const scrollWidth = listRef.current.scrollWidth;
      const offsetWidth = listRef.current.offsetWidth;
      position >= scrollWidth - offsetWidth
        ? setArrowRight(false)
        : setArrowRight(true);
    }
    position <= 0 ? setArrowLeft(false) : setArrowLeft(true);
  }, [position]);
  return (
    <>
      <div className="product-wrapper">
        {arrowLeft && (
          <div
            className="ar-icon ar-left"
            onClick={() => handleScrollToStart()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        )}
        <div className="product-list" ref={listRef}>
          {product.map(item => {
            return (
                <ProductItem key={item.id} productItem={item} classItem={"p-item"} isFavor={false} />
            )
          })}
        </div>
        {arrowRight && (
          <div className="ar-icon ar-right" onClick={() => handleScrollToEnd()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
