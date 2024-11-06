"use client";

import { useContextCarrito } from '../ContextCarrito';
import '../estilos/styles.css';  

export default function Carrito() {
    const { carrito, eliminarDelCarrito } = useContextCarrito(); 
    
    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.price, 0).toFixed(2);
    };

    return (
        <div className="carrito-container">
            <h1 className="carrito-titulo">Carrito de Compras</h1>

            <div className="carrito-desplegable">
                {carrito.length === 0 ? (
                    <p className="carrito-vacio">No hay productos en el carrito.</p>
                ) : (
                    <>
                        <ul className="carrito-lista">
                            {carrito.map((producto, index) => (
                                <li key={index} className="carrito-item">
                                    <h3 className="producto-titulo">{producto.title}</h3>
                                    <img className="producto-imagen" src={producto.thumbnail} alt={producto.title} />
                                    <p className="producto-precio">Precio: ${producto.price}</p>
                                    <p className="producto-cantidad">Cantidad: {producto.cantidad}</p>
                                    <button 
                                        className="boton-eliminar" 
                                        onClick={() => eliminarDelCarrito(producto)}
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <h2 className="carrito-total">Total: ${calcularTotal()}</h2>
                    </>
                )}
            </div>
        </div>
    );
}
