import React, { Component } from 'react';

class GroceryList extends Component {
constructor(props){
  super(props);
  this.state = {
    foodInput:'',
    list:[]
  }
}

InputHandler=(event)=> {
console.log(event.target.value)
this.setState({foodInput: event.target.value})

}

ItemAdded =(event) => {
   var list=this.state.list.concat(this.state.foodInput)
    this.setState({list:list})
    this.setState({foodInput: ''})
  }

render(){
  return(
    <div className="container">



<h1> GroceryList</h1>


<h2> Add Food </h2>
<input value={this.state.foodInput}   onChange={this.InputHandler} />

<button onClick={this.ItemAdded}> Add stuff </button>
<ul>

  {this.state.list.map(function(item){
    return(
      <li>{item}</li>
    )
  })}
  </ul>

 </div>
  )
}
}

export default GroceryList;
