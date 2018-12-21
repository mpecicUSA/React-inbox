import React from 'react'
import NewMessage from "./newMessage"

class Toolbar extends React.Component {
  state = {
    selectAll: false,
    composeMessageClicked: false
  }
  _onSelectAllClick = e => {
    console.log(e.target.attributes.value.nodeValue, !this.state.selectAll);
    this.props.updateAll(e.target.attributes.value.nodeValue, !this.state.selectAll)
    this.setState(state => {
      return {
        selectAll: !state.selectAll
      }
    })
  }
  _markReadStatus = (e) => {
    this.props.markReadStatus(e.target.attributes.value.nodeValue)
  }
  _deleteEmail = e => {
    this.props.deleteEmail()
  }
  _addLabel = (e) => {
    this.props.addLabel(e.target.attributes.value.nodeValue)
  }
  _removeLabel = (e) => {
    this.props.removeLabel(e.target.attributes.value.nodeValue)
  }
  _composeNewMessage = () => {
    this.setState(prevState => ({
      ...prevState, 
      composeMessageClicked: true
    }))
  }
  render() {
    // console.log(this.props.emails.filter(email => email.checked == true))
    let emails = this.props.emails
    let numberOfEmailsChecked = emails.filter(email => email.checked).length
    let shouldButtonBeDisabled = numberOfEmailsChecked == 0 ? "disabled" : ""
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.emails.filter(email => email.read == true).length}</span>
            unread messages
            </p>
          {/* Compose new message */}
          <a onClick={this._composeNewMessage}className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>
          {/* select / Deselect  */}
          <button onClick={this._onSelectAllClick} value="checked"  className="btn btn-default">
            <i className={numberOfEmailsChecked == 0 ? "fa fa-square-o" : numberOfEmailsChecked < emails.length ? "fa fa-minus-square-o" : numberOfEmailsChecked == emails.length ? "fa fa-check-square-o" : ""}></i>
          </button>
          {/* mark as read */}
          <button className="btn btn-default" onClick={this._markReadStatus} value="true" disabled={shouldButtonBeDisabled}>
            Mark As Read
            </button>
          {/* Mark as unread */}
          <button className="btn btn-default" onClick={this._markReadStatus} value="false" disabled={shouldButtonBeDisabled}>
            Mark As Unread
            </button>
          {/* add label; */}
          <select className="form-control label-select" disabled={shouldButtonBeDisabled}>
            <option>Apply label</option>
            <option onClick={this._addLabel} value="dev">dev</option>
            <option onClick={this._addLabel} value="personal">personal</option>
            <option onClick={this._addLabel} value="gschool">gschool</option>
          </select>
          {/* remove label */}
          <select className="form-control label-select" disabled={shouldButtonBeDisabled}>
            <option >Remove label</option>
            <option onClick={this._removeLabel} value="dev">dev</option>
            <option onClick={this._removeLabel} value="personal">personal</option>
            <option onClick={this._removeLabel} value="gschool">gschool</option>
          </select>
          {/* trash can  */}
          <button className="btn btn-default" onClick={this._deleteEmail} disabled={shouldButtonBeDisabled}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      {this.state.composeMessageClicked ? <NewMessage /> : null}
        
      </div>
    )
  }
}
export default Toolbar