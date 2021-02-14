import React, { Component, Fragment } from "react";
import Sidebartop from "./Sidebartop"
import Sidebarbottom from "./Sidebarbottom"

class Sidebar extends Component{
    render(){
        return(
            <Fragment>
                <div className="rightContent">
				<Sidebartop />
                <Sidebarbottom headingTitle={"Popular Reviewd By Mahek Jain"} />
                <Sidebarbottom headingTitle={"Popular Reviewd By Mahek Jain2"} />
				

				

			</div>
            </Fragment>
        )
    }
}

export default Sidebar;

 