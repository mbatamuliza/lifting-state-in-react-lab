// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, onAdd }) => {
    return (
        <div>
            <h2>Available Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <Ingredient
                    key= {index}
                    ingredient={ingredient}
                    onAdd={onAdd}
                    isStack={false}
                    />
                 ))}
            </ul>
        </div>
    );
};
  
export default IngredientList;
  