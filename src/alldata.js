import React from 'react';
import {UserContext} from './index.js';

import {Card} from './context.js';
import "./index.css"


export const AllData = () =>{
  const ctx = React.useContext(UserContext);
  var userData = ctx.users
  let allUsers = userData.map((item,idx)=> {return (
    <tr key={idx}>
     
      <td>{item.email}</td>
      <td>{item.name}</td>
      <td>{item.password}</td>
    </tr>
  )})
  return(
  <Card bgcolor="light" txtcolor="dark" header="All Data in Store" status={status}
      body={
        <div>
     
        
          <table className="table table-light myTable">
            <thead>
              <tr>
                
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
              </tr>
            </thead>

            <tbody>
              {allUsers}
            </tbody>
          </table>


      
        </div>
        }
    />
  )
  

}
