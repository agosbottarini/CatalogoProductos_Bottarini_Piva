"use client"; 

import { useEffect, useState } from 'react';
import './estilos/styles.css';  
import Link from 'next/link'; 


export default function Home() {
    const [productos, setProductos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                console.log(data);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (productos.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % productos.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [productos.length]);


    return (

        <div className="container">
            <h1>Bienvenido a nuestro Catálogo de Productos</h1>

            <div className="carousel">
                <div className="carousel-inner" >
                    {productos.length > 0 && (
                        <img src={productos[currentIndex].thumbnail} alt={productos[currentIndex]?.title}/>
                    )}
                </div>
            </div>

            <h2>Productos Destacados</h2>

            <div className="productos">
                {productos.map((producto) => (
                    <div className="producto" key={producto.id}>
                        <img src={producto.thumbnail} alt={producto.title} />
                        <div className="producto-info">
                            <h3>{producto.title}</h3>
                            <Link href={`/productos/${producto.id}`} className='ver-detalles'>Ver Detalles</Link> 
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
