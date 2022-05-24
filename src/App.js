import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Slides from "./components/Slides";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import {Container} from "react-bootstrap";
import { useState } from 'react';

function App() {
    const message = "<p>The more you work out, the tougher you and your warrior become."

    let [title, setTitle] = useState(["Train. Get in Shape. Level up."]);
    let [info, setInfo] = useState([message]);
    let [story, setStory] = useState([""]);

    const handleClick=(event)=>{
        console.log(event.target.id)
        if(event.target.id ==="about"){
            setTitle("ABOUT")
            setInfo("Created by @dantan")
            setStory("Story by @juampi")
        }
        if(event.target.id ==="home"){
            setTitle("Crush your enemies")
            setInfo("Get in shape")
            setStory("")
        }
        if(event.target.id ==="lore"){
            setTitle("Trainers of the Realm")
            setInfo("It was a dark and stormy night...")
            setStory("")
        }



    }

  return (
    <div className="App">
      <header><span id="top"></span>
      <Navigation display={handleClick} />
      </header>
        <Container fluid className="text-center hero">
            <div className="p-6">
            <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: info }}></div><p>{story}</p>

            </div>
        </Container>
        <Signup  />
        <Slides />
    </div>
  );
}

export default App;
