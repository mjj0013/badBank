import React from 'react';
import {UserContext} from './index.js';
import {Card} from './context.js';
import { SymbolDecomp } from './symbolDecomp.js';




export const Withdraw = () =>{
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext); 
  function changeBalance() {
    var val = document.getElementById("withdrawAmount").value
    console.log("val",val);
    if(ctx.users[ctx.currentUserIdx].balance-val<0) {
  
    }
    else if(ctx.users[ctx.currentUserIdx].balance-val==0){
  

      document.getElementById("withdrawAlert").innerHTML = `Current Balance = $${ctx.users[ctx.currentUserIdx].balance}`
    }
    else {
      ctx.users[ctx.currentUserIdx].balance -= val;
      document.getElementById("withdrawAlert").innerHTML = `Current Balance = $${ctx.users[ctx.currentUserIdx].balance}`
    }
    
  }
  return (
    <Card bgcolor="light" txtcolor="dark" header="Withdraw" status={status}
      body={
        <div>

            <div id="withdrawAlert" className="alert alert-success" role="alert">Current Balance = ${ctx.users[ctx.currentUserIdx].balance}</div>
            <div className="input-group mb-3" >
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input id="withdrawAmount" type="number" className="form-control"></input>
              <input type="submit" value="Withdraw" className="form-control" onClick={changeBalance}></input>
            </div>
          </div>
        }
    />
    
  )
}
