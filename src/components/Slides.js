import {Carousel} from 'react-bootstrap';
import chess from '../images/chess.jpg';
import gym from '../images/gym.jpg'
import dragon from '../images/dragon.jpg'
import './Slides.css'
function Slides (){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 darken"
                    src={chess}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>FIGHT</h3>
                    <p>Level up your attributes and challenge your enemies</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 darken"
                    src={dragon}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>EXPLORE</h3>
                    <p>Conquer the Realm and your neighborhood</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 more_dark"
                    src={gym}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>TRAIN</h3>
                    <p>The more you workout, the tougher your warrior becomes</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slides;