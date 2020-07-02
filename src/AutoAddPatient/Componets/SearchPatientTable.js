import React from "react";
import "./SearchPatientTable.css";

class SearchPatientTable extends React.Component{

    state={
        patientId:""
    }

    onSubmitForm = (event) => {
        event.preventDefault();
    
        console.log(this.state.patientId);
        
        
      };

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-field forPatientSearch">
                                <input
                                type="text"
                                className="form-control rounded-pill  form-input-background "
                                name="patientID"
                                value={this.state.patientId}
                                id="patientID"
                                onChange={(e) =>
                                    this.setState({
                                        patientId: e.target.value
                                    })
                                }
                                required
                                />
                                    
                                <label className="border-0 rounded-pill login-input-label" htmlFor="patientID">
                                    Patient Name
                                <button className="border-0 rounded-pill bg-transparent forSearchBtn">
                                    <i type="submit" className="fa fa-search"></i>
                                </button>
    
                                </label>
                                  
                            </div>
                        </div>
                    </div>

                    <div className="container tableDesign">
                    <table className="table table-striped table-bordered table-hover table-responsive-sm">
                        <thead className="thead-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Nibir</td>
                            <td>mandol</td>
                            <td>26</td>
                            <td>nibirmondal@gmail.com</td>
                            
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    
                                
                </form>
                

                    
                
            </div>
        );
    }
}

export default SearchPatientTable;