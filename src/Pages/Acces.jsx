import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../Scss/Acces.scss';

const position = [49.9164, 1.0778];

const Acces = () => {
  return (
    <div className="acces-container">
      <h1>Accès au salon</h1>
      <div className="image-with-caption">
        <img src="../assets/images/local1.webp" alt="" className="captioned-image" />
        <div className="caption">Vu du site</div>
      </div>

      <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Salon<br />2 rue du château d'eau, rue villette,76200 Dieppe
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Acces;