"use client";

import { useContextCarrito } from '../ContextCarrito';
import { useState } from 'react';


export default function Carrito() {
    const { carrito } = useContextCarrito(); 
    const [isOpen, setIsOpen] = useState(false); 
    
    const toggleCarrito = () => {
        setIsOpen(!isOpen);
    };

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.price, 0).toFixed(2);
    };

    return (
        <div className="container">
            <h1>Carrito de Compras</h1>

                <div className="carrito-desplegable">
                    {carrito.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        <>
                            <ul>
                                {carrito.map((producto, index) => (
                                    <li key={index}>
                                        <h3>{producto.title}</h3>
                                        <p>Precio: ${producto.price}</p>
                                    </li>
                                ))}
                            </ul>
                            <h4>Total: ${calcularTotal()}</h4>
                        </>
                    )}
                </div>
        </div>
    );
}
