import React from 'react';
import {UserContext} from './index.js';
import {Card} from './context.js';
import { SymbolDecomp } from './symbolDecomp.js';
export const CreateAccount = () => {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if(label == 'name') {
      if(field.length ==0 || !field) return 'Name is empty'
      else return true;
    }
    if(label == 'email') {
      if(field.length ==0 || !field) return 'Email is empty'
      else return true;
    }
    if(label == 'password') {
      if(!field) return 'Password is empty'
      else if(field.length < 8) return 'Password is less than 8 characters long'
      else return true;
    }
   
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    var nameStatus=validate(name,     'name');
    var emailStatus=validate(email,    'email');
    var passwordStatus = validate(password, 'password');
    var tempStatus = 'Error: ';



    if(typeof nameStatus == 'string' || typeof emailStatus== 'string' || typeof passwordStatus=='string') {
      if(typeof nameStatus == 'string')  tempStatus += nameStatus
      if(typeof emailStatus== 'string') tempStatus += (typeof nameStatus=='string')?  ', '+emailStatus : emailStatus;
      if(typeof passwordStatus=='string') tempStatus += (tempStatus.length>2)?  ', '+passwordStatus : passwordStatus;


      setStatus(tempStatus);
      setTimeout(() => setStatus(''),3000);

      return;
    }

    
    ctx.users.push({name,email,password,balance:100, id:ctx.users.length});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card bgcolor="light" txtcolor="dark" header="Create Account" status={status}
      body={show ? (  
              <>
              <div id="createAccountAlert" className="alert alert-danger" style={{display:'none'}}role="alert"></div>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              
              </>
              
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )
        }
    />
  )
}