import {useEffect, useState} from "react";
const USER_URL = 'https://trainer-realms.herokuapp.com/api/user'


function Home(){

    const [name, setName] = useState('')

    useEffect( ()=>{
        (
            async () =>{
                const response = await fetch(USER_URL, {
                    method:'GET',
                    credentials: 'include',
                    headers:{'Content-Type':'application/json'},
                });
                const content = await response.json();
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