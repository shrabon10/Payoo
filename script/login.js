document.getElementById("login-btn").addEventListener('click', function(){
    const numberInput = document.getElementById("input-number");
    const contuctNumber = numberInput.value;
    console.log(contuctNumber);

    const inputpin = document.getElementById("input-pin")
    const pin = inputpin.value;
    console.log(pin);

    if(contuctNumber == "01749761853" && pin == "1234"){
        alert("Successfully Login");
        window.location.assign("/home.html")
    }else{
        alert("please Try Again")
        return;
    }
    
    
    
})
