import React from "react";
import "./style.css";
import Card from "./components/Card";
import Rating from "./components/Rating";
import firstImg from './images/image-colton.jpg';
import secondImg from './images/image-irene.jpg';

import thirdImg from './images/image-anne.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">


        <div className="blurb">
          <h1>10,000+ of our users love our products.</h1>
          <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </div>

        <div className="card-container">

        <Card image={firstImg} name="Colton Smith" review="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" />
        <Card image={secondImg} name="Irene Roberts" review="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery" />
        <Card image={thirdImg} name="Anne Wallace" review="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!" />
        </div>


        <div className="rating-container">
        <Rating text="Rated 5 Stars in Reviews" />
        <Rating text="Rated 5 Stars in Report Guru" />
        <Rating text="Rated 5 Stars in BestTech" />
        </div>
     
      </div>
    </div>
  );
}

export default App;
