import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_half from "../../assets/star_half.png";
import { ShopContext } from "../../Context/ShopContext";


   const ProductDisplay = (props) => {
   const {product} = props;
   const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="170px" />
          <img src={product.image} alt="" height="170px" />
          <img src={product.image} alt="" height="170px" />
          <img src={product.image} alt="" height="170px" />
        </div>

        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_half} alt="" height="20px" />
          <p>(300)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>

          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="productdisplay-right-button">
          <button onClick={()=>{addToCart(product.id)}} className="cart-btn">Add To Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>
        {/* <div className="productdisplay-right-button">
          <button>Add To Cart</button>
          <button>Buy Now</button>
        </div> */}
        <div className="productdisplay-right-category">
          <span>
            Category: <span>Men, T-Shirt</span>
          </span>
        </div>

        <div className="productdisplay-right-tags">
          <span>
            Tags: <span>Modern, Latest</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;