import React,{Fragment} from 'react';
import Logo from "./Logo";
import Searchcomponent from "./HomeComponents/Searchcomponent";
import Usercomponent from "./HomeComponents/Usercomponent";
import Headersetting from "./HomeComponents/Headersetting";


const Header =()=>{
  return(
      <Fragment>
            <header id="header">
			<section class="container">
				<div class="centerhead">
					<Logo /> 
                    <Searchcomponent />
					

					<aside id="rightHeader">
						<Usercomponent url={`${process.env.PUBLIC_URL}/images/san.png`} username={"Sanjay Singh"} />
                        <Headersetting />						
					</aside>
				</div>
			</section>
		</header>
      </Fragment>
  )
}


export default Header;
