import React, {Component} from 'react';
import './nav.css';
import logo from './images/logo-default-group-en.svg';

const theNavs =[
    {
        value :"About",
    },
    {
        value :"Career",
    },
    {
        value :"Departements",
    },
]


const Bt = (props) => <li> <a href='#'>{props.btn.value}</a></li>



const Bts =(props) =>
    props.btsList.map((currentbt,i) =>
        <ul key={i}>
            <Bt btn={currentbt}/>
        </ul>
    )


    class Nav extends Component{
        render(){
            return (
                <div className="navbar">
                    <div className="container">
                        <img  src={logo} alt=" "/>
                        <Bts btsList= {theNavs}/>
                    </div>
                </div>
            )
        }
    }




export default Nav