import React from "react"

class Message extends React.Component {
    render(){
        let updaterFunction = e => {
            this.props.toggleEmailValue(this.props.value.id, e.target.attributes.value.nodeValue)
        }

        return (
        <div className={`row message ${this.props.value.read ? "read" :  "unread" } ${this.props.value.checked ? "selected" :  "" }` }>
        <div className="col-xs-1">
            <div className="row">
            <div className="col-xs-2">
                <input onClick={updaterFunction} value="checked" type='checkbox' checked={this.props.value.checked ? "checked" : ""}/>
            </div>
            <div className="col-xs-2">
                <i onClick={updaterFunction} value="starred" className={this.props.value.starred ? "star fa fa-star" : "star fa fa-star-o"}></i>
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
