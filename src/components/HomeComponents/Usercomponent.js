import React, { Component, Fragment } from "react";

class Usercomponent extends Component{
    render(){
        return(
            <Fragment>
                <div class="userName">
					<label><img src={this.props.url} alt="" /></label>
					<p>{this.props.username}</p>
				</div>
            </Fragment>
        )
    }
}

export default Usercomponent;