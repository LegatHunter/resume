import { nik } from "../../../data.js"
import phone from "../../../img/phone.png"
import email from "../../../img/email.png"
import vector1 from "../../../img/Vector_1.svg"
import vector2 from "../../../img/Vector_2.svg"
import vector3 from "../../../img/Vector_3.svg"
import vector4 from "../../../img/Vector_4.svg"
import star from "../../../img/Star.svg"
import nikPhoto from "../../../img/Nik.png"
import quadro from "../../../img/Elements.svg"




export default function Home() {
  return (
    <header className='home' id='home'>
      <div className='home__info'>
        <svg
          width='216'
          height='136'
          viewBox='0 0 216 136'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M215.637 -2.08725e-07L0 124.498C100.654 160.028 196.291 104.812 215.637 -2.08725e-07Z'
            fill='url(#paint0_linear_1_491)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1_491'
              x1='224.856'
              y1='44.0991'
              x2='37.2265'
              y2='150.04'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#FFB147' />
              <stop offset='0.520264' stopColor='#FF6C63' />
              <stop offset='1' stopColor='#B86ADF' />
            </linearGradient>
          </defs>
        </svg>
        <h1>
          Меня зовут
          <br />
          <span>
            {nik.lastName}
            <br />
            {nik.firstName}...
          </span>
        </h1>
        <h2>
          Frontend <span>разработчик из</span> Архангельска
        </h2>
        <a className="home__info_btn" href={nik.urlTelegram} target='_blank' rel='noopener noreferrer'>
          Давай поболтаем
        </a>
        <div className='home__contacts'>
          <div className='home__contacts_phone'>
            <img src={phone} alt='phone' />
            <p>{nik.telephone}</p>
          </div>
          <div className='home__contacts_email'>
            <img src={email} alt='email' />
            <p>{nik.email}</p>
          </div>
        </div>
      </div>
      <div className='home__img'>
        <img className='home__img_2' src={vector2} alt='2' />
        <img className='home__img_3' src={vector3} alt='Декоративный элемент' />
        <img className='home__img_me' src={nikPhoto} alt='me' />
        <img className='home__img_1' src={vector1} alt='1' />
        <img className='home__img_4' src={vector4} alt='4' />
        <img className='home__img_stars' src={star} alt='stars' />
        <img
          className='home__img_quadro'
          src={quadro}
          alt='quadro'
        />
      </div>
    </header>
  )
}
