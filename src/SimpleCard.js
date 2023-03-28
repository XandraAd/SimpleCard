import React from "react";
import { Component } from "react";
import Image from './Image';
import Title from './Title';
import Description from './Description';
import image1 from './image1.jpg';
import './Styles.css';

class SimpleCard extends Component {
    render() {
        return(
            <div className="Container">
             <div className='pics'>
                <Image className='image' img={image1}/>
                </div>
        
            <div className='card-body'>
            <Title className='intro' company="HighGardens Properties"/>
            <Description className='desc' details="Your guide to an extraordinary HOME "/>
            
            </div>
            
        
            </div>
        );
    }
}

export default SimpleCard;