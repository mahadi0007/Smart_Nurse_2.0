import React from 'react';
import './css/section_5.css';
import AppAddImg from './img/APP.png';

class SectionFive extends React.Component{

    render(){
        return(
            <div className="sec_5">
                
                <h1 className="text-center">Our App Is On The Way</h1>
                
                <div className="appAddBox">
                    <div className="container row">
                        <div className="col-sm appAddText">
                            <h1>Get All Our Services<br></br>
                            in SmartNurse App</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ised in the 1960s with the release of Letraset sheets containing Lorem</p>

                        </div>
                        <div className="col-sm text-center img">
                        <img src={AppAddImg} alt="appAddImg" height="60%" width="70%"></img>

                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default SectionFive;