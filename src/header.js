import React, {Component} from 'react';
import './header.css';


const theTexts =[
    {
        value :"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
    },
    {
        value :"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
    },
    
]

const Pr = (props) => <p>{props.vl.value}</p>


const Prs =(props) => 

props.prList.map((currentpr,i) =>
    <div key={i} className="pr">
        <Pr vl ={currentpr}/>
    </div>
)


class Parag extends Component{
    render(){
        return (
            <div className="prg container">
                <Prs  prList={theTexts}/>
                
            </div>
            
        )
    }
}


export default Parag