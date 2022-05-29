import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'
import Slides from "../components/Slides";

import Navigation from "../components/Navigation";
import Typemove from "../components/Typemove";

import About from "../components/About"
import {Container} from "react-bootstrap";
import { useState } from 'react';
import Welcome from "../components/Welcome";


function Intro() {
    const message = "<p>The only game that makes you better the more your workout<br></p>"
    const title_message = "<strong>Trainers of the Realm</strong>"

    let [title, setTitle] = useState([title_message]);
    let [info, setInfo] = useState([message]);
    let [story, setStory] = useState([""]);

    const handleClick=(event)=>{
        console.log(event.target.id)
        if(event.target.id ==="home"){
            setTitle(title_message)
            setInfo(message)
            setStory("")
        }
        if(event.target.id ==="lore"){
            setTitle("Lore")
            setInfo("It was a dark and stormy night...and the warriors from hell were coming")
            setStory("")
        }
    }

    return (
        <div className="App">
            <header><span id="lore" /><span id="home" />
                <Navigation display={handleClick} />
            </header>


            <Container fluid className="text-center hero">
                <div className="p-6">
                    <h2 className="navigation text-white"><div dangerouslySetInnerHTML={{ __html: title }}></div></h2>
                    <div className="text-white" dangerouslySetInnerHTML={{ __html: info }}></div><p>{story}</p>
                </div>
                <Typemove />
                <Welcome />
            </Container>
            <Slides />
            <About />



        </div>
    );
}

export default Intro;