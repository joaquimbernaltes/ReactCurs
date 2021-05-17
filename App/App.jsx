import React from 'react';

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
    <div>
        <h1>Pràctica 1 en React</h1>
        <fieldset>
            <legend>Introduiex un nou dessitg</legend>
            <input placeholder="Introdueix el teu dessitg aqui  " />
        </fieldset>
        <ul>
            {/* Imprimir l'array */}
            {wishes.map(({ text, done}, id) => (
                <li>
                    <label htmlFor={`wish${id}`}>
                        <input id={`wish${id}`} type="checkbox" checked={done} />
                        {text}
                    </label>
                </li>
            ))}
        </ul>
        <button type="button">Guardar</button>
    </div>;

export default App;