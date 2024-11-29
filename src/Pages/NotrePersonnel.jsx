import React from 'react';
import '../Scss/NotrePersonnel.scss'; 
import doctorsData from '../data/doctors.json'; 

function NotrePersonnel() {
  const doctors = doctorsData.doctors;

  return (
    <div className="notre-personnel"  >
      <h2>Les Prestations</h2>
      <div className="doctors-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            {doctor.image && (
              <img
                src={doctor.image}
                alt={`Portrait de ${doctor.name}`}
                className="doctor-image"
              />
            )}
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <h4>{doctor.specialty}</h4>
              <p>{doctor.bio}</p>
              <p>{doctor.additionalBio}</p>
              <p>{doctor.additionalBio2}</p>
              <p>{doctor.additionalBio3}</p>
              <p>{doctor.additionalBio4}</p>

              {doctor.formations && doctor.formations.length > 0 && (
                <>
                  <h5>Formations</h5>
                  <ul>
                    {doctor.formations.map((formation, idx) => (
                      <li key={idx}>{formation}</li>
                    ))}
                  </ul>
                </>
              )}

              {doctor.experiences && doctor.experiences.length > 0 && (
                <>
                  <h5>Expériences</h5>
                  <ul>
                    {doctor.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </>
              )}

              {doctor.associations && (
                <>
                  <h5>Associations</h5>
                  <p>{doctor.associations}</p>
                </>
              )}

              {doctor.publications && doctor.publications.length > 0 && (
                <>
                  <h5>Travaux et Publications</h5>
                  <ul>
                    {doctor.publications.map((publication, idx) => (
                      <li key={idx}>{publication}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotrePersonnel;
