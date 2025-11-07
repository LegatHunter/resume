import { useState } from "react"
import { nik } from "../../../data.js"
import btnArrow from "../../../img/btn_arrow.png"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Валидация
    if (!formData.name.trim() || !formData.telephone.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: "error", message: "Пожалуйста, заполните все поля" })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Отправка через mailto (альтернатива: отправка на сервер)
    const subject = encodeURIComponent(`Сообщение от ${formData.name}`)
    const body = encodeURIComponent(
      `Имя: ${formData.name}\nТелефон: ${formData.telephone}\n\nСообщение:\n${formData.message}`
    )
    const mailtoLink = `mailto:${nik.email}?subject=${subject}&body=${body}`

    // Открываем почтовый клиент
    window.location.href = mailtoLink

    // Симуляция отправки (можно заменить на реальный API запрос)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus({ type: "success", message: "Спасибо! Сообщение отправлено." })
      setFormData({ name: "", telephone: "", message: "" })
    }, 1000)
  }

  return (
    <section className='contact' id='contact'>
      <div className='contact__info'>
        <h1>Мои контакты</h1>
        <p>163002, {nik.address}</p>
        <h3>{nik.telephone}</h3>
        <h4>{nik.email}</h4>
        <div className="contact__info_link">
            <a href={nik.urlVk} target="_blank" rel="noopener noreferrer">VKontakte</a>
            <a href={nik.urlTelegram} target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href={nik.urlGithub} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={nik.urlLinkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
      </div>
      <form className='contact__form' onSubmit={handleSubmit} noValidate>
        <h2>Нужен проект?</h2>
        {submitStatus && (
          <div className={`contact__status contact__status--${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        <div className='contact__form_ne'>
          <input
            type='text'
            name='name'
            placeholder='NAME'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='telephone'
            placeholder='TELEPHONE'
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className='contact__form_textarea'
          name='message'
          rows='5'
          cols='5'
          placeholder='MESSAGE'
          value={formData.message}
          onChange={handleChange}
          spellCheck='true'
          required
        ></textarea>
        <button type='submit' className='contact__form_btn' disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
          <img src={btnArrow} alt='btn_arrow' />
        </button>
      </form>
    </section>
  )
}
