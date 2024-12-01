import React, { useState } from 'react';
import '../Scss/LesLocaux.scss';  


const images = [
  { src: '../assets/images/image10.webp', alt: 'Salle 1' },
  { src: '../assets/images/image11.webp', alt: 'Salle 2' },
  { src: '../assets/images/image12.webp', alt: 'Salle 3' },
  { src: '../assets/images/image17.webp', alt: 'Salle 4' },
  { src: '../assets/images/local5.webp', alt: 'Salle 5' },
  { src: '../assets/images/local6.webp', alt: 'Salle 6' },
  { src: '../assets/images/local7.webp', alt: 'Salle 7' },
  { src: '../assets/images/local8.webp', alt: 'Salle 8' },
  { src: '../assets/images/local9.webp', alt: 'Salle 9' },
];

const LesLocaux = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="les-locaux">
      <h2>Nous vous accueillons dans notre salon situés à Dieppe :</h2>
      <div className="location-cards">
        <div className="card">
          <h3>Joy Studio Relaxation</h3>
          <p>2 rue du château d'eau, rue villette,76200 Dieppe</p>
          <p>Un cadre contemporain et chaleureux pour vous recevoir en toute tranquillité.</p>
        </div>
      </div>

      <h2>Notre Local en Images</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-card" onClick={() => openModal(index)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <span className="prev" onClick={prevImage}>&#10094;</span>
          <span className="next" onClick={nextImage}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default LesLocaux;
