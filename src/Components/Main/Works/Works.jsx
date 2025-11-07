import btnArrow from "../../../img/btn_arrow.png"
import toDo from "../../../img/To-Do.png"
import numberGame from "../../../img/game_number.png"
import pigGame from "../../../img/Piggy.webp"
import bank from "../../../img/Bank.png"
import cardio from "../../../img/cardio.png"

export default function Works() {
  return (
    <section className='work' id='work'>
      <h1>Мои пет-проекты</h1>
      <div className='work__welcome'>
        <div className='work__content'>
          <a
            href='/Pages/To-Do/To-Do.html'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='work__content_el'>
              <div className='work__content_el-info'>
                <h3>Список покупок To-Do (Vue3)</h3>
                <svg
                  width='39'
                  height='40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13 .8v5.12h16.87L.2 35.592l3.61 3.61L33.48 9.53V26.4h5.12V.8H13Z'
                    fill='#141313'
                  />
                </svg>
              </div>
              <div className='work__content_el-img'>
                <img src={toDo} alt='to-do' width='315' height='248' />
              </div>
            </div>
          </a>
          <a
            href='/Pages/ToDo/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='work__content_el'>
              <div className='work__content_el-info'>
                <h3>Список покупок To-Do (React)</h3>
                <svg
                  width='39'
                  height='40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13 .8v5.12h16.87L.2 35.592l3.61 3.61L33.48 9.53V26.4h5.12V.8H13Z'
                    fill='#141313'
                  />
                </svg>
              </div>
              <div className='work__content_el-img'>
                <img src={toDo} alt='to-do' width='315' height='248' />
              </div>
            </div>
          </a>
          <a
            href='/Pages/NumberGame/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='work__content_el'>
              <div className='work__content_el-info'>
                <h3>Игра угадай число (vanilla)</h3>
                <svg
                  width='39'
                  height='40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13 .8v5.12h16.87L.2 35.592l3.61 3.61L33.48 9.53V26.4h5.12V.8H13Z'
                    fill='#141313'
                  />
                </svg>
              </div>
              <div className='work__content_el-img'>
                <img
                  src={numberGame}
                  alt='number game'
                  width='315'
                  height='248'
                />
              </div>
            </div>
          </a>
          <a
            href='/Pages/PigGame/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='work__content_el'>
              <div className='work__content_el-info'>
                <h3>Игра свинья (vanilla)</h3>
                <svg
                  width='39'
                  height='40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13 .8v5.12h16.87L.2 35.592l3.61 3.61L33.48 9.53V26.4h5.12V.8H13Z'
                    fill='#141313'
                  />
                </svg>
              </div>
              <div className='work__content_el-img'>
                <img src={pigGame} alt='pig game' width='315' height='248' />
              </div>
            </div>
          </a>
          <a
            href='/Pages/Bank/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='work__content_el'>
              <div className='work__content_el-info'>
                <h3>Банковское приложение (vanilla)</h3>
                <svg
                  width='39'
                  height='40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13 .8v5.12h16.87L.2 35.592l3.61 3.61L33.48 9.53V26.4h5.12V.8H13Z'
                    fill='#141313'
                  />
                </svg>
              </div>
              <div className='work__content_el-img'>
                <img src={bank} alt='bank app' width='315' height='248' />
              </div>
            </div>
          </a>
          <a
            href='/Pages/CardioMap/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='work__content_el'>
              <div className='work__content_el-info'>
                <h3>CardioMap (vanilla)</h3>
                <svg
                  width='39'
                  height='40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13 .8v5.12h16.87L.2 35.592l3.61 3.61L33.48 9.53V26.4h5.12V.8H13Z'
                    fill='#141313'
                  />
                </svg>
              </div>
              <div className='work__content_el-img'>
                <img src={cardio} alt='cardio' width='315' height='248' />
              </div>
            </div>
          </a>
        </div>
        <button className='work_btn'>
          Больше проектов
          <img src={btnArrow} alt='btn_arrow' />
        </button>
      </div>
    </section>
  )
}
