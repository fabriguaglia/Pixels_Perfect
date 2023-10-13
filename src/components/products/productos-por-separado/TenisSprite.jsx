import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="TENIS SPRITE"
            descripcion="Obra de Pixel de un Tenista"
            precio="$2.99"
            biografia="Un dibujo de píxeles de un tenista en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un jugador de tenis. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes del tenis, ofreciendo una representación única y distintiva de un tenista mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.tenis }/>
        </div>
    )
}