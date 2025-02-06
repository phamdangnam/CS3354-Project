import { useState, useEffect } from "react";
import axios from "axios";

const fetchDummyData = () => {
  const [clothing, setClothings] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchDummyData = async () => {
      const response = await axios.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
      );
      setItems(response.data);
      setClothings(response.data.filter((item) => !item.isAccessory));
      setAccessories(response.data.filter((item) => item.isAccessory));
    };

    fetchDummyData();
  }, []);

  return { clothing, accessories, items };
};

export default fetchDummyData;
