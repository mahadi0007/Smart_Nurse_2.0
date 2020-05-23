import React from 'react';
import './css/section_6.css';
import icon from './img/icon.jpg';

class SectionSix extends React.Component{
    render(){
        return(
            <div className="sec_6">
                <h1 className="text-center process">Process</h1>
                <div className="container row">
                    
                    <div className="col-sm">
                        <p className="howItWork">How it work</p>
                        <div className="row no-border process">
                            <img src={icon} alt="icon" height="70px" width="70px"></img>
                            <h4>Download app or visit website</h4>
                        </div>
                        <div className="processDetails">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                            </p>
                        </div>
                        <div className="row no-border process">
                            <img src={icon} alt="icon" height="70px" width="70px"></img>
                            <h4>Login with valid ID</h4>
                        </div>
                        <div className="processDetails">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                            </p>
                        </div>
                        <div className="row no-border process">
                            <img src={icon} alt="icon" height="70px" width="70px"></img>
                            <h4>Create a patient</h4>
                        </div>
                        <div className="processDetails">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                            </p>
                        </div>
                        <div className="row no-border process">
                            <img src={icon} alt="icon" height="70px" width="70px"></img>
                            <h4>Let us take care of your illness</h4>
                        </div>
                        <div className="processDetails">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                            </p>
                        </div>

                    </div>
                    <div className="col-sm">

                    </div>

                    
                    
                </div>
                
                

            </div>

        );
    }
}

export default SectionSix;