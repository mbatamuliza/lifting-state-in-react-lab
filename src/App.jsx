import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import './App.css';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ]; 


  const [stack, setStack] = useState([]);

  const addToBuger = (Ingredient) => {
    setStack([...stack, Ingredient]);
  }

  const removeFromBuger = (index) => {
    const newStack = [...stack];
    newStack.splice(index, 1);
    setStack(newStack);
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
     <IngredientList 
     ingredients={availableIngredients}
     onAdd={addToBuger}/>
     <BurgerStack 
     stack={stack}
     onRemove={removeFromBuger}/>
      </section>
    </main>
  );
};

export default App;

