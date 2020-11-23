import React from "react";
 

function CardContact(props) {
  return (
    <div className="row" style={{padding: "50px"}}>
      <div className="col-sm-6"></div>
      <div className="col-sm-6">
        <div className="jumboInfo">
          <h2 className="mt-0">Let's Get Connected!</h2>
          <p className="card-text">Feel free to contact me via email or connect with me on LinkedIn! And don't forget to take a look at my Github</p>
          <a className="contactIcon" href="https://linkedin.com/in/kelsey-bathurst-7a966361" target="blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a className="contactIcon" href="mailto:kelsey.bathurst@gmail.com">
            <i className="far fa-paper-plane fa-2x"></i>
          </a>
          <a className="contactIcon" href="https://github.com/klsybthrst" target="blank">
            <i className="fab fa-github fa-2x"></i>
          </a>  
        </div>
      </div>    
    </div>
  );
}

export default CardContact;