import React from "react";

export default function ReuCard(props) {
  const handleAddToCart = () => {
    if (props.addToCart) {
      props.addToCart({
        title: props.title,
        price: props.price,
      });
    }
  };

  return (
    <div className="reucard">
      <a href={props.href}>
        <img src={props.img} alt="Product" />
        <div className="divider">
          <hr></hr>
        </div>
        <div className="title">{props.title}</div>
        <div className="price">{props.price}</div>
        <div className="info">{props.info}</div>
      </a>
      <button className="botonnn" onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
}
