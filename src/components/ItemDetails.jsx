import "./NavBar.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetails = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [compra, setCompra] = useState(false);

  const onAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setCompra(true);
  };

  if (!producto || Object.keys(producto).length === 0) {
    return (
      <p style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
        Cargando producto...
      </p>
    );
  }

  return (
    <div className="plantas-container">
      <div className="galeria">
        <img
          src={producto.img}
          alt={producto.descripcion || ""}
          className="img-card"
        />
        <p className="p">Descripción: {producto.descripcion}</p>
        <p className="p">Precio: ${producto.precio}</p>
        <p className="p">Stock disponible: {producto.stock}</p>

        {compra ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Link className="btn-carrito" to="/cart">
              Ir al carrito
            </Link>
            <Link className="btn-carrito" to="/">
              Volver al inicio
            </Link>
          </div>
        ) : (
          <ItemCount stock={producto.stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetails;

