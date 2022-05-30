import {Card} from './context.js'
import "./index.css"
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fpgsgoldandcoin.com%2F2018%2F06%2F29%2Fhow-to-store-and-care-for-your-coin-collection%2F&psig=AOvVaw2wyRqHMBMsjzDC-Fnrfj1V&ust=1647546682234000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNjJg4_By_YCFQAAAAAdAAAAABAF
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
