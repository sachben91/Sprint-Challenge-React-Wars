import React from 'react';
import './StarWars.css';

function StarWars(props){
    return(
        <div className="starwars-card">
        <div className="char-info">
        <h2>{props.starwarChar.name}</h2>
        <p>
            <strong>Birth Year: </strong>{props.starwarChar.birth_year}
            </p>
        <p>
            <strong>Gender: </strong> {props.starwarChar.gender}
            </p>
        <p>
            <strong>Height: </strong> {props.starwarChar.height}
            </p>
        </div>
        </div>

    );
}
export default StarWars