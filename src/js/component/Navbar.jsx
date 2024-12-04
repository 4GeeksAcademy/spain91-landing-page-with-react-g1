import React from "react";

export const Navbar = () => {

    return (

        <nav className="navbar navbar-dark bg-dark">

            <div className="container-fluid">

                <a class="navbar-brand" href="#">Start Bootstrap</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse d-flex" id="navbarScroll">

                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">

                        <li className="nav-item">

                            <a className="nav-link active" aria-current="page" href="#">Home</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">About</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">Services</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">Contact</a>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    )

}