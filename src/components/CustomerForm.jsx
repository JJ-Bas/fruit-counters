import React from "react";
import {Label} from "./Label";

export function CustomerForm() {
    return (
        <form className="customer-form">
            <Label
                labelText="voornaam"
                lType="text"/>
            <Label
                labelText="achternaam"
                lType="text"/>
            <Label
                labelText="postcode"
                lType="text"/>
            <Label
                labelText="leeftijd"
                lType="number"/>
            <Label
                labelText="postcode"/>
            <span className="label-span">
                <label>bezorgfrequentie</label>
            <select className="label-span">
                <option value="iedere week"> iedere week</option>
                <option value="om de week">om de week</option>
                <option value="iedere maand">iedere maand</option>
            </select>
            </span>
            <div className="label-span">
                <span><input type="radio" id="mid-day" name="delivery"/>
            <label>overdag</label></span>
                <span><input type="radio" id="evening" name="delivery"/>
            <label htmlFor="evening">'s avonds</label></span>
            </div>
            <span className="label-span">
            <label>opmerking</label>
            <textarea id="comment"></textarea>
                </span>
            <span className="label-span"><input type="checkbox" id="consent"/>
            <label>ik ga akkoord met de voorwaarden</label></span>
            <button type='button'>verzend</button>
        </form>
    )
}

