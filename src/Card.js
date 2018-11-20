import React, {Component} from 'react';
import './Card.css';
import card1 from './images/a.png';
import card2 from './images/b.png'

const theCards =[
    {
        s:'For Patients',
        p:'Find a doctor, book a visit and solve any health-related doubt',
        im:card1,
        c:'im1',
        sl:true
    },
    {
        s:'For doctors',
        p:'Save time managing visits and cut no-shows by half',
        im:card2,
        c:'im2',
        sl:false
    },
    
]


const Dv = (props) =>
    <div>
        <span>{props.cardList.s}</span>
        <p>{props.cardList.p}</p>
        <div>{props.cardList.sl && <select  name="country" class="Country" id="selectoption"><option value="0">CHOOSE COUNTRY</option><option value="1">ARGENTINA</option><option value="2">AUSTRALIA</option><option value="3">BRAZIL</option><option value="4">TUNISIA</option><option value="5">ALGERIA</option><option value="6">EGYPT</option><option value="7">FRANCE</option><option value="8">ITALY</option></select>}</div>
        <img src={props.cardList.im} alt=" " className={props.cardList.c}/>
    </div>


const Dvs =(props) =>
   props.cardsList.map((currentcr,i) => 
   <div key={i}>
    <Dv cardList={currentcr}/>
   </div>
   )


   class Cards extends Component{
    render(){
        return (
            <div className="logo-card">
                <Dvs cardsList={theCards}/>
            </div>
            
        )
    }
}

export default Cards