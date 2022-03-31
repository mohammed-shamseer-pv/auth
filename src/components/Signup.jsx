import React from 'react'
import { useState,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../App.css';
import { FirebaseContext } from '../store/FbContext';
function Signup() {
  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [dob,setDob]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const {firebase}=useContext(FirebaseContext)

  const handilSubmit=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone,
          dateofberth:dob
        }).then(()=>{
          navigate('/home')
        })
      })
    })
    console.log(username)
  }
  return (
  <div>
     
     <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: '15px'}}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <form >
                      <div className="form-outline mb-2">
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Name' />
                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                      </div>
                      
                      <div className="form-outline mb-2">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder=' Email' />
                        <label  className="form-label" htmlFor="form3Example3cg">Your Email</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input value={dob} onChange={(e)=>setDob(e.target.value)} type="date" id="sann" className="form-control form-control-lg" placeholder='' />
                        <label  className="form-label" >Your date of birth</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" id="sann" className="form-control form-control-lg" placeholder='phone' />
                        <label  className="form-label" >Your Phone Number</label>
                      </div>
                     
                      <div className="form-outline mb-2">
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Password'/>
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-2">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button onClick={handilSubmit} type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"> <u>Login here</u></Link> </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}

export default Signup