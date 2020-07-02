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
              <p className="text-left text-light ml-3 mb-4 ml-lg-0 display-4">
                Patient Routine
              </p>
          </div>
        </div>
        <div className="row">
          <div className="col-11 col-sm-7 forPatientRoutine">
         
              <PatinetRoutineForm/>

          </div>



          <div className="col-sm-3 col-md-4">
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

        <div className="container-fluid row justify-content-center align-self-center">
          <RoutineTable />
        </div>
      </div>
    );
  }
}

export default PatientRoutine;
