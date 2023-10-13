import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="PERRO SPRITE"
            descripcion="Obra de Pixel de un Perro"
            precio="$3.99"
            biografia="Un dibujo de píxeles de un perro en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un adorable amigo canino. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes de los perros, ofreciendo una representación única y distintiva de un perro mediante una técnica visual minimalista y creativa."
            imgg={ spritesImport.perro }/>
        </div>
    )
}