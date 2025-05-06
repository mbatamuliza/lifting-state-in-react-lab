const Ingredient = ({ ingrdient, onAdd, onRemove, isStack }) => {
    return (
        <li style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
             {isStack ? (
                <button onClick={onRemove}>x</button>
             ) : (
                <button onClick={() => onAdd(ingredient)}>+</button>
             )}
        </li>
    )
}


export default Ingredient;