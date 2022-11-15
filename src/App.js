import { useState } from 'react';
// * Components
import Header from './components/header/Header'
import Design from './components/design/design';
import Description from './components/description/description';
import DecorStyles from './components/decorStyles/DecorStyles';
import CollectionBlock from './components/collection/CollectionBlock';

import './App.scss';

function App() {
  const [burgerIsPressed, setBurgerIsPressed] = useState(false)

  return (
    <div className="App">
      <Header burgerIsPressed={ burgerIsPressed } setBurgerIsPressed={ setBurgerIsPressed }/>
      <main>  
        <Design  />
        <Description  />
        <DecorStyles />
        <CollectionBlock />
      </main>
    </div>
  );
}

export default App;
