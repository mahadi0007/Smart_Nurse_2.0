import React from "react";
import NavigationBar from "../Shared/Components/NavigationBar";
import Banner from "../Shared/img/Banner.png";
import SearchPatientTable from "./Componets/SearchPatientTable";
import "./AutoAddPatient.css";

class AutoAddPatient extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar/>

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
                        <p className="text-center text-light ml-3 mb-4 ml-lg-0 headlineForXs display-4">
                            Add Patient
                        </p>
                    </div>
                </div>
                <div>
                    <SearchPatientTable/>
                </div>
                <div className="row">
                        <a
                        type="button" href="./createpatientmanually"
                        className="btn text-white text-center"
                        style={{
                            marginTop: "35px",
                            marginBottom: "20px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "auto",
                            borderRadius: "1em",
                            height: "35px",
                            backgroundColor: "#0C0C52",
                            fontSize: "14px",
                            paddingLeft:"20px",
                            paddingRight:"20px"
                        }}
                        >
                        CREATE PATIENT MANUALLY
                        </a>
                    </div>
                
            </div>
        );
    }
}

export default AutoAddPatient;