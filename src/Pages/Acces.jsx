import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../Scss/Acces.scss';

const position = [49.9164, 1.0778];

const Acces = () => {
  const photos = [
    {
      src: "/assets/images/image13.webp",
      alt: "Rue",
      caption: "Étape 1 : Prenez la Rue du Château d'Eau, Rue Villatte.",
    },
    {
      src: "/assets/images/image14.webp",
      alt: "Passage",
      caption: "Étape 2 : Rue Villatte.",
    },
    {
      src: "/assets/images/image15.webp",
      alt: "Entrée",
      caption: "Étape 3 : Suivez ce passage.",
    },
    {
      src: "/assets/images/image16.webp",
      alt: "Entrée",
      caption: "Étape 4 : Entrez par cette porte.",
    },
    {
      src: "/assets/images/image18.webp",
      alt: "Couloir",
      caption: "Étape 5 : Suivez le couloir pour arriver au salon.",
    },
  ];

  return (
    <div className="acces-container">
      <h1>Accès au salon</h1>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="image-with-caption">
            <img src={photo.src} alt={photo.alt} className="captioned-image" />
            <div className="caption">{photo.caption}</div>
          </div>
        ))}
      </div>

      <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Salon<br />2 Rue du Château d'Eau, Rue Villatte, 76200 Dieppe
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Acces;
