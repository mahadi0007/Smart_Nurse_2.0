import React from 'react';
import './css/section_2.css';
import serviceIcon from './img/4.png';


class SectionTwo extends React.Component{
    render(){
        return(
            <div className="container sec_2">
                <h1 className="text-center ourSrvcs">Our Services</h1>

                    <div className="row">
                        <div className="col-10 offset-1 col-sm-3 serviceBox">
                            
                            <div className="text-center">
                                <img src={serviceIcon} alt={"serviceIcon"} height="90px" width="90px"></img>
                                <p className="serviceName">Create Patient</p>
                                <p className="serviceDetails">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ised in the 1960s with the release of Letraset sheets containing Lorem</p>
                            </div> 
                            

                        </div>
                        <div className="col-10 offset-1 col-sm-3 serviceBox">
                        
                        <div className="text-center">
                                <img src={serviceIcon} alt={"serviceIcon"} height="90px" width="90px"></img>
                                <p className="serviceName">Patient Routine</p>
                                <p className="serviceDetails">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ised in the 1960s with the release of Letraset sheets containing Lorem</p>
                            </div>

                        </div>
                        <div className="col-10 offset-1 col-sm-3 serviceBox">
                        
                        <div className="text-center">
                                <img src={serviceIcon} alt={"serviceIcon"} height="90px" width="90px"></img>
                                <p className="serviceName">Realtime Notification</p>
                                <p className="serviceDetails">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ised in the 1960s with the release of Letraset sheets containing Lorem</p>
                            </div>

                        </div>

                    </div>
            </div>

        );
    }

}

export default SectionTwo;