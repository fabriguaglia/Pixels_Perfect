import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function LarioSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="LARIO SPRITE"
            descripcion="Obra de Pixel de Lario"
            precio="$4.99"
            biografia="Un dibujo de píxeles de Lario en venta es una obra de arte que utiliza un conjunto de píxeles para representar a este personaje, que parece ser una variante o creación personalizada dentro del universo de Mario Bros. Estas creaciones de arte pixelado son ideales para coleccionistas y fanáticos de la franquicia, ofreciendo una representación única y distintiva de Lario mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.larioSprite }/>
        </div>
    )
}