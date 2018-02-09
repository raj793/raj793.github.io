import React from 'react';
import '../styles/custom-card.css';

const CustomCard = ({cardImage, cardCaptionBold, cardDescription}) => {
    return(
        <div className="card">
            <img src={cardImage} alt="Avatar" width="150px" height="150px"></img>
                <div className="container">
                <h4><b>{cardCaptionBold}</b></h4> 
                <p>{cardDescription}</p> 
                </div>
        </div>
    );
}

export default CustomCard;