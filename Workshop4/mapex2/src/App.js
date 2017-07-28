import React, { Component } from 'react';
import './App.css';
import GroceryList from './Grocery.js'


var People = [{name: 'Kirk', age:29},
       {name: 'Janeway', age: 25},
       {name:'Picard', age: 64},
       {name:'Sisco', age: 50}]


  const WithAutoReturn = () => (
    <p>hsdfsdf </p>
  )
  const WithoutAutoReturn =(props) => {
    console.log('!!!!', props)
    return(
      <p> hsdfsdf </p>
    )
  }

class App extends Component {
 render() {
//     People.map(function(item){
       return (

 <div>
      <GroceryList />
       <Intro name={People[0].name} age = {People[0].age} />
  </div>
   )
 }}


const Intro = (props) => (
    <div> {console.log(props)}
      <Name name = {props.name} />
      <Age age = {props.age} />
    </div>
)


const Name = (props) => (
      <h1>My name is {props.name} </h1>
    )


const Age = (props) => (
      <p>and my age is {props.age}. </p>
    )



export default App;
