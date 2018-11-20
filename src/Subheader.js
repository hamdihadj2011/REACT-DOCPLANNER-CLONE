import React, { Component } from 'react';
import sygnet from './images/sygnet.png'
import './Subheader.css'

class Subheader extends Component{
    render(){
        return (
            <div className="subh">
                
                    <img  src={sygnet} alt=" "/>
                    <p>Making the healthcare experience more human</p>
            
            </div>
        )
    }
}


export default Subheader