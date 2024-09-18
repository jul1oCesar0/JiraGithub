import React from "react";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        Mi sitio
        <ul className="flex space-x-4">
          <li className="text-white">Inicio</li>

          <li>Servicios</li>
          <li>Contactos</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
