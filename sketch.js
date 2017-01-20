//state Components(the final Json object to export)
var state = [];
//decide the state of the menu(bedroom, bathroom, etc..)
var menuState = null;
//state of each room (to calculate area to calculate cost)
var bedroomArea = [];
var bathroomArea = [];
var gardenArea = [];
var kitchenArea = [];
var livingroomArea = [];
var garageArea = [];
var carparkArea = [];
var terraceArea = [];
var hangerArea = [];
//initial grid
var gridArray = [];
var grid = new Grid();
gridArray.push(grid);
//to store the objects
var objects = {  bedroom: [],
				 bathroom: [],
				 garden: [],
				 kitchen: [],
				 livingroom: [],
				 garage: [],
				 carpark: [],
				 terrace: [],
				 hanger: []
			  };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var infoTemplate = 	'<form id="dimensionInput">' +
						'<label for="width"> Width </label>' +
						'<input type="text" name="width" id="width" required />' +
						'<label for="length"> length </label>' +
						'<input type="text" name="length" id="length" required />' +
						'<input type= "submit" />' +
					'</form>' +
					'<button id="dimensionRemove">dimensionRemove</button>';

var menuTemplate = '<button class="room" id="bedroom">Bedroom</button>' +
				   '<button class="room" id="bathroom">Bathroom</button>' +
				   '<button class="room" id="garden">Garden</button>' +
				   '<button class="room" id="kitchen">Kitchen</button>' +
				   '<button class="room" id="livingroom">Living Room</button>' +
				   '<button class="room" id="garage">Garage</button>' + 
				   '<button class="room" id="carpark">Carpark</button>' +
				   '<button class="room" id="terrace">Terrace</button>' +
				   '<button class="room" id="hanger">Hanger</button>';


$(document).ready(function(event){
	$('.menuPanel').append(menuTemplate);

	$('.room').click(function(){
		changeAlpha();
	})
	//toggle mode
	$('#bedroom').click(function(){
		for(var i = 0; i <objects.bedroom.length; i++){
			objects.bedroom[i].alpha = 175;
		}

		menuState = 'bedroom';
		$('.infoPanel').html(infoTemplate);
	})

	$('#bathroom').click(function(){
		for(var i = 0; i <objects.bathroom.length; i++){
			objects.bathroom[i].alpha = 175;
		}

		menuState = 'bathroom';
		$('.infoPanel').html(infoTemplate);
	})

	$('#garden').click(function(){
		for(var i = 0; i <objects.garden.length; i++){
			objects.garden[i].alpha = 175;
		}

		menuState = 'garden';
		$('.infoPanel').html(infoTemplate);
	})

	$('#kitchen').click(function(){
		for(var i = 0; i <objects.kitchen.length; i++){
			objects.kitchen[i].alpha = 175;
		}

		menuState = 'kitchen';
		$('.infoPanel').html(infoTemplate);
	})

	$('#livingroom').click(function(){
		for(var i = 0; i <objects.livingroom.length; i++){
			objects.livingroom[i].alpha = 175;
		}

		menuState = 'livingroom';
		$('.infoPanel').html(infoTemplate);
	})

	$('#garage').click(function(){
		for(var i = 0; i <objects.garage.length; i++){
			objects.garage[i].alpha = 175;
		}

		menuState = 'garage';
		$('.infoPanel').html(infoTemplate);
	})

	$('#carpark').click(function(){
		for(var i = 0; i <objects.carpark.length; i++){
			objects.carpark[i].alpha = 175;
		}

		menuState = 'carpark';
		$('.infoPanel').html(infoTemplate);
	})

	$('#terrace').click(function(){
		for(var i = 0; i <objects.terrace.length; i++){
			objects.terrace[i].alpha = 175;
		}

		menuState = 'terrace';
		$('.infoPanel').html(infoTemplate);
	})

	$('#hanger').click(function(){
		for(var i = 0; i <objects.hanger.length; i++){
			objects.hanger[i].alpha = 175;
		}

		menuState = 'hanger';
		$('.infoPanel').html(infoTemplate);
	})

	$('.room').click(function(){
		dimensionSubmit();
		dimensionRemove();
	})
});

function dimensionSubmit(){
	$('#dimensionInput').submit(function(event){
		event.preventDefault();
		var width = parseInt($('#width').val());
		var length = parseInt($('#length').val());
		var area = width * length;
		console.log(area);
		if(menuState==="bedroom"){
			bedroomArea.push(area);
		}
		else if(menuState === "bathroom"){
			bathroomArea.push(area);
		}
		else if(menuState==="garden"){
			gardenArea.push(area);
		}
		else if(menuState === "kitchen"){
			kitchenArea.push(area);
		}
		else if(menuState==="livingroom"){
			livingroomArea.push(area);
		}
		else if(menuState === "garage"){
			garageArea.push(area);
		}
		else if(menuState==="carpark"){
			carparkArea.push(area);
		}
		else if(menuState === "terrace"){
			terraceArea.push(area);
		}
		else if(menuState==="hanger"){
			hangerArea.push(area);
		}						
		generateRoom(width,length);
	})
};

function dimensionRemove(){
	$('#dimensionRemove').click(function(event){
		event.preventDefault();
		console.log(1);
		var width = parseInt($('#width').val());
		var length = parseInt($('#length').val());
		var area = width * length;
		console.log(area);
		if(menuState==="bedroom"){
			bedroomArea.pop();
			objects.bedroom.pop();
		}
		else if(menuState === "bathroom"){
			bedroomArea.pop();
			objects.bathroom.pop();
		}
		else if(menuState==="garden"){
			gardenArea.pop();
			objects.garden.pop();
		}
		else if(menuState === "kitchen"){
			kitchenArea.pop();
			objects.kitchen.pop();
		}
		else if(menuState==="livingroom"){
			livingroomArea.pop();
			objects.livingroom.pop();
		}
		else if(menuState === "garage"){
			garageArea.pop();
			objects.garage.pop();
		}
		else if(menuState==="carpark"){
			carparkArea.pop();
			objects.carpark.pop();
		}
		else if(menuState === "terrace"){
			terraceArea.pop();
			objects.terrace.pop();
		}
		else if(menuState==="hanger"){
			hangerArea.pop();
			objects.hanger.pop();
		}						
	})
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function changeAlpha(){
	for(key in objects){
		for(var i = 0; i < objects[key].length; i++){
			objects[key][i].alpha = 255;
		}
	}
}
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

	for(var key in objects){
		for(var i=0; i < objects[key].length; i++){
			objects[key][i].show();
			objects[key][i].cursor();
		}
	}
/*	for(var i =0; i< objects.bedroom.length; i++){
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
	for(var i =0; i< objects.kitchen.length; i++){
		objects.kitchen[i].show();
		objects.kitchen[i].cursor();
	}

	for(var i =0; i< objects.livingroom.length; i++){
		objects.livingroom[i].show();
		objects.livingroom[i].cursor();
	}

	for(var i =0; i< objects.garage.length; i++){
		objects.garage[i].show();
		objects.garage[i].cursor();
	}
	for(var i =0; i< objects.carpark.length; i++){
		objects.carpark[i].show();
		objects.carpark[i].cursor();
	}

	for(var i =0; i< objects.terrace.length; i++){
		objects.terrace[i].show();
		objects.terrace[i].cursor();
	}

	for(var i =0; i< objects.hanger.length; i++){
		objects.hanger[i].show();
		objects.hanger[i].cursor();
	}	*/	
}

function mouseDragged() {
	if(menuState ==='bedroom'){
		for(var i = 0; i< objects.bedroom.length; i++){
			objects.bedroom[i].clicked();
		}
  	}
  	else if(menuState ==='bathroom'){
		for(var i = 0; i< objects.bedroom.length; i++){
			objects.bathroom[i].clicked();
		}

  	}
  	else if(menuState ==='garden'){
		for(var i = 0; i< objects.bedroom.length; i++){
			objects.garden[i].clicked();
		}
  	}
  	else if(menuState ==='kitchen'){
		for(var i = 0; i< objects.kitchen.length; i++){
			objects.kitchen[i].clicked();
		}

  	}
  	else if(menuState ==='livingroom'){
		for(var i = 0; i< objects.livingroom.length; i++){
			objects.livingroom[i].clicked();
		}
  	}
   	else if(menuState ==='garage'){
		for(var i = 0; i< objects.garage.length; i++){
			objects.garage[i].clicked();
		}

  	}
  	else if(menuState ==='carpark'){
		for(var i = 0; i< objects.carpark.length; i++){
			objects.carpark[i].clicked();
		}
  	}
  	else if(menuState ==='terrace'){
		for(var i = 0; i< objects.terrace.length; i++){
			objects.terrace[i].clicked();
		}
  	}
  	else if(menuState ==='hanger'){
		for(var i = 0; i< objects.hanger.length; i++){
			objects.hanger[i].clicked();
		}
  	} 	  	
}

function generateRoom(width, length){
	var width = width;
	var length = length;
	if(menuState === 'bedroom'){
		objects.bedroom.push(new Bedroom(0, 0, width, length));
	}
	else if(menuState === "bathroom"){
		objects.bathroom.push(new Bathroom(0, 0, width, length));
	}
	else if(menuState === "garden"){
		objects.garden.push(new Garden(0, 0, width, length));
	}
	else if(menuState === "kitchen"){
		objects.kitchen.push(new Kitchen(0, 0, width, length));
	}
	else if(menuState === "livingroom"){
		objects.livingroom.push(new Livingroom(0, 0, width, length));
	}
	else if(menuState === "garage"){
		objects.garage.push(new Garage(0, 0, width, length));
	}
	else if(menuState === "carpark"){
		objects.carpark.push(new Carpark(0, 0, width, length));
	}
	else if(menuState === "terrace"){
		objects.terrace.push(new Terrace(0, 0, width, length));
	}
	else if(menuState === "hanger"){
		objects.hanger.push(new Hanger(0, 0, width, length));
	}		
}






