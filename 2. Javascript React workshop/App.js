import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



{/* this section pasted from Paolo's FE Slack chat*/}

class App extends React.Component {
     constructor(props){
       super(props);
       //Used for state management, strings, objects, whatever
       this.state = {
         text: 'Yolo!!!!'
       }
       this.handleChange = this.handleChange.bind(this);
     }

     handleChange(e){
       console.log('the change is', e.target.value)
     }

     render(){
       return(
               <div>
               <h1> {this.state.text} </h1>
                 <input onChange={(e)=>this.handleChange(e)}   type="text" />
               </div>
       )
     }
   }

   ReactDOM.render(
     <App />,
     document.getElementById('app')
   )
**


class App extends React.Component {
      render(){
        return(
          <h1>  YOLO !!!!!! </h1>
        )
      }
    }

    ReactDOM.render(
      <App />,
      document.getElementById('app')
    )



class App extends Component

super(props);
this.state= {
  text: '',
  list: []
}


changeHandler = (e) => {
  this.setState((text: e.target.value))
  console.log
}






handleDelete - (item) =>(e) => {

e.preventDefault();
var list = this.state.list.slice();
list.map(itemOld, Index) => {
  if(itemOld === itme) {
    list.splice(index,1)
  }
} )

this.setState(list:list))

)

)



render() {
  return(
  <div className="App">
)
}
