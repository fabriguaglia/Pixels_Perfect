import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="AVATAR SPRITE"
            descripcion="Obra de Pixel de Avatar"
            precio="$2.99"
            biografia="Un dibujo de un solo píxel de un personaje de Avatar en venta es una minúscula obra de arte que captura la esencia de un personaje del mundo de Avatar en tan solo un píxel. Estas creaciones únicas y pixeladas son ideales para coleccionistas y fanáticos de la serie, ofreciendo una representación minimalista y nostálgica de este icónico universo."
            imgg={ spritesImport.avatar }/>
        </div>
    )
}