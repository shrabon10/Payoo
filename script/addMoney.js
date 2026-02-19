document.getElementById("Add-money-btn").addEventListener("click", function(){
    
    const bankAccount = getValueFromInput("add-Money-Bank")
    if (bankAccount == 'Select A Bank') {
        alert("plese select a bank")
        return;   
    }

    const accno = getValueFromInput("bank-acc-number")
    if (accno.length != 11) {
        alert("Invalid Acc no.")
        return;
    }
    const amount = getValueFromInput("Add-money-Amount")
    const currentBalance = getbalance()
    const newbalance = currentBalance + Number(amount)
    


    const pin = getValueFromInput("Add-money-pin")
    if(pin == "1234"){
    alert(`Add Money successfully
             ${bankAccount}
             in ${new Date()}`)
        setbalance(newbalance)
    }else{
        alert("Invalid PIN")
        return;
    }


    

    
    

    
    
})