import axios from 'axios';
import React from 'react';


const Card = ({films}) => {
    return (
        <div>
            
            {/* <img src="https://image.tmdb.org/t/p/original/ + id" alt="" /> */}
            <p>{films.title}</p>
            <em>{films.release_date}</em>
            <p>{films.vote_average}</p>
            <p>{films.genre_ids}</p>
        </div>
    );
};

export default Card;


// 🏋️Todo List 🏋️
 
// 1 - Navigation (2 éléments, Home et Coups de coeur)
// 2 - Fetcher les données et les stocker
// 3 - Affichage d’une carte avec :
//           - Image (https://image.tmdb.org/t/p/original/ + posterId)
//           - Titre
//           - Date de sortie
//           - Note du film
//           - Genres
//           - Synopsis
//           - Bouton (ajouter coups de cœur)
 
// 4 - Paramétrer input de recherche
 
// 5 - Bonus : 
//           - Paramétrer bouton top et flop
//           - Sauvegarder dans le local storage les coups de cœur, les afficher dans la page prévue à cet effet.
 
// 6 - Apporter de l’attention au style de l’app pour s’entrainer à pratiquer avec React.
 