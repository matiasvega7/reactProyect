import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";
import { db } from "../firebaseConfiguration";
import { collection, addDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";

const CartPage = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [ordenConfirmada, setOrdenConfirmada] = useState(null);
  const [comprador, setComprador] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const totalGeneral = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComprador((prev) => ({ ...prev, [name]: value }));
  };

  const validarFormulario = () => {
    if (!comprador.nombre.trim() || !comprador.email.trim() || !comprador.telefono.trim()) {
      toast.error("Por favor completa todos los datos del comprador");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(comprador.email)) {
      toast.error("Por favor ingresa un email válido");
      return false;
    }
    return true;
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Su carrito se vació correctamente");
    setOrdenConfirmada(null);
  };

  const handleConfirmPurchase = async () => {
    if (!validarFormulario()) return;

    if (cart.length === 0) {
      toast.error("El carrito está vacío");
      return;
    }

    const orden = {
      comprador,
      items: cart.map((item) => ({
        id: item.id,
        descripcion: item.descripcion,
        precio: item.precio,
        cantidad: item.quantity,
      })),
      total: totalGeneral,
      fecha: serverTimestamp(),
    };

    try {
      const ordenRef = await addDoc(collection(db, "ordenes"), orden);

      const updates = cart.map(async (item) => {
        const itemRef = doc(db, "tiposDePlantas", item.id);
        const nuevoStock = item.stock - item.quantity;

        if (nuevoStock >= 0) {
          await updateDoc(itemRef, { stock: nuevoStock });
        } else {
          throw new Error(`Stock insuficiente para ${item.descripcion}`);
        }
      });

      await Promise.all(updates);

      toast.success(`Compra confirmada. Orden ID: ${ordenRef.id}`);

      setOrdenConfirmada({
        id: ordenRef.id,
        items: orden.items,
        total: orden.total,
        comprador,
      });

      clearCart();
    } catch (error) {
      console.error("Error al confirmar la compra:", error);
      toast.error("Hubo un problema al procesar la compra.");
    }
  };

  if (ordenConfirmada) {
    return (
      <div style={{ padding: "1rem", color: "white" }}>
        <h2>Compra Confirmada</h2>
        <p><strong>ID de la Orden:</strong> {ordenConfirmada.id}</p>

        <h3>Datos del comprador</h3>
        <p>Nombre: {ordenConfirmada.comprador?.nombre}</p>
        <p>Email: {ordenConfirmada.comprador?.email}</p>
        <p>Teléfono: {ordenConfirmada.comprador?.telefono}</p>

        <h3>Detalles de la compra:</h3>
        {ordenConfirmada.items.map((item) => (
          <div key={item.id} style={{ marginBottom: "1rem" }}>
            <p><strong>{item.descripcion}</strong></p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio unitario: ${item.precio}</p>
            <p>Subtotal: ${item.precio * item.cantidad}</p>
          </div>
        ))}

        <h3>Total: ${ordenConfirmada.total}</h3>
        <button onClick={() => setOrdenConfirmada(null)}>Volver a la tienda</button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
        El carrito está vacío
      </h2>
    );
  }

  return (
    <div style={{ padding: "1rem", color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Tu carrito:</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          <p>
            <strong>{item.descripcion}</strong>
          </p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio por unidad: ${item.precio}</p>
          <p>Total del producto: ${item.precio * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}

      <h3 style={{ marginTop: "2rem" }}>
        Total de la compra: ${totalGeneral}
      </h3>

      <div style={{ marginBottom: "1rem" }}>
        <h3>Datos del comprador</h3>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={comprador.nombre}
          onChange={handleInputChange}
          style={{ marginBottom: "0.5rem", width: "100%" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={comprador.email}
          onChange={handleInputChange}
          style={{ marginBottom: "0.5rem", width: "100%" }}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={comprador.telefono}
          onChange={handleInputChange}
          style={{ marginBottom: "0.5rem", width: "100%" }}
        />
      </div>

      <div >
        <button  className="botonCompra" onClick={handleClearCart}>Vaciar carrito</button>
        <button  className="botonCompra" onClick={handleConfirmPurchase}>Confirmar compra</button>
      </div>
    </div>
  );
};

export default CartPage;

        
