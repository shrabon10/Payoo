function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
    
}

function getbalance(){
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);
}
function setbalance(value){
    const balanceElements = document.getElementById("balance")
    balanceElements.innerText = value;
}