$.ajax('./db/dinosaurs.json').done(function(data){
	var dinoArray = data.dinosaurs;
	makeDOM(dinoArray);
}).fail(function(error){
	console.log("Warning! There is an issue!", error);
});

//loop through objects
function makeDOM(myArrayToPrint){
	var myDOMString = '';
	for (var i = 0; i < myArrayToPrint.length; i++) {
		myDOMString += `<div class="dinoCard">`;
		myDOMString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
		myDOMString += `<section>`;
		myDOMString += `<img src="${myArrayToPrint[i].img}">`;
		myDOMString += `<p class='bio'>${myArrayToPrint[i].bio}</p>`;
		myDOMString += `</section>`;
		myDOMString += `<footer>${myArrayToPrint[i].info}</footer>`;
		myDOMString += `</div>`;
	}
	//write objects to the DOM
	$('#dinosaurs').append(myDOMString);
}

//add border to slected card
$("#dinosaurs").on("click", ".dinoCard", function(e){
	$(".dinoCard").removeClass("dottedBorder");
	$(this).addClass("dottedBorder");
	$("#textbox").val("").focus();
});

//add event listener to input field
$("#textbox").keyup(mirrorText);

//replace text in bio as user types in input field
function mirrorText(e){
	var selectedCard = $(".dottedBorder");
	var bioTyped = $("#textbox").val();
	var bio = $(".dottedBorder").find("p.bio");
	bio.html(bioTyped);

	if (e.keyCode == 13){
		$("#textbox").val("");
	}
}