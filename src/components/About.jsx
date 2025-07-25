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
          <div className="d-flex flex-column flex-md-row align-items-center" style={{ flex: 1 }}>
            <img
              src={avatar}
              alt="Foto de perfil"
              width="150"
              height="150"
              className="me-3 mb-3 mb-md-0 rounded-circle"
            />
            <div>
            
              <p className="text-muted mb-0">
                Soy un desarrollador full stack con pasión por convertir ideas en soluciones funcionales y accesibles. Me 
                encanta trabajar con tecnologías como React, Node.js, Express y SQL Server para crear aplicaciones 
                web modernas y eficientes. Me destaco por ser resolutivo, curioso y con atención al detalle, siempre 
                buscando mejorar la experiencia del usuario. Trabajo bien en equipo, me adapto rápido a nuevas herramientas
                y aplico buenas prácticas de desarrollo. Tengo experiencia integrando APIs, creando interfaces responsivas
                y manejando control de versiones con Git.
              </p>
            </div>
          </div>

          {/* Línea divisoria vertical */}
          <div
            className="mx-4 d-none d-md-block"
            style={{ borderLeft: '4px solid #ccc', height: '160px' }}
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
                <span><strong>Teléfono:</strong> +502 5431-6741</span>
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
                    WEHL1993
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



