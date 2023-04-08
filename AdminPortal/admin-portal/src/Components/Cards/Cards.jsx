import React from 'react'
import './Cards.css'
import { CardsData } from '../Data/Data'
import Card from '../Card/Card'
function Cards() {
  return (
   <div className="Cards">
    {CardsData.map((card,id)=>{
        return(
            <div className="parentsContainer">
                <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                series={card.series}/>
            </div>
        )
    })}
   </div>
  )
}

export default Cards
