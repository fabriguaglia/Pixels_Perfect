import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="MONO SPRITE"
            descripcion="Obra de Pixel de un Mono"
            precio="$4.99"
            biografia="Un dibujo de píxeles de un mono en venta es una obra de arte que utiliza un conjunto de píxeles para representar a este simpático animal. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes de la naturaleza, ofreciendo una representación única y distintiva de un mono mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.mono }/>
        </div>
    )
}