import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardsData } from "../Data/Data";
import './Cards.css'
const Cards = () => {
  return (
    <div className="flex div1">
      {CardsData.map((item, index) => {
        return (
          <div className="card Card1">
            <div className="card-body ">
              <h5 className="card-title flex">{item.value} <FontAwesomeIcon icon={item.icon}/></h5>
              <p className="card-text">{item.discription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
