//state Components(the final Json object to export)
var state = [{}];
//decide the state of the menu(bedroom, bathroom, etc..)
var menuState = null;
//state of each room (to calculate area to calculate cost)
var bedroomArea = 0;
var bathroomArea = 0;
var gardenArea = 0;
//initial grid
var gridArray = [];
var grid = new Grid();
gridArray.push(grid);
//to store the objects
var objects = {  bedroom: [],
				 bathroom: [],
				 garden: []
			  };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var infoTemplate = 	'<form id="dimensionInput">' +
						'<label for="width"> Width </label>' +
						'<input type="text" name="width" id="width" required />' +
						'<label for="length"> length </label>' +
						'<input type="text" name="length" id="length" required />' +
						'<input type= "submit" />' +
					'</form>';

var menuTemplate = '<button class="bedroom">Bedroom</button>' +
				   '<button class="bathroom">Bathroom</button>' +
				   '<button class="garden">Garden</button>';

var removeTemplate = '<button id="dimensionRemove">dimensionRemove</button>';


$(document).ready(function(event){
	$('.menuPanel').append(menuTemplate);

	//toggle mode
	$('.bedroom').click(function(){
		menuState = 'bedroom';
		$('.infoPanel').html(infoTemplate);
		dimensionSubmit();
	})

	$('.bathroom').click(function(){
		menuState = 'bathroom';
		$('.infoPanel').html(infoTemplate);
		dimensionSubmit();
	})

	$('.garden').click(function(){
		menuState = 'garden';
		$('.infoPanel').html(infoTemplate);
		dimensionSubmit();
	})
});


function appendRemove(){
	$('.infoPanel').append(removeTemplate);
	dimensionRemove();
};

function dimensionSubmit(){
	$('#dimensionInput').submit(function(event){
		event.preventDefault();
		var width = parseInt($('#width').val());
		var length = parseInt($('#length').val());
		var area = width * length;
		console.log(area);
		if(menuState="bedroom"){
			bedroomArea += area;
		}
		if(menuState = "bathroom"){
			bathroomArea += area;
		}
		if(menuState="garden"){
			gardenArea += area;
		}
		appendRemove();
		generateRoom();
	})
};

function dimensionRemove(){
	$('#dimensionRemove').click(function(event){
		event.preventDefault();
		var width = parseInt($('#width').val());
		var length = parseInt($('#length').val());
		var area = width * length;
		console.log(area);
		if(menuState="bedroom"){
			bedroomArea -= area;
		}
		if(menuState = "bathroom"){
			bathroomArea -= area;
		}
		if(menuState="garden"){
			gardenArea -= area;
		}
	})
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setup(){
	createCanvas(501, 501);
	background(100);
	frameRate(60);
}

function draw(){
	for(var i = 0; i< gridArray.length; i++){
		gridArray[i].show();
		gridArray[i].show2();
	}

	for(var i =0; i< objects.bedroom.length; i++){
		objects.bedroom[i].show();
		objects.bedroom[i].cursor();
	}

	for(var i =0; i< objects.bathroom.length; i++){
		objects.bathroom[i].show();
		objects.bathroom[i].cursor();
	}

	for(var i =0; i< objects.garden.length; i++){
		objects.garden[i].show();
		objects.garden[i].cursor();
	}
}

function mouseDragged() {
	if(menuState ='bedroom'){
		for(var i = 0; i< objects.bedroom.length; i++){
			objects.bedroom[i].clicked();
		}
  	}
  	if(menuState ='bathroom'){
		for(var i = 0; i< objects.bedroom.length; i++){
			objects.bathroom[i].clicked();
		}

  	}
  	if(menuState ='garden'){
		for(var i = 0; i< objects.bedroom.length; i++){
			objects.garden[i].clicked();
		}
  	}

}

function generateRoom(width, length){
	var width = width;
	var length = length;
	if(menuState='bedroom'){
		objects.bedroom.push(new Bedroom(0, 0, width, length));
	}
	if(menuState="bathroom"){
		objects.bathroom.push(new Bathroom(0, 0, width, length));
	}
	if(menuState="garden"){
		objects.garden.push(new Garden(0, 0, width, length));
	}
}






