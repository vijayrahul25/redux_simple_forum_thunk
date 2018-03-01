import React, { Component } from "react";
import { connect } from "react-redux";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.getUserFromState = this.getUserFromState.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getUserFromState(id) {
    return this.props.users[this.props.match.params.id];
  }
  onClick() {
    this.props.history.goBack();
  }

  render() {
    let user = this.props.users[this.props.match.params.id];
    let userDisplay = null;

    if (user) {
      userDisplay = (
        <div>
          <div className="row">
            <div className="col">First Name: </div>
            <div className="col">{user.firstname}</div>
          </div>
          <div className="row">
            <div className="col">Last Name: </div>
            <div className="col">{user.lastname}</div>
          </div>
        </div>
      );
    } else {
      userDisplay = (
        <div className="row">
          <div className="col">Invalid User</div>
        </div>
      );
    }
    return (
      <div>
        <h2>User </h2>
        {userDisplay}
        <button onClick={this.onClick}>Back</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.userReducer.users
  };
}

export default connect(mapStateToProps)(UserPage);
