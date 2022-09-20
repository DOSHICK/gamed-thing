import React, { useState } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from "./components/Header/Header";

import ChoosePerson from "./components/ChoosePerson/ChoosePerson";
import Fight from "./components/Fight/Fight";
import Welcome from './components/Welcome/Welcome';

function App(props) {
  const [person, setPerson] = useState(0);
  const [monsterHp, setMonsterHp] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/choose-person' element={<ChoosePerson personsArray={props.personsArray} setPerson={setPerson} />} />
          <Route path='/fight' element={<Fight personsArray={props.personsArray} person={person} monstersArray={props.monstersArray} setMonsterHp={setMonsterHp} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
