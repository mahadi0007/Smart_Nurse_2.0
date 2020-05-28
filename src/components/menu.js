import React from 'react';
import logo from'./img/logo1.png';
import  './css/menu.css';



class menu extends React.Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm fixed-top mybar">
                    <div className="container-fluid">
                        
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt={"logo"} style={{width:'100px',height:'80px'}}/>
                        </a>
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">                                
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse customLink" id="Navbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">about</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                <li className="nav-item"><button className="nav-link loginBtn">login</button></li>
                                
                                
                            </ul>
                        </div>                        
                    </div>

                </nav>
                
            </div>
        );
    }
}

export default menu;