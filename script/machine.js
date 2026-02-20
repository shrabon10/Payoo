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

function showOnly (id){
    const addMoney = document.getElementById("Add-money")
    const cashout = document.getElementById("Cashout")
    const transfer = document.getElementById("transfer")
    const BillPay = document.getElementById("pay-bill")
    const Transactions = document.getElementById("history")


    addMoney.classList.add("hidden")
    cashout.classList.add("hidden")
    transfer.classList.add("hidden")
    BillPay.classList.add("hidden")
    Transactions.classList.add("hidden")

    const selected = document.getElementById(id)
    selected.classList.remove("hidden");

}