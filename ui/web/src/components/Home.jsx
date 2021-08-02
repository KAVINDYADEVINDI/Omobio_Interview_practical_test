import React, { Component } from "react";
import axios from "axios";



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:80/bizlogic/home.php")
      .then((response) => {
        this.setState({
          user: response.data,
        });
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h3 align="center">User List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead className="header">
            <tr>
              <td>User ID</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((users) => (
            <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
