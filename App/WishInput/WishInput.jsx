import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Funció que tindrà l input per a afegir
//onNewWish es l'event quan se cree algo
const WishInput = ({ onNewWish }) => {
    const [newWishText, setNewWishText] = useState('');
    return(
    <fieldset className="wish-input">
            <legend className="wish-input__label">Introduiex un nou dessitg</legend>
            <input 
                className="wish-input__field" 
                placeholder="Introdueix el teu dessitg aqui" 
                value={newWishText} 
                onChange={e => setNewWishText(e.target.value)} 
                onKeyUp={(e) => {
                    if(e.key == 'Enter' && newWishText.length){
                        //Aqui rebrem el text del seleccionat
                        onNewWish({done: false, text: newWishText});
                        setNewWishText('');
                    }
                }}
            />
    </fieldset>
    );
};

WishInput.propTypes = {
    onNewWish: PropTypes.func,
};

//En cas de que estigui buida, un valor per defecte
WishInput.defaultProp = {
    onNewWish: () => {},
};

//exportem com a default para que sigui accessible desde index.js
export default WishInput;