import React from 'react';
import '../styles/Pokelist.css';
import CustomCard from './CustomCard';
import Pokelogo from '../media/poke-logo.png'

const PokeList = ({listOfPokemon, openModal, pokemonStartIndex}) => {

    let pokemon = listOfPokemon.map((creature, index) =>{
        const imgBaseUri = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
        let pokemonId = index + pokemonStartIndex;
        let imageFinalUri = imgBaseUri + pokemonId + '.png';
        return(

            <div key={creature.name} >
                <CustomCard cardCaptionBold = {creature.name}
                cardImage = {imageFinalUri} />
            </div>
        )

    });

    return pokemon;
}

export default PokeList;

    

    
