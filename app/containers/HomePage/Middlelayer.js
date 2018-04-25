import React,{Component} from 'react';
import professionals from "../../images/professionals.png";
import service from "../../images/service.png"
import pricing from "../../images/pricing.png"
export default class MiddleLayer extends Component{
    render(){
        return(
            <div className="container-fluid middle-layer">
                     <div className="container text">
                        At Zoklean, you can schedule the best local cleaning companies instantly at a fixed price. We offer cleaning services on demand with professionals you can trust. Don’t stress and leave your mess for the best at Zoklean!
                     </div>
                     <div className="container">
                     <div className="row">
                        <div className="col-md-4 box">
                            <img src={pricing}/>
                             <h3>Honest Pricing</h3>
                             <p>Get a fixed rate instantly 
                                 through our modern platform.</p>
                         </div>
                         <div className="col-md-4 box">
                                <img src={professionals}/>
                                <h3>Screened Cleaning Professionals</h3>
                                <p>Don’t worry, we investigate each cleaning
                                        company to ensure that they’re legit.</p>
                             </div>
                             <div className="col-md-4 box">
                                    <img src={service}/>
                                    <h3>Reliable service</h3>
                                    <p>Feel secure knowing that your
                                            satisfaction is guaranteed.</p>
                                 </div>
                        </div>

                     </div>
            </div>
        )
    }
}