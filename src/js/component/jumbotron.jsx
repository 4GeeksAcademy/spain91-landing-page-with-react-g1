// importar React
import React from "react";

// exportar y definir componente

export const Jumbotron = () => {
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-body-secondary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-1 fw-medium mb-2">A Warm Welcome!</h1>
                    <div className="contianer">
                    <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque ipsum, tincidunt at orci vel, dictum fringilla lectus. Suspendisse eleifend vitae sapien sit amet feugiat.</p>
                    </div>
                    <button className="btn btn-primary btn-lg" type="button">Call to Action</button>
                </div>
            </div>
        </div>
    )
}



