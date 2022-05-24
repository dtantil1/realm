import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Slides from "./components/Slides";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import Factions from "./components/Factions";
import {Container} from "react-bootstrap";
import { useState } from 'react';

function App() {
    const message = "<p>Level-up your warrior...and yourself.<br>Time to <strong>conquer the Realm.</strong></p>"
    const title_message = "<strong>Trainers of the Realm</strong>"

    let [title, setTitle] = useState([title_message]);
    let [info, setInfo] = useState([message]);
    let [story, setStory] = useState([""]);

    const handleClick=(event)=>{
        console.log(event.target.id)
        if(event.target.id ==="about"){
            setTitle("About")
            setInfo("Created by @dantan")
            setStory("Story by @juampi")
        }
        if(event.target.id ==="home"){
            setTitle(title_message)
            setInfo(message)
            setStory("")
        }
        if(event.target.id ==="lore"){
            setTitle("History of the Realm")
            setInfo("It was a dark and stormy night...and the warriors from hell were coming")
            setStory("")
        }
    }

  return (
    <div className="App">
      <header><span id="about"></span><span id="lore"></span><span id="home"></span>
      <Navigation display={handleClick} />
      </header>
        <Container fluid className="text-center hero">
            <div className="p-6">
            <h2 className="navigation"><div dangerouslySetInnerHTML={{ __html: title }}></div></h2>
                <div dangerouslySetInnerHTML={{ __html: info }}></div><p>{story}</p>
            </div>
        </Container>
        <Signup  />
        <Slides />
        <Factions />
    </div>
  );
}

export default App;
