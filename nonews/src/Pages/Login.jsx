import React,{useState,useContext} from "react";
import {Link,useNavigate} from "react-router-dom"
import {UserContext} from "../App"
import M from 'materialize-css'
const Login = () => {
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = () =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            return M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error)
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            else {
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data})
                M.toast({html:"SignedIn Success",classes:"#43a047 green darken-1"})
                navigate('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        
        <div className="mycard">
            <div className="card auth-card">
                <h2>NoNews</h2>
                <input
                type="text"
                placeholder="email"
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value = {password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={()=>PostData()}
                >
                    Login
                </button>
                <h6>
                    <Link to = "/signup">Dont have an Account- <button>Create Now</button></Link>
                </h6>
            </div>
        </div>        
        
    )
}

export default Login