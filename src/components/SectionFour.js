import React from 'react';
import './css/section_4.css'
import topServiceIcon from './img/icon.jpg'

class SectionFour extends React.Component{

    render(){
        return(
            <div className="sec_4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            
                            <div className="text-center topServiceBox">
                                <h1>Top Services<br></br>
                                We Provide</h1>
                                <p>We have some very top level services</p>
                                <button className="btn">Learn more</button>

                            </div>
                            
                            
                        </div>
                        <div className="col-sm">
                            <div className="topServices">
                                <div className="row picNtxt">
                                    
                                    <img src={topServiceIcon} alt="topServiceIcon" height="90px" width="90px"></img>
                                    
                                    <h3>Activity management</h3>
                                </div>
                                <div className="">
                                    
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>
                            <div className="topServices">
                                <div className="row picNtxt">
                                    
                                    <img src={topServiceIcon} alt="topServiceIcon" height="90px" width="90px"></img>
                                    
                                    <h3>Patient routine</h3>
                                </div>
                                <div className="">
                                
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>
                            <div className="topServices">
                                <div className="row picNtxt">
                                    
                                    <img src={topServiceIcon} alt="topServiceIcon" height="90px" width="90px"></img>
                                    
                                    <h3>Create patient</h3>
                                </div>
                                <div className="">
                                
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>
                            <div className="topServices">
                                <div className="row picNtxt">
                                    
                                    <img src={topServiceIcon} alt="topServiceIcon" height="100px" width="100px"></img>
                                    
                                    <h3>Realtime notification</h3>
                                </div>
                                <div className="">
                                
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SectionFour;