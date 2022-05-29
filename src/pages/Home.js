import {useEffect, useState} from "react";
const USER_URL = 'https://trainer-realms.herokuapp.com/api/user'
//const USER_URL='http://127.0.0.1:8000/api/user'

function Home(){

    const [name, setName] = useState('')

    useEffect( ()=>{
        (
            async () =>{
                const response = await fetch(USER_URL, {
                    credentials: 'include',
                    mode: 'cors',
                    method:'GET',
                    headers:{'Content-Type':'application/json'}
                });
                const content = await response.json();
                console.log("From api/user ")
                console.log(content)
                setName(content.name);
            }
        )()
        });

    return(
        <div className="text-white m-5">
            <h2 className="m-5 p-3 text-center">Home</h2>
            <p> {name ? 'Hi ' + name : 'You are not logged in'}</p>
        </div>
    )
}

export default Home