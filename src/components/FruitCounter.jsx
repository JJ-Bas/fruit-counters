import React from 'react';


export function FruitCounter({fruitName}) {
    const [fruit, setFruit] = React.useState(0)
    return (
        <div className="counter" >
            <label> {fruitName} </label>
            <button type="button" id={fruitName} disabled={fruit < 1 && true} onClick={() => setFruit(fruit - 1)}>-
            </button>
            {fruit}
            <button type="button" onClick={() => setFruit(fruit + 1)}>+</button>
        </div>
    )
}


