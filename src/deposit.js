import React from 'react';
import {UserContext} from './index.js';
import {Card} from './context.js';
import { SymbolDecomp } from './symbolDecomp.js';




export const Deposit = ()=>{
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext); 
  function changeBalance() {
    var val = parseInt(document.getElementById("depositAmount").value)
    ctx.users[ctx.currentUserIdx].balance += val;
    document.getElementById("depositAlert").innerHTML = `Current Balance = $${ctx.users[ctx.currentUserIdx].balance}`
    
  }
  return (
    <Card bgcolor="light" txtcolor="dark" header="Deposit" status={status}
      body={
        <div>
          <div id="depositAlert" className="alert alert-success" role="alert">Current Balance = ${ctx.users[ctx.currentUserIdx].balance}</div>
        
          <div className="input-group mb-3" >
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input id="depositAmount" type="number" className="form-control"></input>
            <input type="submit" value="Deposit" className="form-control" onClick={changeBalance}></input>
          </div>
        </div>
        }
    />
  )

}
