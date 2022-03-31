import React  from 'react'
import { useEffect,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../store/FbContext';
import './Home.css'
import Data, { DataContext } from '../store/Data';
function Home() {
  const navigate = useNavigate()
  const {user} =useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)


  // const [users,setUsers]=useState()
  // const {dataDetiles} =useContext(DataContext)
  // useEffect(()=>{
  //   const {userId}=dataDetiles
  //   firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
  //     res.forEach(doc => {
  //       setUsers(doc.data())
  //     });
  //   })
  // },[])
  return (
    <div>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src=" https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light " alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                  <h5 className="my-3"> {user ? user.displayName : 'null'} </h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    {user && <button onClick={()=>{
                      firebase.auth().signOut();
                      navigate('/login')
                    }} type="button" className="btn btn-primary">Logout</button>}
                    <button type="button" className="btn btn-outline-primary ms-1">Update</button>
                  </div>
                </div>
              </div>

              
            </div>


            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user ? user.displayName : 'null'}</p>
                      
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user ? user.email : "email"}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                   {user &&  
                   <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.phone}</p>
                    </div>

                   }
                    
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Date of birth </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user ? user.phoneNumber: "email"}</p>
                    </div>
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

export default Home