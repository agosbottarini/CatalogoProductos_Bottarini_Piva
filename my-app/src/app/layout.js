"use client";

import './estilos/styles.css';
import { CarritoProvider } from './ContextCarrito'; 

export default function Layout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="stylesheet" href="/styles/global.css" />
            </head>
            <body>
                <CarritoProvider>
                    <header>
                        <nav className="navbar"> 
                            <a href="/" className="nav-link">Home</a> 
                            <a href="/productos" className="nav-link">Productos</a>
                            <a href="/contacto" className="nav-link">Contacto</a>
                            <a href="/carrito" className="nav-link">Carrito</a>
                        </nav>
                    </header>
                    <main>{children}</main>
                </CarritoProvider>
            </body>
        </html>
    );
}
