"use client";

import React, { createContext, useContext, useState } from 'react';

const ContextCarrito = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        console.log('Producto agregado:', producto); 
        setCarrito((prev) => [...prev, producto]);
    };

    return (
        <ContextCarrito.Provider value={{ carrito, agregarAlCarrito }}>
            {children}
        </ContextCarrito.Provider>
    );
};

export const useContextCarrito = () => {
    const context = useContext(ContextCarrito);
    if (!context) {
        throw new Error('useContextCarrito debe ser usado dentro de un ContextCarritoProvider');
    }
    return context;
};
