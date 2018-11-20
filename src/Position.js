import React, {Component} from 'react';
import './Position.css';

const thePositions =[
    {
        i:'https://www.docplanner.com/img/flag.png',
        p:'Leader in 10 countries',
        t:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile'
    },
    {
        i:'https://www.docplanner.com/img/visits.png',
        p:'1 million appointments',
        t:'booked last month'
    },
    {
        i:'https://www.docplanner.com/img/patients.png',
        p:'30 million unique patients',
        t:'visit us every month'
    },
    {
        i:'https://www.docplanner.com/img/doctors.png',
        p:'2 million active doctors',
        t:'trust in our solutions',
        c:''
    },
    
]
const Pos =(props) =>
    <div className={props.ps.c}>
        <img src={props.ps.i} alt=" "/>
        <p>{props.ps.p}</p>
        <span> {props.ps.t} </span>
    </div>


const Poses =(props) => 
props.posesList.map((currentps,i)=>
    
        <Pos ps={currentps}/>
   
)


class Positions extends Component{
    render(){
        return (
            <div className='position'>
                <div className="poses-text">
                    <p>The world's biggest healthcare platform</p>
                    <span>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</span>
                </div>
                <div className="poses">
                    <Poses  posesList={thePositions}/>
                    
                </div>
            </div>
            
        )
    }
}

export default Positions