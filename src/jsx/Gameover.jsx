import '../css/Gameover.css'

export default function Gameover({score, onClose}){

    return (
        <div className="gameover">
            <div className="game-over-popup">
                <h2>Game Over</h2>
                <p>Your score: {score}</p>
                <button onClick={onClose}>New Game</button>
            </div>
        </div>
    )
}