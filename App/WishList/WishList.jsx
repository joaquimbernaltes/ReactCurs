import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WishItem from './WishItem';

//Imprimix la llista 
//Importem la array 
const WishList = ({ wishes, onWishesChange  }) => (
    <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
            <WishItem
                text={text}
                done={done}
                onDoneChange={(value) => {
                const updatedWishes = [...wishes];
                updatedWishes[i].done = value;
                onWishesChange(updatedWishes);
                }}
                id={`wish${i}`}
                key={text}
            />
        ))}
    </ul>
);

//Shape permet definir l'estructura del objecte
WishList.propTypes = {
    wishes: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool,
            text: PropTypes.string,
        }),
    ),
};

//En cas de que no pase cap valor, pasarem un array buida
WishList.defaultProps = {
    wishes: [],
};

//exportem com a default para que sigui accessible desde index.js
export default WishList;