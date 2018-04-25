import React,{Component} from 'react';

import passIcon from "../../images/passIcon.png";
import zippo from "../../images/zippo.png"

export default class TopLayer extends Component{

    render(){
        return(
            <div className="layer"> 
                    <div className="Rectangle"> 
                        <p>Zip c<img src={zippo}/>de</p>
                            <div>
                                    <div className="group">
                                    
                                        <input type="text" required/>
                                        <label>Enter your zipcode</label>
                                    </div>
                                    <div className="BookResidential">
                                                <div className="PassIcon">
                                                        <img src={passIcon}/>
                                                </div>
                                                <div className="text">
                                                    Book a residential or commercial cleaning service in your area now! 
                                                </div>

                                    </div>
                                    <div className="book-container">
                                            <span>Book</span>
                                    </div>
                            
                            </div>
                 </div>

            </div>
        )
    }
}