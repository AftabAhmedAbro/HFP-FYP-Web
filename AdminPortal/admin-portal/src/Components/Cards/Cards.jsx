import React from 'react'
import './Cards.css'
import { CardsData } from '../Data/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClipboardList,
    faMoneyCheckAlt,
    faUsers,
    faChartLine,
    faPowerOff,
    faCommentDots,
    faCheckCircle,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
function Cards() {
  return (
   <div className="Cards">
    {/* {CardsData.map((card,id)=>{
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
    })} */}

{/* <div className="card">
  <div className="card-body">
    <h5 className="card-title">120</h5>
    <p className="card-text">New Orders</p>
  </div>
</div> */}
<ul className="box-info">
    {CardsData.map((item,index)=>{
        return(
            <li>
                <div className='icon'>
                <FontAwesomeIcon icon={item.icon}/>
                </div>
                <span>
                    <h3>{item.value}</h3>
                    <p>{item.discription}</p>
                </span>
            </li>
        )
    })}
</ul>
   </div>
  )
}

export default Cards
