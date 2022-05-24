import {Container, Form, Button} from "react-bootstrap";
import './Signup.css'
function Signup(){
    return(
        <Container className="register p-3">

        <h3 className="text-center">Join Beta Program</h3>
            <p className="text-center">Help make the next release of Trainers of the Realm and
                receive an exclusive invitation to play</p>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Your email will be your username
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Preferred Exercises</Form.Label>
                    <Form.Check type="checkbox" label="Running" />
                    <Form.Check type="checkbox" label="Weightlifting" />
                    <Form.Check type="checkbox" label="Swimming" />
                    <Form.Check type="checkbox" label="Crossfit" />
                    <Form.Check type="checkbox" label="Other" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
export default Signup;