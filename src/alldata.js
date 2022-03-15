import React from 'react';
import {UserContext} from './index.js';

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
  console.log("userData", userData)
  return (
    <div>
    <h5>All Data in Store</h5>
    
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


    {/* {JSON.stringify(ctx)}<br/> */}
    </div>
  );
}
