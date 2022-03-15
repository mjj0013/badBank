import React from 'react';

import {UserContext} from './index.js';
import {Card} from './context.js';
export const Login = () =>{
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userEntry, setUserEntry] = React.useState('');
  const ctx = React.useContext(UserContext);  
  var currentEmail = '';

   function validateEmail() {
      var validEntry = false;
      for(let u=0; u < ctx.users.length; ++u) {
        
        if(ctx.users[u].email == currentEmail) {
          console.log(currentEmail ,ctx.users[u])
          setUserEntry(ctx.users[u])
          validEntry = true;
          break;
        }
      }
      
      if(!validEntry) {
        setTimeout(() => setStatus(''),3000);
        setUserEntry('');
      }

  }

  function handleEmailChange(e) {

    console.log('e.currentTarget.value',e.currentTarget.value)
    currentEmail = e.currentTarget.value;
    setEmail(currentEmail);
    validateEmail();

    

  }    
  function handleSubmit(e){
    console.log('userEntry',userEntry)
    if(userEntry!='') {
      if(password == userEntry.password) {
        ctx.currentUserIdx = userEntry.id;
      }
    }
  }  

  function clearForm(){
    
    setEmail('');
    setPassword('');
    setShow(true);
  }
   return (
    <div>
      
      <Card  bgcolor="light" txtcolor="dark" header="Login" status={status}
      body={show ? (  
              <>
              {/* Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/> */}
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e=>{ handleEmailChange(e);}
              }/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Login</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button> */}
              </>
            )
        }
    />
    </div>
    
  )  
}


