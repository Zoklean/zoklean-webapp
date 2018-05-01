import React,{Component } from 'react';
import Contro from "../../images/contractor.png"
import BluePass from "../../images/bluePass.png"
export  default class ContractorHome extends Component{
    render(){
        return(
            <div className="container-fluid container-contra">
                <div className="row contractor"> 
                        <div className="col-md-6 container-contra">
                            <img src={Contro}/>
                        </div>
                         <div className="col-md-6 container-contra form-holder">
                              
                                    <div className="box-contra">
                                        <div><img src={BluePass}/>Join for Free</div>
                                    </div >
                                    <div className="box-contra">
                                         <div><img src={BluePass}/>Gain customers</div>
                                    </div>
                                    <div className="box-contra">
                                         <div><img src={BluePass}/>Optimize Booking</div>
                                    </div>
                                    
                                        <div className="btn">
                                            Become a contractor
                                        </div>
                                 
                                
                        </div>  
                </div>

            </div>
        )
    }
}