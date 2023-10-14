import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="GOLF SPRITE"
            descripcion="Obra de Pixel de Golf"
            precio="$2.99"
            biografia="Un dibujo de píxeles de un jugador de golf en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un golfista. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes del golf, ofreciendo una representación única y distintiva de un jugador de golf mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.golf }/>
        </div>
    )
}