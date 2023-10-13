import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="EMPRESARIO SPRITE"
            descripcion="Obra de Pixel de Bussinesman"
            precio="$2.99"
            biografia="Un dibujo de píxeles de un hombre de negocios en venta es una obra de arte que utiliza un conjunto de píxeles para representar a un profesional en el mundo empresarial. Estas creaciones de arte pixelado son ideales para coleccionistas y amantes del mundo de los negocios, ofreciendo una representación única y distintiva de un individuo exitoso en el ámbito empresarial, utilizando una técnica visual minimalista y creativa."
            imgg={ spritesImport.empresario }/>
        </div>
    )
}