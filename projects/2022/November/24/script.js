var color = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

var mainBox = document.getElementById("box"), width = 100, height = 20;
mainBox.style.width = width + "%";
mainBox.style.height = height + "vh";
mainBox.style.fontSize = "20px";

var j = 1;
while(j == 1){
	var input = prompt("Enter number of boxes between 1 to 25");
	if(input > 25 || input < 1)
	{
		alert("You entered invalid number");
	}
	else{
		j = 0;	
	}
}

createBox();
function createBox(){ //num, width, height = width
	for(var i = 1; i <= input; i++){		
		var boxElement = document.createElement("div"); //create element
		var boxText = document.createTextNode("Box-" + i); //create text
		
		boxElement.appendChild(boxText);
		boxElement.id = "box-" + i;
		mainBox.appendChild(boxElement);
		mainBox = boxElement;
		var childBox = document.getElementById("box-"+i);
		
		var random = randomNum();
		console.log(random);
		childBox.style.width = width + "%";
		childBox.style.background = color[random];
		childBox.style.margin = "auto";
		childBox.style.textAlign = "center";
		childBox.style.display = "block";
		childBox.style.lineHeight = height + "vh";
		
		width -= 2;
		height -= 1;
		if(i == 1){
			height = 100 + "vh";
		}
		else{
			
		childBox.style.height = height + "vh";
		}
	}
}
function randomNum(){
	return Math.floor(Math.random() * 148) + 1;
}