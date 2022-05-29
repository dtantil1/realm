import './Login.css'
import {useState} from "react";
import {Navigate} from "react-router-dom";
const LOGIN_URL = 'https://trainer-realms.herokuapp.com/api/login'

//const LOGIN_URL='http://127.0.0.1:8000/api/login'


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let data = {
            email: email,
            password: password
        }

        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            credentials: 'include',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        });
        console.log("From login: ")

        console.log(document.cookie)
        setRedirect(true)
    }
    if (redirect) {
        return <Navigate to="/home"/>
    }

    return(
        <div className="align-content m-5">
            <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit} className="form-signin text-white">
                    <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email"
                           id="inputEmail"
                           className="form-control"
                           placeholder="Email address"
                           onChange={e=>setEmail(e.target.value)}
                           required
                           autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password"
                               id="inputPassword"
                               className="form-control"
                               placeholder="Password"
                               onChange={e=>setPassword(e.target.value)}
                               required />
                            <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-white">&copy; Realms 2021 - 2022</p>
            </form>
            </main>
        </div>
    )
}
export default Login;