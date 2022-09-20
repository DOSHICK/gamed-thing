import React from 'react';

import { NavLink} from 'react-router-dom'

import "./ChoosePerson.css";



function ChoosePerson(props) {

  let currentPersonId = null;

  function changeCurrentPerson(e) {
    let targetElement = e.target
    if (targetElement.getAttribute("value") === null) {
      currentPersonId = targetElement.parentNode.getAttribute("value")
    } else {
      currentPersonId = targetElement.getAttribute("value")
    }
  }

  function getPerson() {
    props.setPerson(currentPersonId)
  }

  let personList = props.personsArray.map((person) =>
    <div className="ChoosePerson__person" key={person.id} onClick={changeCurrentPerson} value={person.id}>
      <img src={person.imgSrc} alt="" />
      <p className='ChoosePerson__person-name'>{person.name}</p>
    </div>
  )

  return (
    <div className="ChoosePerson">
      <div className="ChoosePerson__wrapper container">
        <div className="ChoosePerson__persons-list">
          {personList}
        </div>
        <div className="ChoosePerson__btn-case">
          <NavLink to="/fight" className='ChoosePerson__persons-btn' onClick={getPerson}>Беру этого</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ChoosePerson;
