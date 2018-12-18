import React from "react"

class Message extends React.Component {
    render(){
        console.log(this.props.value.read);
        console.log(`row message ${this.props.value.read ? "read" :  "unread" }` )
        return (
        <div className={`row message ${this.props.value.read ? "read" :  "unread" }`}>
        {/* <div class="row message read"> */}

        <div className="col-xs-1">
            <div className="row">
            <div className="col-xs-2">
                <input type="checkbox" />
            </div>
            <div className="col-xs-2">
                <i className="star fa fa-star-o"></i>
            </div>
            </div>
        </div>
        <div className="col-xs-11">
            <a href="#">
                {this.props.value.subject}
            </a>
        </div>
        </div>
            )
    }
}
export default Message