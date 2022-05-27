import {Container, Form, Button} from "react-bootstrap";
import './Signup.css'
import { useState } from 'react';
function Signup(){
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [sports, setSports] = useState([]);
    const [disable, setDisable] = useState(false);

    async function uploadData(new_data) {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_data)
        };
        const response = await fetch('https://trainer-realms.herokuapp.com/api/registers/', requestOptions);
        const data = await response.json();
        console.log(data)
    }

    function handleSubmit(event){
        event.preventDefault();
        setFirstName(event.target[0].value)
        setLastName(event.target[1].value)
        setEmail(event.target[2].value)
        let selected_sports = ['no preference']
        for(let i=3; i < event.target.length; i++){
            if(event.target[i].checked)
                selected_sports.push(event.target[i].value)
        }
        setSports(selected_sports)
        setDisable(true)
        let data = {
            first_name: event.target[0].value,
            last_name: event.target[1].value,
            email: event.target[2].value,
            workouts: selected_sports.toString()
        }
        uploadData(data)
    }

    const listItems = sports.map((sport) =>
        <li>{sport}</li>
    );


    return(
        <Container className="register p-3"  >
        <h3 className="text-center" id="register">Join Beta Software Program</h3>
            <p className="text-center" hidden={disable}>Help test the next release of Trainers of the Realm and
                receive an exclusive invitation to play</p>
            <Container hidden={!disable}>
                <p> You chose wisely...</p>
                <p> <strong>{firstName} {lastName} </strong> <br /> {email}</p>
                <ul className="list-unstyled">
                    {listItems}
                </ul>
            </Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirstName" hidden={disable}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName" hidden={disable}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" hidden={disable}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        Your email will be your username
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" hidden={disable}>
                    <Form.Label>Preferred Workouts</Form.Label>
                    <Form.Check type="checkbox" value="running" label="Running" />
                    <Form.Check type="checkbox" value="weightlifting" label="Weightlifting" />
                    <Form.Check type="checkbox" value="swimming" label="Swimming" />
                    <Form.Check type="checkbox" value="crossfit" label="Crossfit" />
                    <Form.Check type="checkbox" value="other" label="Other" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={disable}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
export default Signup;