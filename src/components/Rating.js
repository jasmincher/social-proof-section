import React from 'react';
import '../style.css'



function Rating(props){
    return(
        <div className="rating">
            *****
           <p>{props.text}</p> 
        </div>
    );
}

export default Rating;