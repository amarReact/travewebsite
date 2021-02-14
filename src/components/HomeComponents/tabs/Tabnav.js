import React, { Component, Fragment } from "react";
class Tabnav extends Component{
    render(){
      return(
          <Fragment>
              <ul className="nav nav-tabs">
					{
						this.props.tabs.map(tab=>{
							const active = (tab === this.props.selected ? 'active' : '')
							return(
								<li className="nav-item" key={tab}>
									<a className={'nav-link '+ active} onClick={()=> this.props.setSelected(tab)}>
									{tab}
									</a>
								</li>
							)
						})
					}
				</ul>
                {this.props.children}
          </Fragment>
      )
    }
}


export default Tabnav;

