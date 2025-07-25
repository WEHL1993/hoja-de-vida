import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'Nombre requerido'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email inválido'
    if (!form.message) newErrors.message = 'Mensaje requerido'
    return newErrors
  }

  const handleSubmit = (e) => {
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      e.preventDefault()
      setErrors(validation)
    }
  }

  return (
    <section id="contact" className="bg-light py-5 fade-in">
      <div className="container">
        <h2 className="mb-4">Contacto</h2>
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/wilsoneduardohl@gmail.com"
          method="POST"
          noValidate
        >
          <input type="hidden" name="_subject" value="Nuevo mensaje del formulario de contacto" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="invalid-feedback">{errors.message}</div>
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  )
}

