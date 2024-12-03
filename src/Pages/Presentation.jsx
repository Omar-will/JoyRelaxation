import React from "react";
import "../Scss/Presentation.scss"; // Ajoute un fichier CSS spécifique pour cette page

const PresentationPage = () => {
  return (
    <div className="presentation-page">
      <header className="header-section">
        <h1>Bienvenue chez Studio Joy Relaxation</h1>
        <p>Découvrez nos services exceptionnels et notre engagement envers vous.</p>
      </header>

      <section className="about-section">
  <div className="about-image-with-text">
    <img src="/assets/images/image8.webp" alt="À propos de nous" />
    <div className="text-overlay">
      <h2>À propos de Joy</h2>
      <p>
      Originaire des Antilles, Joy a grandi entourée de paysages tropicaux enchanteurs, imprégnée des traditions locales et de l'énergie bienveillante de son île. 
      
      Très jeune, elle s'est passionnée pour le bien-être et les soins corporels, inspirée par les pratiques ancestrales qui privilégient l'harmonie entre le corps et l'esprit. 
      
      En 2012, elle commence sa formation en techniques de massage et obtient son certificat d'aptitude. Dès lors, elle ouvre son premier salon de massage, qu'elle dirige avec succès jusqu'en 2016. 
      
      Forte de cette expérience, elle ouvre un deuxième salon, qu'elle gère de 2017 à 2019, dans les Antilles, en alliant méthodes modernes et savoirs traditionnels, afin d'offrir à sa clientèle des moments uniques de relaxation et de revitalisation.

      Désireuse de partager sa passion au-delà de son île natale, Joy décide de s'installer en métropole pour ouvrir son propre salon de massage, un lieu dédié au bien-être et à la sérénité. 
      
      Chaque soin qu’elle propose devient une invitation au voyage, alliant ses racines antillaises et son expertise pour offrir des moments de détente inoubliables. Pour Joy, le massage est bien plus qu'une profession, c'est un art de vivre, une voie vers l'équilibre et la paix intérieure. 
      
      Venez découvrir son univers et laissez-vous emporter par des soins empreints d’exotisme, de douceur et d’une expertise reconnue.
      </p>
    </div>
  </div>
</section>


      <section className="services-section">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Nos Massages</h3>
            <p>Laissez-vous transporter dans un univers de détente absolue avec nos massages variés. Chaque soin est conçu pour apaiser le corps et l'esprit, en mêlant douceur et expertise. Offrez-vous un moment de relaxation unique, pensé pour répondre à vos besoins.Via notre <a href="/notre-personnel-medical">page des prestations</a>.</p>
          </div>
          <div className="service-card">
            <h3>Nos Formules</h3>
            <p>Découvrez nos formules exclusives, idéales pour ceux qui recherchent une expérience complète. Que ce soit pour une pause bien-être ou un moment de soin express, nos formules allient plaisir et sérénité. Via notre <a href="/notre-personnel-medical">page des prestations</a>.</p>
          </div>
          <div className="service-card">
            <h3>Massages & Événements sur mesure</h3>
            <p>Envie d’un massage personnalisé ou d’une ambiance bien-être pour vos événements privés ? Nous créons des expériences adaptées à vos envies, avec une attention particulière portée aux détails pour un moment inoubliable. Via notre <a href="/notre-personnel-medical">page des prestations</a>.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contactez-nous</h2>
        <p>
          Pour plus d'informations ou pour toute question, n'hésitez pas à nous
          contacter via notre <a href="/contact">page de contact</a>.
        </p>
      </section>
    </div>
  );
};

export default PresentationPage;
