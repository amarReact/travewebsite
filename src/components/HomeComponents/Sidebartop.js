import React, { Component, Fragment } from "react";

export default class Sidebartop extends Component{
    constructor(){
        super()
        this.state={
           loop:[
               {
                 text: "Journey", 
                 icon: <i className='fa fa-map-marker' aria-hidden='true'></i>
               },
               {
                text: "Reviews", 
                icon: <i className='fa fa-pencil' aria-hidden='true'></i>
              },
              {
                text: "Photos", 
                icon: <i className='fa fa-camera' aria-hidden='true'></i>
              },
              {
                text: "Trip", 
                icon: <i className='fa fa-suitcase' aria-hidden='true'></i>
              },
              {
                text: "Stats", 
                icon: <i className='fa fa-bar-chart' aria-hidden='true'></i>
              }
           ]
        }
    }
    render(){
         const {loop} = this.state;
        
        return(
            <Fragment>
                <div className="listdiv1">
					<ul>
                        {
                            loop.map(function(item,ind){
                                return <li key={ind}><a href="#">{item.icon} {item.text} </a></li>
                            })
                        }
					</ul>
				</div>
            </Fragment>
        )
    }
}