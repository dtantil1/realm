import {useState} from "react";
import {Navigate} from "react-router-dom";


function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let beta = false
    const [redirect, setRedirect] = useState(false);

    const handleSubmit= async (e)=>{
        e.preventDefault()
        let data = {
            name: name,
            email: email,
            password:password
        }

        const response = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        });
        const content = await response.json();
        console.log(content);
        setRedirect(true)
    }
    if (redirect) {
        return <Navigate to="/login"/>
    }



    const handleChange=()=>{
        if(beta === false)
            beta = true
        else
            beta = false
    }

    return(
        <div className="align-content m-5 bg-dark.bg-gradient">
            <main className="form-signin w-100 m-auto">
                <form className="form-signin text-white" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                    <label> Full Name
                    <input type="text"
                           id="inputName"
                           className="form-control"
                           placeholder="Apollo Creed"
                           onChange={e=>setName(e.target.value)}
                           required
                           autoFocus />
                    </label>
                    <label>Email
                    <input type="email" id="inputEmail"
                           className="form-control"
                           placeholder="Email address"
                           onChange={e=>setEmail(e.target.value)}
                           required
                           autoFocus />
                    </label>
                    <label> Password
                    <input type="password"
                           id="inputPassword"
                           className="form-control"
                           placeholder="Password"
                           onChange={e=>setPassword(e.target.value)}
                           required />
                    </label>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox"
                                   value="checked" onChange={handleChange}/> Register for Beta Testing </label>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; Realms 2021 - 2022</p>
                </form>
            </main>
        </div>
    )
}

export default Register