import React from "react";
import './pagess.css'; 

export default function PageComponent(props) {
    return (
        <>
            <div className="page-component">
                <img className="img1" src={props.imgg} alt={props.title}/>
                <h1 className="title1">{props.title}</h1>
                <p className="descripcion1">{props.descripcion}</p>
                <h2 className="precio1">{props.precio}</h2>
                <br></br>
                <p className="bio1">{props.biografia}</p>  
                <br></br>
                <button name="agregar-carrito1">AGREGAR AL CARRITO</button>        
            </div>
        </>
    )
}