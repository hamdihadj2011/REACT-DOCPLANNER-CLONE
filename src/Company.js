import React, {Component} from 'react';
import './Company.css';

const theLink1 =[
    {
        p:'ZnanyLekars',
        im:'https://hamdihadj2011.github.io/docplanner/imgs/doc.png',
        c:'l1'
    },
    {
        p:'ZnanyLekars',
        im:'https://hamdihadj2011.github.io/docplanner/imgs/doc.png',
        c:'l2'
    },
    {
        p:'ZnanyLekars',
        im:'https://hamdihadj2011.github.io/docplanner/imgs/doc.png',
        c:'l3'
    },
    {
        p:'ZnanyLekars',
        im:'https://hamdihadj2011.github.io/docplanner/imgs/doc.png',
        c:'l4'
    },
    {
        p:'ZnanyLekars',
        im:'https://hamdihadj2011.github.io/docplanner/imgs/doc.png',
        c:'l5'
    },
    {
        p:'ZnanyLekars',
        im:'https://hamdihadj2011.github.io/docplanner/imgs/doc.png',
        c:'l6'
    },
    
]

const Lnk1 =(props) => 
    <a href='#' className={props.link1List.c}> <img src={props.link1List.im}alt=''/> {props.link1List.p} </a>


const Lnks1 = (props) =>
props.links1List.map((currentlnks1,i)=>
<Lnk1 link1List={currentlnks1} key={i}/>
)


class Links1 extends Component{
    render(){
        return (
           <div className='company'>
                <p>
                we are a global company with local culture
                </p>
                <div className="links1">
                    <Lnks1 links1List={theLink1}/>
                </div>
           </div>
            
        )
    }
}

export default Links1