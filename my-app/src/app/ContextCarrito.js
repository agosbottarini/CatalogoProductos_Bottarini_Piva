'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
const ContextCarrito = createContext();
export const CarritoProvider = ({ children }) => {
const [carrito, setCarrito] = useState([]);

useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
}, []);

const actualizarLocalStorage = (nuevoCarrito) => {
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
};

const agregarAlCarrito = (producto) => {
    const existeEnCarrito = carrito.find(item => item.id === producto.id);

    let nuevoCarrito;
    if (existeEnCarrito) {
        nuevoCarrito = carrito.map(item =>
            item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
        );
    } else {
        nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
    actualizarLocalStorage(nuevoCarrito);
};

const eliminarDelCarrito = (productoAEliminar) => {
    const producto = carrito.find(item => item.id === productoAEliminar.id);

    let nuevoCarrito;
    if (producto.cantidad > 1) {
        nuevoCarrito = carrito.map(item =>
            item.id === productoAEliminar.id
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
        );
    } else {
        nuevoCarrito = carrito.filter(item => item.id !== productoAEliminar.id);
    }

    setCarrito(nuevoCarrito);
    actualizarLocalStorage(nuevoCarrito);
};

return (
<ContextCarrito.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}> {children}</ContextCarrito.Provider>
);
};
export const useContextCarrito = () => {
const context = useContext(ContextCarrito);
if (!context){ throw new Error('useContextCarrito debe ser usado dentro de un CarritoProvider');} return context;
};