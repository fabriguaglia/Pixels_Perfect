import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function WarriorSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="WARRIOR SPRITE"
            descripcion="Obra de Pixel de una Woman Warrior"
            precio="$4.99"
            biografia="Un dibujo de píxeles de una guerrera mujer (Woman Warrior) en venta es una obra de arte que utiliza una técnica pixelada para representar a una poderosa y valiente guerrera. Estas creaciones de arte pixelado son ideales para coleccionistas y fanáticos de la fantasía y la temática de guerreros, ofreciendo una representación única y distintiva de un personaje femenino fuerte en un estilo visual minimalista y creativo."
            imgg={ spritesImport.warriorSprite }/>
        </div>
    )
}