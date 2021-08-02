import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Wrong extends Component {
  render() {
    return (
      <div>
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>error!</strong> User not found
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
        </div>
      </div>
    );
  }
}

export default Wrong;
