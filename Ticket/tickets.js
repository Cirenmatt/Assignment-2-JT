const nameInput = document.getElementById("name");
const nameOutput = document.getElementById("nameresult");
const addressInput = document.getElementById("address");
const addressOutput = document.getElementById("addressresult");
const ticketsInput = document.getElementById("tickets");
const ticketsOutput = document.getElementById("ticketsresult");
const showInput = document.getElementById("show");
const showOutput = document.getElementById("showresult");
const methodOutput = document.getElementById("methodresult");
const finaltotalresult = document.getElementById("finaltotalresult");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", calculateMethodCost);
submitButton.addEventListener("click", displayDetails);



function calculateMethodCost() {
	let methodInput = document.querySelector("input[name='method']:checked");
	
	if (methodInput.value == "e-delivery (free)") {
		methodCost = 0.0;
		 } 
	
	else if (methodInput.value == "Box Office (£1.50)") {
		methodCost = 1.50;
		 }
	
    else if (methodInput.value == "Posted (£3.99)"){
        methodCost = 3.99;
		}
		
}

function displayDetails()
{
	methodInput = document.querySelector("input[name='method']:checked");
	nameOutput.innerText = "Name: " + nameInput.value;
	addressOutput.innerText = "Address: " + addressInput.value;
	ticketsOutput.innerText = "Number of tickets: " + ticketsInput.value;
	showOutput.innerText = "Show: " + showInput.value;
	methodOutput.innerText = "Method: " + methodInput.value;
	finaltotalresult.innerText = `Final Total: ${function () { }.methodCost}£`
}


// (parseFloat(showCost) * parseFloat(tickets))

        var totalCalculation =  + parseFloat(methodCost);
            total.innerText =  `Total: £${totalCalculation.toFixed(2)}`;


 

