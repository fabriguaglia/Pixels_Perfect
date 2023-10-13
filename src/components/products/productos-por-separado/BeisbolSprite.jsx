import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="BEISBOL SPRITE"
            descripcion="Obra de Pixel de Beisbol"
            precio="$2.99"
            biografia="Un dibujo de píxeles de un jugador de béisbol en venta es una composición artística en la que se utiliza un conjunto de píxeles para representar a un jugador de béisbol. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes del béisbol, ofreciendo una representación única y distintiva de este apasionante deporte mediante la combinación de múltiples píxeles."
            imgg={ spritesImport.beisbol }/>
        </div>
    )
}