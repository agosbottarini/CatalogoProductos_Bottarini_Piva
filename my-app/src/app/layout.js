import './estilos/styles.css';


export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/productos">Productos</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Derechos reservados &copy; 2024</footer>
      </body>
    </html>
  );
}
