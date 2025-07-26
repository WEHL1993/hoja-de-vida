const apiUrl = import.meta.env.VITE_API_URL;

export default function Experience() {
  return (
    <section id="experience" className="py-5 fade-in">
      <div className="container">
        <h2 className="mb-4">💼 Experiencia Laboral</h2>
        
        {/* Experiencia 1 */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">👨‍💻 Desarrollador Full Stack C# / SQL Server</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Empresa: SoftGuate Solutions S.A. · 📍 Ciudad de Guatemala · 🗓️ Enero 2023 – Junio 2023
            </h6>
            <p className="card-text">
              Participé en el desarrollo de un sistema de gestión de clínicas médicas utilizando C# (.NET Framework)
              para el backend y SQL Server como base de datos principal. Implementé funciones de agendamiento de citas,
              historial médico y reportes PDF. El frontend se desarrolló con HTML5, CSS3 y JavaScript para la interfaz
              de usuario.
            </p>
            <p><strong>Tecnologías utilizadas:</strong><br />
              C#, .NET Framework, SQL Server, HTML5, CSS3, JavaScript, Git, Visual Studio
            </p>
          </div>
        </div>

        {/* Experiencia 2 */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">🌐 Desarrollador Backend Java / NodeJS</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Proyecto freelance para startup: "Pedidos Express" · 🌍 Remoto · 🗓️ Agosto 2023 – Diciembre 2023
            </h6>
            <p className="card-text">
              Construí microservicios REST usando Java (Spring Boot) y NodeJS (Express) para una aplicación de entrega
              de comida. Integré MySQL como base de datos transaccional y MongoDB para la gestión de datos de usuarios
              y pedidos. Se desplegó la solución en AWS EC2 con control de versiones y CI/CD.
            </p>
            <p><strong>Tecnologías utilizadas:</strong><br />
              Java, Spring Boot, NodeJS, Express, MySQL, MongoDB, AWS (EC2, RDS), GitHub Actions
            </p>
          </div>
        </div>

        {/* Experiencia 3 */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">💻 Desarrollador Frontend React / Angular</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Empresa: NovaTech Web Studio · 📍 Ciudad de Guatemala · 🗓️ Febrero 2024 – Actualidad
            </h6>
            <p className="card-text">
              Diseñé e implementé interfaces interactivas en proyectos corporativos usando React y Angular. Trabajé en
              paneles administrativos, formularios reactivos, gráficos interactivos y dashboards. Integré las vistas con
              APIs en la nube de AWS y manejé el consumo dinámico de datos desde Oracle Database.
            </p>
            <p><strong>Tecnologías utilizadas:</strong><br />
              React, Angular, HTML5, CSS3, JavaScript, Oracle Database, AWS Lambda, Figma (UI), GitLab
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
