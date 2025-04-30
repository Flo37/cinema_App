import axios from 'axios';
import React from 'react';


const Card = ({films}) => {
    const genreFinder=()=>{
        let genreArray=[];
        for(let i = 0; i< films.genre_ids.length;i++){
            switch(films.genre_ids[i]){
                case 28:
                    genreArray.push('Action') 
                    break;
                case 12:
                    genreArray.push('Adventure') 
                    break;
                case 16:
                    genreArray.push('Animation') 
                    break;
                case 35:
                    genreArray.push('comedy') 
                    break;
                case 80:
                    genreArray.push('Crime') 
                    break;
                case 99:
                    genreArray.push('Documentary') 
                    break;
                case 18:
                    genreArray.push('Drama') 
                    break;
                case 10751:
                    genreArray.push('Family') 
                    break;
                case 14:
                    genreArray.push('Fantasy') 
                    break;
                case 36:
                    genreArray.push('Horror') 
                    break;
                case 10402:
                    genreArray.push('Music') 
                    break;
                case 9648:
                    genreArray.push('Mystery') 
                    break;
                case 10749:
                    genreArray.push('Romance') 
                    break;
                case 10751:
                    genreArray.push('Family') 
                    break;
                case 878:
                    genreArray.push('Sience Fiction') 
                    break;
                case 10770:
                    genreArray.push('Ty Movie') 
                    break;
                case 53:
                    genreArray.push('Thriller') 
                    break;
                case 10752:
                    genreArray.push('War') 
                    break;
                case 37:
                    genreArray.push('Floris') 
                    break;
            }
        }
        return genreArray.map(genre=><li>{genre}</li>
        )
    }
    return (
        <div className='card'>
            
            <img src={films.poster_path ?
                 "https://image.tmdb.org/t/p/original/"+films.poster_path :"./img/poster.jpg"} 
                 alt="" />
            <h4>{films.title}</h4>
            <em className='date'>{films.release_date}</em>
            <p className='average'>{films.vote_average}/10 <span className='star'>⭐</span></p>
            <ul className='genre'>
                {
                    films.genre_ids? genreFinder():null
                }
            </ul>
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
 