import { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png";
import { FaCartPlus } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Cartify</p>
      </div>


      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        <FaBars />
      </div>


      <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
        <li
          onClick={() => {
            setMenu("home");
            setMobileMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : null}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
            setMobileMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>

        <li
          onClick={() => {
            setMenu("womens");
            setMobileMenu(false);
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/womens"
          >
            Women
          </Link>
          {menu === "womens" ? <hr /> : null}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
            setMobileMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <FaCartPlus size={26} />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;