import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfiguration"; 
import "./Promociones.css";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const Promociones = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const obtenerPromos = async () => {
      try {
        const productosRef = collection(db, "tiposDePlantas");
        const snapshot = await getDocs(productosRef);

        const productos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const productosEnPromo = productos.filter(prod => prod.precio && prod.precio < 1000);
        setPromos(productosEnPromo);
      } catch (error) {
        console.error("Error al obtener promociones:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerPromos();
  }, []);

  const handleAdd = (producto, cantidad) => {
    addToCart(producto, cantidad);
    toast.success(`Agregaste ${cantidad} unidad(es) de "${producto.descripcion}" al carrito.`);
  };

  return (
    <div className="promo-container">
      <h1>Promociones Cyber Lunes <img style={{ width: '20px' }} src="/planta.png" alt="planta" /></h1>
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
              <ItemCount 
                stock={prod.stock || 10} 
                onAdd={(cantidad) => handleAdd(prod, cantidad)} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Promociones;
