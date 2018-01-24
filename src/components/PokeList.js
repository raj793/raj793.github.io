import React from 'react';
import { Card } from 'antd';

const PokeList = ({listOfPokemon}) => {

    let pokemon = listOfPokemon.map((creature) =>{
        return(
            <Card className="SingleCard" title={creature.name} style={{ width: 300 }} >
            </Card>
        )

    })

    return(
        <div>
        {pokemon}
        </div>
    );
}

export default PokeList;

    

    
