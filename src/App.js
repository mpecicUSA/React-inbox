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
updateKeyInState = (idOfObjectToBeUpdated, theKeyToBeUpdated) => { 
  const itemToBeUpdated = this.state.emails.find(email => email.id == idOfObjectToBeUpdated)
  console.log(itemToBeUpdated);
console.log(idOfObjectToBeUpdated, theKeyToBeUpdated);

  this.setState(prevState => {
    return {
      emails: prevState.emails.reduce((acc, email) => {
        if (email.id == idOfObjectToBeUpdated) {
          return [
            ...acc,
            {
              ...itemToBeUpdated,
              [theKeyToBeUpdated]: !email[theKeyToBeUpdated]
            }
          ]
        }
        return [...acc, email]
      }, [])
    }
  })
}
updateAllKeysInState = (theKeyToBeUpdated) => { 
  console.log("State of emails onclick",this.state.emails);
  this.setState(prevState => {
    return {
      emails: prevState.emails.reduce((acc, email) => {
        // insert logic to only change all if all are same else update all to selected if only some are selected 
          return [
            ...acc,
            {
              ...email,
              [theKeyToBeUpdated]: !email[theKeyToBeUpdated]
            }
          ]
      }, [])
    }
  })
  console.log("state of emails after state update", this.state.emails);
  console.log("THIS IS THE THE KEY TO UPDATED", theKeyToBeUpdated)
  console.log("THIS IS THE MAP", this.state.emails.filter(email => email.checked ))
}
  render() {
    return (
      <div className="App">
        <div className="container">
          <Toolbar updateKeyInState={this.updateAllKeysInState} emails={this.state.emails}/>
          <MessageList emails={this.state.emails} updateKeyInState={this.updateKeyInState} />
        </div>
      </div>
    );
  }
}

export default App;
