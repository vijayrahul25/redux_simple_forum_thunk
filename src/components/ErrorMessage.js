import React from "react";

class ErrorMessage extends React.Component {

  render() {
    return (<div className="alert  alert-danger">
      {this.props.errors.map((err, index) => (
        <p  key={index}>Hello, {err.message}!</p>
      ))}
    </div>);
  }
}

export default ErrorMessage;
