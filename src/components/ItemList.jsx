import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos = [] }) => {
  if (productos.length === 0) {
    return (
      <div style={{ textAlign: 'center', color: 'white', marginTop: '2rem' }}>
        <p>No hay productos disponibles.</p>
      </div>
    );
  }

  return (
    <div className="galeria">
      {productos.map((prod) => (
        <div key={prod.id} className="plantas-container">
          <Link to={`/detalle/${prod.id}`} className="cart">
            <img
              src={prod.img}
              alt={prod.descripcion || ""}
              className="img-card"
            />
            <p className="p">{prod.descripcion}</p>
            <p className="p">${prod.precio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

