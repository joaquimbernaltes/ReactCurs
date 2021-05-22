import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Imprimix la llista 
//Importem la array 
const WishList = ({ wishes }) => (
    <ul className="wish-list">
            {/* Imprimir l'array i tachar-la amb el done ? true, es pot fer ús de ClassNames*/}
            {wishes.map(({ text, done}, id) => (
                <li 
                    key={text} 
                    className={classNames('wish-list__item', {
                        'wish-list__item--done label': done,
                    })}>
                    
                    <input id={`wish${id}`} type="checkbox" checked={done} />
                    <label htmlFor={`wish${id}`}>{text}</label>
                </li>
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