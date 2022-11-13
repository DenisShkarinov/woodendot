// * Components
import { useState } from 'react';

import Header from './components/header/Header'
import Design from './components/design/design';
import './App.scss';

function App() {
  const [burgerIsPressed, setBurgerIsPressed] = useState(false)

  return (
    <div className="App">
      <Header burgerIsPressed={ burgerIsPressed } setBurgerIsPressed={ setBurgerIsPressed }/>
      <main>  
        <Design  />
      </main>
    </div>
  );
}

export default App;
