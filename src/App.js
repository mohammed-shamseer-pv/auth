import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useEffect,useContext } from "react";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from './components/Signup';
import { AuthContext, FirebaseContext} from "./store/FbContext";
import Data from './store/Data'

function App() {
  const {setUser,setEmail,setPhone} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      console.log(user)
    })
  })


  return (
    <div>
       <Data>
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
      
        <Route path="/home" element={<Home/>}/>
         
       

        </Routes>  
         </Data>
       
      
    </div>
  );
}

export default App;
