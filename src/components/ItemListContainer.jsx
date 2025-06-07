import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../components/mock/asyncMock";
import ItemList from "./ItemList";
import Home from "./Home";
import LoaderComponent from "./LoaderComponent"; 

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    getProduct()
      .then((res) => {
        if (categoriaId) {
          setProductos(res.filter((prod) => prod.categoria === categoriaId));
        } else {
          setProductos(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-4">{greeting}</h1>
          <Home />
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
