import React from 'react'
import Message from "./message"

class MessageList extends React.Component {
    render(){
        let messagesMap = this.props.emails.map(email => <Message key={email.id} value={email} updateStarStatus={this.props.updateStarStatus} />)
        return(
            <>
            {messagesMap}
            </>
        )
    }
}
export default MessageList