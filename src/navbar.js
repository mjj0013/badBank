
import "./index.css"
function homeOnHover() {
  document.getElementById("roofToFill").beginElement()
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
  document.getElementById("roofToFill").beginElement()
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
  document.getElementById("roofToFill").beginElement()
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
  document.getElementById("roofToClear").beginElement()
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

  document.getElementById("roofToClear").beginElement()
  document.getElementById("toDepositFoundation").beginElement();
  document.getElementById("toDepositCol1").beginElement();
  document.getElementById("toDepositCol2").beginElement();
  document.getElementById("toDepositCol3").beginElement();
  document.getElementById("toDepositCol4").beginElement();
  document.getElementById("toDepositFloor").beginElement();
  document.getElementById("toDepositCeiling").beginElement();
  document.getElementById("toDepositRoof").beginElement();
  
  
}

function returnToCurrent(e) {
  console.log(window.location.href)
  var path = window.location.href;
  if(path[path.length-1]=="#") homeOnHover();
  else {
    var secondLast = path.substr(path.lastIndexOf("/",path.length-2));
    console.log("secondLast", secondLast)
    if(secondLast=="/CreateAccount/") createAccountOnHover();
    else if(secondLast=="/login/") loginOnHover();
    else if(secondLast=="/deposit/") depositOnHover();
    else if(secondLast=="/withdraw/") withdrawOnHover();
    else if(secondLast=="/alldata/") homeOnHover();
    else homeOnHover();
    
  }
  

}




export const NavBar=()=>{
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBarMain">
      <a id="homeLink" className="navbar-brand" href="#"  onMouseEnter={homeOnHover} onMouseLeave={(e)=>returnToCurrent(e)}>BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="createAccountLink" className="nav-link" href="#/CreateAccount/" onMouseEnter={createAccountOnHover} onMouseLeave={(e)=>returnToCurrent(e)}>Create Account</a>
          </li>
          <li className="nav-item">
            <a id="loginLink" className="nav-link" href="#/login/"  onMouseEnter={loginOnHover} onMouseLeave={(e)=>returnToCurrent(e)}>Login</a>
          </li>
          <li className="nav-item">
            <a id="depositLink" className="nav-link" href="#/deposit/" 
              onMouseEnter={depositOnHover}
              onMouseLeave={(e) => {returnToCurrent(e)}}
              >Deposit</a>
          </li>
          <li className="nav-item">
            <a id="withdrawLink" className="nav-link" href="#/withdraw/" 
            onMouseEnter={withdrawOnHover} 
            onMouseLeave={(e) => {returnToCurrent(e)}}
            >Withdraw</a>
          </li>

          <li className="nav-item">
            <a id="allDataLink" className="nav-link" href="#/alldata/">AllData</a>
          </li>  

        </ul>
      </div>
    </nav>
    </div>
  );
}