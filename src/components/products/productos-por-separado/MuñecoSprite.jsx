import React from "react";
import spritesImport from "../../../assets/sprites/spritesImports";
import PageComponent from "../component-page-ind-prod";

export default function AmongUsSprite(props) {
    return (
        <div className="contenedor">
            <PageComponent
            title="MAN SPRITE"
            descripcion="Obra de Pixel de un Man"
            precio="$1.99"
            biografia="Un dibujo de píxeles de un muñeco al azar en venta es una creación artística que utiliza una variedad de píxeles para representar un personaje único e inesperado. Estas obras de arte pixeladas son ideales para coleccionistas y amantes de la creatividad, ofreciendo una representación única y sorprendente de un muñeco desconocido mediante una técnica visual minimalista y original."
            imgg={ spritesImport.muñeco }/>
        </div>
    )
}