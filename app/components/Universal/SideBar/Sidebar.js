import React,{Component} from 'react';
import './Sidebar.scss';
import closeIcon from "../../../images/close.png"
export default class Sidebar extends Component{
    componentDidMount(){
        $("#closeIcon").click((event)=>{
            $("#sideBar").toggleClass("active")
        })
    }
    render(){
        return(
            <div id="sideBar" className="SideBar">
                <div className="head">
                     <div className="closeIcon">
                       <img id="closeIcon" src={closeIcon}/>
                    </div>
                    <div className="container content">
                        <p><a>About Us</a></p>
                        <p><a>Careers</a></p>
                        <p><a>FAQ</a></p>
                        <p><a>Blog</a></p>
                        <p><a>Become a Contractor</a></p>
                        <p><a>Contact Us</a></p>
                    </div>

                </div>
            </div>
        )
    }
}