import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from './mock/asyncMock'; // o desde donde tengas tus productos
import ItemDetails from './ItemDetails';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProduct().then((productos) => {
      const productoEncontrado = productos.find((p) => p.id === parseInt(id));
      setProducto(productoEncontrado);
    });
  }, [id]);

  return (
    <div>
      {producto ? (
        <ItemDetails producto={producto} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
