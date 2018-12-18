import React, { Component } from 'react';
import Toolbar from "./component/toolbar";
import MessageList from "./component/messageList"
import './App.css';

class App extends Component {
  state = {
    emails: []
  }
  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({emails: json})
  }
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList emails={this.state.emails} />
      </div>
    );
  }
}

export default App;
