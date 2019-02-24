


// show - hide #main
function successClick(){
	let main = document.getElementById("main");
	let btn = document.getElementById("showHideBtn");
	if(main.style.display === "none"){
		main.style.display = "block";
		btn.innerHTML = "HIDE"
	}else{
		main.style.display = "none";
		btn.innerHTML = "SHOW"
	}
}