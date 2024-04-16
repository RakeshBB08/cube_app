// PhotoGrid.tsx
import React, { useState, useEffect } from "react";

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://api.unsplash.com/photos/random?count=9&client_id=Y_sJwyzEEsYloHpGAWFoNwOY5qqsSHlARs0kbgyHOLg");
        const data = await response.json();
        const photoUrls = data.map((photo: any) => photo.urls.small);
        setPhotos(photoUrls);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();

    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      {photos.map((photoUrl, index) => (
        <img
          key={index}
          src={photoUrl}
          alt={`Photo ${index + 1}`}
          className="w-full rounded-lg"
          style={{ aspectRatio: "1/1" }}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
