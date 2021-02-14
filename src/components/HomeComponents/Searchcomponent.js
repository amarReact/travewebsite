import React,{Fragment, Component} from "react"

class Searchcomponent extends Component{
    render(){
        return(
            <Fragment>
                <aside id="searchDiv">
						<input id="inputDiv" type="text" placeholder="Search" />
						<input id="submitDv" type="submit" value="Submit" />
					</aside>
            </Fragment>
        )
    }
}

export default Searchcomponent;