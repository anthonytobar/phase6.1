var a = document.getElementById("change1");	
var b = document.getElementById("change2");
var c = document.getElementById("change3");
var d = document.getElementById("change4");	
var e = document.getElementById("change5");
var f = document.getElementById("change6");

function nextImage(el){
	if (el.src.match("image/dazed3.jpg")){
		el.src = "image/dazed2.jpg";
	} else if (el.src.match("image/dazed2.jpg")){
		el.src = "image/sick.png";
	} else if (el.src.match("image/sick.png")){
		el.src = "image/dazed3.jpg";
	} else {
		//do nothing
	}
}

function nextImage1(el){
	if (el.src.match("image/Sick.png")){
		el.src = "image/dazed3.jpg";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/dazed2.jpg";
	} else if (el.src.match("image/dazed2.jpg")){
		el.src = "image/Sick.png";
	} else {
		//do nothing
	}
}

function nextImage2(el){
	if (el.src.match("image/dazed3.jpg")){
		el.src = "image/dazed2.jpg";
	} else if (el.src.match("image/dazed2.jpg")){
		el.src = "image/Sick.png";
	} else if (el.src.match("image/Sick.png")){
		el.src = "image/dazed3.jpg";
	} else {
		//do nothing
	}
}

function nextImage3(el){
	if (el.src.match("image/Sick.png")){
		el.src = "image/dazed3.jpg";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/dazed2.jpg";
	} else if (el.src.match("image/dazed2.jpg")){
		el.src = "image/Sick.png";
	} else {
		//do nothing
	}
}

function nextImage4(el){
	if (el.src.match("image/dazed2.jpg")){
		el.src = "image/dazed3.jpg";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/Sick.png";
	} else if (el.src.match("image/Sick.png")){
		el.src = "image/dazed2.jpg";
	} else {
		//do nothing
	}
}

function nextImage5(el){
	if (el.src.match("image/dazed2.jpg")){
		el.src = "image/dazed3.jpg";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/Sick.png";
	} else if (el.src.match("image/Sick.png")){
		el.src = "image/dazed2.jpg";
	} else {
		//do nothing
	}
}


function nextImage6(el){
	if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else {
		//do nothing
	}
}
