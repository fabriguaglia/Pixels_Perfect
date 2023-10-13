import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="FUTBOL SPRITE"
            descripcion="Obra de Pixel de Futbol"
            precio="$4.99"
            biografia="Un dibujo de píxeles de un jugador de fútbol en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un deportista destacado en el fútbol. Estas creaciones de arte pixelado son ideales para coleccionistas y fanáticos del fútbol, ofreciendo una representación única y distintiva de un jugador de fútbol mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.futbol }/>
        </div>
    )
}