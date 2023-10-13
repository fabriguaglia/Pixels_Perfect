import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="CIENTIFICO SPRITE"
            descripcion="Obra de Pixel de Scientist"
            precio="$2.99"
            biografia="Un dibujo de píxeles de un científico en venta es una obra de arte que emplea un conjunto de píxeles para representar a un investigador o científico. Estas creaciones de arte pixelado son ideales para coleccionistas y admiradores de la ciencia, ofreciendo una representación única y distintiva de una figura destacada en el mundo de la investigación, utilizando una técnica visual minimalista y creativa."
            imgg={ spritesImport.cientifico }/>
        </div>
    )
}