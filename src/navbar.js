
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
function allDataOnHover() {

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

function returnToCurrent(e) {
  var path = window.location.href;
  var secondLast = path.substr(path.lastIndexOf("/",path.length-2));

  var targetId = e.target.id.replace("Link","");
  if(targetId=="home" && secondLast=="/#") return;
  else if(targetId=="createAccount" && secondLast=="/CreateAccount/") return;
  else if(targetId=="deposit" && secondLast=="/deposit/") return;
  else if(targetId=="withdraw" && secondLast=="/withdraw/") return;
  else if(targetId=="login" && secondLast=="/login/") return;
  else if(targetId=="alldata" && secondLast=="/alldata/") return;
  
  if(path[path.length-1]=="#") homeOnHover();
  else {
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
        <a id="homeLink" className="navbar-brand" href="#"  onMouseEnter={homeOnHover} onMouseLeave={(e)=>returnToCurrent(e)}
          data-bs-trigger="hover" data-bs-toggle="popover" title="Return to Bad-Bank landing page"
        >BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a id="createAccountLink" className="nav-link" href="#/CreateAccount/" onMouseEnter={createAccountOnHover} onMouseLeave={(e)=>returnToCurrent(e)}
                data-bs-trigger="hover" data-bs-toggle="popover" title="Create a new account to access your bank account"
              >Create Account</a>
            </li>
            <li className="nav-item">
              <a id="loginLink" className="nav-link" href="#/login/"  onMouseEnter={loginOnHover} onMouseLeave={(e)=>returnToCurrent(e)}
                data-bs-trigger="hover" data-bs-toggle="popover" title="Enter your credentials to access your bank account"
              >Login</a>
            </li>
            <li className="nav-item">
              <a id="depositLink" className="nav-link" href="#/deposit/" data-bs-trigger="hover" data-bs-toggle="popover" title="Transfer funds into your bank account"
                onMouseEnter={depositOnHover}
                onMouseLeave={(e) => {returnToCurrent(e)}}
                >Deposit</a>
            </li>
            <li className="nav-item" >
              <a id="withdrawLink" className="nav-link" href="#/withdraw/" data-bs-trigger="hover" data-bs-toggle="popover" title="Remove funds from your bank account"
              onMouseEnter={withdrawOnHover} 
              onMouseLeave={(e) => {returnToCurrent(e)}}
              >Withdraw</a>
            </li>

            <li className="nav-item">
              <a id="allDataLink" className="nav-link" href="#/alldata/"
              data-bs-trigger="hover" data-bs-toggle="popover" title="(ADMIN) View all bank accounts on record"
              >AllData</a>
            </li>  

          </ul>
        </div>
      </nav>
    </div>
  );
}