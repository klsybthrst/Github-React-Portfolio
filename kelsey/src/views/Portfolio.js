import React from "react";
import Card from "../components/Card"
import TravelBugHomepageSS from "../components/assets/TravelBugHomepageSS.png"
import DayPlanner from "../components/assets/DayPlanner.png"
import JingleMallHomepage from "../components/assets/JingleMallHomepage.png"
import weatherDashboard from "../components/assets/weatherDashboard.png"
import NoteTaker from "../components/assets/NoteTaker.png"
import Burger from "../components/assets/Burger.png"



function Portfolio(props) {
  return (
    <div>
        <div className="row">
          <div className="col-sm-6">
            <Card
              img={TravelBugHomepageSS}
              project="TravelBug"
              dscrptn="Check out TravelBug! A team project I collaborated on, this travel app can help you decide where to go on your next vacation. Simply search a city and this app will provide you with the weather, hotels and attractions."
              projectLink="https://klsybthrst.github.io/TravelBug/"
              githubLink="https://github.com/klsybthrst/TravelBug" />
          </div>
          <div className="col-sm-6">
            <Card
            img={DayPlanner}
            project="Day Planner"
            dscrptn="Plan your day with ease as this application changes colour to keep up to date and saves time entries into local storage."
            projectLink="https://klsybthrst.github.io/Day-Planner/"
            githubLink="https://github.com/klsybthrst/Day-Planner" /> 
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Card
            img={JingleMallHomepage}
            project="Jingle Mall"
            dscrptn="Take a look a Jingle Mall! This is your one stop shop for making your lists and checking them twice. Create and organize gift lists with ease, and be ready for the holiday season."
            projectLink="https://guarded-castle-93952.herokuapp.com/index.html"
            githubLink="https://github.com/klsybthrst/Project-2-JingleMall" /> 
          </div>
          <div className="col-sm-6">
            <Card
            img={weatherDashboard}
            project="Weather Dashboard"
            dscrptn="Search cities to find out current weather and the five day weather forecast. Using local storage, there is no need to keep track of you search history."
            projectLink="https://klsybthrst.github.io/Weather-App/"
            githubLink="https://github.com/klsybthrst/Weather-App" /> 
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Card
            img={NoteTaker}
            project="Note Taker"
            dscrptn="This note taking application allows you to type and save notes with a title and text area. Using ExpressJs, the user can save and delete notes as they please."
            projectLink="https://desolate-citadel-47163.herokuapp.com/"
            githubLink="https://github.com/klsybthrst/Note-Taker" /> 
          </div>
          <div className="col-sm-6">
            <Card
            img={Burger}
            project="Eat-Da-Burger"
            dscrptn="Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name as available, the app will display the burger on the left. When the user selects Devoured, the burger moves to the right and is all gone. This app stores every burger in a database, whether devoured or not."
            projectLink="https://still-shelf-73899.herokuapp.com/"
            githubLink="https://github.com/klsybthrst/Burger" /> 
          </div>
        </div>
    </div>
    
  );
}

export default Portfolio;