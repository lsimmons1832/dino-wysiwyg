var dinoArray = [];

$.ajax('./db/dinosaurs.json').done(function(data){
	dinoArray = data.dinosaurs;
	makeDOM(dinoArray);
}).fail(function(error){
	console.log("Warning! There is an issue!", error);
});

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
	$('#dinosaur').append(myDOMString);
}