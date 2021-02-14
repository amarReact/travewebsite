import React,{Component, Fragment} from "react";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <Fragment>
                <footer id="footerdiv">
                    <section className="container">
                        <p>Copyright &copy; TravelSite.com. All Right Reserved. |</p> <Link to="/privacy">Disclaimer & Privacy Policy</Link>
                    </section>
                </footer> 
            </Fragment>
        )
    }
}

export default Footer;