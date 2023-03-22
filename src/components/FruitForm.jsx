import {FruitCounter} from "./FruitCounter";
import React from "react";

export function FruitForm() {
    const [formKey, toggleFormKey] = React.useState(true)
    return (
        <form className="fruit-form" key={formKey}>
            <FruitCounter
                fruitName="meloenen"/>
            <FruitCounter
                fruitName="kiwi's" />
            <FruitCounter
                fruitName="bananen"/>
            <FruitCounter
                fruitName="appels"/>
            <button type="button" id="fruit-form-reset"onClick={() => toggleFormKey(formKey => !formKey)}>reset</button>
        </form>
)
}