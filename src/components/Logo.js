import React,{Fragment} from "react";
import {Link} from "react-router-dom";
const Logo =()=>{
	return(
		<Fragment>
			<Link exact to="/" class="logo"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" /></Link>
		</Fragment>
	)
}

export default Logo;