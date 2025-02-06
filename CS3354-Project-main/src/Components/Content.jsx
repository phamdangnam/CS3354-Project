import { Link } from "react-router-dom";
import "../Styling/Content.css";
import { contentDetailsRoute } from "../Data/routes.js";
import { useEffect, useState } from "react";
import fetchDummyData from "../Data/fetchDummyData.js";
import PieChart from "./PieChart.jsx";
import axios from "axios";
import { AppContext } from "../Data/AppProvider";
import { useContext } from "react";

const Content = () => {
  const { accessories } = fetchDummyData();
  const [img, setImg] = useState("");
  const { categories, amount, setCategories, setAmount } =
    useContext(AppContext);

  useEffect(() => {
    const getImages = async () => {
      try {
        if (img) return;
        const { data } = await axios.get(
          "https://api.unsplash.com/search/photos?query=books&page=1&per_page=1&client_id=49D1vP6L1n7jL05-rpMXMONwlT_zL-bABOG84zdE_1g"
        );
        const { results } = data;
        const firstSearch = results[0];
        setImg(firstSearch.urls.full);
      } catch (error) {
        console.log(error);
      }
    };

    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="mainContainer">
      <div id="containerClothing">
        <div id="chart">
          <PieChart></PieChart>
          <h1>You are doing awesome!!</h1>
        </div>
        <div id="containerAccessories">
          {categories.map((e) => (
            <>
              <div id="box">
                <Link to={contentDetailsRoute + e.id}>
                  <img src={img}></img>
                  <div id="details">
                    <h3>{e.category}</h3>
                    <h4>{e.percentage + "%"}</h4>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
