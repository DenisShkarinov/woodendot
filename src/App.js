// * Components
import { useState } from 'react';

import Header from './components/header/Header'
import './App.scss';

function App() {
  const [burgerIsPressed, setBurgerIsPressed] = useState(false)


  return (
    <div className="App">
      <Header burgerIsPressed={ burgerIsPressed } setBurgerIsPressed={ setBurgerIsPressed }/>
    </div>
  );
}

export default App;
