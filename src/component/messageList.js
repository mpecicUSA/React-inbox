import React from 'react'
import Message from "./message"

class MessageList extends React.Component {
    render(){
        let messagesMap = this.props.emails.map(email => <Message key={email.id} value={email}/>)
        return(
            <>
            <p>Hello, Messages will be here</p>
            {messagesMap}
            </>
        )
    }
}
export default MessageList