import React from 'react';
import './App.css'

//Array amb objectes
const wishes = [
    { text: 'Anar de vacacions i desconnectar de tot', done: false},
    { text: 'Fer deport', done: true},
    { text: 'Comprar un Tesla', done: false},
    { text: 'Aprovar DAW', done: true},
    { text: 'Aprovar ASIX', done: true},
    { text: 'Aprovar Ciberseguretat', done: false},
    { text: 'Tindre parella', done: false},
]

const App = () => 
    <div className="app">
        <h1>Pràctica 1 en React</h1>
        <fieldset className="wish-input">
            <legend className="wish-input__label">Introduiex un nou dessitg</legend>
            <input className="wish-input__field" placeholder="Introdueix el teu dessitg aqui  " />
        </fieldset>
        <ul className="wish-list">
            {/* Imprimir l'array i tachar-la amb el done ? true, es pot fer ús de ClassNames*/}
            {wishes.map(({ text, done}, id) => (
                <li key={text} className={`wish-list__item ${done ? 'wish-list__item--done label':''}`}>
                    <label htmlFor={`wish${id}`}>
                        <input id={`wish${id}`} type="checkbox" checked={done} />
                        {text}
                    </label>
                </li>
            ))}
        </ul>
        <button className="wish-clear" type="button">Guardar</button>
    </div>;

export default App;