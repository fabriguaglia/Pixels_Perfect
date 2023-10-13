import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="PIRATA SPRITE"
            descripcion="Obra de Pixel de un Pirata"
            precio="$3.99"
            biografia="Un dibujo de píxeles de un pirata en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un intrépido corsario de los mares. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes de la temática pirata, ofreciendo una representación única y distintiva de un personaje de la era de la piratería mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.pirata }/>
        </div>
    )
}