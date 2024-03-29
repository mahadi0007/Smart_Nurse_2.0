import React from "react";

import "react-bootstrap";
import NavigationBar from "../Shared/Components/NavigationBar";
import Banner from "../Shared/img/Banner.png";
import AddPatientImg from "../Shared/img/Add-Patient.jpg";
import "./AddPatient.css";
import AddPatientForm from "./Components/AddPatientForm";

class AddPatient extends React.Component{
    
    
    
    
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
                            Create Patient Manually
                        </p>
                    </div>
                </div>
                
                

                <div className="row">
                <div className="col-11 col-sm-7 forForm">
                
                    <AddPatientForm/>
              
                    
                </div>
                <div className="col-sm-3 col-md-4">
                    <div>
                    <img
                        className="d-none d-sm-block image-fluid AddPatientImg"
                        src={AddPatientImg}
                        width="100%"
                        alt="Add Patient img"
                    ></img>
                    </div>
                </div>
                </div>
                

                


            </div>

        );
    }
}
export default AddPatient;