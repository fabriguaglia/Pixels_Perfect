import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="CHEMISTRY SPRITE"
            descripcion="Obra de Pixel de Chemistry"
            precio="$3.99"
            biografia="Un dibujo de píxeles de un químico en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un científico químico. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes de la ciencia, ofreciendo una representación única y distintiva de un profesional en el campo de la química, utilizando una técnica visual minimalista y creativa."
            imgg={ spritesImport.cientifico2 }/>
        </div>
    )
}