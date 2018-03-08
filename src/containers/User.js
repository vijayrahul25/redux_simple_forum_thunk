import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//importing all action in userActions file
import * as userActions from "../actions/userActions";
import ErrorMessage from "../components/ErrorMessage";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Object.assign({}, this.props.user),
      errors: [],
      saving: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }
  redirect() {
    this.props.history.push("/UserList");
  }
  onSubmit = e => {
    this.props.actions
      .addUser(this.state.user)
      .then(() => this.redirect())
      .catch(error => {
        let errors = this.state.errors;
        errors.push(error);
        this.setState({ errors: errors });
      });
  };

  updateUserState(event) {
    const field = event.target.name;
    let user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({ user: user });
  }

  render() {
    return (
      <div>
        <h2>Add Users</h2>
        <ErrorMessage errors={this.state.errors} />
        <div className="row">
          <div className="col">
            <label>First Name:</label>
          </div>

          <div className="col">
            <input
              type="text"
              name="firstName"
              value={this.state.user.firstName}
              onChange={this.updateUserState}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Last NAme:</label>
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              onChange={this.updateUserState}
              value={this.state.user.lastName}
            />
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
function getUserFromState(userId, users) {
  if (users) {
    const user = users.filter(user => user.id == userId);
    return user[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  // console.log(ownProps.match.params.id);
  let userId = ownProps.match.params.id;
  let user = { id: "", firstName: "", lastName: "" };

  if (userId && state.userReducer && state.userReducer.length > 0) {
    user = getUserFromState(userId, state.userReducer);
  }
  return {
    user: user
  };
}
//dispatch all action in userActionVariable
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
