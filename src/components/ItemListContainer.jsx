import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfiguration"; 
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "tiposDePlantas"); 
        let q;

        if (categoriaId) {
          q = query(productosRef, where("categoria", "==", categoriaId));
        } else {
          q = productosRef;
        }

        const snapshot = await getDocs(q);
        const productosFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosFirebase);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoriaId]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h1 className="bienvenida">Bienvenidos a la Naturaleza</h1>
          <h2 className="greeting">{greeting}</h2>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;

