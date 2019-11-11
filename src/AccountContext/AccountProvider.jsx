import React, { Component } from "react";
import Storage from "../Service/Storage.js";
// Set Up The Initial Context
const AccountContext = React.createContext();
// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;
const dataItem = new Storage();
class AccountProvider extends Component {
  state = {
    username: "", dateJoined: "",
    membershipLevel: "", addClass: "",

    updateAccount: updatedAccount => this.updateAccount(updatedAccount)
    // updateOne: updatedOne => this.updateAccount(updatedOne)
  };
  onUserInput = val => {
    this.setState({ username: val });
  };

  updateAccount = updatedAccount => {
    this.setState(prevState => ({
      ...prevState,
      ...updatedAccount
    }));
    console.log(updatedAccount);
    localStorage.setItem("peexoo_dataItem", JSON.stringify(updatedAccount));
  };

  updateOne = updatedOne => {
    localStorage.setItem("addClass", updatedOne);
  };

  componentDidMount() {
    if (!dataItem.getItemsFromStorage() !== null) {
      let data = dataItem.getItemsFromStorage();
      this.setData(data);
    }
    if (localStorage.getItem("addClass") !== null) {
      this.setState({ addClass: localStorage.getItem("addClass") });
    }
  }

  setData(data) {
    this.setState({
      username: data.username,
      dateJoined: data.dateJoined,
      membershipLevel: data.membershipLevel
    });
  }
  onUserInput = val => {
    this.setState({ username: val });
  };
  render() {
    return (
      <React.Fragment>
        {/* value prop is where we define what values 
             that are accessible to consumer components */}
        <AccountContext.Provider
          value={{
            username: this.state.username,
            addClass: this.state.addClass,
            dateJoined: this.state.dateJoined,
            membershipLevel: this.state.membershipLevel,
            onUserInput: this.onUserInput,
            updateAccount: this.state.updateAccount,
            updateOne: this.updateOne
          }}
        >
          {this.props.children}
        </AccountContext.Provider>
      </React.Fragment>
    );
  }
}

export default AccountProvider;
