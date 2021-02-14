import React, { Fragment } from 'react';
import Header from "./Header";
import Footer from "./Footer";


const Privacy = () =>{

  return(
  	<Fragment>
       <Header />
          <img className="bannerImg" src={`${process.env.PUBLIC_URL}/images/slide1.jpg`} alt="" />
          <section className="container privacyDiv">         
              <h2>Privacy Policy</h2>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
          </section>
       <Footer />
    </Fragment>
  )
		
}

export default Privacy;  
