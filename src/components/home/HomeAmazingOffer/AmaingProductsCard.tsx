import React, { useState } from "react";
import { Link } from "react-router-dom";
// icon
import { FaStar, AiFillHeart } from "../../../assets/icons/icons";
// style
import "./../../../styles/scss/home/amazingProducts/HomeAmazingOfferCard.scss";
// type
import { ProductsType } from "../../../assets/Types";
interface PropsType {
  product: ProductsType;
}
const AmaingProductsCard = ({ product }: PropsType) => {
  const [Like, setLike] = useState<boolean>(false);
  return (
    <div className="Home_AmazingProducts_Card card position-relative w-100 h-100 p-0 px-2">
      <span
        onClick={() => setLike(!Like)}
        className={`position-absolute Home_AmazingProducts_Card_Like_Btn rounded-circle d-flex align-items-center justify-content-center bg-light fs-4 CURSOR ${
          Like ? "text-danger" : "text-black"
        }`}
      >
        <AiFillHeart />
      </span>
      <div className="card-img-top position-relative overflow-hidden w-100 pb-2 pt-3">
        <img
          src={product.information.banner}
          className="Home_AmazingProducts_Card_Image w-100 h-100"
          alt="..."
        />
      </div>
      <div className="Home_AmazingProducts_Card_Body card-body position-relative p-0 m-0">
        <div className="Home_AmazingProducts_Card_Stars position-absolute">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h5 className="card-title text-black mt-4 CURSOR">
          <Link to={`/`} className="LINK">
            {product.PhoneLableFa}
          </Link>
        </h5>
      </div>
      {/* price box */}
      <div className="card-footer position-relative d-flex align-items-center justify-content-between h-auto py-2 px-1 mx-2">
        {product.information.discount && (
          <span className="Home_AmazingProducts_Card_productOff bg-danger text-light px-2 py-1 CDEFAULT">
            %{product.information.off}
          </span>
        )}
        <span className="Home_AmazingProducts_Card_Footer_Price text-primary CDEFAULT">
          {product.information.price?.toLocaleString()} تومان
        </span>
        <span
          id="HomeCardFooterShape"
          className="position-absolute bg-primary"
        ></span>
      </div>
      {/* price box when hover on card */}
      <div className="Home_AmazingProducts_Card_PriceBox_Hover d-flex align-items-center justify-content-between p-0 m-0">
        {product.information.discount && (
          <span className="Home_AmazingProducts_Card_productOff bg-danger text-light px-1 px-xl-2 py-0 py-xl-1 CDEFAULT">
            %{product.information.off}
          </span>
        )}
        <span className="Home_AmazingProducts_Card_Footer_Price text-primary CDEFAULT">
          {product.information.price?.toLocaleString()} تومان
        </span>
        <span
          id="HomeCardFooterShape"
          className="position-absolute bg-primary"
        ></span>
      </div>
      <Link
        to={`/products/${product.id}`}
        className="Home_AmazingProducts_Card_Footer_Btn d-block btn btn-primary w-100 p-1 m-0 mb-2 LINK"
      >
        دیدن جزئیات و خرید
      </Link>
    </div>
  );
};

export default AmaingProductsCard;
