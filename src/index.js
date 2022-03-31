import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/FbContext'
import firebase from './firebase/Config'
import Context from './store/FbContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseContext.Provider value={{firebase}}>
      <Context>

         <App /> 
      </Context>
    
    </FirebaseContext.Provider>
    </BrowserRouter>
    

  </React.StrictMode>,
  document.getElementById('root')
);


