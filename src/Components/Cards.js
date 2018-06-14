import React from 'react';
import './Cards.css';

const styles = {
    image: {
    
        // boxShadow: '5px 5px 2.5px grey',
        padding: 0,
        margin: 13
    }
}

const Cards = props => (
    <img style={
        styles.image
        }
        className='img-fluid col-md-2 col-3' 
        src={
            props.cardImage
        } 
        id={
            props.id
        } 
        name={
            props.name
        } 
        onClick={
            props.checkClicked
        } 
        alt="character img"
    /> 
  );



export default Cards;