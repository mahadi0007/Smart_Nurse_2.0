import React from "react";

import "react-bootstrap";
import NavigationBar from "../Shared/Components/NavigationBar";
import PatinetRoutineForm from "./components/PatientRoutineForm";
import RoutineTable from "./components/RoutineTable";
import Banner from "./img/Banner.png";
import RoutineImg from "./img/Patient_Routine.jpg";
import "./PatientRoutine.css";

class PatientRoutine extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <div className="row">
          <div className="col-12 col-sm-12">
            <img
              className="image-fluid banner"
              src={Banner}
              height="200px"
              width="100%"
              alt="Banner"
            ></img>
          </div>
          <div className="headline">
            <h3>Patient Routine</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8">
            <PatinetRoutineForm />
          </div>
          <div className="col-sm-4">
            <div>
              <img
                className="d-none d-sm-block image-fluid routineImg"
                src={RoutineImg}
                width="100%"
                alt="RoutineTime"
              ></img>
            </div>
          </div>
        </div>

        <div className="container">
          <RoutineTable />
        </div>
      </div>
    );
  }
}

export default PatientRoutine;
