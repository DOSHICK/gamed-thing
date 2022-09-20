import { NavLink } from 'react-router-dom'
import './Welcome.css';


function Welcome() {
  return (
    <div className='Welcome'>
      <div className="Welcome__wrapper container">
        <p className='Welcome__hola'>Здравствуйте, если вы видите эту игру, значит я хочу попасть к вам на работу.</p>
        <p>В настоящий момент проект находится в стадии глубокой разработки и это первая более-менее полноценная версия.</p>
        <div className="Welcome__block">
          <p>На данный момент доступны:</p>
          <ol>
            <li>Выбор персонажа</li>
            <li>Бой с мобом-крысой</li>
            <li>Победа/смерть</li>
          </ol>
        </div>
        <div className='Welcome__block'>
          <p>Используются в разработке:</p>
          <ol>
            <li>React.js</li>
            <li>Scss</li>
            <li>useState</li>
            <li>useEffect</li>
            <li>react-router-dom</li>
          </ol>
        </div>
        <div className='Welcome__block'>
          <p>В планах улучшить:</p>
          <ol>
            <li>Выбор персонажа сделать понятнее</li>
            <li>Улучшить сообщение о нехватке маны</li>
            <li>Добавить больше мобов и добавить возможность последующей игры после боя</li>
            <li>Добавить классовые карты и обосенности персонажам</li>
            <li>Отправлять данные на сервер и вести scoreboard</li>
          </ol>
        </div>

          <NavLink className="start" to="/choose-person">Начать играть</NavLink>
      </div>
    </div>
  );
}

export default Welcome;