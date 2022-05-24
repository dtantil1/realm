import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Slides from "./components/Slides";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
      <Navigation />
      </header>
        <Container fluid className="text-center hero">
            <div className="p-4">
            <h2>Crush your enemies</h2>
            <h4>Get in shape</h4>
            </div>
        </Container>
        <Signup />
        <Slides />
    </div>
  );
}

export default App;
