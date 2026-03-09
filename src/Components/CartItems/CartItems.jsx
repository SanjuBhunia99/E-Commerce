import React,{useContext} from 'react'
import './CartItems.css';
import remove_icon from "../../assets/remove_icon.png";
import { ShopContext } from "../../Context/ShopContext.jsx";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>$ {e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  height="25px"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>

          <div>
            <div className="cartitems-total-item">
              <p>MRP</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <p>Fees</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <h3>Total Amount</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button>Place order</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
