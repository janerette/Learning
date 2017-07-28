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
    this.setState({list:state.list.concat(this.state.foodInput)
    this.setState({list:list})
  })


}

render(){
  return(
    <div className="container">

      <h2> Add Food </h2>
      <input />
      <button onClick={this.ItemAdded}> Add stuff </button>

<h1> GroceryList</h1>
<ul>

  {this.state.list.map(function(item)){
    return
  })}
  </ul>

 </div>
  )
}
