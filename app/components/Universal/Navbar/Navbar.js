import React,{Component} from 'react';
import hamburgur from "../../../images/hamburgur.png";
import logo from "../../../images/logo.png";
import './Navbar.scss';
export default class Navbar extends Component{
    componentDidMount(){
        $("#hamburgur").click((event)=>{
            $("#sideBar").toggleClass("active")
            window.scrollTo(0,0);
        })
    }
    render(){
        return(
        <nav className="nav">
            <ul>
                <li id="hamburgur"><a><img src={hamburgur}/></a></li>
                <li><a><img src={logo}/></a></li>
                <li className="right btn"><a>Become a contributor</a></li>
                <li className="right"><a>Sign Up</a></li>
                <li className="right"><a>Login</a></li>
            </ul>
        </nav>
        )
    }
}