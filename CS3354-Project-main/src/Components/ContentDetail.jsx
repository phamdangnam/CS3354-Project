import fetchDummyData from "../Data/fetchDummyData.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styling/ContentDetail.css";

const ContentDetail = () => {
  const { id: itemId } = useParams();
  const { items } = fetchDummyData();
  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when items change
    setIsLoading(true);

    // Use a timeout to ensure items are fully loaded
    const timer = setTimeout(() => {
      const foundItem = items.find((i) => i.id == itemId);

      if (foundItem) {
        setItem(foundItem);
        setImage(foundItem.preview);
        setIsLoading(false);
      } else {
        // Handle case where no item is found
        setIsLoading(false);
      }
    }, 100); // Small delay to allow data to populate

    // Cleanup function
    return () => clearTimeout(timer);
  }, [items, itemId]);

  // Render loading state if still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle case where no item was found
  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <div id="containerD">
      <div id="imageSection">
        <img id="imgDetails" src={image} alt={item.name} />
      </div>
      <div id="productDetails">
        <h1>{item.name}</h1>
        <div id="details">
          <h4>{item.brand}</h4>
          <h3>Rs {item.price}</h3>
          <h3>Description</h3>
          <p>{item.description}</p>
          <div id="productPreview">
            <h3>Product Preview</h3>
            {item.photos.map((photo, index) => (
              <img
                key={index}
                id="previewImg"
                src={photo}
                alt={`Preview ${index + 1}`}
                onClick={() => setImage(photo)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
