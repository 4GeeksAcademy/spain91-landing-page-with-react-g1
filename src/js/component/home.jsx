import React from "react";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

const defaultCardsData = [
  {
    image: "https://randomuser.me/api/portraits/women/92.jpg",
    title: "Candidato 1",
    Nombre: "María García",
    Mail: "maria.garcia@example.com",
    buttonText: "Contactar",
  },
  {
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    title: "Candidato 2",
    Nombre: "Carlos López",
    Mail: "carlos.lopez@example.com",
    buttonText: "Contactar",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    title: "Candidato 3",
    Nombre: "Ana Torres",
    Mail: "ana.torres@example.com",
    buttonText: "Contactar",
  },
  {
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    title: "Candidato 4",
    Nombre: "Juan Pérez",
    Mail: "juan.perez@example.com",
    buttonText: "Contactar",
  },
];

const Home = ({ cardsData = defaultCardsData }) => (
  <div>
    <div style={{ height: "70px" }}></div> {/* Hueco para Navbar */}

    <div style={{ height: "300px" }}><Jumbotron/></div>
    <Cards cardsData={cardsData} />
    <Footer />
  </div>
);


export default Home;
