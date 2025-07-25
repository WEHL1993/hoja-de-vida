import { FaSchool, FaBookReader, FaUserGraduate, FaUniversity } from 'react-icons/fa';

export default function Education() {
  const educationList = [
    {
      nivel: 'Educación Primaria',
      institucion: 'Escuela Oficial Rural Mixta Aldea Platanares',
      icon: <FaSchool size={24} color="#0d6efd" />
    },
    {
      nivel: 'Educación Básica',
      institucion: 'Instituto Mixto de Educación Básica por Cooperativa Gregorio Gallardo',
      icon: <FaBookReader size={24} color="#198754" />
    },
    {
      nivel: 'Educación Diversificada',
      institucion: 'Colegio particular Mixto Miguel Ángel Asturias',
      icon: <FaUserGraduate size={24} color="#fd7e14" />
    },
    {
      nivel: 'Educación Universitaria',
      institucion: 'Universidad Mariano Gálvez de Guatemala',
      icon: <FaUniversity size={24} color="#dc3545" />
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
                <p className="mb-0 small">{edu.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

