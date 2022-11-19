var keyword = document.createTextNode("Rahul");
var element = document.querySelector(".keywords");
element.appendChild(keyword);
var length = element.innerText.length;
console.log(length);
var word = element.innerText;
for(var i = 1;i <= length; i++){
	console.log(i);
	var x = animate(i, length);
	if(x == 1){
		console.log("yes its working");
		for(var j = length;j >= 0; j--){
			console.log(j);
			var x = animate2(j, length);
		}
	}
}
function animate(start, len){
	var newText;
	newText = word.slice(start, len);
	console.log(newText);
	element.innerText = newText;
	if(start == length){
		return 1;
	}else{
		return;
	}
}
function animate2(end, len){
	var newText;
	newText = word.slice(end, len);
	console.log(newText);
	element.innerText = newText;
}