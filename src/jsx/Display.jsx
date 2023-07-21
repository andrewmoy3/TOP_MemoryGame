import React, {useState} from "react";
import Card from "./Card";
import { generateId } from "../functions.js";
import '../css/Display.css'

export default function Display(){
    const numCards = 6;

    const [cards,setCards] = useState(generateId(numCards, 1010).map(id => <Card key={id} id={id} refreshDisplay={refreshDisplay} />))
    
    
    function refreshDisplay(){
        console.log('hello')
        // setCards(cards.map(id => <Card key={id} id={id} refreshDisplay={refreshDisplay}/>))
        // console.log(cards)
    }
    
    return (
        <div className="pokemon">
            {cards}
        </div>
    )
}