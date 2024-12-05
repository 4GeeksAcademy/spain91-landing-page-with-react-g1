// 1. Importar
import React from "react";
import PropTypes from "prop-types";

// 2 y 5. Crear componente y exportar
export const Cards = ({ cardsData }) => {
 //3. Codigo JS
  //4. Return
  return (
    <div className="container mt-4">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{
                  objectFit: "cover",
                  height: "300px", // Ajusta la altura de la imagen
                  width: "100%",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text mb-1">
                  <strong>Nombre:</strong> {card.Nombre}
                </p>
                <p className="card-text mb-1">
                  <strong>Mail:</strong> {card.Mail}
                </p>
                <a
                  className="btn btn-primary mt-auto"
                >
                  {card.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// definicion Props
Cards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      Nombre: PropTypes.string.isRequired, // Validación del campo Nombre
      Mail: PropTypes.string.isRequired,  // Validación del campo Mail
      buttonText: PropTypes.string.isRequired,
    })
  ).isRequired,
};


// 6. En el padre se importa componente

// 7. En el padre se utiliza componente