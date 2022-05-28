import {Container} from "react-bootstrap";
import './About.css'
import {Fragment} from "react";

function About(){
    return(
        <div className=" knight mt-4 text-center">
            <div className="p-4">
            <h2 className="navigation" id="about">About </h2>
            <p>Trainers of the Realm is a game where you work out to level up your
                character. Run to improve endurance, lift to improve strength, excercise to defeat in-game rivals.
                Using geolocation, you can interact with your neighborhood to encounter countless enemies
                and progress the story.
            </p>
            </div>
        </div>
    )
}

export default About;