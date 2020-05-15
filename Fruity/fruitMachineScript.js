						//giving each one↓↓↓ a delcaring constants
const spinBtn = document.getElementById("spin");
const winningsTxt = document.getElementById("winningsOutput");
const firstImg = document.getElementById("img1");
const secondImg = document.getElementById("img2");
const thirdImg = document.getElementById("img3");
const creditBtn = document.getElementById("credit");
const collectBtn = document.getElementById("collect");
const creditTxt = document.getElementById("creditOutput");
const messageTxt = document.getElementById("message");

//Disables the button to spin or collect when the page first loads
window.onload=function() {
    document.getElementById("spin").disabled=true;
    document.getElementById("collect").disabled=true;
}

//This is lisening to the player click the spin button
spinBtn.addEventListener("click", spin);
////This is lisening to the player click the credit button
creditBtn.addEventListener("click", credit);
////This is lisening to the player click the collect button
collectBtn.addEventListener("click", collect);
	//Locating the images for each icon
	let lemon = "images/lemon.png";
	let orange = "images/orange.png";
	let apple = "images/apple.png";
	let banana = "images/banana.png";
	let bar = "images/bar.png";
	let melon = "images/melon.png";
	let cherry = "images/cherry.png"
	let grape = "images/grape.png";
	
		//When you open the page for the first time load 3 out of the 8 random images
		let images = [apple, banana, bar, cherry, grape, lemon, melon, orange];
		let selectionfirstImg = Math.floor(Math.random() * 8);
		let selectionsecondImg = Math.floor(Math.random() * 8);
		let selectionthirdImg = Math.floor(Math.random() * 8);
firstImg.innerHTML = "<img src="+images[selectionfirstImg]+">";
secondImg.innerHTML = "<img src="+images[selectionsecondImg]+">";
thirdImg.innerHTML = "<img src="+images[selectionthirdImg]+">";
		
function spin() {
    if(creditTxt.innerText < 1) {
        messageTxt.innerText = "Damn, add more credit to try your luck!";
		//If the player looses take away one token
    }
    else {
 creditTxt.innerText -= 1;
	let selectionfirstImg = Math.floor(Math.random() * 8);
	let selectionsecondImg = Math.floor(Math.random() * 8);
	let selectionthirdImg = Math.floor(Math.random() * 8);
		//randomizes the 3 images out of 8
	firstImg.innerHTML = "<img src="+images[selectionfirstImg]+">";
	secondImg.innerHTML = "<img src="+images[selectionsecondImg]+">";
	thirdImg.innerHTML = "<img src="+images[selectionthirdImg]+">";
	//the player looisng and the game asking if they wanted to play again
	messageTxt.innerText = "Try again! you will get there!";
 if (selectionsecondImg == selectionthirdImg) {
	 //player winning five credit if they have the 2nd and 3rd image the same
    messageTxt.innerText = "Wow! 5 credit!";
    winningsTxt.innerText -= -5;
    }
				//If all three selected images are the same give the player 10 credit
    else if (selectionfirstImg == selectionsecondImg == selectionthirdImg) {
        messageTxt.innerText = "What a whoppa you got 10 credit!";
        winningsTxt.innerText -= -10;
        }
}
}
function credit() {
 creditTxt.innerText -= -1;
			//Giving the player more credit to play
 messageTxt.innerText = "Loading your money into the machine!";
    document.getElementById("spin").disabled=false;
    document.getElementById("collect").disabled=false;
	//After the player has put in one credit let them play!
}

function collect() {
    if(winningsTxt.innerText < 1){
				//player looses
        messageTxt.innerText = "No credit won this time... Try again!"
    }
    else {
        
        winningsTxt.innerText = 0;
		//Cashing out on the credit and then puts it inside your balance box
        messageTxt.innerText = "You collected your winning! Would you like to try again?"
}
}