import React,{useEffect, useState} from 'react';
import './App.css';
import CardComponent from "./button";
var count=0;

function CounterApp() {
    const [InitialValue, setInitialValue]= useState(5);
    const[toggle,settoggle]=useState(true);
    useEffect(()=>{
        console.log("Counter Function Mounting Phase");
    },[])
    useEffect(()=>{
        console.log("Counter Function Updating Phase")
    },[InitialValue])
   const togglefunctionalit= () =>{
        settoggle(!toggle);
    }
    return (
      <div className="App">
          <CardComponent heading="Counter function Component" Subheadings="Counter function component" description="This is Counter function Card Component" togglefun={togglefunctionalit}/>
          {toggle?
          <>
          <h3>Initial value :{InitialValue}</h3>
          <button onClick={()=> {setInitialValue(InitialValue+1); count++;}}>Incremental</button> &nbsp;
            <button onClick={()=>{ setInitialValue(InitialValue-1); count--;}}>Decrement</button> &nbsp;
            <button onClick={()=>{setInitialValue(InitialValue-count); count=0;}}>Reset</button> 
            </>:<></>}
      </div>
    );
  }
  
  export default CounterApp;