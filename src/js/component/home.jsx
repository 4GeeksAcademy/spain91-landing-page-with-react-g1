import React from "react";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";

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
    <div style={{ height: "70px" }}><Navbar/></div>

    <div style={{ height: "350px" }}><Jumbotron/></div>
    <Cards cardsData={cardsData} />
    <Footer />
  </div>
);


export default Home;
