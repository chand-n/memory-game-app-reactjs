import React from 'react';
import classes from './Card.module.css';
import cardBack from '../../images/blank.png';

export default function Card({ handleClick, id, disabled, flipped, solved, type,  height, width }) {
    
        return (
            <div className={classes.flip_container}
                style={{ width, height }}
                onClick={() => (disabled ? null : handleClick(id))}>
                <div className={classes.flipper}>
                    {/* backside of the card  */}
                    {/* <p  className={classes.flipped ? "back" : "front"} >type</p> */}
                    <img 
                    alt={type}
                    style={{ width, height }} 
                    className={classes.flipped ? "front" : "back"} 
                    // src={ flipped ? front : back}
                    src={ flipped || solved ?  type : cardBack }
                     />
                </div>
            </div>
        )
    }
    