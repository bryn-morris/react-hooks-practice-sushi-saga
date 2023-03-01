import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({fourSushi, fourMoreSushi, renderEmptyPlates, spendMoney, skrilla}) {
  return (
    <div className="belt">
      {fourSushi.map((eachSushi)=>{
        return  (
        <Sushi
          key = {eachSushi.id}
          eachSushi = {eachSushi}
          renderEmptyPlates = {renderEmptyPlates}
          spendMoney = {spendMoney}
          skrilla = {skrilla}
        />)
      })}
      <MoreButton fourMoreSushi = {fourMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
