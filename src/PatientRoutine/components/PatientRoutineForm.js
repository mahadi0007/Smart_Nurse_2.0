import React from "react";
//import ReactDom from "react-dom";

import { Form } from "react-bootstrap";
import "./PatientRoutineForm.css";

import moment from "moment";

// import moment from "react-moment";
// import "moment-timezone";

class PatientRoutineForm extends React.Component {
  constructor() {
    super();

    this.state = {
      postArray: [],
      Body: "",
      id: "",
      routineItem: "",
      item_name: "",
      unit: "",
      s_date: "",
      e_date: "",
      continuity: "",
      meal_time: "",
      dose: [
        {
          time: "",
        },
        {
          time: "",
        },
        {
          time: "",
        },
        {
          time: "",
        },
        {
          time: "",
        },
      ],
      notification: "",
      dogeNumValue: 0,
      notify_to: "",
    };
  }

  /*
   deleteEvent = (index)=>{
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.splice(index, 1);
    this.setState({
      postArray: copyPostArray
    })
  }

  setPost=(e)=>{
    this.setState({
      Body: e.target.value
    })
  }

  addPost=(e)=>{
  
    this.postId = this.postId + 1;
  const copyPostArray = Object.assign([],this.state.postArray)
  copyPostArray.push({
    id: this.postId,
    body: this.state.Body
  })
  this.setState({
    postArray: copyPostArray
  })
  console.log(this.state.numValue)
}
*/

  onSubmitForm = (event) => {
    event.preventDefault();

    console.log(this.state.routineItem);
    console.log(this.state.item_name);
    console.log(this.state.unit);
    console.log(this.state.s_date);
    console.log(this.state.e_date);
    console.log(this.state.continuity);
    console.log(this.state.meal_time);
    console.log(this.state.dose);
    console.log(this.state.notification);
    console.log(this.state.notify_to);
    console.log(this.state.dogeNumValue);
  };

  handleTimeChange = (inputTime, index) => {
    let newArr = [...this.state.dose];
    newArr[index].time = inputTime;
    // this.state.dose = newArr
    this.setState({
      dose: newArr,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitForm}>
          <Form.Group className="grp1">
            <Form.Row>
              <Form.Label className="forLabel">
                <h4>Routine Item</h4>
              </Form.Label>
              <Form.Control
                as="select"
                className="col-10 col-sm-4 offset-1 rounded-pill input1 inputBckColor"
                value={this.state.routineItem}
                onChange={(e) => this.setState({ routineItem: e.target.value })}
                custom
              >
                <option value="Medicine" defaultValue>
                  Medicine
                </option>
                <option value="Food">Food</option>
                <option value="Excercise">Excercise</option>
              </Form.Control>
            </Form.Row>
          </Form.Group>
          <div className="row">
            <div className="col-sm-6">
              <div className="input-field">
                <input
                  type="text"
                  className="form-control rounded-pill   form-input-background "
                  name="itemName"
                  value={this.state.item_name}
                  id="itemName"
                  onChange={(e) =>
                    this.setState({
                      item_name: e.target.value,
                    })
                  }
                  required
                />
                <label className="login-input-label" htmlFor="itemName">
                  Item Name
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-field forInput">
                <input
                  type="number"
                  className="form-control rounded-pill   form-input-background "
                  name="unit"
                  value={this.state.unit}
                  id="unit"
                  onChange={(e) => this.setState({ unit: e.target.value })}
                  required
                />
                <label className="login-input-label" htmlFor="unit">
                  Unit
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="input-field">
                <input
                  type="date"
                  className="form-control rounded-pill   form-input-background "
                  name="startDate"
                  value={this.state.s_date}
                  id="startDate"
                  onChange={(e) => {
                    this.setState({ s_date: e.target.value });
                    if (this.state.e_date && e.target.value) {
                      let start = moment(e.target.value, "YYYY-MM-DD");
                      let end = moment(this.state.e_date, "YYYY-MM-DD");
                      console.log("Date Difference" + end.diff(start, "days"));
                      this.setState({
                        continuity: end.diff(start, "days"),
                      });
                    }
                  }}
                  required
                />
                <label className="login-input-label" htmlFor="startDate">
                  Start Date
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-field forInput">
                <input
                  type="date"
                  className="form-control rounded-pill form-input-background forDate"
                  name="endDate"
                  value={this.state.e_date}
                  id="endDate"
                  onChange={(e) => {
                    this.setState({ e_date: e.target.value });
                    if (this.state.s_date && e.target.value) {
                      let start = moment(this.state.s_date, "YYYY-MM-DD");
                      let end = moment(e.target.value, "YYYY-MM-DD");
                      console.log("Date Difference" + end.diff(start, "days"));
                      this.setState({
                        continuity: end.diff(start, "days"),
                      });
                    }
                  }}
                  placeholder="End Date"
                  required
                />
                <label className="login-input-label" htmlFor="endDate">
                  End Date
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="input-field">
                <input
                  type="text"
                  className="form-control rounded-pill   form-input-background "
                  name="continuity"
                  value={this.state.continuity}
                  id="continuity"
                  onChange={(e) => {
                    //this field get day difference from above startDate and endDate field
                  }}
                  readOnly
                  required
                />
                <label className="login-input-label" htmlFor="continuity">
                  Continuity
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-field-two forInput">
                <select
                  className="form-control rounded-pill   form-input-background "
                  name="mealTime"
                  value={this.state.meal_time}
                  id="mealTime"
                  onChange={(e) => this.setState({ meal_time: e.target.value })}
                  custom="ture"
                >
                  <option value="before meal" defaultValue>
                    Before meal
                  </option>
                  <option value="after meal">After meal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="input-field">
                <select
                  className="form-control rounded-pill   form-input-background "
                  name="notification"
                  value={this.state.notification}
                  id="notification"
                  onChange={(e) =>
                    this.setState({ notification: e.target.value })
                  }
                  custom="trure"
                >
                  <option value="before 15 mins">Before 15 mins</option>
                  <option value="before 30 mins">Before 30 mins</option>
                  <option value="before 1 hour">Before 1 hour</option>
                </select>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="input-field forInput">
                <input
                  className="form-control rounded-pill form-input-background"
                  type="number"
                  min="1"
                  max="5"
                  value={this.state.dogeNumValue}
                  onChange={
                    //  this.addDose
                    (e) => {
                      this.setState({
                        dogeNumValue: e.target.value,
                      });
                      console.log("dogeNumValue:" + this.state.dogeNumValue);
                    }
                  }
                />
              </div>
            </div>

            


            {Array.from({ length: this.state.dogeNumValue }, (v, k) => (
              <div key={k}>
                <div className="col-12 col-sm-6">
                  <div className="input-field forDoses">
                    <input
                      type="time"
                      className="form-control rounded-pill   form-input-background "
                      value={this.state.dose[k].time}
                      onChange={(e) => {
                        // this.setState({ dose: e.target.value })
                        console.log("Dose Time:" + e.target.value);
                        this.handleTimeChange(e.target.value, k);
                      }}
                      required
                    />
                    <label className="mt-0">{"Dose " + (k + 1)}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="input-field forNotification">
                <label className="col-12 col-sm-6">
                  <h3>Notification</h3>
                </label>
                <div
                  className="col-sm-10 forNotificationTo"
                  name="notifyTo"
                  value={this.state.notify_to}
                  id="notifyTo"
                  onChange={(e) => this.setState({ notify_to: e.target.value })}
                >
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="radio1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="radio1"
                      value="me"
                    >
                      <p className="forRdobtn">Me</p>
                    </label>
                  </div>

                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="radio2"
                      name="radio"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="radio2"
                      name="radio"
                      value="gaurdian"
                    >
                      <p className="forRdobtn">Gaurdian</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row routineBtn">
            <button
              type="submit"
              className="btn btn-block text-white text-center"
              style={{
                marginTop: "15px",
                marginBottom: "20px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "150px",
                borderRadius: "1em",
                height: "35px",
                backgroundColor: "#0C0C52",
                fontSize: "14px",
              }}
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PatientRoutineForm;
