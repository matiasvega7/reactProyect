import { useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const CartPage = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const totalGeneral = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const handleClearCart = () => {
    clearCart();
    toast.success("Su carrito se vacio correctamente");
  };

  if (cart.length === 0) {
    return (
      <h2 style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>
        El carrito está vacío
      </h2>
    );
  }

  return (
    <div style={{ padding: '1rem', color: 'white' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Tu carrito:</h2>
      
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: '1rem',
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
          }}
        >
          <p><strong>{item.descripcion}</strong></p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio por unidad: ${item.precio}</p>
          <p>Total del producto: ${item.precio * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}

      <h3 style={{ marginTop: '2rem' }}>🧾 Total de la compra: ${totalGeneral}</h3>

      <button onClick={handleClearCart} style={{ marginTop: '1rem' }}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default CartPage;


