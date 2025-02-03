import fetchDummyData from "../Data/fetchDummyData.js";
import "../Styling/Content.css";
import { contentDetailsRoute } from "../Data/routes.js";
import { Link } from "react-router-dom";

const Accessories = () => {
  const { accessories } = fetchDummyData();
  return (
    <div id="mainContainer">
      <h1> accessories for men and women </h1>
      <div id="containerAccessories">
        {accessories.map((item) => (
          <>
            <div id="box">
              <Link to={contentDetailsRoute + item.id}>
                <img src={item.preview}></img>
                <div id="details">
                  <h3>{item.name}</h3>
                  <h4>{item.brand}</h4>
                  <h2>{"$" + item.price}</h2>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
