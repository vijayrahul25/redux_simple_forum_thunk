import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//importing all action in userActions file
import * as userActions from "../actions/userActions";

class User extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    const user = {};
    user.firstname = this.refs.txtfirstname.value;
    user.lastname = this.refs.txtlastname.value;

    this.props.actions.addUser(user);
    this.props.history.push("/UserList");
  };

  render() {
    return (
      <div>
        {/* UserList moved to UserListByRouter to acces state by navigation 
        <UserList users={this.props.users}/>
        */}
        <h2>Add Users</h2>
        <div className="row">
          <div className="col">
            <label>First Name:</label>
          </div>

          <div className="col">
            <input type="text" type="text" ref="txtfirstname" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Last NAme:</label>
          </div>
          <div className="col">
            <input type="text" type="text" ref="txtlastname" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={this.onSubmit}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userReducer.users
  };
}
//dispatch all action in userActionVariable
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
