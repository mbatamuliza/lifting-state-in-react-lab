// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, onRemove }) => {
    return (
        <div>
            <h2>Your Burger</h2>
            {stack.length === 0 ? (
                <p>No Ingredients</p>
            ) : (
                <ul>
                    {stack.map((ingredient, index) => (
                        <Ingredient
                        key={index}
                        ingredient={ingredient}
                        onRemove={() => onRemove(index)}
                        isStack={true}
                        />
                    ))}
               </ul>
            )}
        </div>
    ) 
  };
  
  export default BurgerStack;
  