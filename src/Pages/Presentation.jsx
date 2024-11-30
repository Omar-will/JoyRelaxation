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
        Originaire de la Martinique, Joy a grandi au cœur des paysages tropicaux enchanteurs, bercée par la richesse des traditions et l'énergie bienveillante de son île. Très jeune, elle s'est passionnée pour le bien-être et les soins corporels, inspirée par les pratiques ancestrales locales qui valorisent l'harmonie entre le corps et l'esprit.

        Après avoir suivi une formation complète en techniques de massage en Martinique, elle a ouvert deux salons de massage réputés sur l'île. Elle a perfectionné son art en mêlant des méthodes modernes aux savoirs traditionnels, offrant à sa clientèle des expériences uniques de relaxation et de revitalisation.

        Animée par l'envie de partager sa passion au-delà des frontières de son île natale, Joy a fait le choix audacieux de s’installer en métropole. Elle a choisi Dieppe pour y poser ses valises, séduite par son charme maritime et son ambiance chaleureuse. C'est ici qu'elle a ouvert son propre salon de massage, un espace dédié au bien-être et à la sérénité.

        Chaque soin qu’elle propose est une invitation au voyage, puisant dans ses racines antillaises et son expérience professionnelle pour offrir à ses clients des moments de détente inoubliables. Sa passion pour le massage ne se limite pas à une simple profession : pour elle, c'est un véritable art de vivre, un moyen d'accompagner chaque personne vers un équilibre et une paix intérieure.

        Venez découvrir son univers et laissez-vous emporter par des soins qui respirent l’exotisme et la douceur, tout en étant empreints d'une expertise reconnue.
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
