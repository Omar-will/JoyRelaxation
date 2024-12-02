import React, { useState, useEffect, useCallback, useMemo } from 'react';
import "../Scss/Home.scss";
import content from '../data/homeContent.json';


const LazyImage = ({ src, alt, className, lazy = true }) => (
  <img src={src} alt={alt} className={className} loading={lazy ? "lazy" : "eager"} />
);

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => content.osteopath.images, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); 
    return () => clearInterval(interval);
  }, [nextImage]);

  useEffect(() => {
    const img = new Image();
    img.src = '/assets/image1.webp'; 
  }, []);

  return (
    <div>
      <main>
        <section className="home-content">
          <LazyImage
            className="logo"
            src="/assets/images/joy.webp"
            alt="massage logo"
          />
          <div className="carrouselContainer">
            <div className="textContainer">
              <h1>{content.osteopath.name}</h1>
              
              <p>{content.osteopath.slogan}</p>
            </div>
            <button className="prevButton" onClick={prevImage}>❮</button>
            {images.map((src, index) => (
              <LazyImage
                key={index}
                className={`carrouselImg ${index === currentIndex ? 'active' : ''}`}
                src={src}
                alt={`Image ${index + 1}`}
                lazy={index !== currentIndex} 
              />
            ))}
            <button className="nextButton" onClick={nextImage}>❯</button>
          </div>
          <div className="triangle"></div>
          <div className="triangle2"></div>
        </section>
        <div className="imageTropical">
  <img src="/assets/images/image0.webp" alt="À propos de nous" />
  <div className="overlay">
    <h2 className="text-between">Présentation du Salon à Dieppe</h2>
    <div className="text-content">
      <p>{content.osteopath.address}</p>
      {content.osteopath.hours.map((hour, index) => (
        <p key={index}>{hour.days} de {hour.hours}</p>
      ))}
      <p>Coordonnées : 07 63 72 80 37</p>
    </div>
  </div>
</div>

        <div className="elfsight-app-74657303-7b24-45bd-aefc-0814ddc81f6e" data-elfsight-app-lazy></div>
      </main>
    </div>
  );
}

export default Home;
