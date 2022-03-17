import React from 'react';
import {UserContext} from './index.js';
import {Card} from './context.js';





export const Withdraw = () =>{
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [activate, setActivate] = React.useState(false)

  const ctx = React.useContext(UserContext); 

  function clearForm(){
    setShow(true);
  }
  function valueChanged() {
    if(document.getElementById("withdrawAmount").value.length > 0) setActivate(true);
    else setActivate(false);
  }
  function changeBalance() {

    var strVal = document.getElementById("withdrawAmount").value;

    try {
      var val = eval(strVal);
      if(val<0) alert("The withdrawn amount cannot be negative.")
      else if(isNaN(val)) alert("The withdrawn amount is Not A Number.")
      else {
        if(ctx.users[ctx.currentUserIdx].balance-val<0) {
          alert("Notice - Your bank account lacks the funds for the requested transaction. This transaction will be processed as an overdraft.")
          ctx.users[ctx.currentUserIdx].balance -= val;
          document.getElementById("withdrawAlert").innerHTML = `Current Balance = $${ctx.users[ctx.currentUserIdx].balance}`
        }
        else if(ctx.users[ctx.currentUserIdx].balance-val==0){
          ctx.users[ctx.currentUserIdx].balance -= val;
          document.getElementById("withdrawAlert").innerHTML = `Current Balance = $${ctx.users[ctx.currentUserIdx].balance}`
        }
        else {
          ctx.users[ctx.currentUserIdx].balance -= val;
          document.getElementById("withdrawAlert").innerHTML = `Current Balance = $${ctx.users[ctx.currentUserIdx].balance}` 
        }
        setShow(false);
        setActivate(false);
        //height:120px;
      }
    }
    catch {
      alert("The withdrawn amount is Not A Number.")
    }
    
  }
  return (
    <Card  bgcolor="light" txtcolor="dark" header="Withdraw" status={status}
      body={show ? (  
        <div >
          <div id="withdrawAlert" className="alert alert-success" role="alert">Current Balance = ${ctx.users[ctx.currentUserIdx].balance}</div>
          <div className="input-group mb-3" >
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input id="withdrawAmount" type="number" className="form-control" onChange={valueChanged}></input>
            <input id="withdrawSubmit" disabled={!activate} type="submit" value="Withdraw" className="form-control btn-success" onClick={changeBalance}></input>
          </div>
        </div>
        ): (
        <div style={{height:'120px'}} >
          <h5 id="successText">Success</h5>

          <svg id="successIcon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="green" className="bi bi-check-circle" viewBox="0 0 25 25">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
          </svg>
          
          <button  type="submit" className="btn btn-secondary successButton" onClick={clearForm}>Make another withdraw</button>
        </div>


        )
        }
    />
    
  )
}
