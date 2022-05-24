import {Container, ListGroup} from "react-bootstrap";

function Factions (){
    return(
        <Container id="factions">
            <h2 className="navigation text-center mt-5 mb-2" id="factions"> Factions</h2>
            <ListGroup className="mb-2">
                <ListGroup.Item action variant="dark">Capulet</ListGroup.Item>
                <ListGroup.Item action variant="dark">Montague</ListGroup.Item>
            </ListGroup>
            <p className="text-center"> Choose wisely...</p>

        </Container>
    )
}
export default Factions;