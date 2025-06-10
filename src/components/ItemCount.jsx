import React, { useState } from 'react';
import { toast } from "react-toastify";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const agregarCarrito = () => {
    if (cantidad > 0) {
      toast.success(`Agregaste ${cantidad} producto(s) al carrito`);
      onAdd(cantidad);
    } else {
      toast.error('Debes agregar al menos 1 unidad');
    }
  };

  return (
    <div>
      <div>
        <button className='botonMenos' onClick={disminuir}>-</button>
        <span style={{ margin: '0 1rem' }}>{cantidad}</span>
        <button className='botonMas' onClick={aumentar}>+</button>
      </div>
      <button
        className='btn-agregar'
        onClick={agregarCarrito}
        disabled={stock === 0}
        style={{ marginTop: '1rem' }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

