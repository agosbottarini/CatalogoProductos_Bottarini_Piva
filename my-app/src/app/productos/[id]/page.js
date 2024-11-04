"use client"; 
import { useEffect, useState } from 'react';
import Link from 'next/link'; 
import { useContextCarrito } from '../../ContextCarrito'; 

export default function DetalleProducto({ params }) {
    const { id } = params; 

    const [producto, setProducto] = useState(null);
    const [otrosProductos, setOtrosProductos] = useState([]);
    const { agregarAlCarrito } = useContextCarrito(); 

    useEffect(() => {
        if (id) {
            fetch(`https://dummyjson.com/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    setProducto(data);
                })
                .catch(err => console.error(err));
        }
    }, [id]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const recomendados = data.products.filter(prod => prod.id !== parseInt(id));
                setOtrosProductos(recomendados.slice(0, 5));
            })
            .catch(err => console.error(err));
    }, [id]);

    const agregarAlCarritoHandler = () => {
        const confirmar = window.confirm(`¿Quieres agregar ${producto.title} al carrito?`);
        if (confirmar) {
            agregarAlCarrito(producto); 
        }
    };

    if (!producto) {
        return <p>Ese producto ya no está disponible</p>;
    }

    return (
        <div>
            <div className="detalle-producto">
                <img src={producto.thumbnail} alt={producto.title} />
                <div className="descripcion">
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                    <button className="button-agregar" onClick={agregarAlCarritoHandler}>Agregar al carrito</button>
                </div>
            </div>

            <div className="productos-recomendados">
                <h2>También te puede interesar:</h2>
                <div className="scroll-container">
                    {otrosProductos.map((prod) => (
                        <div key={prod.id} className="producto">
                            <img src={prod.thumbnail} alt={prod.title} />
                            <div className='productoTxt'>
                                <h3>{prod.title}</h3>
                                <p>{`$${prod.price}`}</p>
                                <Link href={`/productos/${prod.id}`}>
                                    <button className="button-detalles">Ver Detalles</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
