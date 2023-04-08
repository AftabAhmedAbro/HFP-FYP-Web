import React, { useState } from 'react'
// import { AnimateSharedLayout } from 'framer-motion'
const Card = (props) => {
    const[expanded,setExpended]=useState(false)
  return (
    // <AnimateSharedLayout>
    //     {
    //         expanded?(
    //             <ExpandedCard/> 
    //         ): <CompactCard param ={props}/>
    //     }
    // </AnimateSharedLayout>
    <div>myCard</div>
    
  )
}


//CompactCard
function CompactCard({param}){
    return(
        <div className="CompactCard">
            <div className="radialBar">
                Chart
            </div>
            <div className="detail">
                
            </div>
        </div>

    )
    
}

export default Card
