import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const [error,setError] = useState("");

    const handleLogin = () => {
        if(username === "admin@gmail.com" && password === "admin@123"){
            localStorage.setItem("isLoggedIn",true);
            navigate("/todos")
        }
        else{
            setError("Invalid email or password");
        }
    }

    return(
       <div className="container">
             <h1>Login</h1>
             <div className="box">
                <input type="email" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="loginbtn" onClick={handleLogin}>Login</button>
                {error && <p style={{color:"red",fontSize:"25"}}>{error}</p>}
        </div>
       </div>
    )
}

export default Login;