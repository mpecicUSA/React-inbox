import React from 'react'

class Toolbar extends React.Component {
  // // select all 
  // selectAll = () => {
  //   this.props.emails.filter(email => email.checked ==true).length
  // }
  
  render(){
      // console.log(this.props.emails.filter(email => email.checked == true))
      let emails = this.props.emails
      let numberOfEmailsChecked = emails.filter(email => email.checked).length
      let shouldButtonBeDisabled = numberOfEmailsChecked == 0 ? "disabled" : ""
      let passingItAlong = (e) => {
          this.props.updateKeyInState(e.target.attributes.value.nodeValue)
      }
        return(
          <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">{this.props.emails.filter(email => email.read ==true).length}</span>
              unread messages
            </p>
            {/* Compose new message */}
            <a className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>
        {/* select / Deselect  */}
            <button onClick={passingItAlong} value="checked" className="btn btn-default">
              <i className={numberOfEmailsChecked == 0 ? "fa fa-square-o" : numberOfEmailsChecked < emails.length ? "fa fa-minus-square-o" : numberOfEmailsChecked == emails.length ? "fa fa-check-square-o" : ""}></i>
            </button>
        {/* mark as read */}
            <button className="btn btn-default" disabled={shouldButtonBeDisabled}>
              Mark As Read
            </button>
        {/* Mark as unread */}
            <button className="btn btn-default" disabled={shouldButtonBeDisabled}>
              Mark As Unread
            </button>
        {/* add label; */}
            <select className="form-control label-select" disabled={shouldButtonBeDisabled}>
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>
        {/* remove label */}
            <select className="form-control label-select" disabled={shouldButtonBeDisabled}>
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>
        {/* trash can  */}
            <button className="btn btn-default" disabled={shouldButtonBeDisabled}>
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>

            )
    }
}
export default Toolbar