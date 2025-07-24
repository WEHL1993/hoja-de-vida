import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub
} from 'react-icons/fa'
import avatar from '../assets/imagen1.jpeg' // coloca tu imagen aquí

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row bg-light px-4 py-4 rounded shadow-sm align-items-start justify-content-between">

          {/* Columna izquierda: Avatar + descripción */}
          <div className="d-flex flex-column flex-md-row align-items-start" style={{ flex: 1 }}>
            <img
              src={avatar}
              alt="Foto de perfil"
              width="150"
              height="150"
              className="me-3 mb-3 mb-md-0 rounded-circle"
            />
            <div>
              <h4 className="fw-bold text-primary">
                Wilson Hernández, <br /> desarrollador de software
              </h4>
              <p className="text-muted mb-0">
                Como desarrollador, me encanta transformar ideas en soluciones reales. Disfruto creando aplicaciones web modernas,
                accesibles y funcionales usando tecnologías como React, Node.js y SQL Server.
                Me motiva ver cómo mi código mejora la vida de los usuarios.
              </p>
            </div>
          </div>

          {/* Línea divisoria vertical */}
          <div
            className="mx-4 d-none d-md-block"
            style={{ borderLeft: '3px solid #ccc', height: '150px' }}
          ></div>

          {/* Columna derecha: Datos de contacto */}
          <div className="d-flex flex-column" style={{ minWidth: '250px' }}>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2" style={{ color: '#D44638' }} />
                <span><strong>Correo:</strong> wilson@email.com</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhone className="me-2" style={{ color: '#28a745' }} />
                <span><strong>Teléfono:</strong> +502 1234-5678</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" style={{ color: '#dc3545' }} />
                <span><strong>Dirección:</strong> Guazacapán, Santa Rosa</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaGithub className="me-2" style={{ color: '#333' }} />
                <span>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/wilson-dev" target="_blank" rel="noreferrer">
                    github.com/wilson-dev
                  </a>
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}



