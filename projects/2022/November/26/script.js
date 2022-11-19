var color = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

var mainBox = document.getElementById("main"), width, height, leftPosition; //width == height
var j = 1;
while(j == 1){
	var numberOfBubbles = prompt("Enter number of Bubbles between 15 to 50");
	if(numberOfBubbles > 50 || numberOfBubbles < 15)
	{
		alert("You entered invalid number");
	}
	else{
		j = 0;	
	}
}

for(var i = 1; i <= numberOfBubbles; i++){
	var bubbleElement = document.createElement("div");
	
	bubbleElement.classList.add("bubble");
	bubbleElement.id = "bubble-" + i;
	mainBox.appendChild(bubbleElement);
	
	var bubble = document.getElementById("bubble-" + i);
	
	bubble.style.background = color[randomColor()];
	
	bubble.style.left = randomLeft() + "%";
	
	bubble.style.width = randomWidth() + "%";
	
	bubble.style.animationDuration = randomAnimationDuration() + "s";
	bubble.style.animationDelay = randomAnimationDelay() + "s";
	
}


// Random Numbers Function-----------
//Random Left Position in % range 1% to 100%
function randomLeft(){
	return Math.floor(Math.random() * 100) + 1;
}
//Random Width in % range 5% to 15%
function randomWidth(){
	return Math.floor(Math.random() * (15 - 5)) + 5;
}
//Random Color
function randomColor(){
	return Math.floor(Math.random() * 148) + 1;
}
//Random Animation Duration
function randomAnimationDuration(){
	return Math.floor(Math.random() * 8) + 5;
}
//Random Animation Delay
function randomAnimationDelay(){
	return Math.floor(Math.random() * 15) + 0;
}