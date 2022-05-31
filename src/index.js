import {Home} from './home.js';
import {CreateAccount} from './createaccount.js';
import {Login} from './login.js';
import {Withdraw} from './withdraw.js';

import {AllData} from './alldata.js'
import {Deposit} from './deposit.js';
import {NavBar} from './navbar.js';

import {HashRouter, Route, Routes, Navigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import { SymbolDecomp } from "./symbolDecomp"

import {ProtectedRoute} from './ProtectedRoute.js'

export const UserContext = React.createContext(null);
import app from './auth.js'

const Spa = () =>{
  
  const [state, setState] = useState({
    userDataPresent:false,
    listener:null,
    currentUser: null
  })
  useEffect(() =>{
    if(!state.listener) {
      setState({...state, listener:firebase.auth(app).onAuthStateChanged((user)=> {
        if(user) {
          setState(old=>({...old, userDataPresent:true, currentUser:user}))
        }
        else setState(old=>({...old, userDataPresent:true, currentUser:null}))
      })})
    }
    return function() {if(state.listener) state.listener()}
    
  }, []);
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{currentUserIdx:0,users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, id:0}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>

            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />} />

            <Route path="/deposit/" element={state.currentUser == null?
              (<Navigate to="/login/"></Navigate>) : (<Deposit/>)
                
            } />
            <Route path="/withdraw/" element={state.currentUser == null?
              (<Navigate to="/login/"></Navigate>) : (<Withdraw/>)
            }/>
            <Route path="/alldata/" element={state.currentUser == null?
              (<Navigate to="/login/"></Navigate>) : (<AllData/>)
            }/>
      
              
        
            
          </Routes>
        </div>
      </UserContext.Provider>      
      <SymbolDecomp  height="500px" currentPage="bank"/>
      <div id="pageBg" />

    </HashRouter>
  );
}

function render(Component) {
	return ReactDOM.render(<Component />, document.getElementById("root"));
}
render(Spa)


