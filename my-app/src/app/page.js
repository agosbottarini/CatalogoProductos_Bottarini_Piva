"use client"; 

import { useEffect, useState } from 'react';
import Link from 'next/link'; 
export default function Home() {
    const [productos, setProductos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // carga de productos hardcodeado
        const productos = [
            { id: 1, nombre: 'Producto 1', imagen: 'images/imagen1.jpg', descripcion: 'Descripción del Producto 1' },
            { id: 2, nombre: 'Producto 2', imagen: 'images/imagen2.jpg', descripcion: 'Descripción del Producto 2' },
            { id: 3, nombre: 'Producto 3', imagen: 'images/imagen3.jpg', descripcion: 'Descripción del Producto 3' },
            { id: 4, nombre: 'Producto 4', imagen: 'images/imagen4.jpg', descripcion: 'Descripción del Producto 4' },
            { id: 5, nombre: 'Producto 5', imagen: 'images/imagen5.jpg', descripcion: 'Descripción del Producto 5' },
            { id: 6, nombre: 'Producto 6', imagen: 'images/imagen6.jpg', descripcion: 'Descripción del Producto 6' },
        ];
        setProductos(productos);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % productos.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [productos.length]);

    return (
        <div className="container">
            <h1>Bienvenido a nuestro Catálogo de Productos</h1>
            <div className="carousel">
                <div className="carousel-inner">
                    {productos.length > 0 && (
                        <img src={productos[currentIndex].imagen} alt={productos[currentIndex].nombre} />
                    )}
                </div>
            </div>
            <h2>Productos Destacados</h2>
            <div className="productos">
                {productos.map((producto) => (
                    <div className="producto" key={producto.id}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <div className="producto-info">
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <Link href={`/productos/${producto.id}`}>Ver Detalles</Link> {/* Cambia a Link de Next.js */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
