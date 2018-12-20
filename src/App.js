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
  updateCheckBoxStatus = (checkBoxId)=>{
    console.log(checkBoxId)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Toolbar emails={this.state.emails}/>
          <MessageList emails={this.state.emails} updateKeyInState={this.updateKeyInState} />
        </div>
      </div>
    );
  }
}

export default App;
