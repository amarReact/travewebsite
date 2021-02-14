import React, { Component, Fragment } from "react"

const Homebanner =()=>{
        return(
            <Fragment>
                <section className="bannerDiv">
			<img className="bannerImg" src={`${process.env.PUBLIC_URL}/images/slide1.jpg`} alt="" />
				<div className="bannerCont">
					<section className="container">
						<div className="leftban">
							<div className="imgdiv"><img src={`${process.env.PUBLIC_URL}/images/jain.jpg`} alt="" /></div>
							<div className="bantext">
								<h2><span>Mahek Jain</span> <a href="#" className="follow">Follow</a></h2>
								<h3><i className="fa fa-map-marker" aria-hidden="true"></i> New Delhi, India</h3>
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in .</p>
								<ul>
									<li><i className="fa fa-smile-o" aria-hidden="true"></i> Wishlist(10)</li>
									<li><i className="fa fa-smile-o" aria-hidden="true"></i> Budy List(55)</li>
									<li><i className="fa fa-user" aria-hidden="true"></i> Following (20)</li>
									<li><i className="fa fa-user" aria-hidden="true"></i> Following (125)</li>
								</ul>
							</div>
						</div>
						<div className="rightban">
							<h3>Rank: #45</h3>
							<div className="wificont">
								<div className="wifidiv"><i className="fa fa-signal" aria-hidden="true"></i> 2</div> <div className="progressdiv"><div className="progressfill"></div></div>
							</div>
							<ul className="social">
								<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</section>
				</div>
			
		</section>
            </Fragment>
        )
}

export default Homebanner;