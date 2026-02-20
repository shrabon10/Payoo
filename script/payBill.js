document.getElementById("pay-btn").addEventListener("click", function(){    
    
    const payAccount = getValueFromInput("add-Money-to-pay")
    if(payAccount == "select-a-method"){
        alert("plese select a Method")
        return;
    }
    

    const accno = getValueFromInput("bill-acc-number")
    if (accno.length != 8) {
        alert("Invalid Acc no.")
        return;
    }
    const amount = getValueFromInput("Pay-money-Amount")
    const currentBalances = getbalance()
    const newbalances = currentBalances - Number(amount)
    


    const pin = getValueFromInput("pay-money-pin")
    if(pin == "1234"){
    alert(`Pay Money successfully
             in ${new Date()}`)
        setbalance(newbalances)
        const history = document.getElementById("history-contain")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
                <div class="transaction-card p-5 bg-base-100">
                Pay Bill ${amount} Taka Successfully, New-Balance ${newbalances} Taka acc-no. ${accno} at  ${new Date().toLocaleTimeString()}pay
        </div>`

        history.append(newHistory)

    }else{
        alert("Invalid PIN")
        return;
    }

    
})
