document.getElementById("transfer-btn").addEventListener("click", function(){
    const transferNum = getValueFromInput("transfer-number")
    if (transferNum.length != 11){
        alert("Invalid Number")
        return;
    }

    const transferAmount = getValueFromInput("transfer-Amount")
    const currentAmonunt = getbalance()

    const newAmount = currentAmonunt - Number(transferAmount)

    if (newAmount < 0){
        alert("insufficient balance")
        return;
    }

    const pin = getValueFromInput("transfer-pin")
    if (pin === "1234") {
        alert("Cashout Successfull");
        setbalance(newAmount)


        const history = document.getElementById("history-contain")
        const newHistory = document.createElement("div")

        newHistory.innerHTML =
        `
        <div class="transaction-card p-5 bg-base-100">
                Transfer ${transferAmount} Taka New Amount- ${newAmount} taka Successfully Acc-no. ${transferNum}, at ${new Date().toLocaleTimeString()}
        </div>
        `
        history.append(newHistory);

    }else{
        alert("Ivalid Pin")
        return 0;
    }

     
    
})