import './estilos/styles.css';

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body>
        <header>
          <nav className="navbar"> 
            <a href="/" className="nav-link">Home</a> 
            <a href="/productos" className="nav-link">Productos</a>
            <a href="/contacto" className="nav-link">Contacto</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
