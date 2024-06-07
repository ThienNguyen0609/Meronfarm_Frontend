import "./ProductItem.scss";

const ProductItem = ({ productItem }) => {
  return (
    <>
      <div className="product-item p-item">
        <div className="p-item-content">
          <div className="item-image">
            <img src={require(productItem.image)} alt={`image${productItem.id}`} />
          </div>
          <div className="item-content">
            <div className="item-title">
              <h6>{productItem.title}</h6>
            </div>
            <div className="item-content-inner">
              <div className="unit mb-1">{productItem.unit}</div>
              <div className="vote-sold mb-1">
                <div className="vote">5 sao</div>
                <div className="sold font-size-14">
                  Đã bán: {productItem.sold}
                </div>
              </div>
              <div className="quantity font-size-14 mb-1">
                Hiện có: <span>{productItem.many}</span>
              </div>
              <div className="price mb-1">{productItem.price}</div>
              <div className="address font-size-14 mb-1">
                {productItem.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
