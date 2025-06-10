import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfiguration";
import ItemDetails from "./ItemDetails";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const docRef = doc(db, "tiposDePlantas", id); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("⚠️ Producto no encontrado");
          setProducto(null);
        }
      } catch (error) {
        console.error("❌ Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      obtenerProducto();
    }
  }, [id]);

  return (
    <div>
      {loading ? (
        <p style={{ color: "white", textAlign: "center" }}>Cargando producto...</p>
      ) : producto ? (
        <ItemDetails producto={producto} />
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
