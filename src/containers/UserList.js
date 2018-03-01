import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.history.push("/User");
  }
  componentDidMount() {
    console.log('GrandChild did mount.');
    
    this.props.actions.loadUsers();
  }
  
  render() {
    console.log(this.props.users);
    console.log(this.props.length)
    return (
      <div>
        <h2>User List</h2>
        {this.props.users.map(user =>
          <div key={user.id} className="row">
            <div className="col">{user.id}</div>
            <div className="col">{user.firstName}</div>
            <div className="col">{user.lastName}</div>
            <div className="col">
              <Link to={"/user/" + user.length}>View</Link>
            </div>
          </div>
        )}

        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: Array.from(state.userReducer)
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);


