import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';
import '../styles/Pokelist.css';
import CustomCard from './CustomCard';

const PokeList = ({listOfPokemon, openModal}) => {

    let pokemon = listOfPokemon.map((creature) =>{
        return(

            <div key={creature.name} >
                <CustomCard cardCaptionBold = {creature.name} />
            </div>
        )

    });

    return pokemon;
}

export default PokeList;

    

    
