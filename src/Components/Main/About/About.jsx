import { nik } from "../../../data.js"
import aboutFull from "../../../img/about_full.png"
import email from "../../../img/email.png"
import phone from "../../../img/phone.png"
import iconPers from "../../../img/Icon_pers.png"
import iconMap from "../../../img/Icon_map.png"
import quote from "../../../img/quote.png"

export default function About() {
  return (
    <section className='about' id='about'>
      <div className='about__welcome'>
        <h1>Приятно познакомиться!</h1>
      </div>
      <div className='about__info'>
        <div className='about__pers'>
          <div className='about__pers_img'>
            <img src={aboutFull} alt='' />
          </div>
          <h2>
            <span className='about__gradient'>{nik.nickName}</span>
          </h2>
          <h4>
            Frontend <span>разработчик из</span> Архангельска
          </h4>
          <div className='about__pers_a'>
            <a href='person.urlMailto' target='_blank'>
              Написать мне
            </a>
            <img src={email} alt='email' />
          </div>
        </div>
        <div className='about_desc'>
          <div className='about__contact'>
            <div className='about__contact_b'>
              <div className='about__contact_bi'>
                <div>
                  <img src={phone} alt='' />
                </div>
                <h4>{nik.telephone}</h4>
              </div>
              <div className='about__contact_bi'>
                <div>
                  <img src={email} alt='' />
                </div>
                <h4>{nik.email}</h4>
              </div>
            </div>
            <div className='about__contact_b'>
              <div className='about__contact_bi'>
                <div>
                  <img src={iconPers} alt='' />
                </div>
                <h4>{nik.age} года</h4>
              </div>
              <div className='about__contact_bi'>
                <div>
                  <img src={iconMap} alt='' />
                </div>
                <h4>{nik.address}</h4>
              </div>
            </div>
          </div>
          <hr />
          <div className='about__exp'>
            <div className='about__years'>
              <div className='about__years_i about__years-clients'>
                <div className='about__gradient about__gradient_i'>
                  <h5>10+</h5>
                </div>
                <p className='about__p-italic'>
                  <br />
                  Лет опыта...
                </p>
              </div>
              <p className='about__p'>
                Привет! Меня зовут {nik.firstName} {nik.lastName}. Я
                веб-разработчик, и я очень увлечен и предан своей работе.
              </p>
            </div>
            <div className='about__clients'>
              <div className='about__clients_i about__years-clients'>
                <div className='about__gradient about__gradient_i'>
                  <h5>3</h5>
                </div>
                <p className='about__p-italic'>
                  Клиента
                  <br />
                  По России...
                </p>
              </div>
              <p className='about__p'>
                Имея более чем 2-летний опыт работы в качестве веб-разработчика,
                я приобрел навыки и знания, необходимые для успешной реализации
                вашего проекта.
              </p>
            </div>
          </div>
          <div className='about__quote'>
            <div className='about__quote_img'>
              <img src={quote} alt='' />
            </div>
            <div className='about__quote_text'>
              <p>
                “Нет ничего хуже, чем упустить шанс, который мог бы изменить
                твою жизнь. Следуй своей дорогой, и пусть люди говорят всё что
                угодно.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='about__experience'>
        <div className='about__experience_text'>
          <h4>Опыт работы</h4>
          <p>
            Привет! Меня зовут {nik.firstName} {nik.lastName}.
            <br />Я веб-разработчик, и я очень увлечен и предан своей работе.
          </p>
          <a href='./Resume.docx' target='_blank'>
            Скачать моё резюме
          </a>
        </div>
        <div className='about__experience_years'>
          <div className='about__experience_year'>
            <h6>-2020 - ...</h6>
            <p>-ГАУ АО "Управление ИКТ АО"</p>
          </div>
          <div className='about__experience_inf'>
            <h5>Инженер ОТП</h5>
          </div>
          <hr />
          <div className='about__experience_year'>
            <h6>-2016 - 2020</h6>
            <p>-Министерство ТЭК и ЖКХ АО</p>
          </div>
          <div className='about__experience_inf'>
            <h5>Главный системный администратор</h5>
          </div>
          <hr />
          <div className='about__experience_year'>
            <h6>-2014 - 2016</h6>
            <p>-Центр инфрмационных технологий</p>
          </div>
          <div className='about__experience_inf'>
            <h5>Инженер-программист</h5>
          </div>
          <hr />
        </div>
      </div>
    </section>
  )
}
