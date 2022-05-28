import './About.css'


function About(){
    return(
        <div className=" knight mt-4 text-center">
            <div className="p-4">
            <h2 className="navigation" id="about">About </h2>
                <p>Trainers of the Realm is a game where <span className="text-primary"><b>YOU</b></span> work out to level up your
                character. <span className="text-primary">Run </span>
                    to improve endurance,
                <span className="text-primary"> lift</span> to improve strength,
                <span className="text-primary"> excercise</span> to defeat in-game rivals.
                Using geolocation, you can interact with your neighborhood to encounter formidable enemies
                and conquer the Realm.
            </p>
            </div>
        </div>
    )
}

export default About;