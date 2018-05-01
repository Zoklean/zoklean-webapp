import React,{Component} from 'react';
import tillie from "../../images/tillie.png";
import Eliza from "../../images/Eliza.png"
import Seth from "../../images/Seth.png"
import Slider from "react-slick";
export default class MeetyourPartner extends Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
          };
        return(
            <div className="container-fluid meet-partner">
                <h1>Meet Our Partners….</h1>
                <div className="row-fluid">
                    <Slider {...settings}>
                    <div className="col-md-4 box-image">
                             <img src={Seth}/>
                             <div className="cont">
                                 <h3>Seth Wolfe</h3>
                                 <p>
                                 Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form 
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-4 box-image">
                            <img src={tillie}/>
                            <div className="cont">
                                 <h3>Eliza Lee</h3>
                                 <p>
                                 Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form 
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-4 box-image">
                            <img src={Eliza}/>
                            <div className="cont">
                                 <h3>Tillie Wolfe</h3>
                                 <p>
                                 Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form 
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-4 box-image">
                             <img src={Seth}/>
                             <div className="cont">
                                 <h3>Seth Wolfe</h3>
                                 <p>
                                 Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form 
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-4 box-image">
                            <img src={tillie}/>
                            <div className="cont">
                                 <h3>Eliza Lee</h3>
                                 <p>
                                 Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form 
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-4 box-image">
                            <img src={Eliza}/>
                            <div className="cont">
                                 <h3>Tillie Wolfe</h3>
                                 <p>
                                 Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form 
                                 </p>
                            </div>
                        </div>
                    </Slider>
                   
                        
                </div>
            </div>
        )
    }
}