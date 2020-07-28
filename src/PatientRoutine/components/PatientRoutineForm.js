import React from "react";

import { Form } from "react-bootstrap";
import "./PatientRoutineForm.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import moment from "moment";

import { Cookies } from "react-cookie";
import ApiCalendar from "./ApiCalendar";
import auth from "../../Shared/Auth/auth";

class PatientRoutineForm extends React.Component {
  constructor() {
    super();

    this.state = {
      postArray: [],
      Body: "",
      id: "",
      routineItem: "Medicine",
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
      dogeNumValue: "",

      PatientCheck: true,
      GuardianCheck: "",
    };
  }

  componentDidMount = async (e) => {
    console.log("auth google sign in " + auth.googleSignedIn);
    if (!auth.googleSignedIn) {
      console.log("auth google sign in if " + auth.googleSignedIn);
      setTimeout(function () {
        console.log("wait 3 seconds");
        ApiCalendar.handleAuthClick();
        auth.googleSignedIn = ApiCalendar.sign;

        new Cookies().set("googleSignedIn", ApiCalendar.sign, {
          path: "/",
          maxAge: 31536000,
        });
      }, 3 * 1000);

      console.log("finish 3 seconds wait");
    }
  };

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
    console.log("Guardian Check " + this.state.GuardianCheck);
    console.log("Patient Check " + this.state.PatientCheck);

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
          <div className="form-row pt-5">
            <div className="col-12 col-sm-4">
              <Form.Label className="forLabel">
                <h4>Routine Item</h4>
              </Form.Label>
            </div>
            <div className="col-12 col-sm-7 pl-5 pr-5 rotuine-dropDown">
              <Form.Control
                as="select"
                className="form-control rounded-pill   form-input-background"
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
            </div>
          </div>

          <div className="form-row pt-2">
            <div className="col-12 col-sm-6">
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
                  {this.state.routineItem + " Name"}
                </label>
              </div>
            </div>

            {this.state.routineItem === "Medicine" ||
            this.state.routineItem === "Food" ? (
              <div className="col-12 col-sm-6">
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
            ) : null}

            <div className="col-12 col-sm-6">
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
            <div className="col-12 col-sm-6">
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

            <div className="col-12 col-sm-6">
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

            {this.state.routineItem === "Medicine" ? (
              <div className="col-12 col-sm-6">
                <div className="input-field-two forInput">
                  <select
                    className="form-control rounded-pill   form-input-background "
                    name="mealTime"
                    value={this.state.meal_time}
                    id="mealTime"
                    onChange={(e) =>
                      this.setState({ meal_time: e.target.value })
                    }
                    custom="ture"
                  >
                    <option value="before meal" defaultValue>
                      Before meal
                    </option>
                    <option value="after meal">After meal</option>
                  </select>
                </div>
              </div>
            ) : null}

            <div className="col-12 col-sm-6">
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
                  <option value="before 15 mins">Notify Before 15 mins</option>
                  <option value="before 30 mins">Notify Before 30 mins</option>
                  <option value="before 1 hour">Notify Before 1 hour</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="input-field forInput">
                <input
                  type="number"
                  className="form-control rounded-pill   form-input-background "
                  name="timesPerDay"
                  min="1"
                  max="5"
                  value={this.state.dogeNumValue}
                  id="timesPerDay"
                  onChange={(e) =>
                    this.setState({ dogeNumValue: e.target.value })
                  }
                  required
                />
                <label className="login-input-label" htmlFor="timesPerDay">
                  Times Per Day
                </label>
              </div>
            </div>

            {Array.from({ length: this.state.dogeNumValue }, (v, k) => (
              <div className="col-12 col-sm-6">
                <div key={k}>
                  <div className="input-field forInput">
                    <input
                      type="time"
                      id={"doseTime" + k}
                      className="form-control rounded-pill   form-input-background "
                      value={this.state.dose[k].time}
                      onChange={(e) => {
                        // this.setState({ dose: e.target.value })
                        console.log("Dose Time:" + e.target.value);
                        this.handleTimeChange(e.target.value, k);
                      }}
                      required
                    />
                    <label
                      className="login-input-label "
                      htmlFor={"doseTime" + k}
                    >
                      {"Dose " + (k + 1)}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-sm-6">
            <div className="input-field forNotification">
              <label className="col-12 col-sm-6">
                <h3>Notification</h3>
              </label>
              <div className="col-sm-12 pt-5 forNotificationTo">
                <div className="row">
                  <div className="col-sm-6">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => {
                            if (e.target.checked) {
                              this.setState({ PatientCheck: "true" });
                            } else {
                              this.setState({ PatientCheck: "false" });
                            }
                          }}
                          defaultChecked
                          required
                          name="patient Check"
                          color="primary"
                        />
                      }
                      label="Patient"
                    />
                  </div>

                  <div className="col-sm-6">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => {
                            if (e.target.checked) {
                              this.setState({ GuardianCheck: "true" });
                            } else {
                              this.setState({ GuardianCheck: "false" });
                            }
                          }}
                          name="Guardian Check"
                          color="primary"
                        />
                      }
                      label="Guardian"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row routineBtn pt-5">
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
