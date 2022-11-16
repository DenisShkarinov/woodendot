import { useState } from 'react';
// * Components
import Header from './components/header/Header'
import Design from './components/design/design';
import Description from './components/description/description';
import DecorStyles from './components/decorStyles/DecorStyles';
import CollectionBlock from './components/collection/CollectionBlock';
import Stories from './components/stories/stories';
import Reviews from './components/reviews/reviews';
import Learn from './components/learn/learn';

import data from './components/reviews/data';

import './App.scss';

function App() {
  const [burgerIsPressed, setBurgerIsPressed] = useState(false)
  const [reviews, setReviews] = useState(data)

  return (
    <div className="App">
      <Header burgerIsPressed={ burgerIsPressed } setBurgerIsPressed={ setBurgerIsPressed }/>
      <main>  
        <Design />
        <Description />
        <DecorStyles />
        <CollectionBlock />
        <Stories />
        <Reviews reviews={reviews}/>
        <Learn  />
      </main>
    </div>
  );
}

export default App;
