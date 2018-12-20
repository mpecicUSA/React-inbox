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
      // const newEmails = []
      // for (var i = 0; i < prevState.emails.length; i++) {
      //   const email = prevState.emails[i]
      //   if (email.id == idOfStarToBeUpdated) {
      //     newEmails.push({
      //       ...email,
      //       starred: !email.starred
      //     })
      //   }
      //   newEmails.push(email)
      // }
      // return {
      //   emails: newEmails
      // }
        /* 
        on each iteration of acc it will check to see if email.id == idOfStarToBeSelected if it is it will return all 
        prior items in array then update with ...itemToBeUpdated and specificlay update the key starred to value: !value. 
        i = 0 // []
        i = 1 // [{ id: 1 }]
        i = 2 // [{id: 1}, {id: 2}]
        i = 3 // [{id: 1}, {id: 2}, { id: 3, starred: false }]
        i = 4 //
        
        */
  updateCheckBoxStatus = (checkBoxId)=>{
    console.log(checkBoxId)
  }
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList emails={this.state.emails} updateKeyInState={this.updateKeyInState} />
      </div>
    );
  }
}

export default App;
