import React from "react";
import ReactDom from "react-dom";
import "react-bootstrap";
import NavigationBar from "../Shared/Components/NavigationBar";
import PatinetRoutineForm from "./components/PatientRoutineForm";
import RoutineTable from "./components/RoutineTable";
import Banner from "./img/Banner.jpg";
import "./PatientRoutine.css";

 
class PatientRoutine extends React.Component{
    render(){
        return(
            <div className="">
                <NavigationBar/>
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <img className="image-fluid banner" src={Banner} height="200px" width="100%" alt="Banner"></img>
                    </div>
                    <div className="headline">
                        <h3>Patient Routine</h3>
                    </div>
                    
                </div>
                <div className="col-12 col-sm-8">
                    <PatinetRoutineForm/>
                    <RoutineTable/>
                </div>
            </div>
            
        );
    }
}

export default PatientRoutine;