

class Badge extends React.Component
 render(){


 }



class Avatar extends Component {
  render() {
    return (
      <img src={'{this.props.Avatar}'} />
    )
  }
}

class Label extends Component {
  render() {
    return (
      <h1>Name: {this.props.Label}</h1>
    )
  }
}

class ScreenName extends Component {
  render() {
    return (
      <h3>Username: {this.props.ScreenName}</h3>
    )
  }
}


//separate these out into the above Components

class App extends Component {
  render() {
    return (
      <div className-"App">
      <Badge
          Label= 'Tyler McGinnis'
          Avatar='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
          ScreenName='tylermcginnis'>
      </div>
    )
  }
}
