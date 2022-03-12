import React from 'react';
import {UserContext} from './index.js';
import {Card} from './context.js';
import { SymbolDecomp } from './symbolDecomp.js';
export const Deposit = ()=>{
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  return (
    <Card bgcolor="primary" header="Deposit" status={status}
      body={
        <div></div>
        }
    />
  )

}
