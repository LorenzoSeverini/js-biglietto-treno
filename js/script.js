// Js train ticket 
// event for the button generate 

// prevent the form to be submitted
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

alert("Hello, welcome to the train ticket generator. Please fill in the form to generate your ticket. Thank you!");

var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        var passengerName = document.getElementById("name").value;
        console.log("passenger name generation:", passengerName);

        var age = document.getElementById("age").value;
        console.log("age generation:", age);

        var km = document.getElementById("km").value;
        console.log("km distance generation:", km);
        
        var ticketPrice = Math.floor(km * 0.21);
        var discount;
        var discountType;
        console.log("full price ticket", ticketPrice);

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
        var finalPrice = ticketPrice - discount;
        console.log("Discount price:", discount);
        console.log("Final ticket price:", finalPrice);
        console.log("Discount type:", discountType);

        // ticket section
        document.getElementById("passenger").innerHTML = passengerName;
        document.getElementById("discount").innerHTML = discountType;
        document.getElementById("ticket-price").innerHTML = finalPrice + "€";

        var wagonNumber = Math.floor(Math.random() * 9) + 1;
        console.log("wagon number generator:", wagonNumber);
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

