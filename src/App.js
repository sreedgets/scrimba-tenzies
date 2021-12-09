import React from 'react';

export default function App() {
    return (
        <main className="tenzies--container">
            <div className="tenzies--header-wrapper">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="tenzies--dice-wrapper">
                <div className="tenzies--die">0</div>
                <div className="tenzies--die">1</div>
                <div className="tenzies--die">2</div>
                <div className="tenzies--die">3</div>
                <div className="tenzies--die">4</div>
                <div className="tenzies--die">5</div>
                <div className="tenzies--die">6</div>
                <div className="tenzies--die">7</div>
                <div className="tenzies--die">8</div>
                <div className="tenzies--die">9</div>
            </div>
            <div className="tenzies--button-wrapper">
                <button className="tenzies--roll">Roll</button>
            </div>
        </main>
    )
}