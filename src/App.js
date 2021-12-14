import React, {useState, useEffect} from 'react';
import Die from './Components/Die';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const sameValue = dice.every(die => die.value === firstValue);

        if (allHeld && sameValue) {
            setTenzies(true);
            console.log('Tenzies!');
        } else {
            console.log('not yet');
        }
    }, [dice]);

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

    function newGame() {
        setTenzies(false);
        setDice(allNewDice());
    }

    return (
        <main className="tenzies--container">
            {tenzies && <Confetti />}
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
                    onClick={tenzies ? newGame : rollDice}
                >
                    {tenzies ? 'Reset Game' : 'Roll'}
                </button>
            </div>
        </main>
    )
}