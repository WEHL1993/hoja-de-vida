
const apiUrl = import.meta.env.VITE_API_URL;

import { FaSchool, FaBookReader, FaUserGraduate, FaUniversity } from 'react-icons/fa';

export default function Education() {
  const educationList = [
    {
      nivel: 'Educación Universitaria',
      institucion: 'Universidad Mariano Gálvez de Guatemala',
      descripcion: 'Actualmente estoy cursando el octavo semestre en Ingeniería en Sistemas',
      icon: <FaUniversity size={24} color="#dc3545" />
    },
    {
      nivel: 'Educación Diversificada',
      institucion: 'Colegio particular Mixto Miguel Ángel Asturias',
      descripcion: 'Graduado como Perito Contador con Orientación en Computación',
      icon: <FaUserGraduate size={24} color="#fd7e14" />
    },
    {
      nivel: 'Educación Básica',
      institucion: 'Instituto Mixto de Educación Básica por Cooperativa Gregorio Gallardo',
      descripcion: '',
      icon: <FaBookReader size={24} color="#198754" />
    },
    {
      nivel: 'Educación Primaria',
      institucion: 'Escuela Oficial Rural Mixta Aldea Platanares',
      descripcion: '',
      icon: <FaSchool size={24} color="#0d6efd" />
    }
  ];

  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">📚 Formación académica</h2>
        <div className="list-group">
          {educationList.map((edu, index) => (
            <div key={index} className="list-group-item d-flex align-items-start">
              <div className="me-3">{edu.icon}</div>
              <div>
                <h6 className="fw-bold mb-1">{edu.nivel}</h6>
                <p className="mb-0 small fw-semibold">{edu.institucion}</p>
                {edu.descripcion && (
                  <p className="mb-0 small text-muted">{edu.descripcion}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

