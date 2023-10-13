import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function GangsterSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="GANGSTER SPRITE"
            descripcion="Obra de Pixel de Gangster"
            precio="$4.99"
            biografia="Un dibujo de píxeles de un gánster en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un personaje típico del mundo del crimen y la mafia. Estas creaciones de arte pixelado son ideales para coleccionistas y aficionados al género gangster, ofreciendo una representación única y distintiva de un gánster con una técnica visual minimalista y creativa."
            imgg={ spritesImport.gangsterSprite }/>
        </div>
    )
}