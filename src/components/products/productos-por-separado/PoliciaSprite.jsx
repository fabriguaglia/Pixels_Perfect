import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="POLICIA SPRITE"
            descripcion="Obra de Pixel de un Policia"
            precio="$3.99"
            biografia="Un dibujo de píxeles de un policía en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un oficial de policía. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes de la justicia y la aplicación de la ley, ofreciendo una representación única y distintiva de un policía mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.policia }/>
        </div>
    )
}