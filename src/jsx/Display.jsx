import React, {useEffect, useState} from "react";
import { generateId, shuffleArray, calcTotalScore } from "../functions.js";
import '../css/Display.css'
import Score from "./Score";
import Gameover from './Gameover';
import Card from "./Card";



export default function Display(){
    const [numCards,setNumCards] = useState(4)
    const [cards,setCards] = useState(generateId(numCards, 1010).map(id => <Card key={id} id={id} reshuffle={reshuffle} />))
    const [score,setScore] = useState(0)
    const [answers,setAnswers] = useState([])
    const [isGameOver, setIsGameOver] = useState(false);


    useEffect(() => {
        if(score == calcTotalScore(numCards)){
            setNumCards(numCards + 2)
            setCards(generateId(numCards + 2, 1010).map(id => <Card key={id} id={id} reshuffle={reshuffle} />))
            setAnswers([])
            document.getElementById('pokemonContainer').style.gridTemplateColumns = `repeat(${(numCards+2)/2}, 1fr)`;
        }
    }, [score])

    useEffect(() => {
        if((new Set(answers)).size !== answers.length){
            setIsGameOver(true)
        }else if(answers.length > 0){
            setScore(score + 1)
        }
    }, [answers])

    const restartGame = () => {
        setScore(0);
        setAnswers([]);
        setIsGameOver(false);
        setNumCards(4)
      };

    function reshuffle(id){
        setCards(prevCards => shuffleArray(prevCards));
        setAnswers(prevAnswers => [...prevAnswers, id])
    }

    return (
        <>
            <Score score={score}/>
            <div id="pokemonContainer" className="pokemonContainer">
                {cards}
            </div>
            {isGameOver && (
                <Gameover score={score} onClose={restartGame} />
            )}
        </>
    )
}