import React from 'react';
import './css/section_3.css';
import Sec3img from './img/1.jpg'

class SectionThree extends React.Component{
    render(){
        return(
            
                <div className="sec_3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 offset-1 col-sm-6 text-center sec3Box">
                                <h1>What is Smart Nurse</h1>
                                <h2>&mdash;</h2>
                                <p className="WhtIsSmNurse">Teresa is an online platform where you can<br></br>
                                    get all kind of medical services whenever
                                    you need. Lorem Ipsum is simply dummy text of<br></br> the printing and typesetting industry. Lorem <br></br>Ipsum has been the industry's standard dummy<br></br> text ever since the 1500s, when an unknown<br></br>
                                    printer took a galley of type and scrambled it to<br></br> make a type specimen book. It has survived not<br></br> only five centuries, but   the leap into<br></br>
                                    electronic typesetting, remaining essentially
                                    unchanged.
                                </p>

                            </div>
                            <div className="col-12 col-sm-5">
                                <img className="sec3img" src={Sec3img} alt="sec3img" height="75%" width="100%" ></img>
                                
                            </div>
                        </div>
                    </div>
                </div>
            

        );
    }
}

export default SectionThree;