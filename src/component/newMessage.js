import React from "react";

class NewMessage extends React.Component {
    state = {
        subject: "",
        body: ""
    }
    updateState = e => {
        let valueOfButtonPressed = e.target.value
        let valueOfId = e.target.id
        this.setState(prevState => {
            return {
                ...prevState, 
                [valueOfId]: valueOfButtonPressed
            }
        })
    }
    submitForm = () => {
        this.props.createEmail(this.state.subject, this.state.body)
    }
    render() {
        console.log(this.props)
        return (
            <>
            <form onSubmit={this.submitForm} className="form-horizontal well">
                <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                    <h4>Compose Message</h4>
                </div>
                </div>
                <div className="form-group">
                <label for="subject" className="col-sm-2 control-label">
                    Subject
                </label>
                <div className="col-sm-8">
                    <input
                    type="text"
                    className="form-control"
                    id="subject"
                    onChange={this.updateState}
                    value={this.state.subject}
                    placeholder="Enter a subject"
                    name="subject"
                    />
                </div>
                </div>
                <div className="form-group">
                <label for="body" className="col-sm-2 control-label">
                    Body
                </label>
                <div className="col-sm-8">
                    <textarea name="body" id="body"  onChange={this.updateState} value={this.state.body} className="form-control" />
                </div>
                </div>
                <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                    <input type="submit" onClick={this.submitForm} value="Send" className="btn btn-primary"/>
                </div>
                </div>
            </form>
            </>
        );
    }
}

export default NewMessage;
