import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="UNDERTALE SPRITE"
            descripcion="Obra de Pixel de Undertale"
            precio="$6.99"
            biografia="Un dibujo de píxeles de un personaje de Undertale en venta es una obra de arte que utiliza una técnica pixelada para representar a un personaje específico del popular videojuego Undertale. Estas creaciones de arte pixelado son ideales para fanáticos del juego y coleccionistas, ofreciendo una representación única y distintiva de los entrañables personajes de Undertale en un estilo visual característico de los videojuegos retro."
            imgg={ spritesImport.undertale }/>
        </div>
    )
}