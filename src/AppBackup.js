import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Slides from "./components/Slides";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import Typemove from "./components/Typemove";
import Login from "./pages/Login";

import About from "./components/About"
import {Container} from "react-bootstrap";
import { useState } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router"
import Home from "./pages/Home";
import Register from "./pages/Register";



function App() {
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

            <BrowserRouter>
                <Routes>
                    <Route path="/intro" element={<Intro />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </BrowserRouter>

            <Container fluid className="text-center hero">
                <div className="p-6">
                    <h2 className="navigation"><div dangerouslySetInnerHTML={{ __html: title }}></div></h2>
                    <div dangerouslySetInnerHTML={{ __html: info }}></div><p>{story}</p>
                </div>
                <Typemove />

            </Container>
            <Signup  />
            <Slides />
            <About />



        </div>
    );
}

export default App;