"use client"; 
import { useEffect, useState } from 'react';
import Link from 'next/link'; 

export default function Productos() {
    const [productos, setProductos] = useState([]);

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

    return (
        <div className="productos">
            <h1>Lista de Productos</h1>
            <div className="grid">
                {productos.map((producto) => (
                    <div className="producto" key={producto.id}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <div className="producto-info">
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
