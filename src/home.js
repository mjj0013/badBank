import {Card} from './context.js'
import "./index.css"
var myHeaders = new Headers();
myHeaders.set("Access-Control-Allow-Origin", "*");
myHeaders.set("Access-Control-Request-Headers", "*");


export const Home = () =>{
  
  return (
    <Card
      bgcolor="light" txtcolor="dark"
  
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(
      
        <div>
         
          <svg className="card-img-top homePageImg" >
            <image href="./coins2.jpeg" crossorigin="anonymous"></image>      
          </svg> 
        </div>
      )}
    />    
  );  
}
