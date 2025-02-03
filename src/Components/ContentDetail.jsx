import fetchDummyData from "../Data/fetchDummyData.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styling/ContentDetail.css";

const ContentDetail = () => {
  const { id: itemId } = useParams();
  const { items } = fetchDummyData();
  const [item, setItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Function to find the item and set states
    const loadData = async () => {
      const foundItem = items.find((i) => i.id == itemId);
      setItem(foundItem);
      if (foundItem) {
        setSelectedImage(foundItem.preview);
      }
    };

    // Check if items are available before calling loadData
    if (items.length > 0) {
      loadData();
    }
  }, [items, itemId]);

  return (
    <div id="containerD">
      <div id="imageSection">
        <img id="imgDetails" src={selectedImage} alt={item.name} />
      </div>
      <div id="productDetails">
        <h1>{item.name}</h1>
        <h4>{item.brand}</h4>
        <div id="details">
          <h3>Rs {item.price}</h3>
          <h3>Description</h3>
          <p>{item.description}</p>
        </div>
        {/* <div id="productPreview">
          <h3>Product Preview</h3>
          {item.photos.map((photo, index) => (
            <img
              key={index}
              id="previewImg"
              src={photo}
              alt={`Preview ${index + 1}`}
              onClick={() => setSelectedImage(photo)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ContentDetail;
