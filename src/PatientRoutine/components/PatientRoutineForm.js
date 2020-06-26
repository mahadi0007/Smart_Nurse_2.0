import React from "react";

import { Form } from "react-bootstrap";
import "./PatientRoutineForm.css";

class PatientRoutineForm extends React.Component {
  state = {
    routineItem: "",
    item_name: "",
    unit: "",
    s_date: "",
    e_date: "",
    community: "",
    meal_time: "",
    time: "",
    notification: "",
    notify_to: "",
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    console.log(this.state.routineItem);
    console.log(this.state.item_name);
    console.log(this.state.unit);
    console.log(this.state.s_date);
    console.log(this.state.e_date);
    console.log(this.state.community);
    console.log(this.state.meal_time);
    console.log(this.state.time);
    console.log(this.state.notification);
    console.log(this.state.notify_to);
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
                <option value="Medicine">Medicine</option>
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
              <div className="input-field">
                <input
                  type="text"
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
                  onChange={(e) => this.setState({ s_date: e.target.value })}
                  required
                />
                <label className="login-input-label" htmlFor="startDate">
                  Start Date
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-field">
                <input
                  type="date"
                  className="form-control rounded-pill   form-input-background "
                  name="endDate"
                  value={this.state.e_date}
                  id="endDate"
                  onChange={(e) => this.setState({ e_date: e.target.value })}
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
                  name="community"
                  value={this.state.community}
                  id="community"
                  onChange={(e) => this.setState({ community: e.target.value })}
                  required
                />
                <label className="login-input-label" htmlFor="community">
                  Community
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-field-two">
                <select
                  className="form-control rounded-pill   form-input-background "
                  name="mealTime"
                  value={this.state.meal_time}
                  id="mealTime"
                  onChange={(e) => this.setState({ meal_time: e.target.value })}
                  custom
                >
                  <option value="before meal">Before meal</option>
                  <option value="after meal">After meal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="input-field">
                <input
                  type="text"
                  className="form-control rounded-pill   form-input-background "
                  name="time"
                  value={this.state.time}
                  id="time"
                  onChange={(e) => this.setState({ time: e.target.value })}
                  required
                />
                <label className="login-input-label" htmlFor="time">
                  Time
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-field-two">
                <select
                  className="form-control rounded-pill   form-input-background "
                  name="notification"
                  value={this.state.notification}
                  id="notification"
                  onChange={(e) =>
                    this.setState({ notification: e.target.value })
                  }
                  custom
                >
                  <option value="before 15 mins">Before 15 mins</option>
                  <option value="before 30 mins">Before 30 mins</option>
                  <option value="before 1 hour">Before 1 hour</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div class="input-field">
                <label htmlfor="notifyTo" class="col-12 col-sm-6">
                  <h3>Notification</h3>
                </label>
                <div
                  class="col-sm-10"
                  name="notifyTo"
                  value={this.state.notify_to}
                  id="notifyTo"
                  onChange={(e) => this.setState({ notify_to: e.target.value })}
                >
                  <label class="mr-2">
                    <input type="radio" value="me" /> Me
                  </label>
                  <label class="mr-2">
                    <input type="radio" value="gaurdian" /> Gaurdian
                  </label>
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
