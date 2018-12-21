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
    const addChecked = json.map(email => ({ ...email, checked: false, deleted: false }))
    this.setState({ emails: addChecked })
  }
  async createEmail(emailSubject, emailBody) {
    const response = await fetch('http://localhost:8082/api/messages', {
        method: 'POST',
        body: JSON.stringify({
            subject: emailSubject,
            body: emailBody
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        })
        const email = await response.json()
        this.setState({emails: [...this.state.email, email]})
    }
    async modifyEmail(commandPrompt,ids) {
      try {const response = await fetch('http://localhost:8082/api/messages', {
          method: 'PATCH',
          body: JSON.stringify({
              command: commandPrompt,
              messageIds: ids
          }),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          }
          })
          const email = await response.json()
          this.setState({emails: [...this.state.emails, email]})
          console.log(response.ok)
        }
        catch (e){
          console.error(e)
        }
      }
  updateAll = (key, value) => {
    // This is the function to update all or some to checked or deselected
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
  // toggle multiple emails to mark as read based on id 
  // No need to filter through as objects are already updated to show true under selected. 
  markReadStatus = (readOrUnread) => {
    let trueFalse = readOrUnread === "true" ? true : false
    console.log(trueFalse)
    this.setState(prevState => ({
      emails: prevState.emails.reduce((acc, email) => {
        if(email.checked === true ){
          return [
            ...acc, 
            {
              ...email, 
              read: trueFalse
            }
          ]
        }
        return [...acc, email]
      },[])
    }))
  }
  deleteEmail = async () => {
    let ids = this.state.emails.filter(email => email.checked === true).map(item => item.id)
    // this.modifyEmail("delete", this.state.emails.filter(email => email.checked === true).map(item => item.id))
    try {const response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify({
          command: "delete",
          messageIds: ids
      }),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }
      })
      const email = await response.json()
      this.setState({emails: [...this.state.emails, email]})
      this.setState(prevState => ({
        //if ids 
        emails: prevState.emails.reduce((acc, email) => {
          if(ids.indexOf(email.id) === -1){
            return 
            [
              ...acc, 
              {email}
            ]
          }
          return email
        }, [])
      }))
      console.log(response.ok)
    }
    catch (e){
      console.error(e)
    }

  }
  addLabel = (valueOfItemSelected) => {
    this.setState(prevState => ({
      emails: prevState.emails.reduce((acc,email) => {
        if(email.checked){
          if((email.labels.indexOf(valueOfItemSelected) > -1) === false){
          return [
            ...acc, 
            {
              ...email, 
              labels: [...email.labels,valueOfItemSelected]
            }
          ]
        }
      }
        return [...acc, email]
      }, [])
    }))
  }
  removeLabel = (labelToBeRemoved) => {
    console.log(labelToBeRemoved)
    this.setState(prevState => ({
      emails: prevState.emails.reduce((acc,email) => {
        if(email.checked){
          if(email.labels.indexOf(labelToBeRemoved)> -1){
            return [
              ...acc,
              {
                ...email, 
                labels: [...email.labels.filter(label => label !== labelToBeRemoved )]
              }
            ]
          }
        }
        return [...acc, email]
      }, [])
    }))
  }
  toggleEmailValue = (id, key) => {
    // This is the function to update individual email keys 
    this.setState(prevState => ({
      emails: prevState.emails.reduce((acc, email) => {
        if (email.id === id) {
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
          <Toolbar createEmail={this.createEmail} updateAll={this.updateAll} removeLabel={this.removeLabel} addLabel={this.addLabel} deleteEmail={this.deleteEmail} markReadStatus={this.markReadStatus} emails={this.state.emails} />
          <MessageList emails={this.state.emails} toggleEmailValue={this.toggleEmailValue} />
        </div>
      </div>
    );
  }
}

export default App;
