
import "./index.css"
import React from 'react';
import {UserContext} from './index.js';
var currentForm = "home"
function homeOnHover() {
  
  if(currentForm=="withdraw" || currentForm=="deposit") document.getElementById("roofToFill").beginElement()
  currentForm = "home"
  document.getElementById("toHomeFoundation").beginElement();
  document.getElementById("toHomeCol1").beginElement();
  document.getElementById("toHomeCol2").beginElement();
  document.getElementById("toHomeCol3").beginElement();
  document.getElementById("toHomeCol4").beginElement();
  document.getElementById("toHomeFloor").beginElement();
  document.getElementById("toHomeCeiling").beginElement();
  document.getElementById("toHomeRoof").beginElement();
  
}

function createAccountOnHover() {
  
  if(currentForm=="withdraw" || currentForm=="deposit") document.getElementById("roofToFill").beginElement()
  currentForm = "createAccount"
  document.getElementById("toCreateAccountFoundation").beginElement();
  document.getElementById("toCreateAccountCol1").beginElement();
  document.getElementById("toCreateAccountCol2").beginElement();
  document.getElementById("toCreateAccountCol3").beginElement();
  document.getElementById("toCreateAccountCol4").beginElement();
  document.getElementById("toCreateAccountFloor").beginElement();
  document.getElementById("toCreateAccountCeiling").beginElement();
  document.getElementById("toCreateAccountRoof").beginElement();
  
}

function loginOnHover() {
 
  if(currentForm=="withdraw" || currentForm=="deposit") document.getElementById("roofToFill").beginElement()
  currentForm = "login"
  document.getElementById("toLoginFoundation").beginElement();
  document.getElementById("toLoginCol1").beginElement();
  document.getElementById("toLoginCol2").beginElement();
  document.getElementById("toLoginCol3").beginElement();
  document.getElementById("toLoginCol4").beginElement();
  document.getElementById("toLoginFloor").beginElement();
  document.getElementById("toLoginCeiling").beginElement();
  document.getElementById("toLoginRoof").beginElement();
  
}

function withdrawOnHover() {
  if(currentForm!="deposit") document.getElementById("roofToClear").beginElement()
  currentForm = "withdraw"
  // document.getElementById("roofToClear").beginElement()
  document.getElementById("toWithdrawFoundation").beginElement();
  document.getElementById("toWithdrawCol1").beginElement();
  document.getElementById("toWithdrawCol2").beginElement();
  document.getElementById("toWithdrawCol3").beginElement();
  document.getElementById("toWithdrawCol4").beginElement();
  document.getElementById("toWithdrawFloor").beginElement();
  document.getElementById("toWithdrawCeiling").beginElement();
  document.getElementById("toWithdrawRoof").beginElement();
  
}

function depositOnHover() {
  if(currentForm!="withdraw") document.getElementById("roofToClear").beginElement()
  currentForm = "deposit"
  document.getElementById("toDepositFoundation").beginElement();
  document.getElementById("toDepositCol1").beginElement();
  document.getElementById("toDepositCol2").beginElement();
  document.getElementById("toDepositCol3").beginElement();
  document.getElementById("toDepositCol4").beginElement();
  document.getElementById("toDepositFloor").beginElement();
  document.getElementById("toDepositCeiling").beginElement();
  document.getElementById("toDepositRoof").beginElement();
 
}
function databaseOnHover() {
  if(currentForm=="withdraw" || currentForm=="deposit") document.getElementById("roofToFill").beginElement()
  currentForm = "allData"
  document.getElementById("toDatabaseFoundation").beginElement();
  document.getElementById("toDatabaseCol1").beginElement();
  document.getElementById("toDatabaseCol2").beginElement();
  document.getElementById("toDatabaseCol3").beginElement();
  document.getElementById("toDatabaseCol4").beginElement();
  document.getElementById("toDatabaseFloor").beginElement();
  document.getElementById("toDatabaseCeiling").beginElement();
  document.getElementById("toDatabaseRoof").beginElement();
 
}

function returnToCurrent() {
  var path = window.location.href;
  var secondLast = path.substr(path.lastIndexOf("/",path.length-2));
  console.log("exiting")
  if(currentForm=="home" && secondLast=="/#") return;
  else if(currentForm=="createAccount" && secondLast=="/CreateAccount/") return;
  else if(currentForm=="deposit" && secondLast=="/deposit/") return;
  else if(currentForm=="withdraw" && secondLast=="/withdraw/") return;
  else if(currentForm=="login" && secondLast=="/login/") return;
  else if(currentForm=="allData" && secondLast=="/alldata/") return;
  
  if(path[path.length-1]=="#") homeOnHover();
  else if(secondLast=="/CreateAccount/") createAccountOnHover();
  else if(secondLast=="/login/") loginOnHover();
  else if(secondLast=="/deposit/") depositOnHover();
  else if(secondLast=="/withdraw/") withdrawOnHover();
  else if(secondLast=="/alldata/") databaseOnHover();
  else homeOnHover();

}


function changeCurrentPage(e) {
  var allListItems = document.querySelectorAll(".nav-item.activePage");
  for(let li=0; li < allListItems.length; ++li) {
    allListItems[li].classList.remove("activePage");
  }
  if(e.target.id!="homeLink") e.target.parentElement.classList.add("activePage")
}

export const NavBar=(intUser)=>{
  const ctx = React.useContext(UserContext);  
  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBarMain" onMouseLeave={(e)=>returnToCurrent()}>
        <a id="homeLink" className="navbar-brand" href="#"  onMouseEnter={homeOnHover}  onMouseDown={(e)=>{changeCurrentPage(e)}}
          data-bs-trigger="hover" data-bs-toggle="popover" title="Return to Bad-Bank landing page">Bad Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item">
              <a id="createAccountLink" className="nav-link" href="#/CreateAccount/" onMouseEnter={createAccountOnHover}  onMouseDown={(e)=>{changeCurrentPage(e)}}
                data-bs-trigger="hover" data-bs-toggle="popover" title="Create a new account to access your bank account">Create Account</a>
            </li>
            <li className="nav-item">
              <a id="loginLink" className="nav-link" href="#/login/"  onMouseEnter={loginOnHover}  onMouseDown={(e)=>{changeCurrentPage(e)}}
                data-bs-trigger="hover" data-bs-toggle="popover" title="Enter your credentials to access your bank account">Login</a>
            </li>
            <li className="nav-item">
              <a id="depositLink" className="nav-link" href="#/deposit/" data-bs-trigger="hover" data-bs-toggle="popover" title="Transfer funds into your bank account" onMouseEnter={depositOnHover} onMouseDown={(e)=>{changeCurrentPage(e)}}
                >Deposit</a>
            </li>
            <li className="nav-item" >
              <a id="withdrawLink" className="nav-link" href="#/withdraw/" data-bs-trigger="hover" data-bs-toggle="popover" title="Remove funds from your bank account" onMouseEnter={withdrawOnHover}  onMouseDown={(e)=>{changeCurrentPage(e)}}
              >Withdraw</a>
            </li>

            <li className="nav-item">
              <a id="allDataLink" className="nav-link" href="#/alldata/" onMouseDown={(e)=>{changeCurrentPage(e)}} onMouseEnter={databaseOnHover} 
              data-bs-trigger="hover" data-bs-toggle="popover" title="(ADMIN) View all bank accounts on record">AllData</a>
            </li>  
          </ul>
          <span id="userGreeting" className="navbar-text"></span>    
        </div>
      
      </nav>

  );
}