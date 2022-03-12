import {Home} from './home.js';
import {CreateAccount} from './createaccount.js';
import {Login} from './login.js';
import {Withdraw} from './withdraw.js';

import {AllData} from './alldata.js'
import {Deposit} from './deposit.js';
import {NavBar} from './navbar.js';

import {HashRouter, Route, Routes} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';

import { SymbolDecomp } from "./symbolDecomp"

export const UserContext = React.createContext(null);
const Spa = () =>{
  return (
    <HashRouter>
     
      <NavBar />
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/alldata/" element={<AllData/>} />
          </Routes>
          
        </div>
      </UserContext.Provider>      
      <SymbolDecomp height="500px" currentPage="bank"/>
      <div id="pageBg" />
    </HashRouter>
  );
}

function render(Component) {
	return ReactDOM.render(<Component />, document.getElementById("root"));
}

render(Spa)

// ReactDOM.render(<Spa/>,document.getElementById('root'));
