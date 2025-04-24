import React from 'react';


const Card = ({films}) => {
    return (
        <div>
            <img src={films} alt="" />
            <p>{films.popularity}</p>
        </div>
    );
};

export default Card;