import React from 'react';
//import  './css/menu.css';
//import logo from'./img/3.png';
import Menu from './menu.js';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import Footer from './Footer';

class app extends React.Component{

    render(){
        return (
            <div>
                <Menu/>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
                <SectionSix/>
                <Footer/>

            </div>
            
        );
    }

}

export default app;