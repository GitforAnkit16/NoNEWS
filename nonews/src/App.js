import React,{useEffect,createContext,useReducer,useContext} from 'react'
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import CreatePost from './Pages/CreatePost'
import UserProfile from './Pages/userProfile'
import {reducer,initialState} from './reducers/userReducer'
import SubscribedUserPosts from "./Pages/SubscribedUserPosts"
import News from "./Pages/News"
export const UserContext = createContext()

const Routing =  () =>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }
    else 
      navigate('/login')
    
  },[])
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<Signup />} > </Route>
      <Route path='/login' element={<Login />}  ></Route>
      <Route exact path='/profile' element={<Profile />} ></Route>
      <Route path='/create' element={<CreatePost />} ></Route>
      <Route path="/profile/:userid" element = {<UserProfile />} ></Route>
      <Route path="/myfollowingspost" element = {<SubscribedUserPosts />} ></Route>
      <Route path="/news" element = {<News />} ></Route>
    </Routes>
  )
}
function App() {
 const [state,dispatch] = useReducer(reducer,initialState)
  return (  
    <UserContext.Provider value = {{state,dispatch}}>
      <BrowserRouter>
        <NavBar />
        <Routing/>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
