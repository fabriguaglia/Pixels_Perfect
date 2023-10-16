import React, { useState } from "react";
import { Link } from "react-router-dom";
import spritesImport from "../../assets/sprites/spritesImports";
import "./home.css";
import ReuCard from "./product-reu";

function Home() {
    const [cart, setCart] = useState([]);
    const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const addToCart = (product) => {
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          const productKey = product.title;
      
          const existingProductIndex = updatedCart.findIndex(
            (item) => item.title === productKey
          );
      
          if (existingProductIndex !== -1) {
            const existingProduct = { ...updatedCart[existingProductIndex] };
            existingProduct.quantity += 1;
            updatedCart[existingProductIndex] = existingProduct;
          } else {
            updatedCart.push({ ...product, quantity: 1});
          }
      
          return updatedCart;
        });
      };
  
    const calculateTotalPrice = () => {
      let totalPrice = 0;
  
      cart.forEach((product) => {
        const price = Number(product.price);
        const quantity = Number(product.quantity);
  
        if (!isNaN(price) && !isNaN(quantity)) {
          totalPrice += price * quantity;
        } else {
          console.log("Invalid price or quantity:", price, quantity);
        }
      });
  
      return totalPrice;
    };

      const completePurchase = () => {
        setIsPurchaseComplete(true);
        setIsModalVisible(true);
      };
    
      const closeModal = () => {
        setIsModalVisible(false);
      };
    
  
    return (
      <>
        <div className="hero">
          <h1>Bienvenido a PixelsPerfect</h1>
          <p>El mejor mercado de Sprites, Modelos 3D y mucho más</p>
        </div>
  
        <div className="title-gallery">
          <h1>¡BEST SELLER!</h1>
        </div>
  
        <div className="product-gallery">
          <ReuCard
            href="/products/foxSprite"
            img={spritesImport.foxSprite}
            title="Fox Sprite"
            price={4.99}
            info="Un arte pixelado de un zorro, mi creación original"
            addToCart={addToCart}
          />
  
          <ReuCard
            href="/products/gangster-sprite"
            img={spritesImport.gangsterSprite}
            title="Gangster Sprite"
            price={4.99}
            info="Un arte pixelado de un gánster, mi creación original"
            addToCart={addToCart}
          />
  
          <ReuCard
            href="/products/lario-sprite"
            img={spritesImport.larioSprite}
            title="Lario Sprite"
            price={4.99}
            info="Un arte pixelado de Lario, mi creación original"
            addToCart={addToCart}
          />
  
          <ReuCard
            href="/products/warrior-sprite"
            img={spritesImport.warriorSprite}
            title="Warrior Sprite"
            price={4.99}
            info="Un arte pixelado de una guerrera, mi creación original"
            addToCart={addToCart}
          />
        </div>
  
        <div className="cart">
        <h2>Carrito</h2>
        <ul>
          {cart.map((product, index) => {
            const totalPrice = (product.price * product.quantity).toFixed(2);

            return (
              <li key={index}>
                {product.title} - ${totalPrice} - Cantidad: {product.quantity}
              </li>
            );
          })}
        </ul>
        <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
        {cart.length > 0 && !isPurchaseComplete && (
          <button onClick={completePurchase}>Comprar</button>
        )}
    </div>
    {isPurchaseComplete && (
          <div className="modal" style={{ display: isModalVisible ? "block" : "none" }}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h1 className="compraPrinc">Compra completada!</h1>
              <h3>Continua viendo nuestros productos:</h3>
              <Link to="/products">
                <button className="productsButton">Productos</button>
            </Link>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default Home;