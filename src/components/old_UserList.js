import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.users.map((user, index) => (
          <div key={index} className="row">
            <div className="col">{user.firstname}</div>
            <div className="col">{user.lastname}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default UserList;
