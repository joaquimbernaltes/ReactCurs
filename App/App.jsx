import React from 'react';
import './App.css'
import WishInput from './WishInput';
import WishList from './WishList';


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

const App = () => (
    <div className="app">
        <h1>Pràctica 1 en React</h1>
        {/* Imprimeix el input de WishInput */}
        <WishInput />
        
        <WishList wishes={wishes} />
        <button className="wish-clear" type="button">Guardar</button>
    </div>
);

export default App;