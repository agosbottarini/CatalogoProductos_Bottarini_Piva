"use client";

import { useEffect, useState } from 'react';
import { useContextCarrito } from '../ContextCarrito'; 
import Link from 'next/link'; 

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [busqueda, setBusqueda] = useState(''); 
    const [busquedaCategoria, setBusquedaCategoria] = useState('');

    const { agregarAlCarrito } = useContextCarrito();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProductos(data.products); 
            })
            .catch(err => console.error(err));

        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                setCategorias(data); 
            })
            .catch(err => console.error(err));
    }, []);
    
    const filtradoProductos = productos.filter((producto) => {
        const busquedaValida = producto.title.toLowerCase().includes(busqueda.toLowerCase());   
        const categoriaValida = busquedaCategoria ? producto.category === busquedaCategoria : true;
        return busquedaValida && categoriaValida;
    });

    const handleAgregarAlCarrito = (producto) => {
        const confirmar = window.confirm(`¿Quieres agregar ${producto.title} al carrito?`);
        if (confirmar) {
            agregarAlCarrito(producto);
        }
    };

    return (
        <>
            <h1 className="titulo-productos">Nuestros Productos</h1>

            <input 
                type="text" 
                placeholder="Buscar productos..." 
                value={busqueda} 
                onChange={(e) => setBusqueda(e.target.value)} 
                className="barra-busqueda"
            />

            <select 
                value={busquedaCategoria} 
                onChange={(e) => setBusquedaCategoria(e.target.value)}
                className='filtro-categoria'
            >
                <option value="">Todas las Categorías</option>
                {categorias.map((categoria, index) => (
                    <option key={index} value={categoria.slug}>{categoria.name}</option>
                ))}
            </select>

            <div className="productoLista">
                <div className="grid">
                    {filtradoProductos.map((producto) => (
                        <div className="producto" key={producto.id}>
                            <img src={producto.thumbnail} alt={producto.title} />
                            <div className="producto-info">
                                <h3>{producto.title}</h3>
                                <p>{producto.description}</p>
                                <p className="precio">${producto.price}</p>

                                <button 
                                    onClick={() => handleAgregarAlCarrito(producto)} 
                                    className="agregar-al-carrito"
                                >
                                    Agregar al Carrito
                                </button>

                                <Link href={`/productos/${producto.id}`} className="ver-detalles">
                                    Ver Detalles
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
