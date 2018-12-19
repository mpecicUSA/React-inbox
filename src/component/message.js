import React from "react"

class Message extends React.Component {
    render(){
        let updateStarStatusLower = (e) => {
            this.props.updateStarStatus(this.props.value.id)
        }
        return (
        <div className={`row message ${this.props.value.read ? "read" :  "unread" } ${this.props.value.checked ? "selected" :  "" }` }>
        <div className="col-xs-1">
            <div className="row">
            <div className="col-xs-2">
                <input type='checkbox'/>
            </div>
            <div className="col-xs-2">
                <i onClick={updateStarStatusLower} className={this.props.value.starred ? "star fa fa-star" : "star fa fa-star-o"}></i>
            </div>
            </div>
        </div>
        <div className="col-xs-11">
            {this.props.value.labels.length >= 1 ? this.props.value.labels.map(item => <span key={item} className="label label-warning"> {item} </span> )  : ""}
            <a href="#">
                {this.props.value.subject}
            </a>
        </div>
        </div>
            )
    }
}
export default Message

// When a user views the app Then they should see a list of messages with their subjects
    // If the message is read, it should have the read style 
        // DONE
    // If the message is unread, it should have the unread
        // DONE
    // If the message is selected, it should have the selected style and the box should be checked
        // STYLING COMPELETE FUNCIONALITY NOT YET 
    // If there are labels on a message, they should appear
        // DONE
    // If the message is starred, then the star should be filled in, otherwise it should be empty
        // DONE

    // When a user clicks the star next to a message