import React, {Component} from 'react';
import './City.css';

const theCitys =[
    {
        i:'https://www.docplanner.com/images/warsaw.png',
        p:'Warsaw',
        t:'See Opening'
    },
    {
        i:'https://www.docplanner.com/images/barcelona.png',
        p:'Barcelona',
        t:'See Opening'
    },
    {
        i:'https://www.docplanner.com/images/istanbul.png',
        p:'Istanbul',
        t:'See Opening'
    },
    {
        i:'https://www.docplanner.com/images/rome.png',
        p:'Rome',
        t:'See Opening',
    
    },
    {
        i:'https://www.docplanner.com/images/mexico-city.png',
        p:'Mexico City',
        t:'See Opening',
    
    },
    {
        i:'https://www.docplanner.com/images/curitiba.png',
        p:'Curitibia',
        t:'See Opening',
    
    },
    
]

const Cit =(props) =>
    <div className='imgs'>
        <img src={props.citLists.i} alt=' ' className='images'/>
        <div className='imgs-text'>
            <span>{props.citLists.p}</span>
            <button>{props.citLists.t}</button>
        </div>
    </div>


const City =(props) =>
props.cityLists.map((currentcity,i)=>

        <Cit citLists={currentcity} />
    
)


class Citys extends Component{
    render(){
        return(
            <div className='citys'>
                <div className='city-header'>
                    <h1>Improve the lives of millions. Change yours forever</h1>
                    <p>More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.</p>
                </div>

                <div className='city-image'>
                    <City cityLists={theCitys}/>
                </div>
            </div>
        )
    }
}


export default Citys