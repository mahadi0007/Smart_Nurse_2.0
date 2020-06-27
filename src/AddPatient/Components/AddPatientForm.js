import React from "react";


class AddPatientForm extends React.Component{
    state={
        fName:"",lName:"",email:"",phn:"",address:"",age:"",height:"",weight:""
    }

    onSubmitForm = (event) => {
        event.preventDefault();
    
        console.log(this.state.fName);
        console.log(this.state.lName);
        console.log(this.state.email);
        console.log(this.state.phn);
        console.log(this.state.address);
        console.log(this.state.age);
        console.log(this.state.height);
        console.log(this.state.weight);
        
      };

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmitForm}>
                
                    <div className="row">
                        <div className="col-sm-6">
                        <div className="input-field">
                            <input
                            type="text"
                            className="form-control rounded-pill   form-input-background "
                            name="firstName"
                            value={this.state.fName}
                            id="firstName"
                            onChange={(e) =>
                                this.setState({
                                fName: e.target.value,
                                })
                            }
                            required
                            />
                            <label className="login-input-label" htmlFor="firstName">
                            First Name
                            </label>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="input-field">
                            <input
                            type="text"
                            className="form-control rounded-pill   form-input-background "
                            name="lastName"
                            value={this.state.lName}
                            id="lastName"
                            onChange={(e) => this.setState({ lName: e.target.value })}
                            required
                            />
                            <label className="login-input-label" htmlFor="lastName">
                            Last Name
                            </label>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                        <div className="input-field">
                            <input
                            type="email"
                            className="form-control rounded-pill   form-input-background "
                            name="email"
                            value={this.state.email}
                            id="email"
                            onChange={(e) =>
                                this.setState({
                                email: e.target.value,
                                })
                            }
                            required
                            />
                            <label className="login-input-label" htmlFor="email">
                            Email
                            </label>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="input-field">
                            <input
                            type="text"
                            className="form-control rounded-pill   form-input-background "
                            name="phnNo"
                            value={this.state.phn}
                            id="phnNo"
                            onChange={(e) => this.setState({ phn: e.target.value })}
                            required
                            />
                            <label className="login-input-label" htmlFor="phnNo">
                            Phone Number
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
                            name="address"
                            value={this.state.address}
                            id="address"
                            onChange={(e) =>
                                this.setState({
                                address: e.target.value,
                                })
                            }
                            required
                            />
                            <label className="login-input-label" htmlFor="address">
                            Address
                            </label>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="input-field">
                            <input
                            type="text"
                            className="form-control rounded-pill   form-input-background "
                            name="age"
                            value={this.state.age}
                            id="age"
                            onChange={(e) => this.setState({ age: e.target.value })}
                            required
                            />
                            <label className="login-input-label" htmlFor="age">
                            Age
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
                            name="height"
                            value={this.state.height}
                            id="height"
                            onChange={(e) =>
                                this.setState({
                                height: e.target.value,
                                })
                            }
                            required
                            />
                            <label className="login-input-label" htmlFor="height">
                            Height
                            </label>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="input-field">
                            <input
                            type="text"
                            className="form-control rounded-pill   form-input-background "
                            name="weight"
                            value={this.state.weight}
                            id="weight"
                            onChange={(e) => this.setState({ weight: e.target.value })}
                            required
                            />
                            <label className="login-input-label" htmlFor="weight">
                            Weight
                            </label>
                        </div>
                        </div>
                    </div>

                    <div className="row addPatientBtn">
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
export default AddPatientForm;