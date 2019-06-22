// src/App.js

import React from "react";

import API from "./utils/API";
import User from "./User";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }

  render() {
    const { isLoading, name, avatar, email } = this.state;

    return (
      <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
    );
  }

  async componentDidMount() {
    // Load async data.
    let userData = await API.get('/api');

    console.log(userData);

        // Parse the results for ease of use.

    // Update state with new data and re-render our component.
    const name = userData.data.Name;
    const avatar = userData.data.Avatar;
    const email = userData.data.Email;

    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        avatar,
        email
      }
    });
  }

}

export default App;
