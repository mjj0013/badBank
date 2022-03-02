

import {Home} from './home.js';
import {CreateAccount} from './createaccount.js';
import {Login} from './login.js';
import {Withdraw} from './withdraw.js';
import {Balance} from './balance.js';
import {AllData} from './alldata.js'
import {Deposit} from './deposit.js';
import {NavBar} from './navbar.js';
import {HashRouter, Route, Routes} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';

export const UserContext = React.createContext(null);


function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </Routes>
          
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
