import React from "react"

class Message extends React.Component {
    render(){
        console.log(this.props.value)
        return (
        <div className={`row message ${this.props.value.read ? "read" :  "unread" }`}>
        {/* <div class="row message read"> */}

        <div className="col-xs-1">
            <div className="row">
            <div className="col-xs-2">
                <input type='checkbox'/>
            </div>
            <div className="col-xs-2">
                <i className={this.props.value.starred ? "star fa fa-star" : "star fa fa-star-o"}></i>
            </div>
            </div>
        </div>
        <div className="col-xs-11">
            {this.props.value.labels.length >= 1 ? this.props.value.labels.map(item => <span className="label label-warning"> {item} </span> )  : ""}
            <a href="#">
                {this.props.value.subject}
            </a>
        </div>
        </div>
            )
    }
}
export default Message