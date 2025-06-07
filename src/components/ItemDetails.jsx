import "./NavBar.css";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetails = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [compra, setCompra] = useState(false);

  const onAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setCompra(true);
  };

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="plantas-container">
      <div className="galeria">
        <img src={producto.img} alt={producto.descripcion} className="img-card" />
        <p className="p">Descripción: {producto.descripcion}</p>
        <p className="p">Precio: ${producto.precio}</p>

        {compra ? (
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Link className="btn-carrito" to="/cart">Ir al carrito</Link>
            <Link className="btn-carrito" to="/">Volver</Link>
          </div>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetails;

