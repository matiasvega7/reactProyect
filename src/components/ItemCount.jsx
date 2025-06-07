import React, { useState } from 'react';
import { toast } from "react-toastify";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(Math.max(0, count - 1));
  };

  const agregarCarrito = () => {
    if (count > 0) {
      toast.success(`Agregaste ${count} producto(s) al carrito`);
      onAdd(count); 
    } else {
      toast.error('Debes agregar al menos 1 unidad');
    }
  };

  return (
    <div>
      <div>
        <button className='botonMenos' onClick={restar}>-</button>
        <span style={{ margin: '0 1rem' }}>{count}</span>
        <button className='botonMas' onClick={sumar}>+</button>
      </div>
      <button className='btn-agregar' onClick={agregarCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
