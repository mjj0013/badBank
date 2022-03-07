import {Card} from './context.js'
import { SymbolDecomp } from "./symbolDecomp"
export const Home = () =>{
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(
      
      <SymbolDecomp/>
      )}
    />    
  );  
}
