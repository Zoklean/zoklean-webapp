import React,{Component} from 'react';
import './Footer.scss'
import facebook from "../../../images/facebook-logo-button.png";
import twitter from "../../../images/twitter-logo-button.png";
import instagram from "../../../images/instagram-logo.png";
import waterOrg from "../../../images/waterOrg.png";

export default class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="container-fluid  head">

                <div className="row">
                        <div className="col-md-2 liner"> 
                           
                                 <p>Careers</p>
                                 <p>About Us</p>
                                 <p>FAQ</p>
                                 <p>Support</p>
                          
                        </div>
                        <div className="col-md-3 liner">
                                <p>Terms</p>
                                <p>Privacy Policy</p>
                                <p>Cancellation Policy</p>
                                <p>Contact Us</p>
                            
                        </div>
                        <div className="col-md-3 liner">
                                <p>Bedroom Cleaning</p>

                                <p>Bathroom Cleaning</p>
                                
                                <p>Kitchen Cleaning</p>
                                
                                <p>Commercial Cleaning</p>
                            
                        </div>
                         <div className="col-md-4 lastColumn-relative">
                             <div className="follow">
                                <p>Follow Us on
                                    <img src={facebook}/>
                                    <img src={twitter}/>
                                    <img src={instagram}/>
                                </p>
                               
                             </div>
                             <div className="bottomLine">
                                    <img src={waterOrg}/> 
                                     <p>$1 donated for each cleaning</p> 
                            </div>
                        </div>

                </div>


            </div>
            <div className="foot"> 
                    <p>© 2017 Zoklean. All rights reserved.</p>
            </div>
        </footer>
        )
    }
}