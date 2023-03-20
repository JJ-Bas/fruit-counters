import React from 'react';
import './App.css';
import FruitCounter from "./components/fruitCounter";


function App() {
    const [kiwi, setkiwi] = React.useState(0)
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="counter">
                <label>kiwi</label>
                <button type="button" disabled={kiwi < 1 && true} onClick={() => setkiwi(kiwi - 1)}>-</button>
                {kiwi}
                <button type="button" onClick={() => setkiwi(kiwi + 1)}>+</button>
            </div>
            <button type="button" onClick={() => setkiwi(0)}>reset</button>
            <FruitCounter
            fruitName="meloenen"/>
            <FruitCounter
                fruitName="kiwi's"/>
            <FruitCounter
                fruitName="bananen"/>
            <FruitCounter
                fruitName="appels"/>
            <button type="button" onClick={() => console.log(setFruit)}></button>
            <form>
                <label>voornaam</label>
                <input type="text"/>
                <input type='number'/>
                <select>
                    <option value="iedere week"> iedere week</option>
                    <option value="om de week">om de week</option>
                    <option value="iedere maand">iedere maand</option>
                </select>
                <input type='submit'/>

            </form>
        </>
    );
}

export default App;
