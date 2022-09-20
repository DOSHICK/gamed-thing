
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

import './Fight.css';

function Fight(props) {
  let currentPerson = props.personsArray[props.person]
  let currentMonster = props.monstersArray[0]
  let [currentMonsterHp, setCurrentMonsterHp] = useState(currentMonster.hp)
  let [currentPersonHp, setCurrentPersonHp] = useState(currentPerson.hp)

  let [currentPersonMana, setCurrentPersonMana] = useState(currentPerson.startMana)

  let [showPersonDie, setShowPersonDie] = useState(false)
  let [showMonsterDie, setShowMonsterDie] = useState(false)

  // Проверки на смерть и отображение hp
  let [currentPersonVisualHp, setCurrentPersonVisualHp] = useState(100);
  let [currentMonsterVisualHp, setCurrentMonsterVisualHp] = useState(100);

  useEffect(() => {

    if (currentPersonHp <= 0) {
      setCurrentPersonVisualHp(0)
      setShowPersonDie(true)
    } else {
      setCurrentPersonVisualHp(currentPersonHp * 100 / currentPerson.startHp)
    }

    if (currentMonsterHp <= 0) {
      setCurrentMonsterVisualHp(0)
      setShowMonsterDie(true)
    } else {
      setCurrentMonsterVisualHp(currentMonsterHp * 100 / currentMonster.startHp)
    }
  })

  function endMove() {
    setCurrentPersonHp(currentPersonHp - currentMonster.damage);
    setCurrentPersonMana(currentPerson.startMana)
  }

  // Карты игрока
  function cardPunch() {
    if (currentPersonMana >= 1) {
      setCurrentMonsterHp(currentMonsterHp - 6)
      setCurrentPersonMana(currentPersonMana - 1)
    } else {
      alert('Нехватка маны')
    }
  }
  function cardDefense() {
    if (currentPersonMana >= 2) {
      setCurrentMonsterHp(currentMonsterHp - 5)
      setCurrentPersonMana(currentPersonMana - 2)
    }
    else {
      alert('Нехватка маны')
    }
  }
  function cardDeal() {
    setCurrentPersonHp(currentPersonHp - 7)
    setCurrentPersonMana(currentPersonMana + 1)
  }

  return (
    <div className="Fight">
      <div className="Fight__wrapper container">
        <div className="Fight__window">
          <div className="Fight__person">
            <img src={currentPerson.imgSrc} alt="" />
            <span className="Fight__hp">{currentPersonHp}</span>
            <input className="Fight__hp-input" type="range" name="person-hp" id="Fight-person-hp" min="0"
              max={currentPerson.startHp} onChange={() => { }} value={currentPersonHp} />
            <div className="Fight__hp-visual">
              <div className="Fight__hp-range" style={{ width: currentPersonVisualHp + "%" }}></div>
            </div>
          </div>

          <div className="Fight__mob">
            <img src={currentMonster.imgSrc} alt="" />
            <span className="Fight__hp">{currentMonsterHp}</span>
            <input className="Fight__hp-input" type="range" name="monster-hp" id="Fight-monster-hp" min="0"
              max={currentMonster.startHp} onChange={() => { }} value={currentMonsterHp} />
            <div className="Fight__hp-visual">
              <div className="Fight__hp-range" style={{ width: currentMonsterVisualHp + "%" }}></div>
            </div>
          </div>
        </div>

        <div className="Fight__cards">

          <div className="Fight__mana">
            <span>{currentPersonMana}</span>
          </div>

          <div className="Fight__cards-wrapper">
            <div className="Fight__card" onClick={cardPunch}>
              <p className="Fight__card-price">1</p>
              <p className="Fight__card-title">Удар</p>
              <p className="Fight__card-description">Наносит 6 урона противнику</p>
            </div>
            <div className="Fight__card" onClick={cardDefense}>
              <p className="Fight__card-price">2</p>
              <p className="Fight__card-title">Божья Длань</p>
              <p className="Fight__card-description">Наносит 10 урона противнику, лечит вас на 4</p>
            </div>
            <div className="Fight__card" onClick={cardDeal}>
              <p className="Fight__card-price">0</p>
              <p className="Fight__card-title">Сделка</p>
              <p className="Fight__card-description">Наносит 7 урона вам, добавляет 1 Очко Маны</p>
            </div>
          </div>

          <div className="Fight__end">
            <button onClick={endMove}>Закончить ход</button>
          </div>
        </div>

        {showPersonDie ?
          <div className="Fight__die">
            <span>Достойная смерть...</span>
            <NavLink className="restart" to="/choose-person">Начать заново</NavLink>
          </div>
          : ''}

        {showMonsterDie ?
          <div className="Fight__win">
            <p>Пробная версия, контакты для связи:
              <a href="https://t.me/ivan_dosh">Телеграмм</a>
            </p>
            <NavLink className="restart" to="/choose-person">Начать заново</NavLink>
          </div>
          : ''}

      </div>
    </div>
  );
}

export default Fight;
