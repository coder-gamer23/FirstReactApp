import { Component } from "react";
import CardComponent from "./button";
class CounterComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            initialValue : 7,
            toggle:true,
            
        }
    }
    componentDidMount(){
        console.log("countercomponent mounting phase");
    }
    componentDidUpdate(){
        console.log("counter component update phase");
    }
    count=0;
 togglefunctionality = () =>{
    this.setState({toggle:(!this.state.toggle)})
    console.log(this.state.toggle);
}
handleIncrement = () =>{
    this.setState({initialValue : this.state.initialValue +1})
    this.count++;
}
render(){
      return(
        <>
        <div className="App">
        <CardComponent heading="Counter Card Component" Subheadings="Counter component" description="This is Counter Card Component" togglefun={this.togglefunctionality}/>
        {this.state.toggle ? 
        <>
        <h3>{this.props.ComponentName} Component</h3>
        <h4>Initial Value:{this.state.initialValue} </h4>
        <button onClick={this.handleIncrement}>Increment</button> &nbsp;
           <button onClick={()=>{this.setState({initialValue:this.state.initialValue -1});this.count--;}}>Decrement</button> &nbsp;
           <button onClick={()=>{this.setState({initialValue:this.state.initialValue-this.count});this.count=0}}>Reset</button> 
        </> :<></>}  
        </div>       
        </>
    )
}
}
export default CounterComponent;
