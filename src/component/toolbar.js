import React from 'react'

class Toolbar extends React.Component {
  // // select all 
  // selectAll = () => {
  //   this.props.emails.filter(email => email.checked ==true).length
  // }
  render(){
      console.log(this.props.emails.filter(email => email.checked == true).length)
      console.log("These are props on toolbar",this.props.emails);
        return(
          <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">{this.props.emails.filter(email => email.read ==true).length}</span>
              unread messages
            </p>
            <a className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>
        
            <button className="btn btn-default">
              <i className="fa fa-square-o" ></i> Select All Button
              {/* className={`row message ${this.props.value.read ? "read" :  "unread" `} */}
            </button>
        
            <button className="btn btn-default" disabled="disabled">
              Mark As Read
            </button>
        
            <button className="btn btn-default" disabled="disabled">
              Mark As Unread
            </button>
        
            <select className="form-control label-select" disabled="disabled">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>
        
            <select className="form-control label-select" disabled="disabled">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>
        
            <button className="btn btn-default" disabled="disabled">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>

            )
    }
}
export default Toolbar