import React, { Component, Fragment } from "react";
import Tabnav from "./tabs/Tabnav";
import Tab from "./tabs/Tab"
export default class Tabcomponent extends Component{
	constructor(props){
		super(props)
		this.state={
			selected : "Journey"
	}

}
setSelected =(tab)=>{
	this.setState({selected: tab})
}


    render(){
		
        return(
            <Fragment>
                <div className="leftContent">
				<div className="topcontents">
					<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
				</div>
				<div className="tabcontentIn">
				<Tabnav tabs={["Journey","Reviews", "Photos","Trips","Stats"]} selected={this.state.selected} setSelected={this.setSelected} >
                   <Tab isSelected={this.state.selected === "Journey"}> 
						<div id="Journey" className="tabcontent">
						<div className="loopbox">
							<div className="positionLeft"><img src={`${process.env.PUBLIC_URL}/images/on1.jpg`} alt="" /></div>
							<div className="tabuserDetail">
							<img src="images/tabin.jpg" alt="" />
							<h3>Mahek jain</h3>
							<p>Reviewd <b>Recong Peo</b></p>
							<span>2 Month ago</span>
						</div>
								<ul className="imgloop">
									<li><img src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="" /></li>
									<li><img src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="" /></li>
									<li><img src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="" /></li>
									<li><img src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="" /></li>
									<li><img src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="" /></li>
								</ul>
								<div className="botcontent">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finifor use in a type specimen book...<a href="#">Read More</a></p>
								<p className="stardv"><i className="fa fa-star" aria-hidden="true"></i> 120 people pound this review helpfyl</p>
								</div>
						</div>

						<div className="loopbox">
							<div className="positionLeft"><img src={`${process.env.PUBLIC_URL}/images/on2.jpg`} alt="" /></div>
							<div className="tabuserDetail">
					<img src={`${process.env.PUBLIC_URL}/images/tabin.jpg`} alt="" />
							<h3>Mahek jain</h3>
							<p>Commented on  Recong Peo <b>Review</b></p>
							<span>2 Month ago</span>
						</div>
								<div className="botcontent">
								<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finifor use in a type specimen book...<a href="#">Read More</a></p>
								<p className="stardv"><i className="fa fa-heart" aria-hidden="true"></i> 12 Likes</p>
								</div>
						</div>

						<div className="loopbox">
							<div className="positionLeft"><img src={`${process.env.PUBLIC_URL}/images/on3.jpg`} alt="" /></div>
							<div className="tabuserDetail">
					<img src={`${process.env.PUBLIC_URL}/images/tabin.jpg`} alt="" />
							<h3>Mahek jain</h3>
							<p>Recommended <b>Kaza</b></p>
							<span>2 Month ago</span>
						</div>
								<div className="botcontent">
									<div className="bigdv"><img src={`${process.env.PUBLIC_URL}/images/bigimg.jpg`} alt="" /></div>
									<div className="bigcon">
									<div className="tpdiv"><div className="kazdv"><b>Kaza</b></div><aside><i className="fa fa-map-marker" aria-hidden="true"></i> <b>Spiti Valley, Himachal pardesh</b></aside> <a className="wishbtn" href="#" >Add to Wishlist</a></div>
									<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finifor use in a type specimen book...</p>
									</div>
								</div>
						</div>

						<div className="loopbox">
							<div className="positionLeft"><img src={`${process.env.PUBLIC_URL}/images/on4.jpg`} alt="" /></div>
							<div className="tabuserDetail">
					<img src={`${process.env.PUBLIC_URL}/images/tabin.jpg`} alt="" />
							<h3>Mahek jain</h3>
							<p>Followed <b>Shakshi Goel</b></p>
							<span>2 Month ago</span>
						</div>
								<div className="botcontent">
									<div className="bigdv"><img src={`${process.env.PUBLIC_URL}/images/sak.png`} alt="" /></div>
									<div className="bigcon">
									<div className="tpdiv"><div className="kazdv"><b>Shakshi Goel</b></div><aside><i className="fa fa-map-marker" aria-hidden="true"></i> <b>New Delhi, India</b></aside> <a className="wishbtn" href="#" >Follow</a></div>
									<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finifor use in a type specimen book...</p>
									</div>
								</div>
						</div>

						<div className="loopbox">
							<div className="positionLeft"><img src={`${process.env.PUBLIC_URL}/images/on5.jpg`} alt="" /></div>
							<div className="loopboxLast">
					<img src={`${process.env.PUBLIC_URL}/images/view.jpg`} alt="" />
							<p>This journey Strted on 5 Jan 2015.</p>	
							</div>		  		
						</div>


						</div>
				   </Tab>
				   <Tab isSelected={this.state.selected === "Reviews"}> 
						<div id="Reviews" className="tabcontent">
							<h3>Reviews Comming soon</h3>
						</div>
				   </Tab>
				   <Tab isSelected={this.state.selected === "Photos"}> 
					<div id="Photos" className="tabcontent">
						<h3>Photos Comming soon</h3>
					</div>
				   </Tab>
				   <Tab isSelected={this.state.selected === "Trips"}> 
						<div id="Trips" className="tabcontent">
							<h3>Trips Comming soon</h3>
						</div>
				   </Tab>
				   <Tab isSelected={this.state.selected === "Stats"}> 
						<div id="Stats" className="tabcontent">
							<h3>Stats Comming soon</h3>
						</div>
				   </Tab>
				</Tabnav>				
			</div>
			</div>
            </Fragment>
        )
    }
}
