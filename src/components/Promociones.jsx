import React, { useEffect, useState } from "react";
import { getProduct } from "./mock/asyncMock"; 
import "./Promociones.css";
import ItemCount from "./ItemCount";

const Promociones = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct()
      .then((productos) => {
        
        const productosEnPromo = productos.filter(prod => prod.precio && prod.precio < 1000);
        setPromos(productosEnPromo);
      })
      .catch((error) => console.error("Error al obtener productos", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="promo-container">
      <h1>Promociones Cyber Lunes <img style={{width:'10px'}} src="/planta.png"></img></h1>
      {loading ? (
        <p>Cargando promociones...</p>
      ) : promos.length === 0 ? (
        <p>No hay productos en promoción por el momento.</p>
      ) : (
        <div className="promo-grid">
          {promos.map((prod) => (
            <div className="promo-card" key={prod.id}>
              <img src={prod.img} alt={prod.descripcion} />
              <p>{prod.descripcion}</p>
              <p><strong>${prod.precio}</strong></p>
              <ItemCount/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Promociones;
