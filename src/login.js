import React, {useCallback} from 'react';
import "regenerator-runtime"
import {UserContext} from './index.js';
import {Card} from './context.js';
import app from './auth.js'
export const Login = () =>{
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userEntry, setUserEntry] = React.useState('');
  const ctx = React.useContext(UserContext);  
  var currentEmail = '';
  var currentPassword = '';

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
  function isValidEmail(E) {
    var r = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
    return E.match(r)!=null
  }

  function handleFieldChange() {
    
    if(document.getElementById("email").value.length==0 ||  document.getElementById("password").value.length==0) document.getElementById("submitLoginButton").disabled=true;
    else {
      document.getElementById("submitLoginButton").disabled=false;
      document.getElementById("submitLoginButton").onclick = handleSubmit;
    }
  }

  function handleEmailChange(e) {
    
    currentEmail = e.currentTarget.value;
    setEmail(currentEmail);
    validateEmail();
  }  
  function handlePasswordChange(e) {
    
    currentPassword = e.currentTarget.value;
    setPassword(currentPassword);
    
  }    
  var handleSubmit = useCallback(async e => {
    e.preventDefault();
  })



  var handleSubmit = useCallback(async e=>{
    e.preventDefault();
    
    try {
      var user = ctx.users[ctx.currentUserIdx]
      console.log("user",user)
      // if(userEntry !='') {
      //   if(currentPassword == userEntry.password) {
      //     ctx.currentUserIdx = userEntry.id;
      //     document.getElementById("userGreeting").innerHTML = `Greetings, ${ctx.users[ctx.currentUserIdx].name}`
      //     document.getElementById("userGreeting").display = 'block'
      //     setShow(false);
      //   }
      // }
   
      await firebase.auth(app).signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value)
      
    }
    catch(err) {alert(err)}
    
  },[])



  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }
   return (
    <div>
      <Card  bgcolor="light" txtcolor="dark" header="Login" status={status}
      body={show ? (  
        <div>
              
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e=>{ 
            handleEmailChange(e)
            handleFieldChange();
            }}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={
            e => {
              handlePasswordChange(e)
              handleFieldChange();
            }}
          /><br/>
          <button id="submitLoginButton" type="submit" disabled className="btn btn-success" onClick={(e)=>handleSubmit(e)}>Login</button>
        </div>
            ): (
              <div style={{height:'120px'}}>
                <h5 id="successText">Success</h5>

                <svg id="successIcon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="green" className="bi bi-check-circle" viewBox="0 0 25 25">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
               
                <button   type="submit" className="btn btn-secondary successButton" onClick={clearForm}>Return</button>
              </div>
            )
        }
    />
    </div>
    
  )  
}


