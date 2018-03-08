import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.history.push("/User");
  }

  render() {
    if (this.props.users) {  
      return (
        <div>
          <h2>User List</h2>
          {this.props.users.map(user => (
            <div key={user.id} className="row">
              <div className="col">{user.id}</div>
              <div className="col">{user.firstName}</div>
              <div className="col">{user.lastName}</div>
              <div className="col">
                <Link to={"/user/" + user.id}>View</Link>
                <Link to={"/edit_user/" + user.id}>Edit</Link>
              </div>
            </div>
          ))}
          
        </div>
      );
    } else {
      return(
        <div>
        no user found
        </div>
      )
    }
  }
}
function mapStateToProps(state) {  
  return {
    users: state.userReducer
  };
}

export default connect(mapStateToProps)(UserList);
