import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

{/*Break badge into 3 components Pass props down to all of them */}


class Badge extends React.Component {
render() {
return (
  <div>
    <Avatar img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460' />
    <Label name={this.props.name} />
    <ScreenName username='tylermcginnis' />
  </div>
)
}
}

const Avatar = (props) => (
      <img src={props.img} alt=""/>
    )


const Label = (props) => (
      <h1>Name: {props.name}</h1>
    )


const ScreenName = (props) => (
      <h3>Username: {props.username}</h3>
    )

class App extends Component {
constructor (props){
    super(props);
    this.state = {
      text:'Tyler McGinnis',
      name: '',
      }


}

Hello=()=>{
  console.log("hello");
  this.setState({text: "Paolo"})
}

handleChange=(event)=> {
  this.setState({text:event.target.value})
}

render () {
return(
<div>
  <Badge name={this.state.text} />

      <button onClick={this.Hello}>Click</button>

      <input onChange={this.handleChange}/>
</div>

)
}}


{/*This is the dynamic part of your app and input will render differently
  all your applications UI flows from this state. */}


  {/*The alternative way is to store them in a variable, call them into the App
    and then use class Badge to format them… */}



export default App;
