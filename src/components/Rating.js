import React from 'react';
import '../style.css'
import stars from '../images/icon-star.svg';



function Rating(props){
    return(
        <div className="rating">
           
           <div className="stars">
           <img className="star" src={stars}/>
           <img className="star" src={stars}/>
           <img className="star" src={stars}/>
           <img className="star" src={stars}/>
           <img className="star" src={stars}/>
           </div>

           <p className="rating-review">{props.text}</p> 
        </div>
    );
}

export default Rating;