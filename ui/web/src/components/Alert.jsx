import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Alert extends Component {
  render() {
    return (
      <div>
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> Successfully login
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    );
  }
}

export default Alert;
