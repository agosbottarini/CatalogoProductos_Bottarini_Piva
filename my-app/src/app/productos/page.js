        "use client"; 
        import { useEffect, useState } from 'react';
        import Link from 'next/link'; 
        
        export default function Productos() {
            const [productos, setProductos] = useState([]);
            const [busqueda, setBusqueda] = useState(''); 
            const [busquedaCategoria, setBusquedaCategoria] = useState('');
        
            useEffect(() => {
                const productos = [
                    { id: 1, nombre: 'Mochila 1', imagen: 'images/imagen1.jpg', descripcion: 'Descripción del Producto 1', categoria: 'mochilas'},
                    { id: 2, nombre: 'Mochila 2', imagen: 'images/imagen2.jpg', descripcion: 'Descripción del Producto 2', categoria: 'mochilas' },
                    { id: 3, nombre: 'Mochila 3', imagen: 'images/imagen3.jpg', descripcion: 'Descripción del Producto 3', categoria: 'mochilas' },
                    { id: 4, nombre: 'Bandolera 4', imagen: 'images/imagen4.jpg', descripcion: 'Descripción del Producto 4', categoria: 'bandoleras'},
                    { id: 5, nombre: 'Bandolera 5', imagen: 'images/imagen5.jpg', descripcion: 'Descripción del Producto 5', categoria: 'bandoleras' },
                    { id: 6, nombre: 'Bandolera 6', imagen: 'images/imagen6.jpg', descripcion: 'Descripción del Producto 6', categoria: 'bandoleras' },
                ];
                setProductos(productos);
            }, []);


            const filtradoProductos = productos.filter((producto) => {
                const busquedaValida = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
                const categoriaValida = busquedaCategoria ? producto.categoria === busquedaCategoria : true;
                return busquedaValida && categoriaValida;
            });

        
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
                    <option value="mochilas">Mochilas</option>
                    <option value="bandoleras">Bandoleras</option>
                </select>

                <div className="productoLista">
                    <div className="grid">
                        {filtradoProductos.map((producto) => (
                            <div className="producto" key={producto.id}>
                                <img src={producto.imagen} alt={producto.nombre} />
                                <div className="producto-info">
                                    <h3>{producto.nombre}</h3>
                                    <p>{producto.descripcion}</p>
                                    <p className="precio">${producto.precio}</p>
                                    <Link href={`/productos/${producto.id}`} className="ver-detalles">Ver Detalles</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
                </>
            );
        }
        