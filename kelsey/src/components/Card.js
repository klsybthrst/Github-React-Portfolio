import React from "react";
 

function Card(props) {
  return (
    <div className="card portfolioCard">
          <img className="card-img-top" alt={props.project} src={props.img}/>
          <div className="card-body">
            <h5 className="card-title">{props.project}</h5>
            <p className="card-text">{props.dscrptn}</p>
            <a href={props.projectLink} className="btn btn-outline-secondary" rel="noreferrer" target="_blank">{props.project}</a>
            <a href={props.githubLink} className="btn btn-outline-secondary" rel="noreferrer" target="_blank"><i className="fab fa-github fa-md"></i></a>
          </div>
    </div>
    
  );
}

export default Card;