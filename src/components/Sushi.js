import React,{useState} from "react";

function Sushi({eachSushi, renderEmptyPlates, spendMoney, skrilla}) {

  const [isEaten,setIsEaten] = useState(false)

  function emptyPlates() {
    if (eachSushi.price <= skrilla){
    setIsEaten(true)
    renderEmptyPlates("plate #" + eachSushi.id, eachSushi.price)
    spendMoney(eachSushi.price)
    } else {
      alert("Khajit has wares...if you have coin")
    }
    
  }

  return (
    <div className="sushi">
      <div className="plate" onClick = {emptyPlates} >
        {isEaten ? null : (
          <img
            src={eachSushi.img_url}
            alt={eachSushi.name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {eachSushi.name} - ${eachSushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
