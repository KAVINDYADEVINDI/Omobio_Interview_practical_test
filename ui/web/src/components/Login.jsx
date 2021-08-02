import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Alert from "./Alert";
import Wrong from "./Wrong";
import axios from "axios";
import { AiOutlineUserAdd, AiOutlineLock } from "react-icons/ai";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      alertShow: false,
      wrongShow: false,
    };

    console.log(this.successStatus);

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    //console.log(this.state.email);
    //console.log(this.state.password);
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    const url = "http://localhost:80/bizlogic/index.php";

    axios
      .post(url, formData)
      .then((res) => {
        if (res.data === true) {
          this.setState({
            alertShow: true,
          });
          window.location.href = "/home";
        } else {
          this.setState({
            wrongShow: true,
          });
        }

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="form-class">
          {this.state.alertShow === true && <Alert />}
          {this.state.wrongShow === true && <Wrong />}

          <form className="form-class2">
            <h1 className="login-header">Login</h1>
            <div className="mb-3 ">
              <div className="label-tag">
                <AiOutlineUserAdd />
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label  pl-1 p-0 m-0"
                >
                  Username
                </label>
              </div>
              <input
                required
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                onChange={this.handleUsername}
              />
            </div>
            <div className="mb-3">
              <div className="label-tag">
                <AiOutlineLock />
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label p-0 pl-1 m-0"
                >
                  Password
                </label>
              </div>
              <input
                required
                type="password"
                className="form-control"
                id="exampleInputPassword"
                onChange={this.handlePassword}
              />
            </div>
            <div className="button-class">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-primary "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
