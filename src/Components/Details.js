import React from "react";

export default function Details(props) {
  return (
    <div className="container-fluid">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left">
            <div className="card-body">
              <form onSubmit={props.submit}>
                <div className="form-group">
                  <label htmlFor="name">
                    {""}
                    <b>1.</b>Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Please enter your name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    {""}
                    <b>2.</b>Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Please enter your email"
                    autoComplete="off"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
                <center>
                  <span className="badge badge-pill badge-primary">1</span>
                  <span className="badge badge-pill disabled">2</span>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
