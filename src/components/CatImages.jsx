import React, { useState, useEffect } from "react";

function CatImages() {
  const [catImages, setCatImages] = useState([]);

  async function fetchCatImages() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data = await response.json();
      setCatImages(data);
    } catch (error) {
      console.error("Error fetching cat images:", error);
    }
  }

  useEffect(() => {
    fetchCatImages();
  }, []);

  function seHizoClick() {
    console.log("CLICKED");
  }

  return (
    <div className="cat-images" onClick={seHizoClick}>
      {catImages.map((catImage) => (
        <img
          key={catImage.id}
          src={catImage.url}
          alt={`Cat ${catImage.id}`}
          width={catImage.width}
          height={catImage.height}
        />
      ))}
    </div>
  );
}

export default CatImages;
