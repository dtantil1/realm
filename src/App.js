
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Login from "./pages/Login";

import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router"

import Register from "./pages/Register";
import Intro from "./pages/Intro"
import Navigation from "./components/Navigation";
import Home from "./pages/Home";


function App() {


  return (
    <div className="App">
        <BrowserRouter>
            <Navigation />
      <header><span id="lore" /><span id="home" />
      </header>

            <Routes>
                <Route path="/" element={<Intro />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>




    </div>
  );
}

export default App;
