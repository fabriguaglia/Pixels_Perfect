import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="BEARMAN SPRITE"
            descripcion="Obra de Pixel de BearMan"
            precio="$2.99"
            biografia="Un dibujo de un solo píxel de un hombre oso en venta es una minúscula obra de arte que captura la esencia de un oso antropomórfico en tan solo un píxel. Estas creaciones únicas y pixeladas son ideales para coleccionistas y amantes de la temática de hombres oso, ofreciendo una representación minimalista y única de este personaje."
            imgg={ spritesImport.bearMan }/>
        </div>
    )
}