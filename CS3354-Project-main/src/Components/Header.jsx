import "../Styling/Header.css";
import { homeRoute } from "../Data/routes";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiMenuAddFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { AppContext } from "../Data/AppProvider";
const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const { categories, amount, setCategories, setAmount } =
    useContext(AppContext);

  const addCategory = () => {
    let updatedCategories = [...categories];
    updatedCategories.push({ category: "", percentage: "" });
    setCategories(updatedCategories);
  };

  const deleteCategory = (index) => {
    console.log(categories);
    let updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    console.log(index);
    console.log(updatedCategories);
    setCategories(updatedCategories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <header>
      <section>
        {/*<!-- MAIN CONTAINER --> */}
        <div id="container">
          {/*<!-- SHOP NAME --> */}
          <div id="shopName">
            <Link to={homeRoute} className="webTitle">
              <b className="shopText">POCKET</b>
              <span className="siteText">PLAN</span>
            </Link>
          </div>
          {/*<!-- COLLECTIONS ON WEBSITE --> */}
          <div id="collection">
            <Link onClick={() => setShowForm(true)}>
              <BiEditAlt className="addedToCart" />
            </Link>
          </div>
        </div>
      </section>
      {showForm && (
        <div id="formContainer">
          <div id="formBox">
            <form id="form" onSubmit={handleSubmit}>
              <div id="formDiv">
                <h3 id="formLabel">Amount:</h3>
                <input
                  id="totalInput"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {categories.map((item, index) => (
                <div key={index} id="formDiv">
                  <div id="categoryDiv">
                    <h4>Category:</h4>
                    <input
                      id="formInput"
                      type="text"
                      value={item.category}
                      onChange={(e) => {
                        const updatedCategories = [...categories];
                        updatedCategories[index].category = e.target.value;
                        setCategories(updatedCategories);
                      }}
                    />
                  </div>
                  <div id="percentageDiv">
                    <h4>Percentage:</h4>
                    <input
                      id="formInput"
                      type="text"
                      value={item.percentage}
                      onChange={(e) => {
                        const updatedCategories = [...categories];
                        updatedCategories[index].percentage = e.target.value;
                        setCategories(updatedCategories);
                      }}
                    />
                  </div>
                  <div id="deleteButton">
                    <MdDelete onClick={() => deleteCategory(index)} />
                  </div>
                </div>
              ))}

              <div id="formDiv">
                <RiMenuAddFill
                  id="addIcon"
                  onClick={(e) => {
                    addCategory(e);
                  }}
                />
                <h3 id="addText">Add Category</h3>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button id="formButton" type="submit">
                  Save
                </button>
                <button
                  id="formButton"
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    backgroundColor: "#6B7280",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
