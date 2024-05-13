import React,{useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const NavBar = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate();
    const renderList = ()=>{
        if(state){
            return [
                <>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <li><Link to="/myfollowingspost">My following post</Link></li>,
                <button className="btn #c62828" green="true" darken-3="true"               
                    onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    navigate('/Login')
                }}
                >
                    Logout
                </button>
                </>
            ]
        }
        else{
            return [
                <li><Link to="/login">Sign In</Link></li>,
                <li><Link to="/signup">Sign Up</Link></li>
            ]
        }
        
    }
    return(
        <nav>
            <div className="nav-wrapper white">
            <Link to = {state?"/":"/login"} className="brand-logo left">NoNews</Link>
            <ul id="nav-mobile" className="right">
                {renderList()}
            </ul>
            </div>
        </nav>
    )        

}
export default NavBar