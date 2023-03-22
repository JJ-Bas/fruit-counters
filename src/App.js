import React, {useState} from 'react';
import './App.css';
import {FruitForm} from "./components/FruitForm";
import {CustomerForm} from "./components/CustomerForm";

function App() {

    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
            <h1>Fruitmand bezorgservice</h1>
            <FruitForm/>
                    <div className="customer-form-outer">
            <CustomerForm/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
