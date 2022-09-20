/*  PersonsImg  */
import personWarriorImg from '../img/Pesrons/warrior.png';
import personThiefImg from '../img/Pesrons/thief.png';
import personWizardImg from '../img/Pesrons/wizard.png';

/*  MonstersImg  */
import monsterDareRatImg from '../img/Monsters/Dire-Rat.png'


let personsArray = [
  {
    id: 0,
    name: "Warrior",
    startHp: 70,
    hp: 70,
    startMana: 3,
    imgSrc: personWarriorImg
  },
  {
    id: 1,
    name: "Wizard",
    startHp: 50,
    hp: 50,
    startMana: 3,
    imgSrc: personWizardImg
  },
  {
    id: 2,
    name: "Thief",
    startHp: 60,
    hp: 60,
    startMana: 3,
    imgSrc: personThiefImg
  },
]
/*  ========================  */


let monstersArray = [
  {
    id: 0,
    name: "Dare Rat",
    startHp: 30,
    hp: 30,
    imgSrc: monsterDareRatImg,
    damage: 10,
  },

]

export {personsArray, monstersArray}