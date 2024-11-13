"use client";

import './estilos/styles.css';
import { CarritoProvider, useContextCarrito } from './ContextCarrito';
import { useState } from 'react';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    const { carrito, eliminarDelCarrito } = useContextCarrito(); 
    const [isOpen, setIsOpen] = useState(false);

    const toggleCarrito = () => {
        setIsOpen(!isOpen);
    };

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0).toFixed(2);
    };

    const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);


    return (
        <nav className="navbar">
            <div className='navbar-links'> 
                <a href="/" className="nav-link">Home</a> 
                <a href="/productos" className="nav-link ">Productos</a>
                <a href="/contacto" className="nav-link">Contacto</a>
            </div> 
            <div className="icono-carrito" onClick={toggleCarrito}>
                <ShoppingCartIcon />
                {carrito.length > 0 && <span className="contador">{totalItems}</span>}
            </div>
            {isOpen && (
                <div className="carrito-modal">
                    {carrito.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        <>
                            <ul className="carrito-lista">
                                {carrito.map((producto, index) => (
                                    <li key={index} className="carrito-item">
                                        <div className="card">
                                            <h3>{producto.title}</h3>
                                            <p>Precio: ${producto.price}</p>
                                            <p className="producto-cantidad">Cantidad: {producto.cantidad}</p>
                                            <button 
                                                className="boton-eliminar" 
                                                onClick={() => eliminarDelCarrito(producto)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <h4>Total: ${calcularTotal()}</h4>
                            <Link href="/carrito">
                                <button className="boton-ver-detalles">
                                    Ver Detalles del Carrito
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}

export default function Layout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="stylesheet" href="/styles/global.css" />
            </head>
            <body>
                <CarritoProvider>
                    <header>
                        <Navbar /> 
                    </header>
                    <main>{children}</main>
                </CarritoProvider>
            </body>
        </html>
    );
}
