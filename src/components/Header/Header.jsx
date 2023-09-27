import "./Header.css";

const Header = () => {
  return (
    <header className="MenuPrincipal">
      <div className="MenuRedesBuscador">
        <div className="RedesSociales">
          <a href="https://www.pinterest.com">
            <img src="/public/imagenes/25698.png" alt="Pinterest" />
          </a>
          <a href="https://www.instagram.com">
            <img src="/public/imagenes/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com">
            <img src="/public/imagenes/facebook.png" alt="Facebook" />
          </a>

        </div>

        <div className="Buscador">
          <input type="text" placeholder="Elige tu cosmético" />
          <button>🔍</button>
        </div>
      </div>

      <div className="Menu">
        <li>
          <h3>Inicio</h3>
        </li>
        <li>
          <h3>Nosotros</h3>
        </li>
        <li>
          <img src="/public/logo/Aloevera.png" alt="Logo cosmética" />
        </li>
        <li>
          <h3>Tienda</h3>
        </li>
        <li>
          <h3>To Do List</h3>
        </li>
      </div>
    </header>
  );
};

export default Header;
