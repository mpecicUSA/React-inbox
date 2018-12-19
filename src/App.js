import React, { Component } from 'react';
import Toolbar from "./component/toolbar";
import MessageList from "./component/messageList"
import './App.css';

class App extends Component {
  // declare empty state:
  state = {
    emails: []
  }
  // pull from api emails, convert to json, add key checked with default set to false, set state to this array of objects. 
  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    const addChecked = json.map(email => ({...email, checked: false}) )
    this.setState({emails: addChecked})
  }
  updateStarStatus = (idOfStarToBeUpdated) => {
    console.log("This is the id of the selected object", idOfStarToBeUpdated)
    console.log("Value of Filter",this.state.emails.filter(email => email.id == idOfStarToBeUpdated))
    // this.setState({
    //   emails: [{
    //     ...emails, 

    //   }]
    // })
  }
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList emails={this.state.emails} updateStarStatus={this.updateStarStatus} />
      </div>
    );
  }
}

export default App;
