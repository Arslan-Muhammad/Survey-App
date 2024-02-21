import React from "react";
export default function Question(props) {
  return (
    <div className="container-fluid">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left">
            <div className="card-body">
              <form onSubmit={props.submit}>
                <div className="form-group">
                  <label htmlFor="">
                    {""}
                    <b>3.</b>What are you currently doing ?
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="teacher"
                    name="q1"
                    autoComplete="off"
                    value="teacher"
                  />
                  <label htmlFor="teacher">Teacher</label>
                  <input
                    type="radio"
                    id="student"
                    name="q1"
                    autoComplete="off"
                    value="student"
                  />
                  <label htmlFor="student">Student</label>
                  <input
                    type="radio"
                    id="programmer"
                    name="q1"
                    autoComplete="off"
                    value="programmer"
                  />
                  <label htmlFor="programmer">Programmer</label>
                  <input
                    type="radio"
                    id="other"
                    name="q1"
                    autoComplete="off"
                    value="other"
                  />
                  <label htmlFor="other">Other</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    autoComplete="off"
                    placeholder="Type here if not listed"
                    name="other"
                  />
                  <div className="form-group">
                    <label htmlFor="">
                      {""}
                      <b>4.</b>Please rate my Demo App.
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="poor"
                      name="q2"
                      autoComplete="off"
                      value="poor"
                    />
                    <label htmlFor="poor">Poor</label>
                    <input
                      type="radio"
                      id="good"
                      name="q2"
                      autoComplete="off"
                      value="good"
                    />
                    <label htmlFor="good">Good</label>
                    <input
                      type="radio"
                      id="great"
                      name="q2"
                      autoComplete="off"
                      value="great"
                    />
                    <label htmlFor="great">Great</label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      <b>5.</b>Write your review here.
                    </label>
                    <textarea className="form-control" name="q3"></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <center>
                  <span className="badge badge-pill disabled">1</span>
                  <span className="badge badge-pill badge-primary">2</span>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
