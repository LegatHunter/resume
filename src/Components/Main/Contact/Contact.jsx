import { nik } from "../../../data.js"
import btnArrow from "../../../img/btn_arrow.png"


export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='contact__info'>
        <h1>Мои контакты</h1>
        <p>163002, {nik.address}</p>
        <h3>{nik.telephone}</h3>
        <h4>{nik.email}</h4>
        <div className="contact__info_link">
            <a href={nik.urlVk} target="_blank">VKontakte</a>
            <a href={nik.urlTelegram} target="_blank">Telegram</a>
            <a href={nik.urlGithub} target="_blank">GitHub</a>
            <a href={nik.urlLinkedin} target="_blank">Linkedin</a>
          </div>
      </div>
      <form className='contact__form' method='get' action=''>
        <h2>Нужен проект?</h2>
        <div className='contact__form_ne'>
          <input type='text' placeholder='NAME' />
          <input type='tel' placeholder='TELEPHONE' />
        </div>
        <textarea
          className='contact__form_textarea'
          rows='5'
          cols='5'
          placeholder='MESSAGE'
          spellCheck='true'></textarea>
        <button type='submit' className='contact__form_btn'>
          Отправить
          <img src={btnArrow} alt='btn_arrow' />
        </button>
      </form>
    </section>
  )
}
