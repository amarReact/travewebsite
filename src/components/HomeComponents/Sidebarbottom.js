import React, { Component, Fragment } from "react";

 const Sidebarbottom =(props)=>{
          const loop =[
               {
                 text: `<b>Mahek jain</b> Reviewd <b>Recong Peo</b> </a><span>2 Month ago</span>`, 
                 icon: "images/list1.jpg"
               },
               {
                text: `<b>Mahek jain</b> Reviewd <b>Recong Peo</b> </a><span>2 Month ago</span>`, 
                icon: "images/list1.jpg"
              },
              {
                text: `<b>Mahek jain</b> Reviewd <b>Recong Peo</b> </a><span>2 Month ago</span>`, 
                icon: "images/list1.jpg"
              },
              {
                text: `<b>Mahek jain</b> Reviewd <b>Recong Peo</b> </a><span>2 Month ago</span>`, 
                icon: "images/list1.jpg"
              },
              {
                text: `<b>Mahek jain</b> Reviewd <b>Recong Peo</b> </a><span>2 Month ago</span>`, 
                icon: "images/list1.jpg"
              }
           ]
        
        return(
            <Fragment>
                <div className="listdiv2">
                <h3>{props.headingTitle}</h3>
                <ul>
                  {
                    loop.map((item,ind)=>{
                      return(
                        <li><a href="#"><img src={item.icon} alt="" /> 
                        <div dangerouslySetInnerHTML={{__html:item.text}}></div></a></li>
                      ) 
                    })                    
                  }
                </ul>
              </div>
            </Fragment>
        )
    }


export default Sidebarbottom;