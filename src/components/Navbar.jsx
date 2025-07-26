const apiUrl = import.meta.env.VITE_API_URL;

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const handleDownloadCV = () => {
    window.open("/CV_WilsonHernandez.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Mi CV</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Educación</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experiencia</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Habilidades</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>

            {/* Botón de descarga de CV */}
            <li className="nav-item">
                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-info btn-sm ms-3 d-flex align-items-center gap-2"
                >
                  <FaDownload />
                  Descargar CV
                </motion.button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
