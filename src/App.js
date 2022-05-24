import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Slides from "./components/Slides";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import {Container} from "react-bootstrap";
import { useState } from 'react';

function App() {
    let [title, setTitle] = useState(["Crush your enemies"]);
    let [info, setInfo] = useState(["Get in shape"]);

    const handleClick=(event)=>{
        console.log(event.target.id)
        if(event.target.id ==="about"){
            setTitle("ABOUT")
            setInfo("Created by @dantan")
        }
        if(event.target.id ==="home"){
            setTitle("Crush your enemies")
            setInfo("Get in shape")
        }
        if(event.target.id ==="lore"){
            setTitle("Trainers of the Realm")
            setInfo("It was a dark and stormy night...")
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
            <h4>{info}</h4>
            </div>
        </Container>
        <Signup  />
        <Slides />
    </div>
  );
}

export default App;
