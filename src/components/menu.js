import React from 'react';
import logo from'./img/logo1.png';
import  './css/menu.css';


class menu extends React.Component{

    render(){
        return(
            <div>
                <nav className="navbar mybar">
                    <div className="container-fluid">
                        <img src={logo} alt={"logo"} style={{width:'100px',height:'80px'}}/>
                        <ul className="nav customLink">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><button className="btn loginBtn">login</button></li>
                            
                            
                        </ul>
                    </div>

                </nav>
                
            </div>
        );
    }
}

export default menu;