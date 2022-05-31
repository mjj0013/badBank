import React, {useCallback} from 'react';
import {UserContext} from './index.js';
import app from './auth.js'
import {Card} from './context.js';
import { SymbolDecomp } from './symbolDecomp.js';
import "regenerator-runtime"



export const CreateAccount = () => {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  


  


  function validate(field, label){
    if(label == 'name') {
      if(field.length==0 || !field) return 'Name is empty'
      else return true;
    }
    if(label == 'email') {
      if(field.length==0 || !field) return 'Email is empty'
      else if(!isValidEmail(field)) return 'Email has invalid format'
      else return true;
    }
    if(label == 'password') {
      if(field.length < 8) return 'Password is less than 8 characters long'
      else return true;
    }
    return true;
    
  }

  var handleCreate = useCallback(async e=> {
    e.preventDefault();
    let tempName = document.getElementById("name").value;
    let tempEmail = document.getElementById("email").value;
    let tempPassword = document.getElementById("password").value;

    var nameStatus=validate(tempName,'name');
    var emailStatus=validate(tempEmail,'email');
    var passwordStatus=validate(tempPassword,'password');
    var tempStatus = 'Error: ';

    if(typeof nameStatus == 'string' || typeof emailStatus== 'string' || typeof passwordStatus=='string') {
      if(typeof nameStatus == 'string')  tempStatus += nameStatus
      if(typeof emailStatus== 'string') tempStatus += (typeof nameStatus=='string')? `, ${emailStatus}`:emailStatus;
      if(typeof passwordStatus=='string') tempStatus += (typeof nameStatus=='string'||typeof emailStatus=='string')? `, ${passwordStatus}`:passwordStatus;
      setStatus(tempStatus);
      document.getElementById("createAccountAlert").style.display = 'block';
      alert(tempStatus);
      setTimeout(() => {
        setStatus('');
        document.getElementById("createAccountAlert").style.display = 'none';
      },3000);

      return;
    }
    else {
      // input is syntactially correct
      try {
        await app.auth().createUserWithEmailAndPassword(tempEmail, tempPassword)
        ctx.users.push({name:tempName,email:tempEmail,password:tempPassword,balance:100, id:ctx.users.length})
        setShow(false);
      }
      catch(error) {alert(error)}

    }
  }, [])
    
    
   
  function isValidEmail(E) {
    var r = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
    return E.match(r)!=null
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  function handleFieldChange() {
    
    if(document.getElementById("email").value.length==0 && document.getElementById("name").value.length==0 && document.getElementById("password").value.length==0) document.getElementById("submitAccountButton").disabled=true;
    else {
      document.getElementById("submitAccountButton").disabled=false;
      document.getElementById("submitAccountButton").onclick = handleCreate;
    }
  }

  return (
    <Card bgcolor="light" txtcolor="dark" header="Create Account" 
      body={show ? (  
        <div>
          <div id="createAccountAlert" className="alert alert-danger" style={{display:'none'}}role="alert">{status}</div>

          Name<br/>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {
            setName(e.currentTarget.value);
            handleFieldChange()
          }}/><br/>

          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {
            setEmail(e.currentTarget.value);
            handleFieldChange()
          }}/><br/>
          
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {
            setPassword(e.currentTarget.value);
            handleFieldChange()
          }}/><br/>

          <button id="submitAccountButton" type="submit" disabled className="btn btn-success" onClick={handleCreate}>Create Account</button>
        </div>
        ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-secondary" onClick={clearForm}>Add another account</button>
              </>
            )
        }
    />
  )
}