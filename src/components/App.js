import React, {useEffect, useState} from "react";
import { render } from "react-dom";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState([])
  const [renderedSushi, setRenderedSushi] = useState([])
  const [indexObj,setIndexObj] = useState({start: 0,end:4})
  const [tablePlates,setTablePlates] = useState([])
  const [skrilla, setSkrilla] = useState(132)

  useEffect(()=>{

    fetch("http://localhost:3001/sushis")
      .then(r=>r.json())
      .then(sushiArray => {
        setSushiData(sushiArray)
        setRenderedSushi(sushiArray.slice(0,4))
      })
  },
  [])

  function renderEmptyPlates(plate,sushiPrice) {
      setTablePlates([...tablePlates,plate]);
  }
  
  function fourMoreSushi () {
    setIndexObj((indexObj)=>{
      const newStartIndex = indexObj.start +4
      const newEndIndex = indexObj.end +4
      setIndexObj({start:newStartIndex, end: newEndIndex});
    })
    setRenderedSushi(sushiData.slice(indexObj.start,indexObj.end))
  }

  function spendMoney (sushiCost) {
      setSkrilla(skrilla => skrilla-sushiCost)
  }

  return (
    <div className="app">
      <SushiContainer 
        fourSushi = {renderedSushi}
        fourMoreSushi = {fourMoreSushi}
        renderEmptyPlates = {renderEmptyPlates}
        spendMoney = {spendMoney}
        skrilla = {skrilla}
      />
      <Table
      plates = {tablePlates}
      skrilla = {skrilla}/>
    </div>
  );
}

export default App;
