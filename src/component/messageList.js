import React from 'react'
import Message from "./message"

class MessageList extends React.Component {
    render(){
        let messagesMap = this.props.emails.filter(email => email.deleted === false).map(email => <Message key={email.id} value={email} toggleEmailValue={this.props.toggleEmailValue} updateCheckBox={this.props.updateCheckBoxStatus} updateStarStatus={this.props.updateStarStatus} />)
        return(
            <>
            {messagesMap}
            </>
        )
    }
}
export default MessageList