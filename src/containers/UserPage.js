import React, { Component } from "react";
import { connect } from "react-redux";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.getUserFromState = this.getUserFromState.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getUserFromState(userId) {    
    if (this.props.users) {
      const user = this.props.users.filter(user => user.id == userId);
      return user[0];
    }
    return null;
  }
  onClick() {
    this.props.history.goBack();
  }

  render() {
    
    let user = this.getUserFromState(this.props.match.params.id);
    let userDisplay = null;
    //let user = null;
    if (user) {
      userDisplay = (
        <div>
          <div className="row">
            <div className="col">First Name: </div>
            <div className="col">{user.firstName}</div>
          </div>
          <div className="row">
            <div className="col">Last Name: </div>
            <div className="col">{user.lastName}</div>
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
function mapStateToProps(state, ownProps) {
  return {
    users: state.userReducer
  };
}

export default connect(mapStateToProps)(UserPage);
