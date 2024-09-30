"use client"; 
import { useEffect, useState } from 'react';

export default function DetalleProducto({ params }) {
    const { id } = params; 

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        // carga de producto por id hardcodeado
        const productos = [
            { id: 1, nombre: 'Producto 1', imagen: 'images/imagen1.jpg', descripcion: 'Descripción del Producto 1' },
            { id: 2, nombre: 'Producto 2', imagen: 'images/imagen2.jpg', descripcion: 'Descripción del Producto 2' },
            { id: 3, nombre: 'Producto 3', imagen: 'images/imagen3.jpg', descripcion: 'Descripción del Producto 3' },
            { id: 4, nombre: 'Producto 4', imagen: 'images/imagen4.jpg', descripcion: 'Descripción del Producto 4' },
            { id: 5, nombre: 'Producto 5', imagen: 'images/imagen5.jpg', descripcion: 'Descripción del Producto 5' },
            { id: 6, nombre: 'Producto 6', imagen: 'images/imagen6.jpg', descripcion: 'Descripción del Producto 6' },
        ];

        if (id) {
            const productoEncontrado = productos.find(prod => prod.id === id);
            setProducto(productoEncontrado);
        }
    }, [id]);

    if (!producto) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="detalle-producto">
            <h1>{producto.nombre}</h1>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <img src={producto.imagen} alt={producto.nombre} />
        </div>
    );
}
