import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <div className="galeria">
      {productos.map((prod) => (
        <div key={prod.id} className='plantas-container'>
          <Link to={`/detalle/${prod.id}`} className="cart">
            <img src={prod.img} alt={prod.descripcion} className='img-card' />
            <p className='p'>{prod.descripcion}</p>
            <p>${prod.precio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
