import React, {useEffect, useState} from "react";
import Card from "./Card";
import { generateId, shuffleArray } from "../functions.js";
import '../css/Display.css'
import Score from "./Score";

export default function Display(){
    const numCards = 6;

    const [cards,setCards] = useState(generateId(numCards, 1010).map(id => <Card key={id} id={id} reshuffle={reshuffle} />))
    const [score,setScore] = useState(0)
    const [answers,setAnswers] = useState([])

    useEffect(() => {
        if((new Set(answers)).size !== answers.length){
            console.log('yikes')
        }else if(answers.length > 0){
            setScore(score + 1)
        }
    }, [answers])

    function reshuffle(id){
        setCards(shuffleArray(cards))
        setAnswers(prevAnswers => [...prevAnswers, id])
    }

    return (
        <>
            <Score score={score}/>
            <div className="pokemon">
                {cards}
            </div>
        </>
    )
}