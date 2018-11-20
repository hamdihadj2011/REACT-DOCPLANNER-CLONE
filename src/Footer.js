import React, {Component} from 'react';
import './Footer.css';



class Footer extends Component{
    render(){
        return (
            <div className="footer-flex">
            <hr/>
        <p>we are in 8 countries:  <a href="#">Poland</a> <a href="#">Turkey</a> <a href="#">Spain</a> <a href="#">Italy</a> <a href="#">Mexico</a> <a href="#">Brazil</a> <a href="#">Argentina</a> en <a href="#">Chile</a> </p>
        <p>
            This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
        </p>
        <p>www.docplanner.com © 2018</p>
    </div>
        )
    }
}

export default Footer