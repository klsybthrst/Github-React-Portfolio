import React from "react";
 

function CardAbout(props) {
  return (
    <div className="container" style={{padding: "50px"}}>
      <div className="row ">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <div className="jumboInfo">
            <h1 className="mt-0">Hi, I'm Kelsey Bathurst</h1>
            <p>Like many people, Covid-19 flipped my world upside down. Currently laid off from the airline industry, I decided to take this time to learn a new skill. I'm enrolled in the University of Toronto's School of Continuing Studies Coding Bootcamp. I hope to expand my knowledge of web design and UX over the next few weeks and take it into the workforce. </p>
          </div>
        </div>    
      </div> 
    </div>
  );
}

export default CardAbout;