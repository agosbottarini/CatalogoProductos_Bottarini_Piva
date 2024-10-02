"use client"; 
import { useEffect, useState } from 'react';

export default function DetalleProducto({ params }) {
    const { id } = params; 

    const [producto, setProducto] = useState(null);

    // tproductiso recomendados
    const otrosProductos = [
        { id: 2, nombre: 'Producto 2', imagen: '/images/imagen2.jpg', precio: '$ 10.000' },
        { id: 3, nombre: 'Producto 3', imagen: '/images/imagen3.jpg', precio: '$ 12.000' },
        { id: 4, nombre: 'Producto 4', imagen: '/images/imagen4.jpg', precio: '$ 15.000' },
        { id: 5, nombre: 'Producto 5', imagen: '/images/imagen5.jpg', precio: '$ 20.000' },
    ];

    useEffect(() => {
        // carga de producto por id hardcodeado
        const productos = [
            { id: 1, nombre: 'Producto 1', imagen: '/images/imagen1.jpg', descripcion: 'Descripción del Producto 1' },
            { id: 2, nombre: 'Producto 2', imagen: '/images/imagen2.jpg', descripcion: 'Descripción del Producto 2' },
            { id: 3, nombre: 'Producto 3', imagen: '/images/imagen3.jpg', descripcion: 'Descripción del Producto 3' },
            { id: 4, nombre: 'Producto 4', imagen: '/images/imagen4.jpg', descripcion: 'Descripción del Producto 4' },
            { id: 5, nombre: 'Producto 5', imagen: '/images/imagen5.jpg', descripcion: 'Descripción del Producto 5' },
            { id: 6, nombre: 'Producto 6', imagen: '/images/imagen6.jpg', descripcion: 'Descripción del Producto 6' },
        ];
    
        if (id) {
            const productoEncontrado = productos.find(prod => prod.id === parseInt(id)); 
            console.log(productoEncontrado);
            setProducto(productoEncontrado);
        }
    }, [id]);

    if (!producto) {
        return <p>Ese producto ya no está disponible</p>;
    }

    return (
        <div>
            <div className="detalle-producto">
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="descripcion">
                    <h1>{producto.nombre}</h1>
                    <p>{producto.descripcion}</p>
                    <button className="button-agregar">Agregar al carrito</button>
                </div>
            </div>

            <div className="productos-recomendados">
                <h2>También te puede interesar:</h2>
                <div className="scroll-container">
                    {otrosProductos.map((prod) => (
                        <div key={prod.id} className="producto">
                            <img src={prod.imagen} alt={prod.nombre} />
                            <h3>{prod.nombre}</h3>
                            <p>{prod.precio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
