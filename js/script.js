// Js train ticket 

// prevent the form to be submitted
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// reload the page on click header link 
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

// alert for the user 
alert("Hello, welcome to the train ticket generator. Please fill in the form to generate your ticket. Thank you!");

// event for the button generate
var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        // passenger name
        var passengerName = document.getElementById("name").value;

        // name validation
        if (passengerName == "") {
            alert("Please insert a valid name");
        } else if (passengerName.length < 3) {
            alert("Please insert a valid name");
        } else if (passengerName.length > 40) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("1")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("2")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("3")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("4")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("5")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("6")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("7")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("8")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("9")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("0")) {
            alert("Please insert a valid name");
        } else {

        // passenger age
        var age = document.getElementById("age").value;

        if (age == "") {
            alert("Please insert a valid age");
        } else {

        // number of km
        var km = document.getElementById("km").value;
        
        if( isNaN(km) || km < 1) {
            alert("Please insert a valid number of km");
        } else {

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
    }}}}
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

// Dark mode toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;
const icon = document.querySelector('.fa-solid');

// Check local storage for dark mode preference
if (localStorage.getItem('mydarkMode') === 'on') {
    body.classList.add('mydarkMode');
    darkModeSwitch.checked = true;
    icon.classList.add('fa-white');
} else {
    body.classList.remove('mydarkMode');
    darkModeSwitch.checked = false;
    icon.classList.add('fa-black');
}

// Dark mode toggle event listener
darkModeSwitch.addEventListener('click', () => {
    if (darkModeSwitch.checked) {
        body.classList.add('mydarkMode');
        localStorage.setItem('mydarkMode', 'on');
        icon.classList.remove('fa-black');
        icon.classList.add('fa-white');
    } else {
        body.classList.remove('mydarkMode');
        localStorage.setItem('mydarkMode', 'off');
        icon.classList.remove('fa-white');
        icon.classList.add('fa-black');
    }
});

