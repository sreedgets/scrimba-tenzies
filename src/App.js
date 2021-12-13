import React, {useState} from 'react';
import Die from './Components/Die';
import {nanoid} from 'nanoid';

export default function App() {
    const [dice, setDice] = useState(allNewDice());

    const diceElements = dice.map(die => (
        <Die 
            value={die.value} 
            held={die.isHeld} 
            key={die.id}
            holdDie={() => holdDie(die.id)}
        />
    ));

    function allNewDice() {
        const diceArr = [];
        for (let i = 0; i < 10; i++) {
            const newDie = {
                value: Math.floor(Math.random() * 6 + 1),
                isHeld: false,
                id: nanoid()
            }      
            diceArr.push(newDie);
        }
        return diceArr;
    }

    function holdDie(id) {
        setDice(prev => {
            return prev.map(die => {
                return die.id === id ? {...die, isHeld: !die.isHeld} : die;
            })
        });
    }

    function rollDice() {
        setDice(prev => prev.map(die => {
            return die.isHeld ? 
                die : 
                {...die, value: Math.floor(Math.random() * 6 + 1)};
        }));
    }

    return (
        <main className="tenzies--container">
            <div className="tenzies--header-wrapper">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="tenzies--dice-wrapper">
                {diceElements}
            </div>
            <div className="tenzies--button-wrapper">
                <button 
                    className="tenzies--roll"
                    onClick={rollDice}
                >
                    Roll
                </button>
            </div>
        </main>
    )
}