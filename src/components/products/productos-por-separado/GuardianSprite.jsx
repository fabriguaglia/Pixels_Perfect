import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="GUARDIAN SPRITE"
            descripcion="Obra de Pixel de Guardian"
            precio="$3.99"
            biografia="Un dibujo de píxeles de un guardián en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un protector o vigilante. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes de la fantasía, ofreciendo una representación única y distintiva de un guardián a través de una técnica visual minimalista y creativa."
            imgg={ spritesImport.guardian }/>
        </div>
    )
}