document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashoutNumber = getValueFromInput("Cashout-number")
    if (cashoutNumber.length != 11) {
        console.log("Invalid Number");
        return;
    }
    const cashoutAmount = getValueFromInput("Cashout-Amount")

    const currentBalance = getbalance();

    const newbalance = currentBalance - Number(cashoutAmount)
    console.log(newbalance);
        if(newbalance < 0){
        alert("insufficient balance")
        return;
    }
    const pin = getValueFromInput("cashout-pin")
    if (pin === "1234") {
        alert("Cashout Successfull");
        setbalance(newbalance)

        const history = document.getElementById("history-contain")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
                <div class="transaction-card p-5 bg-base-100">
                Cashout ${cashoutAmount} Taka Successfully Acc-no. ${cashoutNumber}, at ${new Date().toLocaleTimeString()}
        </div>`

        history.append(newHistory)

    }else{
        alert("Invalid PIN");
        return 0;
    }


})

// document.getElementById("cashout-btn").addEventListener("click", function(){
//     const cashoutNumberInput = document.getElementById("Cashout-number")
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !== 11){
//         alert("Wrong Cashout Number!")
//         return;
//     }

//     const cashoutAmountInput = document.getElementById("Cashout-Amount")
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
    
//     const balanceInput = document.getElementById("balance")
//     const balance = balanceInput.innerText;
//     console.log(balance);

//     const newbalance = Number(balance) - Number(cashoutAmount)
    
//     if(newbalance < 0){
//         alert("insufficient balance")
//         return;
//     }
    

//     const cashoutPinInput = document.getElementById("cashout-pin")
//     const pin = cashoutPinInput.value;
//     if (pin === "1234"){
//         alert("Cashout Successfull")
//          balanceInput.innerText = newbalance;
//         console.log("New balance", newbalance);

//     }else{
//         alert("Invalid PIN!")
//     }
     
    
    
// })