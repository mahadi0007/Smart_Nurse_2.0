import React from "react";
import ReactDom from "react-dom"
import { Form, FormGroup, FormLabel,Table} from "react-bootstrap";
import "./PatientRoutineForm.css";
import { FormRow } from "react-bootstrap/Form";


class PatientRoutineForm extends React.Component{

    state ={
        routineItem:"",
        item_name: "",
        unit: "",
        s_date:"",e_date:"",community:"",meal_time:"",time:"",notification:""
    };

    onSubmitForm=(event)=>{
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

    };

    render(){
        return(
            <div>
                <Form onSubmit={this.onSubmitForm}>
                    
                <Form.Group className="grp1" >
                        <Form.Row>
                            <Form.Label className="forLabel"><h4>Routine Item</h4></Form.Label>
                            <Form.Control
                                as="select"
                                className="col-8 col-sm-4 offset-2 rounded-pill input1"
                                value={this.state.routineItem}
                                onChange={(e) => this.setState({routineItem:e.target.value})}
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
                        <Form.Group>
                        <Form.Label className="forLabel">Item name</Form.Label>
                        <Form.Control className="col-8 col-sm-6 rounded-pill forInput" type="text"
                        value={this.state.item_name}
                        onChange={(e)=>this.setState({item_name:e.target.value})} placeholder="" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group className="forInputXs">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control className="col-8 col-sm-6 rounded-pill" type="text"
                        value={this.state.unit}
                        onChange={(e) => this.setState({unit:e.target.value})} placeholder="" />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Form.Group>
                        <Form.Label className="forLabel">Start Date</Form.Label>
                        <Form.Control className="col-8 col-sm-6 rounded-pill forInput" type="date"
                        value={this.state.s_date}
                        onChange={(e) => this.setState({s_date:e.target.value})} placeholder="" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group className="forInputXs">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control className="col-8 col-sm-6 rounded-pill" type="date"
                        value={this.state.e_date}
                        onChange={(e) => this.setState({e_date:e.target.value})} placeholder="" />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Form.Group>
                        <Form.Label className="forLabel">Community</Form.Label>
                        <Form.Control className="col-8 col-sm-6 rounded-pill forInput" type="text"
                            value={this.state.community}
                            onChange={(e) => this.setState({community:e.target.value})} placeholder="" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group className="forInputXs">
                            <div className="">
                                <Form.Label>Before/After meal</Form.Label>
                            </div>
                        
                        <div className="">
                            <Form.Control
                                    as="select"
                                    className="col-8 col-sm-6 rounded-pill"
                                    value={this.state.meal_time}
                                    onChange={(e) => this.setState({meal_time:e.target.value})}
                                    custom
                                    >
                                        <option value="Before meal">Before meal</option>
                                        <option value="After meal">After meal</option>
                                        

                            </Form.Control>
                        </div>
                        
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Form.Group>
                        <Form.Label className="forLabel">Time</Form.Label>
                        <Form.Control className="col-8 col-sm-6 rounded-pill forInput" type="text"
                        value={this.state.time}
                        onChange={(e) => this.setState({time:e.target.value})} placeholder="" />
                        
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group className="forInputXs">
                            <div className="">
                                <Form.Label>Notification</Form.Label>
                            </div>
                        
                        <div className="">
                            <Form.Control
                                    as="select"
                                    className="col-8 col-sm-6 rounded-pill"
                                    value={this.state.notification}
                                    onChange={(e) => this.setState({notification:e.target.value})}
                                    custom
                                    >
                                        <option value="Before 15 mins">Before 15 mins</option>
                                        <option value="Before 30 mins">Before 30 mins</option>
                                        <option value="Before 1 hour">Before 1 hour</option>

                            </Form.Control>
                        </div>
                        
                        </Form.Group>
                    </div>
                </div>
    
                <button className="btn addBtn" type="submit">ADD</button>
  
                </Form>

                
                
            </div>
        );
    }
}

export default PatientRoutineForm;