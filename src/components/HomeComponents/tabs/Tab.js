import { Component, Fragment } from "react";

import React from "react";

class Tab extends Component{
    render(){
        if(this.props.isSelected){
            return(
                <Fragment>
                    {this.props.children}
                </Fragment>
            )
        }

        return null;
       
    }
}

export default Tab;