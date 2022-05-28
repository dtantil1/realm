import {Container, Form, Button} from "react-bootstrap";
import './Signup.css'
import { useState } from 'react';
import ParticleEffectButton from 'react-particle-effect-button'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


function Signup(){
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [sports, setSports] = useState([]);
    const [disable, setDisable] = useState(false);
    let [state, setState] = useState(false);

    const [test, setTest] = useState('');

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
        setState(true)

        setTest('disable')

        setFirstName(event.target[0].value)
        setLastName(event.target[1].value)
        setEmail(event.target[2].value)
        let selected_sports = ['no preference']
        for(let i=3; i < event.target.length; i++){
            if(event.target[i].checked)
                selected_sports.push(event.target[i].value)
        }
        setSports(selected_sports)
        let data = {
            first_name: event.target[0].value,
            last_name: event.target[1].value,
            email: event.target[2].value,
            workouts: selected_sports.toString()
        }
        //uploadData(data)
        setDisable(true)
    }

    const listItems = sports.map((sport) =>
        <li>{sport}</li>
    );


    return(
        <Container className="register p-3"  >
        <h3 className="text-center" id="register">Join Beta Software Program</h3>
            <p className="text-center " hidden={disable}>Help test the next release of Trainers of the Realm and
                receive an exclusive invitation to play</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirstName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" disabled={disable} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" disabled={disable} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" disabled={disable} required/>
                    <Form.Text className="text-muted">
                        Your email will be your username
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Label>Preferred Workouts</Form.Label>
                    <Form.Check type="checkbox" value="running" label="Running" disabled={disable} />
                    <Form.Check type="checkbox" value="cycling" label="Cycling"disabled={disable} />
                    <Form.Check type="checkbox" value="weightlifting" label="Weightlifting" disabled={disable} />
                    <Form.Check type="checkbox" value="other" label="Other" disabled={disable}/>
                </Form.Group >
                <ParticleEffectButton color='#402959' hidden={state}>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </ParticleEffectButton>
                <Container hidden={!disable} className="text-center text-info">
                    <p> Welcome <br /> You chose wisely...<strong> {firstName} {lastName} </strong> </p>
                </Container>
            </Form>
        </Container>
    )
}
export default Signup;