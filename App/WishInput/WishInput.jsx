import React from 'react';

//Funció que tindrà l input per a afegir
const WishInput = () => (
    <fieldset className="wish-input">
            <legend className="wish-input__label">Introduiex un nou dessitg</legend>
            <input className="wish-input__field" placeholder="Introdueix el teu dessitg aqui  " />
    </fieldset>
);

//exportem com a default para que sigui accessible desde index.js
export default WishInput;