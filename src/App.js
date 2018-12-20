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
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    const addChecked = json.map(email => ({ ...email, checked: false }))
    this.setState({ emails: addChecked })
  }
  updateAll = (key, value) => {
    this.setState(state => {
      return {
        emails: state.emails.map(email => {
          return {
            ...email,
            [key]: value
          }
        })
      }
    })
  }
  toggleEmailValue = (id, key) => {
    this.setState(prevState => ({
      emails: prevState.emails.reduce((acc, email) => {
        if (email.id == id) {
          return [
            ...acc,
            {
              ...email,
              [key]: !email[key]
            }
          ]
        }
        return [...acc, email]
      }, [])
    }))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Toolbar updateAll={this.updateAll} emails={this.state.emails} />
          <MessageList emails={this.state.emails} toggleEmailValue={this.toggleEmailValue} />
        </div>
      </div>
    );
  }
}

export default App;
