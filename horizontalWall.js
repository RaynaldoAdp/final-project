var Horizontalwall = function(x,y,entity,xRect,yRect,width,length){
	this.x = x || 0;
	this.y = y || 0;
	this.end = this.x + 10;
	this.entity = null || entity;
	//this part is for the condition of dragging
	this.xRect = xRect;
	this.yRect = yRect;
	this.width = width;
	this.length = length;
	//determine to get spliced or not
	this.toDelete = false;
}

Horizontalwall.prototype.show = function(){
	push();
	stroke(255,255,0);
	strokeWeight(3);
	line(this.x, this.y, this.end, this.y);
    pop();
}

Horizontalwall.prototype.clicked = function(){
	if(mouseX - this.xRect > 0 && mouseX - this.xRect < this.width && mouseY - this.yRect > 0 && mouseY - this.yRect < this.length){
		if(mouseX - pmouseX > 5){
			this.x +=10;
			this.xRect += 10;
		}
		if(mouseY - pmouseY > 5){
			this.y +=10;
			this.yRect += 10;
		}
		if(mouseX - pmouseX < -5){
			this.x -= 10;
			this.xRect -= 10;
		}
		if(mouseY - pmouseY < -5){
			this.y -= 10;
			this.yRect -= 10;

		}

		if(mouseX - pmouseX > 15){
			this.x +=10;
			this.xRect += 10;			
		}
		if(mouseY - pmouseY > 15){
			this.y +=10;
			this.yRect += 10;
		}
		if(mouseX - pmouseX < -15){
			this.x -= 10;
			this.xRect -= 10;			
		}
		if(mouseY - pmouseY < -15){
			this.y -= 10;
			this.yRect -= 10;
		}


		if(mouseX - pmouseX > 25){
			this.x +=10;
			this.xRect += 10;			
		}
		if(mouseY - pmouseY > 25){
			this.y +=10;
			this.yRect += 10;
		}
		if(mouseX - pmouseX < -25){
			this.x -= 10;
			this.xRect -= 10;			
		}
		if(mouseY - pmouseY < -25){
			this.y -= 10;
			this.yRect -= 10;
		}
	}
	this.end = this.x + 10;
}

Horizontalwall.prototype.erase = function(){
	if(mouseY - this.y > -2 && mouseY -this.y < 2 && mouseX - this.x > 0 && mouseX - this.x < 10){
		this.toDelete = true;
	}
}