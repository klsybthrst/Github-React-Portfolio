import React from "react";
import KelseyBathurstResume from "../components/assets/KelseyBathurstResume.pdf";

function Resume(props) {
  return (
    <div class="jumbotron" style={{margin: "50px"}}>
        <div class="row">
            <h1 class="display-4">Kelsey Bathurst</h1>
            <p class="lead">I work well with people in a leadership role and am self-motivated to work remotely. As a flight attendant I have faced challenges that I have learned from and shaped who I am today. My experience in retail and retail management provided me with a strong foundation of skills consisting of client engagement, resource management, technical aptitude and business acumen. I am ready now to develop my recently acquired full stack web development skills in the work place.
            </p>
        </div>
        <hr class="my-4" />
        <div class="row">
            <div class="col-sm-4">
                <h2>EXPERIENCE</h2>
            </div>
            <div class="col-sm-8">    
                <ul>
                    <li><b>AirCanada</b>, December 2019 – June 2020 F​light Attendant</li>
                    <li><b>AirCanadarouge</b>, May 2013 – November 2019 F​light Attendant/Service Director</li>
                    <li><b>Eddie Bauer</b>, March 2012 - November 2012 ​Acting Assistant Manager</li>
                    <li><b>Eddie Bauer</b>, November 2007 – March 2016 ​Sales Associate</li>
                    <li><b>Sunlife Financial</b>, Summer 2010, 2009, 2008 S​upport Desk Coordinator</li>
                </ul>
            </div>
        </div>
        <hr class="my-4" />
        <div class="row"> 
            <div class="col-sm-4">   
                <h2>EDUCATION</h2>
            </div>
            <div class="col-sm-8">
                <p><b>University of Toronto, School of Continuing Studies, 2020</b>
                    Full Stack Coding Bootcamp</p>
                <p><b>University of Ottawa, 2011</b>
                    Honours Bachelor of Social Science, Major in Sociology with a Minor in History</p>
            </div>        
        </div>
        <hr class="my-4" /> 
        <div class="row">
            <div class="col-sm-4">
                <h2>SKILLS</h2>
            </div>
        </div>    
        <div class="row">
            <div class="col-sm-4">
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>jQuery</li>
                    <li>Detail Oriented</li>
                    <li>Command Line</li>
                </ul>
            </div>    
            <div class="col-sm-4">        
                <ul>    
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>Strong Communicator</li>
                    <li>Microsoft Office 365</li>
                </ul>
            </div>
            <div class="col-sm-4">    
                <ul>    
                    <li>MySQL</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                    <li>Organized</li>
                    <li>G Suite Tools</li>
                </ul>
            </div>
        </div>       
        <hr class="my-4" /> 
        <div class="row">
            <div class="col-sm-4">
                <h2>CERTIFICATIONS</h2>
            </div>
            <div class="col-sm-8">    
                <p>Customer Service Excellence Training – Disney Institute</p>
                <p>CPR and First Aid</p>
            </div>    
        </div>  
        <hr class="my-4" />
        <div>
            <p>Download my resume as a PDF by clicking here</p>
            <a class="btn btn-outline-secondary btn-lg" href={KelseyBathurstResume} role="button" target="blank">Resume</a>
        </div>
    </div>
    
  );
}

export default Resume;