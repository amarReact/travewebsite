import React, { Component, Fragment } from "react";

class Headersetting extends Component{
    render(){
        return(
            <Fragment>
                <ul class="lastHeader">
					<li class="feeds"><a href="#"><i class="far fa-folder"></i>Feeds</a></li>
					<li><a href="#"><i class="fas fa-comment"></i><span>5</span></a></li>
					<li><a href="#"><i class="fa fa-bell" aria-hidden="true"></i><span>2</span></a></li>
					<li><a href="#"><i class="fa fa-cog" aria-hidden="true"></i></a></li>
				</ul>
            </Fragment>
        )
    }
}
export default Headersetting;