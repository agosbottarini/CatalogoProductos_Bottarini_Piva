"use client";

import { useContextCarrito } from '../ContextCarrito';

export default function Carrito() {
    const { carrito } = useContextCarrito(); 

    console.log('Productos en el carrito:', carrito);

    return (
        <div className="container">
            <h1>Carrito de Compras</h1>
            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {carrito.map((producto, index) => (
                        <li key={index}>
                            <h3>{producto.title}</h3>
                            <p>Precio: ${producto.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
