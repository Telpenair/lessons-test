import React from 'react'
import PropTypes from 'prop-types'
import assets from '../assets'

/**
 * Возможно итерацию картинок стоило сделать по id и переименовать файлы картинок, но я не уверен.
 * Со стилями карточки вышла путаница, почему-то флексы два раза не хотели использоваться
 * (ко всем элементам и к элементам внутри карточки), поэтому повесил внутри на флоаты (который стараюсь избегать)
 */
const Card = ({ title, description, isNew, img }) => (
   
    <div className="card">
        <img className="card__image" src={ assets.images[ img ] } alt="lesson image"/>
        <div className="card__text">
            <div className="card__title"><b>{title}</b></div>
            <div className="card__description">{description}</div>
        </div>
        {isNew && <div className="card__label">Новый</div>}
    </div>
);

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    isNew: PropTypes.bool,
    img: PropTypes.string
}

export default Card;