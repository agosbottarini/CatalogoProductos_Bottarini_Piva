"use client"; 

export default function Contacto() {
    return (
        <div className="container">
            <h1>Contacto</h1>
            <form>
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo Electrónico" required />
                <textarea placeholder="Mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
