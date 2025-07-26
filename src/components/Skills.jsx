const apiUrl = import.meta.env.VITE_API_URL;

import {
  FaReact,
  FaJava,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'
import {
  SiSpring,
  SiMongodb,
  SiDotnet,
  SiMysql
} from 'react-icons/si'

const iconSize = 40

const skillIcons = {
  React: <FaReact size={iconSize} color="#61DBFB" />,
  Java: <FaJava size={iconSize} color="#f89820" />,
  'Spring Boot': <SiSpring size={iconSize} color="#6DB33F" />,
  NodeJS: <FaNodeJs size={iconSize} color="#68A063" />,
  'C# / .NET': <SiDotnet size={iconSize} color="#512bd4" />,
  'SQL Server': <FaDatabase size={iconSize} color="#ba0c2f" />,
  MySQL: <SiMysql size={iconSize} color="#00758f" />,
  MongoDB: <SiMongodb size={iconSize} color="#4DB33D" />,
  HTML5: <FaHtml5 size={iconSize} color="#e34c26" />,
  CSS3: <FaCss3Alt size={iconSize} color="#264de4" />,
  Git: <FaGitAlt size={iconSize} color="#f34f29" />,
  AWS: <FaAws size={iconSize} color="#ff9900" />
}

const skills = [
  { id: 'react', title: 'React', description: 'Biblioteca para construir interfaces de usuario.' },
  { id: 'java', title: 'Java', description: 'Lenguaje de programación orientado a objetos.' },
  { id: 'spring', title: 'Spring Boot', description: 'Framework Java para microservicios REST.' },
  { id: 'node', title: 'NodeJS', description: 'Entorno de ejecución JavaScript para el backend.' },
  { id: 'dotnet', title: 'C# / .NET', description: 'Lenguaje y framework para desarrollo empresarial.' },
  { id: 'sqlserver', title: 'SQL Server', description: 'Base de datos relacional para gestión de información.' },
  { id: 'mysql', title: 'MySQL', description: 'Base de datos transaccional para aplicaciones web.' },
  { id: 'mongo', title: 'MongoDB', description: 'Base de datos NoSQL orientada a documentos.' },
  { id: 'html', title: 'HTML5', description: 'Lenguaje de marcado para estructurar contenido.' },
  { id: 'css', title: 'CSS3', description: 'Estilos visuales modernos para interfaces.' },
  { id: 'git', title: 'Git', description: 'Control de versiones para proyectos colaborativos.' },
  { id: 'aws', title: 'AWS', description: 'Servicios en la nube para despliegue y escalabilidad.' }
]

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Habilidades Técnicas</h2>
        <div className="row">
          {skills.map((skill) => (
            <div key={skill.id} className="col-md-3 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">{skillIcons[skill.title]}</div>
                  <h5 className="card-title">{skill.title}</h5>
                  <p className="card-text">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


