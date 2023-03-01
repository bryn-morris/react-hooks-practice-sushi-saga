import React, {useState} from "react"

function SushiWallet ({handleWallet}) {

    const [addedMoney, setAddedMoney] = useState(0)
    


    function onAddMoney (eventObj){
        eventObj.preventDefault()
        handleWallet(addedMoney)
    }


    function onChangeAdd (eventObj) {
        setAddedMoney (parseInt(eventObj.target.value))
    }


    return (

        // Page is re-rendering on submit, need to figure out WHY? - aka which 
        // state is getting updated to cause re-render?
        // might need to move state up, shouldn't need to since other parts
        // of component tree shouldn't need access outside of the handleWallet function
        //  
        <form onSubmit = {onAddMoney} >
            <input type= "text" onChange = {onChangeAdd} value = {addedMoney}></input>
            <button type = "submit">Add Money</button>
        </form>
        )
}

export default SushiWallet