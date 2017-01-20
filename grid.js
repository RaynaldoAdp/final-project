var Grid = function(x, y){
	this.x = x || 0;
	this.y = y || 0;
}

Grid.prototype.show = function(){
    for(var i = 0; i < 501; i += 10){
        for(var j = 0; j < 501; j+= 10){
            rect(i, j, 10, 10);
        }
    }
}

Grid.prototype.show2 = function(){
	push();
	stroke(0);
	strokeWeight(3);
    for(var i = 0; i < 501; i += 100){
        line(0 , i, 500, i);
    }
    for(var j = 0; j <501; j+= 100){
    	line(j, 0, j, 500);
    }
    pop();
}