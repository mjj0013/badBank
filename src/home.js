import {Card} from './context.js'
import { SymbolDecomp } from "./symbolDecomp"

export const Home = () =>{
  return (
    <Card
    bgcolor="success"
      txtcolor="light"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(
      
        <div></div>
      )}
    />    
  );  
}
