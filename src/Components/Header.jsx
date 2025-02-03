import "../Styling/Header.css";
import { FaCircleUser } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import {
  homeRoute,
  clothingRoute,
  accessoriesRoute,
  cartRoute,
} from "../Data/routes";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <section>
        {/*<!-- MAIN CONTAINER --> */}
        <div id="container">
          {/*<!-- SHOP NAME --> */}
          <div id="shopName">
            <Link to={homeRoute} className="webTitle">
              <b className="shopText">SHOP</b>
              <span className="siteText">SITE </span>
            </Link>
          </div>
          {/*<!-- COLLECTIONS ON WEBSITE --> */}
          <div id="collection">
            <div id="clothing">
              <Link to={clothingRoute} className="category">
                CLOTHING
              </Link>
            </div>
            <div id="accessories">
              <Link to={accessoriesRoute} className="category">
                ACCESSORIES
              </Link>
            </div>
          </div>
          {/*<!-- SEARCH SECTION --> */}
          <div id="search">
            <FaSearch className="search" />
            <input
              type="text"
              id="input"
              name="searchBox"
              placeholder="Search for Clothing and Accessories"
            ></input>
          </div>
          {/*<!-- USER SECTION --> */}
          <div id="user">
            <Link to={cartRoute}>
              <HiMiniShoppingCart className="addedToCart" />
            </Link>
            <Link to="/">
              <FaCircleUser className="userIcon" />{" "}
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
