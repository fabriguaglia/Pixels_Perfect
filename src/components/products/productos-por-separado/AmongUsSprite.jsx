import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="AMONG US SPRITE"
            descripcion="Obra de Pixel de Among us"
            precio="$4.99"
            biografia="Un dibujo de un solo píxel de Among Us en venta es una minúscula obra de arte que captura la esencia de un personaje o elemento de Among Us en tan solo un píxel. Estas creaciones únicas y pixeladas son ideales para coleccionistas y fanáticos del juego, ofreciendo una representación minimalista y nostálgica del universo de Among Us."
            imgg={ spritesImport.amongSprite }/>
        </div>
    )
}