import * as React from "react";
import "./App.css";

class App extends React.Component {
  public state = { username: "" };

  public handleChange: React.ChangeEventHandler = event => {
    // tslint:disable-next-line:no-console
    console.log(this.state.username);
    this.setState({
      username: (event.target as HTMLInputElement).value
    });
  };
  public render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <p>your username is : {this.state.username}</p>
      </div>
    );
  }
}

export default App;
