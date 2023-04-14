// Js train ticket 
// event for the button generate 

// prevent the form to be submitted
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// let numeroFormattato = numero.toFixed(1);
// how to change the alert format?

alert("Hello, welcome to the train ticket generator. Please fill in the form to generate your ticket. Thank you!");

var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        var passengerName = document.getElementById("name").value;
        
        var age = document.getElementById("age").value;
    
        var km = document.getElementById("km").value;
        
        // ticket price calculation
        var ticketPrice = Math.floor(km * 0.21);
        var discount;
        var discountType;
        
        // age discount
        if (age == "Minor") {
            discount = ticketPrice * 0.2; 
            discountType = "Minor price";
        } else if (age =="Over-65") {
            discount = ticketPrice * 0.4;
            discountType = "Over 65 price";
        } else {
            discount = 0;
            discountType = "Full price";
        }

        // ticket price
        var finalPrice = (ticketPrice - discount).toFixed(2);
    
        // ticket section
        document.getElementById("passenger").innerHTML = passengerName;
        document.getElementById("discount").innerHTML = discountType;
        document.getElementById("ticket-price").innerHTML = finalPrice + "€";

        var wagonNumber = Math.floor(Math.random() * 9) + 1;
        
        document.getElementById("wagon").innerHTML = wagonNumber;
    }          
)


// event for the button cancel

var btnGenerate = document.getElementById("cancel");
btnGenerate.addEventListener("click",
    function () {
        // null value
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age").value = "";

        document.getElementById("passenger").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("ticket-price").innerHTML = "";
        document.getElementById("wagon").innerHTML = "";
    }
)

