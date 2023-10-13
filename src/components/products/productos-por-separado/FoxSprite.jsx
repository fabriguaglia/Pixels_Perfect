import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function FoxSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="FOX SPRITE"
            descripcion="Obra de Pixel de Fox"
            precio="$4.99"
            biografia="Un dibujo de píxeles de un zorro en venta es una obra de arte que utiliza un conjunto de píxeles para representar a este astuto animal. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes de la naturaleza, ofreciendo una representación única y distintiva de un zorro mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.foxSprite }/>
        </div>
    )
}