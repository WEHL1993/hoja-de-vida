const apiUrl = import.meta.env.VITE_API_URL;

import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'
import {
  SiFirebase,
  SiNextdotjs,
  SiMarkdown,
  SiNetlify
} from 'react-icons/si'

export default function Projects() {
  const iconSize = 22

  const projects = [
    {
      title: 'Gestor de Tareas',
      description:
        'App web creada con React y Firebase para organizar tareas, usuarios y prioridades. Incluye autenticación, filtros por fecha y estado, y sincronización en tiempo real.',
      tech: [
        <FaReact size={iconSize} color="#61DBFB" />,
        <SiFirebase size={iconSize} color="#FFCA28" />,
        <FaBootstrap size={iconSize} color="#7952B3" />
      ]
    },
    {
      title: 'Mi Portafolio Profesional',
      description:
        'Página web tipo hoja de vida desarrollada con React y Bootstrap. Sección de proyectos, habilidades, contacto y animaciones. Desplegado en Netlify.',
      tech: [
        <FaReact size={iconSize} color="#61DBFB" />,
        <FaBootstrap size={iconSize} color="#7952B3" />,
        <SiNetlify size={iconSize} color="#00C7B7" />
      ]
    },
    {
      title: 'Dashboard Administrativo',
      description:
        'Panel de control empresarial hecho con Angular y NodeJS. Gestión de usuarios, productos y reportes. Seguridad mediante autenticación JWT.',
      tech: [
        <FaAngular size={iconSize} color="#DD0031" />,
        <FaNodeJs size={iconSize} color="#68A063" />,
        <FaGithub size={iconSize} color="#000000" />
      ]
    },
    {
      title: 'Blog Personal con Markdown',
      description:
        'Blog minimalista hecho con Next.js. Lectura de archivos Markdown, navegación rápida y diseño limpio. Soporta modo oscuro y es 100% responsive.',
      tech: [
        <SiNextdotjs size={iconSize} color="#000000" />,
        <SiMarkdown size={iconSize} color="#000000" />,
        <FaHtml5 size={iconSize} color="#e34c26" />,
        <FaCss3Alt size={iconSize} color="#264de4" />
      ]
    }
  ]

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Proyectos</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex gap-2 mt-3 flex-wrap">
                    {project.tech.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
