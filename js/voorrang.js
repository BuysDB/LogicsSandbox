BuysDB_ColorScheme = {
    
    groups:{
	'5_heat':['#66a43e','#8fa33d','#d1ac17','#f6853a','#aa0000'],
	'5_norm':['#3770c4','#66a43e','#8fa33d','#d1ac17','#f6853a','#aa0000']
    }

}

getColourFromGroup = function(scheme, n){
    
    var len = BuysDB_ColorScheme.groups[scheme].length;
    
    var col = BuysDB_ColorScheme.groups[scheme][ ((n) % (len))];
    return( col );
    
}
    
CanvasFunctions = {
	
	'getMousePos' : function (canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
	  };
	},
	
	'getRelativeMousePosition':function(canvas, evt, world){
		var rect = canvas.getBoundingClientRect();
		var x = evt.clientX - rect.left;
		var y = evt.clientY - rect.top;
		return({x:x + world.viewCenterX-canvas.width*0.5, y:y + world.viewCenterY-canvas.height*0.5});
		
	}
	
}
	

function rotateAndPaintImage ( context, image, angleInRad , positionX, positionY, axisX, axisY ) {
  context.translate( positionX, positionY );
  context.rotate( angleInRad );
  context.drawImage( image, -axisX, -axisY );
  context.rotate( -angleInRad );
  context.translate( -positionX, -positionY );
}


/*
env 	Target canvas
img 	Specifies the image, canvas, or video element to use 	 	
sx 	Optional. The x coordinate where to start clipping 	Play it »	
sy 	Optional. The y coordinate where to start clipping 	Play it »	
swidth 	Optional. The width of the clipped image 	Play it »	
sheight 	Optional. The height of the clipped image 	Play it »	
x 	The x coordinate where to place the image on the canvas 	Play it »	
y 	The y coordinate where to place the image on the canvas 	Play it »	
width 	Optional. The width of the image to use (stretch or reduce the image) 	Play it »	
height 	Optional. The height of the image to use (stretch or reduce the image)
*/
function LoadImageToCanvas(env, imageObj, positionX, positionY, angleInRad , axisX, axisY){

	
	env.translate( positionX, positionY );
	env.rotate( angleInRad );
	env.drawImage( imageObj, -axisX, -axisY );
	env.rotate( -angleInRad );
	env.translate( -positionX, -positionY );
		
      
      
}
/* Rotating a poly is very usefull :)
 * Uses basic affine rotation
 * xCenter and yCenter a the center of rotation
 * rotation is the rotation you desire
 * The rotation is done in place.
 */
function rotatePolyInPlace( coordinates, xCenter, yCenter, angle ){
	for (var coordinateIndex in coordinates) {
		var x = coordinates[coordinateIndex].x;
		var y = coordinates[coordinateIndex].y;
		coordinates[coordinateIndex].x = x*Math.cos(angle) - y*sin(angle);
		coordinates[coordinateIndex].y = x*Math.sin(angle) + y*cos(angle);
	}
	
}

function rotatePoly( coordinates, xCenter, yCenter, angle, scaleX, scaleY ){
	var newCoordinates = []
	scaleX = scaleX || 1;
	scaleY = scaleY || 1;
	
	for (var coordinateIndex in coordinates) {
		var x = coordinates[coordinateIndex].x*scaleX;
		var y = coordinates[coordinateIndex].y*scaleY;
		newCoordinates[coordinateIndex] = {x: x*Math.cos(angle) - y*Math.sin(angle), y: x*Math.sin(angle) + y*Math.cos(angle)};
	}
	return(newCoordinates)
	
}

function Coord(x,y){

	this.x = x;
	this.y = y;

}



document.loadedImages = {}



function getShortAngle(a1, a2)

	{
		return( Math.cos((a1-a2)+(Math.PI/2)))
	};

function getFullShortAngle(a1, a2) {
	return(Math.min((2 * Math.PI) - Math.abs(a1 - a2), Math.abs(a1 - a2)))
}


function DriveRoutePoint(x, y, isFinal){
	
	this.x = x;
	this.y = y;
	this.isFinal = isFinal || false;
	this.render = function(env){
		
		env.fillStyle = "rgba(30,120,0,0.8)"
		env.rect(this.x-5, this.y-5, 10, 10)
		env.fill()
		
	}
	
	
}


function subdivideOver(xStart, yStart, xEnd, yEnd, minDistance){

	var angle = Math.atan2(xEnd - xStart, yEnd - yStart)
	var distance = Math.sqrt(  Math.pow(xEnd - xStart, 2) + Math.pow(yEnd - yStart, 2))
	var amount = Math.floor(distance/minDistance)
	var coords = []	
	for(var d=0; d<distance; d+=minDistance){
		//Precalc cos and sin to make this faster :)
		console.log(d)
		coords.push( new Coord( xStart+Math.sin(angle)*d, yStart+Math.cos(angle)*d ))
	}
	return(coords)
}


function State() {
	
	this.value = 0;
	this.target = 0;
	this.spd = 0.3;
	this.floating = true;
	this.get = function(){
		
		if (this.floating) {
			return(-1)
		} else {
			
			if (this.value==1) {
				return(1)
			} else if (this.value==0) {
				return(0)
			} else {
				return(-1)
			}
			
		}
		
	}
	
	this.getFloating = function(){
		return(this.value)
	}
	this.set= function(val){
		
		//Cap the value between 0 and 1
		if (val!=-1) {
			val = Math.min(1,Math.max(0,val))
		}
		
		if (val == -1) {
			this.target = 0.5;
			this.floating = true;
			//this.value = 0.5;
		} else if(val==0 || val==1){
			this.floating = false;
			this.target = val;
		} else {
			this.floating = true;
			this.target = val;
		}
	}
	this.setInv = function(val){
		
		if (val==1) {
			val = 0;
		} else if (val == 0) {
			val = 1;
		}
		this.set(val)
		
	}
	this.tick = function(){
		if (this.value!=this.target) {
			var d = this.target - this.value;
			if (Math.abs(d)<this.spd) {
				this.value = this.target;
				return(true)
			}
			
			if (d>0) {
				this.value += this.spd;
			} else {
				this.value -= this.spd;
			}
			
		}
	}
	
}

function Connector(x,y,rotation,parent,settings){
	
	this.state = new State();
	this.connectorType = settings.connectorType || 1; //1 = input; 2= output;
	this.rotation = rotation | 0;
	this.label = "" || settings.label;
	this.radius = 5;
	this.x = x;
	this.y = y;
	this.hovering = false;
	this.parent = parent;
	
	this.labelEnergy = 50;
	//Show the label for the connector
	this.showLabel = function(){
		if (this.label) {
			this.labelEnergy = 50;
		}
		
		
	}
	//Is the connector hit by the x y coordinates supplied?
	this.hit = function(x,y){
		
		var dx = this.getX() - x;
		var dy = this.getY() - y;
		
		if (Math.sqrt( dx*dx + dy*dy)<this.radius) {
			return(true)
		} 
		return(false)
	}
	
	this.hover = function(x,y){
		this.hovering = false;
		if (this.hit(x,y)) {
			this.hovering = true;
			return(true)
		}
		
		return(false)
	}
	
	this.getX = function(){
		
		return(this.parent.xpos + this.x)
	}
	
	this.getY = function(){
		
		return(this.parent.ypos + this.y)
	}
	
	
	//It is convenient to select "wire" when a connector is clicked
	this.click = function(x,y){
		document.editor.setSelectedCatalogObject('Wiring_Wire');
		document.editor.mouseDown(x,y);
		//Editor.setSelectedCatalogObject('Wiring_Wire');
		
	}
	
	this.render = function(env){
		
		env.beginPath();
		env.arc(this.getX(), this.getY(), this.radius, 0, 2 * Math.PI, false);
		if (this.hovering) {
			env.fillStyle = '#FFF';
		} else {
			var state = this.state.get();
			if (state == 1) {
				env.fillStyle = '#2F2';
			} else if (state == 0) {
				env.fillStyle = '#222';
			} else {
				env.fillStyle = 'grey';
			}
		}
		env.fill();
		env.lineWidth = 1;
		env.strokeStyle = '#003300';
		env.stroke();
		
		env.beginPath();
		env.fillStyle = '#000';
		env.arc(this.getX(), this.getY(), this.radius*0.5, 0, 2 * Math.PI, false);
		env.fill();
		
		if (this.label && this.labelEnergy>0) {
			
			var r = Math.atan2(this.x - this.label.length*(this.parent.height/this.parent.width),this.y);
			var widthMod = this.parent.width/2;
			var offsetX = 0;
			if (this.x>0) {
				widthMod = 5;
			} else {
				offsetX = this.label.length * 5;
				
			}
			var heightMod = this.parent.height/2;
			
			env.font="8px Georgia";
			env.fillStyle='#FFF';
			if (this.state.floating) {
				env.fillText(this.label + ' [' + Math.round(this.state.getFloating()*100)/100 +']',this.getX()+Math.sin(r)*widthMod-offsetX,this.getY()+Math.cos(r)*heightMod);
			} else {
				env.fillText(this.label ,this.getX()+Math.sin(r)*widthMod-offsetX,this.getY()+Math.cos(r)*heightMod);
			}

		
			this.labelEnergy--;
		}
		
	}
	
	
}

/**
 * Helper function to determine whether there is an intersection between the two polygons described
 * by the lists of vertices. Uses the Separating Axis Theorem
 *
 * @param a an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @param b an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @return true if there is any intersection between the 2 polygons, false otherwise
 */
function doPolygonsIntersect (a, b) {
    var polygons = [a, b];
    var minA, maxA, projected, i, i1, j, minB, maxB;

    for (i = 0; i < polygons.length; i++) {

        // for each polygon, look at each edge of the polygon, and determine if it separates
        // the two shapes
        var polygon = polygons[i];
        for (i1 = 0; i1 < polygon.length; i1++) {

            // grab 2 vertices to create an edge
            var i2 = (i1 + 1) % polygon.length;
            var p1 = polygon[i1];
            var p2 = polygon[i2];

            // find the line perpendicular to this edge
            var normal = { x: p2.y - p1.y, y: p1.x - p2.x };

            minA = maxA = undefined;
            // for each vertex in the first shape, project it onto the line perpendicular to the edge
            // and keep track of the min and max of these values
            for (j = 0; j < a.length; j++) {
                projected = normal.x * a[j].x + normal.y * a[j].y;
                if (minA==undefined || projected < minA) {
                    minA = projected;
                }
                if (maxA==undefined || projected > maxA) {
                    maxA = projected;
                }
            }

            // for each vertex in the second shape, project it onto the line perpendicular to the edge
            // and keep track of the min and max of these values
            minB = maxB = undefined;
            for (j = 0; j < b.length; j++) {
                projected = normal.x * b[j].x + normal.y * b[j].y;
                if (minB==undefined || projected < minB) {
                    minB = projected;
                }
                if (maxB==undefined || projected > maxB) {
                    maxB = projected;
                }
            }

            // if there is no overlap between the projects, the edge we are looking at separates the two
            // polygons, and we know there is no overlap
            if (maxA < minB || maxB < minA) {
                return false;
            }
        }
    }
    return true;
};

function RotationHandle(parent){
	
	this.hovering = false;
	this.visible = false;
	this.radius = 8
	this.parent = parent;
	this.distance = Math.max(this.parent.width, this.parent.height);
	
	this.getX = function(){
		
		return(this.parent.xpos + this.distance*Math.sin(this.parent.rotation))
	}
	
	this.getY = function(){
		
		return(this.parent.ypos + this.distance*Math.cos(this.parent.rotation))
	}
	
	this.render = function(env){
		
		env.beginPath();
		env.arc(this.getX(), this.getY(), this.radius, 0, 2 * Math.PI, false);
		if (this.hovering) {
			env.fillStyle = '#FFF';
		} else {

			env.fillStyle = 'grey';
			
		}
		env.fill();
		env.lineWidth = 1;
		env.strokeStyle = '#003300';
		env.stroke();
		
		env.beginPath();
		env.fillStyle = '#000';
		env.arc(this.getX(), this.getY(), this.radius*0.5, 0, 2 * Math.PI, false);
		env.fill();
		
		
	}
	
	this.hit = function(x,y){
		
		var dx = this.getX() - x;
		var dy = this.getY() - y;
		
		if (Math.sqrt( dx*dx + dy*dy)<this.radius) {
			return(this)
		} 
		return(false)
	}
	
	this.hover = function(x,y){
		this.hovering = false;
		if (this.hit(x,y)) {
			this.hovering = true;
			return(true)
		}
		
		return(false)
	}
	
	this.drag = function(prevX,prevY,newX,newY){
		
		var r = Math.atan2(newX-this.parent.xpos, newY-this.parent.ypos);
		this.parent.rotation = r;
		this.parent.recalcBoundingCoordinates();
	}
	
	this.show = function(){
		
		this.distance = Math.max(this.parent.width, this.parent.height);
		this.visible = true;
		
	}
}


function electronicObject(x,y,rotation,settings){
	this.xpos = x || 50;
	this.ypos = y || 50;
	this.rotation = rotation || 0;
	this.settings = settings;
	this.connectors = []
	
	if (settings.parent) {
		this.parent = settings.parent;
	}
	
	this.width = settings.width || 15;
	this.height = settings.height || 50;
	this.hoverColor = "#00FF00";
	this.hovering = false;
	//this.rotationHandle = new RotationHandle(this);

	this.recalcBoundingCoordinates = function(){
				
		this.boundingCoordinates = [{x:this.xpos+(this.width/2)*Math.cos(this.rotation)-(this.height/2)*Math.sin(this.rotation), y:this.ypos+(this.height/2)*Math.cos(this.rotation)+(this.width/2)*Math.sin(this.rotation)},
		{x:this.xpos-(this.width/2)*Math.cos(this.rotation)-(this.height/2)*Math.sin(this.rotation), y:this.ypos+(this.height/2)*Math.cos(this.rotation)-(this.width/2)*Math.sin(this.rotation)},
		{x:this.xpos-(this.width/2)*Math.cos(this.rotation)+(this.height/2)*Math.sin(this.rotation), y:this.ypos-(this.height/2)*Math.cos(this.rotation)-(this.width/2)*Math.sin(this.rotation)},
		{x:this.xpos+(this.width/2)*Math.cos(this.rotation)+(this.height/2)*Math.sin(this.rotation), y:this.ypos-(this.height/2)*Math.cos(this.rotation)+(this.width/2)*Math.sin(this.rotation)}
		]
	}
	this.recalcBoundingCoordinates();
	
	this.tick = function(){
		
		for(var connectorIndex in this.connectors){
				
			this.connectors[connectorIndex].state.tick();
			
		}
	
	}
	
	
	this.render = function(cnv, noDrawPlane){
		
		noDrawPlane = noDrawPlane || false;
		if (this.hovering) {
			cnv.strokeStyle = this.hoverColor;
		} else {
			cnv.strokeStyle = "#CCC";
		}
		cnv.lineWidth=2;
		cnv.beginPath();
		
		for (var i in this.boundingCoordinates) {
			if (i==0) {
				cnv.moveTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y);
			} else {
				cnv.lineTo(this.boundingCoordinates[i].x, this.boundingCoordinates[i].y);
			}
		}
		
		cnv.lineTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y)
		cnv.stroke();
		
		if (!noDrawPlane) {
			cnv.fillStyle="#666";
			cnv.fill();
		}
		
		for(var connectorIndex in this.connectors){
			
			this.connectors[connectorIndex].render(cnv);
		}
		//this.rotationHandle.render(cnv)
		
	}
	
	this.delete = function(){
		console.log('Running delete!')
		for(var connectorIndex in this.connectors){
			this.connectors[connectorIndex].dead = true;
		}
	}
	
	this.hover = function(x,y){
		this.hovering = false;
		
		/*
		if( this.rotationHandle.hover(x,y) ){
			return(this.rotationHandle)
		}*/
			
		if (this.hit(x,y)) {
			
			for(var connectorIndex in this.connectors){
				this.connectors[connectorIndex].showLabel();

			}
			
			for(var connectorIndex in this.connectors){
				
				if (this.connectors[connectorIndex].hover(x,y)) {
					return(true)
				}
				
			}
			
			this.hovering = true;
			//this.rotationHandle.show();
			
			
		} else {
			this.hovering = false;
		}
		
		
	}
	
	this.drag = function(prevX,prevY,newX,newY){
		this.xpos = newX;
		this.ypos = newY;
		this.recalcBoundingCoordinates();
		/*
		var d = (25+this.xpos)%50;
		console.log(Math.abs(d))
		if (d<5) {
			this.xpos = Math.round(this.xpos/100)*100 +25 ;
			this.recalcBoundingCoordinates();
		}*/
		
		
		
	}
	
	this.hit = function(x,y){
		
		//Check if the object is hit;
		if( doPolygonsIntersect([{x:x-1,y:y+1},{x:x+1,y:y-1}],this.boundingCoordinates) ){
			
			
			//It was hit, now check if any of the connectors was hit;
			for(var connectorIndex in this.connectors){
				if (this.connectors[connectorIndex].hit(x,y)) {
					return(this.connectors[connectorIndex])
				}
				
			}
			
			return(this)
			
		}
		//return( this.rotationHandle.hit(x,y) )
		
		
	}
	
	this.save = function(obj){
		
		if (obj!==undefined) {
			
			obj.xpos = this.xpos;
			obj.ypos = this.ypos;
			obj.rotation = this.rotation;
			
		}
		
		
	}
	
}


Wiring = {}

Wiring.Wire = function(x, y, rotation, world, clicks){
	
	this.world = world;
	//Check if this wire can connect to obj
	this.validateConnect= function(obj){
		
		if ( obj instanceof Connector) {
			return(true)
		} else {
			return(false)
		}
		
	}
	
	this.calculatePoly = function(){
		this.boundingCoordinates = [];
		this.boundingCoordinates[0] = {x:this.from.getX(), y:this.from.getY()};
		this.boundingCoordinates[1] = {x:this.to.getX(), y:this.to.getY()};
	}
	
	
	this.multiclick = 2;
	if (world && clicks) {
		//Find if there are suitable objects to connect;
		
		console.log(clicks)
		var from = world.objectAt(clicks[0].x,clicks[0].y);
		var to =   world.objectAt(clicks[1].x,clicks[1].y);
		if( this.validateConnect(from) && this.validateConnect(to) ){
			this.from = from;
			this.to = to;
			this.calculatePoly();
			
		} else {
			this.killMe = true;
			
		}
		
		
	}
	
	this.hovering = false;
	this.hoverColor = '#FFF';
	this.state = new State();
	this.render = function(cnv){
		
		
		if (this.boundingCoordinates) {
			
			//Todo really optimise:
			this.calculatePoly();

			cnv.lineWidth=2;
			cnv.beginPath();
			
			for (var i in this.boundingCoordinates) {
				if (i==0) {
					cnv.moveTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y);
				} else {
					cnv.lineTo(this.boundingCoordinates[i].x, this.boundingCoordinates[i].y);
				}
			}
			
			cnv.lineTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y)
			
			if (this.hovering) {
				cnv.strokeStyle = this.hoverColor;;
			} else {
				var state = this.state.get();
				if (state == 1) {
					cnv.strokeStyle = '#2F2';
				} else if (state == 0) {
					cnv.strokeStyle = '#222';
				} else {
					cnv.strokeStyle = 'grey';
				}
			}
			cnv.stroke();
			
		}
		
	}
	
	
	this.hit = function(x,y){
		
		//Check if the object is hit;
		if( doPolygonsIntersect([{x:x-1,y:y+1},{x:x+1,y:y-1}],this.boundingCoordinates) ){
			return(this)
		}
	}
	
	this.hover = function(x,y){		

		if (this.hit(x,y)) {
			this.calculatePoly();
			this.hovering = true;
			this.calculatePoly();
		} else {
			this.hovering = false;
		}
		
	}
	
	this.delete = function(){
		
		if (this.from){
			if(this.from.connectorType==1) {
				this.from.state.set(-1);
		       }
		}
		if (this.to){
			if(this.to.connectorType==1) {
				this.to.state.set(-1);
			}
		}
		
	}
	
	this.tick = function(){
		if (this.from.dead || this.to.dead || this.from==undefined || this.to==undefined) {
			//Cable is not connected!
			console.log('Wire parents died. Removing from world')
			this.delete();
			this.killMe = true;
			return(false);
		}
		
		this.state.tick();
		//Try to find outputs; (1==input, 2==output, see Connector())
		if (this.from.connectorType==1 && this.to.connectorType==1) {
			this.state.set(-1)
			return(false);
		}
		
		if (this.from.connectorType==2) {
			this.state.set( this.from.state.getFloating() );
		}
		if (this.to.connectorType==2) {
			this.state.set(  this.to.state.getFloating());
		}
		if (this.from.connectorType==1) {
			 this.from.state.set(this.state.getFloating());
		}
		if (this.to.connectorType==1) {
			this.to.state.set(this.state.getFloating());
		}
		
		
		
	}
	this.save = function(){
		var data = {};
		data.type = ['Wiring','Wire'];
		if (this.from && this.to) {
			//We need to store from where to where the wire is placed...
			data.from = {x:this.from.getX(), y:this.from.getY()};
			data.to = {x:this.to.getX(), y:this.to.getY()};
		}
		
		return(data);
	}
	this.load = function(data){
		//Redefine from and to...
		console.log(data);
		var from = this.world.objectAt(data.from.x, data.from.y);
		var to = this.world.objectAt(data.to.x, data.to.y);
		if( this.validateConnect(from) && this.validateConnect(to) ){
			console.log('Loading wire succes!')
			console.log(from)
			console.log(to)
			this.from = from;
			this.to = to;
			this.calculatePoly();
			
		} else {
			console.log('Loading wire failed, could not validate the connection, details below')
			this.killMe = true;
			console.log(from)
			console.log(to)
			
		}
		
	
	}
};


BasicGates = {}

BasicGates.Not = function(x,y,rotation, world){
	this.undecidedOutput = -1;
	this.e = new electronicObject(x,y,rotation,{width:50, height:25, parent:this})
	this.e.connectors = { 'in':new Connector(-10, 0, 0, this.e, {connectorType:1, label:'in'}), 'out':new Connector(10, 0, 0, this.e, {connectorType:2, label:'out'}) };
	
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);	
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		var state = this.e.connectors['in'].state.get();
		if (state==1) {
			this.e.connectors['out'].state.set(0);
		} else if (state==0) {
			this.e.connectors['out'].state.set(1);
		} else {
			this.e.connectors['out'].state.set(this.undecidedOutput);
		}
		
		
	}
	this.save = function(){
		var data = {};
		data.type = ['BasicGates','Not'];
		this.e.save(data);
		this.e.save(data);
		return(data);
	}
	
	this.load = function(data){
		this.undecidedOutput = data.undecidedOutput
	}
	
	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		return(conf);
	}
	
}

BasicGates.And = function(x,y,rotation, world){
	this.undecidedOutput = -1;
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'A':new Connector(-15, 10, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -10, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);	
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		var stateA = this.e.connectors['A'].state.get();
		var stateB = this.e.connectors['B'].state.get();
		
		if ( stateA==1 && stateB==1 ){
			this.e.connectors['out'].state.set(1);
		} else if (stateA==-1 || stateB==-1) {
			
			this.e.connectors['out'].state.set(this.undecidedOutput);
		} else {
			this.e.connectors['out'].state.set(0);
		}
		
		
	}
	this.save = function(){
		var data = {};
		data.type = ['BasicGates','And'];
		this.e.save(data);
		return(data);
	}
	
	this.load = function(data){
		this.undecidedOutput = data.undecidedOutput
	}
	
	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		return(conf);
	}
	
	
}

BasicGates.Nand = function(x,y,rotation, world){
	this.undecidedOutput = -1
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'A':new Connector(-15, 10, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -10, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);	
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		var stateA = this.e.connectors['A'].state.get();
		var stateB = this.e.connectors['B'].state.get();
		
		if ( stateA==1 || stateB==1 ){
			this.e.connectors['out'].state.set(0);
		} else if (stateA==-1 || stateB==-1) {
			
			this.e.connectors['out'].state.set(this.undecidedOutput);
		} else {
			this.e.connectors['out'].state.set(1);
		}
		
		
	}
	this.save = function(){
		var data = {};
		data.type = ['BasicGates','Nand'];
		data.undecidedOutput = this.undecidedOutput;
		return(data);
	}
	
	this.load = function(data){
		this.undecidedOutput = data.undecidedOutput
	}
	
	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		return(conf);
	}
	
}



BasicGates.Or = function(x,y,rotation, world){
	
	this.undecidedOutput = -1;
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'A':new Connector(-15, 10, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -10, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);	
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		var stateA = this.e.connectors['A'].state.get();
		var stateB = this.e.connectors['B'].state.get();
		
		if ( (stateA==1 && stateB==0) || (stateB==1 && stateA==0) || (stateB==1 && stateA==1) ){
			this.e.connectors['out'].state.set(1);
		} else if (stateA==-1 || stateB==-1) {
			this.e.connectors['out'].state.set(this.undecidedOutput);
		} else {
			this.e.connectors['out'].state.set(0);
		}
	}
	
	this.save = function(){
		var data = {};
		data.type = ['BasicGates','Or'];
		this.e.save(data);
		data.undecidedOutput = this.undecidedOutput;
		return(data);
	}
	
	this.load = function(data){
		this.undecidedOutput = data.undecidedOutput
	}
	
	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		return(conf);
	}
	
}

BasicGates.Xor = function(x,y,rotation, world){
	
	this.undecidedOutput = -1;
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'A':new Connector(-15, 10, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -10, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);	
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		var stateA = this.e.connectors['A'].state.get();
		var stateB = this.e.connectors['B'].state.get();
		
		if ( (stateA==1 && stateB==0) || (stateB==1 && stateA==0)  ){
			this.e.connectors['out'].state.set(1);
		} else if (stateA==-1 || stateB==-1) {
			this.e.connectors['out'].state.set(this.undecidedOutput);
		} else {
			this.e.connectors['out'].state.set(0);
		}
	}
	
	this.save = function(){
		var data = {};
		data.type = ['BasicGates','Xor'];
		this.e.save(data);
		data.undecidedOutput = this.undecidedOutput;
		return(data);
	}
	
	this.load = function(data){
		this.undecidedOutput = data.undecidedOutput
	}
	
	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		return(conf);
	}
	
}


SimpleIcs = {};


SimpleIcs['SR-FlipFlop'] = function(x,y,rotation, world){
	
	this.e = new electronicObject(x,y,rotation,{width:50, height:50})
	this.e.connectors = {
		'set':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'S'}),
		'reset':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'R'}),
		'clock':new Connector(-15, 0, 0, this.e, {connectorType:1,label:'Clock'}),
		
		'Q':new Connector(15, -15, 0, this.e, {connectorType:2,label:'Q'}),
		'Qn1':new Connector(15, 15, 0, this.e, {connectorType:2,label:'Qn+1'})
		};
	
	
	this.Q = new State();
	this.Q.set(-1)
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		this.Q.tick();
		
		if ( this.e.connectors['clock'].state.get()==1 ) {
			
			if ( this.e.connectors['set'].state.get()==1 && this.e.connectors['reset'].state.get()==0) {
				this.Q.set(1)
				

			} else if ( this.e.connectors['set'].state.get()==0 && this.e.connectors['reset'].state.get()==1) {
				this.Q.set(0)

			} else if (this.e.connectors['set'].state.get()==0 && this.e.connectors['reset'].state.get()==0){
				//Hold state.
				
			}else{
				this.Q.set(-1)
			}
		
		}
		this.e.connectors['Q'].state.set(this.Q.get());
		this.e.connectors['Qn1'].state.setInv(this.Q.get());
			
		if (this.e.connectors['set'].state.get()!=-1 && this.e.connectors['reset'].state.get()!=-1) {
			this.e.connectors['Q'].state.set(this.Q.get());
			this.e.connectors['Qn1'].state.setInv(this.Q.get());
		} else {
			
			this.e.connectors['Q'].state.set(-1);
			this.e.connectors['Qn1'].state.set(-1);
		}
	}
	
	this.save = function(){
		var data = {};
		data.type = ['SimpleIcs','SR-FlipFlop'];
		this.e.save(data);
		return(data);
		
	}
	
	
}


SimpleIcs['BCD to BIN'] = function(x,y,rotation, world){
	
	this.e = new electronicObject(x,y,rotation,{width:50, height:100})
	this.e.connectors = {
		'D0':new Connector(-15, -42, 0, this.e, {connectorType:1,label:'Dec0'}),
		'D1':new Connector(-15, -31, 0, this.e, {connectorType:1,label:'Dec1'}),
		'D2':new Connector(-15, -20, 0, this.e, {connectorType:1,label:'Dec2'}),
		'D3':new Connector(-15, -6, 0, this.e, {connectorType:1,label:'Dec3'}),
		'D4':new Connector(-15, 6, 0, this.e, {connectorType:1,label:'Dec4'}),
		'D5':new Connector(-15, 20, 0, this.e, {connectorType:1,label:'Dec5'}),
		'D6':new Connector(-15, 31, 0, this.e, {connectorType:1,label:'Dec6'}),
		'D7':new Connector(-15, 42, 0, this.e, {connectorType:1,label:'Dec7'}),
		
		'D8':new Connector(15, -42, 0, this.e, {connectorType:1,label:'Dec8'}),
		'D9':new Connector(15, -31, 0, this.e, {connectorType:1,label:'Dec9'}),
		
		'B0':new Connector(15, 6, 0, this.e, {connectorType:2,label:'Bin0'}),
		'B1':new Connector(15, 20, 0, this.e, {connectorType:2,label:'Bin1'}),
		'B2':new Connector(15, 31, 0, this.e, {connectorType:2,label:'Bin2'}),
		'B3':new Connector(15, 42, 0, this.e, {connectorType:2,label:'Bin3'})
		};
	
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);	
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	
	this.tick = function(){
		this.e.tick();
		this.connectors['out'].state.tick();

	}
	
	this.save = function(){
		var data = {};
		data.type = ['SimpleIcs','BCD to BIN'];
		this.e.save(data);
		return(data);
		
	}
}


Inputs = {};
Inputs.Push = function(x,y,rotation, world){
	
	this.e = new electronicObject(x,y,rotation,{width:50, height:50})
	this.e.connectors = { 'out':new Connector(0, 15, 0, this.e, {connectorType:2}) };
	this.e.switchPosition = 0;
	
	this.switchXoffset = 0;
	this.switchYoffset = 10;
	this.e.switchWidth = 40;
	this.e.switchHeight = 25;
	this.springBack = 0.1;
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);
		env.beginPath();
		
		var xstart = this.e.xpos-this.e.switchWidth*0.5+this.switchXoffset;
		var xend = xstart + this.e.switchWidth;
		var ystart =  this.e.ypos-this.e.switchHeight*0.5 - this.switchYoffset;
		var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight - this.switchYoffset;
		
		if (this.e.switchPosition>0) {
			var linearGradient = env.createLinearGradient(xend, ystart, xend, yend);
			linearGradient.addColorStop(0, "#666");
			linearGradient.addColorStop(0.1, "#111");
			linearGradient.addColorStop(0.2, "#AAA");
			linearGradient.addColorStop(0.9, "#DDD");
			linearGradient.addColorStop(1, "#DDD");
		} else {
			var linearGradient = env.createLinearGradient(xend, ystart, xend, yend);
			linearGradient.addColorStop(0, "#333");
			linearGradient.addColorStop(0.1, "#FFF");
			linearGradient.addColorStop(0.9, "#AAA");
			linearGradient.addColorStop(1, "#111");
		}
		env.fillStyle = linearGradient;
		env.fillRect(xstart, ystart, this.e.switchWidth, this.e.switchHeight);
		
		
		if (this.e.hovering) {
			env.fillStyle = '#FFF';
		} else {

			env.fillStyle = 'grey';
			
		}
		env.fill();
		env.lineWidth = 1;
		env.strokeStyle = '#003300';
		env.stroke();
		
		
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		
		if (this.e.switchPosition>0) {
			this.e.switchPosition -= this.springBack;
			this.e.switchPosition = Math.max(0,this.e.switchPosition);
		}
		
		if (this.e.switchPosition>0.05) {
			this.e.connectors['out'].state.set(1);
		} else {
			this.e.connectors['out'].state.set(0);
		}
		
		
		
	}
	
	this.e.click = function(x,y){
		
		this.switchPosition=1;
		this.connectors['out'].state.set(this.switchPosition);
		
	}
	
	this.save = function(){
		var data = {};
		data.type = ['Inputs','Push'];
		data.switchPosition = this.e.switchPosition;
		this.e.save(data);
		return(data);
		
	}
	
	this.load = function(data){
		if (data.switchPosition) {
			this.e.switchPosition  = data.switchPosition
			this.e.connectors['out'].state.set(this.switchPosition);
		}
		
	}
}
Inputs.Toggle = function(x,y,rotation, world){
	
	this.e = new electronicObject(x,y,rotation,{width:50, height:50})
	this.e.connectors = { 'out':new Connector(15, 0, 0, this.e, {connectorType:2}) };
	this.e.switchPosition = 0;
	
	this.switchXoffset = -3;
	this.e.switchWidth = 20;
	this.e.switchHeight = 30;
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);
		env.beginPath();
		
		var xstart = this.e.xpos-this.e.switchWidth*0.5+this.switchXoffset;
		var xend = xstart + this.e.switchWidth;
		var ystart =  this.e.ypos-this.e.switchHeight*0.5;
		var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight;
		
		if (this.e.switchPosition) {
			var linearGradient = env.createLinearGradient(xend, ystart, xend, yend);
			linearGradient.addColorStop(0, "#FFF");
			linearGradient.addColorStop(0.45, "#AAA");
			linearGradient.addColorStop(0.5, "#111");
			linearGradient.addColorStop(1, "#333");
		} else {
			var linearGradient = env.createLinearGradient(xend, ystart, xend, yend);
			linearGradient.addColorStop(0, "#333");
			linearGradient.addColorStop(0.5, "#111");
			linearGradient.addColorStop(0.55, "#AAA");
			linearGradient.addColorStop(1, "#FFF");
		}
		env.fillStyle = linearGradient;
		env.fillRect(xstart, ystart, this.e.switchWidth, this.e.switchHeight);
		
		
		if (this.e.hovering) {
			env.fillStyle = '#FFF';
		} else {

			env.fillStyle = 'grey';
			
		}
		env.fill();
		env.lineWidth = 1;
		env.strokeStyle = '#003300';
		env.stroke();
		
		
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		/*
		var stateA = this.e.connectors['A'].state.get();
		var stateB = this.e.connectors['B'].state.get();
		
		if ( stateA==1 && stateB==1 ){
			this.e.connectors['out'].state.set(1);
		} else if (stateA==-1 || stateB==-1) {
			this.e.connectors['out'].state.set(-1);
		} else {
			this.e.connectors['out'].state.set(0);
		}*/
		
		
	}
	
	this.e.click = function(x,y){
		if(this.switchPosition==0){
			this.switchPosition=1;
		} else {
			this.switchPosition=0;
		}
		console.log(this.switchPosition)
		this.connectors['out'].state.set(this.switchPosition);
		
	}
	
	this.save = function(){
		var data = {};
		data.type = ['Inputs','Toggle'];
		data.switchPosition = this.e.switchPosition;
		this.e.save(data);
		return(data);
		
	}
	
	this.load = function(data){
		if (data.switchPosition) {
			this.e.switchPosition  = data.switchPosition;
			this.e.connectors['out'].state.set(this.e.switchPosition);
		}
		
	}
}

Output = {}
Output['Segment display'] = function(x,y,rotation, world){
	
	this.e = new electronicObject(x,y,rotation,{width:75, height:100})
	this.e.connectors = { 'out':new Connector(15, 0, 0, this.e, {connectorType:2}) };
	this.e.switchPosition = 0;
	
	this.switchXoffset = -3;
	this.e.switchWidth = 20;
	this.e.switchHeight = 30;
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.render = function(env){
		this.e.render(env);
		env.beginPath();
		
		var xstart = this.e.xpos-this.e.switchWidth*0.5+this.switchXoffset;
		var xend = xstart + this.e.switchWidth;
		var ystart =  this.e.ypos-this.e.switchHeight*0.5;
		var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight;
		
		if (this.e.switchPosition) {
			var linearGradient = env.createLinearGradient(xend, ystart, xend, yend);
			linearGradient.addColorStop(0, "#FFF");
			linearGradient.addColorStop(0.45, "#AAA");
			linearGradient.addColorStop(0.5, "#111");
			linearGradient.addColorStop(1, "#333");
		} else {
			var linearGradient = env.createLinearGradient(xend, ystart, xend, yend);
			linearGradient.addColorStop(0, "#333");
			linearGradient.addColorStop(0.5, "#111");
			linearGradient.addColorStop(0.55, "#AAA");
			linearGradient.addColorStop(1, "#FFF");
		}
		env.fillStyle = linearGradient;
		env.fillRect(xstart, ystart, this.e.switchWidth, this.e.switchHeight);
		
		
		if (this.e.hovering) {
			env.fillStyle = '#FFF';
		} else {

			env.fillStyle = 'grey';
			
		}
		env.fill();
		env.lineWidth = 1;
		env.strokeStyle = '#003300';
		env.stroke();
		
		
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.tick = function(){
		this.e.tick();
		/*
		var stateA = this.e.connectors['A'].state.get();
		var stateB = this.e.connectors['B'].state.get();
		
		if ( stateA==1 && stateB==1 ){
			this.e.connectors['out'].state.set(1);
		} else if (stateA==-1 || stateB==-1) {
			this.e.connectors['out'].state.set(-1);
		} else {
			this.e.connectors['out'].state.set(0);
		}*/
		
		
	}
	
	this.e.click = function(x,y){
		if(this.switchPosition==0){
			this.switchPosition=1;
		} else {
			this.switchPosition=0;
		}
		console.log(this.switchPosition)
		this.connectors['out'].state.set(this.switchPosition);
		
	}
	
	this.save = function(){
		var data = {};
		data.type = ['Inputs','Toggle'];
		data.switchPosition = this.e.switchPosition;
		this.e.save(data);
		return(data);
		
	}
	
	this.load = function(data){
		if (data.switchPosition) {
			this.e.switchPosition  = data.switchPosition;
			this.e.connectors['out'].state.set(this.e.switchPosition);
		}
		
	}
}

BasicGates.Random = function(x,y,rotation, world){
	
	this.e = new electronicObject(x,y,rotation,{width:30, height:25})
	this.e.connectors = { 'out':new Connector(0, 0, 0, this.e, {connectorType:2}) };
	
	
	this.render = function(env){
		this.e.render(env);	
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.tick = function(){
		this.e.tick();
		if (Math.random()>0.95) {
			var state = this.e.connectors['out'].state.get();
			if (state==1) {
				this.e.connectors['out'].state.set(0)
			} else {
				this.e.connectors['out'].state.set(1)
			}
		}
		
	}
	
	this.save = function(){
		var data = {};
		data.type = ['BasicGates','Random'];
		this.e.save(data);
		return(data);
		
	}
	
	
}

ScenarioObjects = {}
ScenarioObjects.WindMill = function(x,y,rotation, world){
	
	
	this.imageLoaded = false;
	this.imgUrl = "./images/windmill/windmill_head.png";
	this.imageObj = new Image();
	this.imageObj.src = this.imgUrl;
	var parent = this;
	this.imageObj.onload = function(){
		parent.imageLoaded = true;
	}
	this.imgUrlGrass = "./images/windmill/grass.png";
	this.imageObjGrass = new Image();
	this.imageObjGrass.src = this.imgUrlGrass;
	var parent = this;
	this.imageLoadedGrass = false;
	this.imageObjGrass.onload = function(){
		parent.imageLoadedGrass = true;
	}
	
	
	this.world = world;
	this.e = new electronicObject(x,y,rotation,{width:150, height:150})
	this.e.connectors = {
		'out':new Connector(-67, -65, 0, this.e, {connectorType:2,label:'out'}),
		'turnLeft':new Connector(-67, -50, 0, this.e, {connectorType:1,label:'Turn left'}),
		'turnRight':new Connector(-67, -35, 0, this.e, {connectorType:1,label:'Turn right'}),
		
		};
	
	//How much space is there between the baseplate and mill plate
	this.fieldOffset = 15;
	this.baseOffset = 45;
	
	this.heading = 0;
	this.headingTarget = 0;
	this.bladePosition = 0;
	//Coordinates of the mill head
	this.bladeCoordinates = [
		
		{x:0, y:-23}, {x:120, y:-20} , {x:120, y:-23} ,{x:0, y:-30}
		
		
	]
	
	this.render = function(env){
		this.e.render(env);
		if (this.imageLoadedGrass) {
			LoadImageToCanvas(env, this.imageObjGrass, this.e.xpos - this.e.width *0.5 +this.fieldOffset, this.e.ypos - this.e.height *0.5 +this.fieldOffset, Math.PI, this.e.width-2*this.fieldOffset, this.e.height-2*this.fieldOffset)
		}
		//Draw the mill head
		if (this.imageLoaded) {
			this.imageXoffset = -40;
			this.imageYoffset = -40;

			LoadImageToCanvas(env, this.imageObj, this.e.xpos, this.e.ypos,  -this.heading, 80 + this.imageXoffset, 80 + this.imageYoffset)
		}
		//Draw blades
		
		var bladePositions = []
		
		for (var bladeIndex=0; bladeIndex<3; bladeIndex++) {
			//bladePositions.push(Math.sin(this.bladePosition+Math.PI*2*bladeIndex*0.33)*1);
			bladePositions.push(this.bladePosition+Math.PI*2*bladeIndex*0.33);
		}
		//bladePositions.sort();
		bladePositions.sort(function(a,b) { return getShortAngle(0, b) - getShortAngle(0, a)  } )
		
		
		for (var bladeIndex=0; bladeIndex<3; bladeIndex++) {
			
			
			var bladeAngle = bladePositions[bladeIndex] 
		
			var poly = rotatePoly( this.bladeCoordinates, 40, 40, -this.heading, Math.cos(bladeAngle)*1 );
			env.lineWidth=1;
			env.strokeStyle = '#333';
			env.beginPath();
			for(var polyId in poly){
				if (polyId==1) {
					env.moveTo(poly[polyId].x + this.e.xpos,poly[polyId].y + this.e.ypos);	
				} else {
					env.lineTo(poly[polyId].x + this.e.xpos, poly[polyId].y + this.e.ypos);
				}
			}
	
			
			env.lineTo(poly[0].x + this.e.xpos,poly[0].y+this.e.ypos)
			var lightness = Math.min(256, Math.round( 150 + 150*(getShortAngle(bladeAngle,0)/Math.PI) ));
			
			env.fillStyle="rgb("+ lightness + ',' + lightness + ','+ lightness +")";
			env.fill();
			env.stroke();
		
			
		}
		
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.bladeDirection = 1;
	this.bladeSpeed = 0; //Highest should be around 0.15
	this.outputPower = 0;
	
	//These states are used to capture a digital signal on the left and right connectors
	this.leftState = new State();
	this.leftState.set(0);
	this.rightState = new State();
	this.rightState.set(0);
	
	this.tick = function(){
		
		this.leftState.tick();
		this.rightState.tick();
		
		this.bladePosition += this.bladeDirection*this.bladeSpeed % (Math.PI*2);
		
		//The distance (angle) from the wind. 0 to 1 (0 is best)
		var headingDifference = Math.abs( Math.min(1, Math.max(0, 1-((Math.PI-getFullShortAngle(this.world.wind.direction%(Math.PI*2), this.heading))/Math.PI))) );
		
		
		if (headingDifference>0.5) {
			headingDifference = 1;
		} else if (headingDifference>0.3) {
			headingDifference = Math.min(1,Math.pow(headingDifference,0.2));
		} else {
			headingDifference*=1;
		}
		
		this.outputPower = Math.min(1,this.bladeSpeed * 6.66);
		var targetSpeed = (this.world.wind.speed/12)*0.15 * Math.max(0, (1-(headingDifference))); 
		var diff = targetSpeed-this.bladeSpeed;
		this.bladeSpeed += diff*0.01;

		this.e.tick();
		
		if (this.e.connectors['turnLeft'].state.get()==1) {
			this.leftState.set(1)
		}
		if (this.e.connectors['turnRight'].state.get()==1) {
			this.rightState.set(1)
		}
		
		if (this.e.connectors['turnLeft'].state.get()==0 && this.leftState.get()==1) {
			this.leftState.set(0);
			this.headingTarget-=Math.PI/16; //32 steps is a full rotation
		}
		if (this.e.connectors['turnRight'].state.get()==0 && this.rightState.get()==1) {
			this.rightState.set(0);
			this.headingTarget+=Math.PI/16; //32 steps is a full rotation
		}
		
		
		var diff = getShortAngle(this.heading, this.headingTarget);
		this.heading += diff*0.01;
		this.heading = this.heading%(Math.PI*2)
		
		this.e.connectors['out'].state.set(this.outputPower)
		
		
	}
	
	this.save = function(){
		
		var data = {};
		data.type = ['ScenarioObjects','WindMill'];
		data.heading = this.heading;
		data.headingTarget = this.headingTarget;
		this.e.save(data);
		return(data);
	}
	
	this.load = function(data){
		
		if (data.heading) {
			this.heading = data.heading;
		}
		if (data.headingTarget) {
			this.headingTarget = data.headingTarget;
		}
		
	}
	
}

ScenarioObjects.Vane = function(x,y,rotation, world){
	
	
	this.imageVaneLoaded = false;
	this.imageVane = new Image();
	this.imageVane.src = "./images/windmill/vane.png";
	var parent = this;
	this.imageVane.onload = function(){
		parent.imageVaneLoaded = true;
	}
	
	this.imageVaneBaseLoaded = false;
	this.imageVaneBase = new Image();
	this.imageVaneBase.src = "./images/windmill/vane_base.png";
	var parent = this;
	this.imageVaneBase.onload = function(){
		parent.imageVaneBaseLoaded = true;
	}
	
	
	this.imageVaneMeasureLoaded = false;
	this.imageVaneMeasure = new Image();
	this.imageVaneMeasure.src = "./images/windmill/vane_measure.png";;
	var parent = this;
	this.imageVaneMeasure.onload = function(){
		parent.imageVaneMeasureLoaded = true;
	}
	
	/*
	this.imgUrlGrass = "./images/windmill/grass.png";
	this.imageObjGrass = new Image();
	this.imageObjGrass.src = this.imgUrlGrass;
	var parent = this;
	this.imageLoadedGrass = false;
	this.imageObjGrass.onload = function(){
		parent.imageLoadedGrass = true;
	}*/
	
	
	this.world = world;
	this.e = new electronicObject(x,y,rotation,{width:150, height:150})
	this.e.connectors = {
		0:new Connector(-67, -65, 0, this.e, {connectorType:2,label:'Bit 0'}),
		1:new Connector(-67, -50, 0, this.e, {connectorType:2,label:'Bit 1'}),
		2:new Connector(-67, -35, 0, this.e, {connectorType:2,label:'Bit 2'}),
		3:new Connector(-67, -20, 0, this.e, {connectorType:2,label:'Bit 3'}),
		4:new Connector(-67, -5, 0, this.e, {connectorType:2,label:'Bit 4'})
		
		};
	
	//How much space is there between the baseplate and mill plate
	this.fieldOffset = 15;
	this.baseOffset = 45;
	this.heading = 0;
	
	
	
	this.render = function(env){
		
		this.e.render(env);
		if (this.imageVaneBaseLoaded) {
			this.imageXoffset = -50;
			this.imageYoffset = -50;

			LoadImageToCanvas(env, this.imageVaneBase, this.e.xpos, this.e.ypos,  -this.heading+Math.PI, 100 + this.imageXoffset, 100 + this.imageYoffset)
		}
		//Now we measure if the holes in the base overlap with the sensors... yep, in the render function. really.
		for(var i = 0; i<5; i++){
			
			var r = (2*Math.PI / 5) * i - 0.3;
			var q = env.getImageData(this.e.xpos + Math.sin(r)*38, this.e.ypos + Math.cos(r)*38, 1, 1).data;
			
			if (q[2]<150) {
				//Then it is not so blue.
				this.e.connectors[i].state.set(1)
			} else {
				this.e.connectors[i].state.set(0)
			}
			
			/*
			env.beginPath();
			env.fillStyle = '#F00';
			
			env.arc(this.e.xpos + Math.sin(r)*38, this.e.ypos + Math.cos(r)*38, 2, 0, 2 * Math.PI, false);
			env.fill(); */
			
		}
		
		 
		 //
		
		
		if (this.imageVaneMeasureLoaded) {
			this.imageXoffset = -60;
			this.imageYoffset = -60;

			LoadImageToCanvas(env, this.imageVaneMeasure, this.e.xpos, this.e.ypos, 0, 120 + this.imageXoffset, 120 + this.imageYoffset)
		}
		
		if (this.imageVaneLoaded) {
			this.imageXoffset = -40;
			this.imageYoffset = -40;

			LoadImageToCanvas(env, this.imageVane, this.e.xpos, this.e.ypos, -this.heading+Math.PI, 80 + this.imageXoffset, 80 + this.imageYoffset)
		}
		

		
		
		
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.bladeDirection = 1;
	this.bladeSpeed = 0; //Highest should be around 0.15
	this.tick = function(){
		this.e.tick();
		var diff = getShortAngle( this.heading , this.world.wind.direction );
		this.heading -= 0.2*diff;
		
	}
	
	this.save = function(){
		
		var data = {};
		data.type = ['ScenarioObjects','Vane'];
		data.heading = this.heading;
		this.e.save(data);
		return(data);
		
	}
	this.load = function(data){
		if (data.heading) {
			this.heading = data.heading;
		}
	}
	
	
}



function mod(m, n) {
        return ((m % n) + n) % n;
}
 
 
ScenarioObjects['Rotary counter'] = function(x,y,rotation, world){
    this.e = new electronicObject(x,y,0,{width:150, height:100})
	this.e.connectors = {
	'time':new Connector(-30, 25, 0, this.e, {connectorType:1,label:'+Time'}),
	'+1':new Connector(-15, 25, 0, this.e, {connectorType:1,label:'+1'}),
	'reset':new Connector(0, 25, 0, this.e, {connectorType:1,label:'Reset'})

	};
		
    this.digits = 6;
    this.position = 0;
    this.countState = new State();
    this.countState.set(0)

    this.forwardMode = true;
    this.digitHeight = 30;
    this.digitWidth = 14;
    this.digitGap = 2;
    this.horizontalMargin = 5;
    this.loosyness = 0.6;
    
    this.add = function(value){
        
        this.position += value;
        this.position = Math.max(0, this.position);
        
        
        
    }
    
    
    this.goTo = function(value){
        
        this.position = value;
        
    }
    
    this.renderDigit = function(canvas, x, y, digit, nextDigit, linear){
        
        canvas.font= "12px arial";
        canvas.textAlign = "center";
        canvas.textBaseline = 'middle';
        
        canvas.lineWidth =1;
        
        canvas.strokeStyle = 'rgba(190, 190, 190, '+ 0.8 +')';
        
        if (linear==true) {
            var digitpos =  this.digitHeight* 0.4* nextDigit;
        } else {
            var digitpos =  this.digitHeight *  ((this.loosyness *( (nextDigit*nextDigit*nextDigit-1)/5000 )));
            
        }
        if (this.forwardMode) {
            
            
            canvas.strokeText( digit ,x+0.5*this.digitWidth, y+0.5* this.digitHeight-digitpos);
            canvas.strokeText( mod(digit-1, 10) ,x+0.5*this.digitWidth, y+0.1* this.digitHeight-digitpos);
            canvas.strokeText( mod(digit+1, 10) ,x+0.5*this.digitWidth, y+0.9* this.digitHeight-digitpos);
        } else {
            
            var digitpos =  this.digitHeight *  ((0.5*( (nextDigit*nextDigit*nextDigit-1)/5000 )));
            canvas.strokeText( digit ,x+0.5*this.digitWidth, y+0.5* this.digitHeight+digitpos);
            canvas.strokeText( mod(digit+1, 10) ,x+0.5*this.digitWidth, y+0.1* this.digitHeight+digitpos);
            canvas.strokeText( mod(digit-1, 10) ,x+0.5*this.digitWidth, y+0.9* this.digitHeight+digitpos);
        }
	
	//Remove edges of digits
	canvas.fillStyle = '#333';
        canvas.fillRect(x-this.horizontalMargin,y-5, this.digitWidth+2*this.horizontalMargin , 5);
	canvas.fillRect(x-this.horizontalMargin,y+this.digitHeight, this.digitWidth+2*this.horizontalMargin , 5);
        
    }
    
    
    this.pad = function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }
    
    this.render = function(canvas){
        
	this.e.render(canvas);
        //Draw encapulating rectangle
        var x = this.e.xpos - 50;
	var y = this.e.ypos - 25;
        canvas.beginPath();
        var gradient = canvas.createLinearGradient(x, y, x,y+this.digitHeight);
        gradient.addColorStop(0, 'rgb(0,0,0)');
        gradient.addColorStop(0.4, 'rgb(0,0,0)');
        gradient.addColorStop(0.42, 'rgb(80,80,80)')
        gradient.addColorStop(0.45, 'rgb(200,200,200)')
        gradient.addColorStop(0.5, 'rgb(80,80,80)')
        gradient.addColorStop(0.6, 'rgb(0,0,0)');
        gradient.addColorStop(1, 'rgb(0,0,0)')
        
        canvas.rect(x, y, this.digitWidth*this.digits+ (this.digits-1)*this.digitGap + this.horizontalMargin*2 , this.digitHeight);
        canvas.fillStyle = gradient;
        canvas.fillRect(x,y, this.digitWidth*this.digits+ (this.digits-1)*this.digitGap + this.horizontalMargin*2 , this.digitHeight);
        canvas.closePath();

        //Draw background of digits
        var position = this.horizontalMargin;
        var paddedValue = this.pad( Math.floor( this.position ), this.digits)+'0';
        for(var i=0; i<(this.digits); i++){
            
            canvas.beginPath();
            canvas.rect(x+position, y, this.digitWidth, this.digitHeight);
            if (i==this.digits-1) {
                canvas.fillStyle = 'rgb(140,40,40)';
            } else {
                canvas.fillStyle = 'rgb(40,40,40)';
            }
            canvas.fill();
            canvas.closePath();
            if (i<this.digits-1) {
                this.renderDigit(canvas, x+position, y, parseInt(paddedValue.charAt(i)), parseInt(paddedValue.charAt(i+1)))
            } else {
                 this.renderDigit(canvas, x+position, y, parseInt(paddedValue.charAt(i)) , this.position%1, true)
                
            }
            position+= this.digitWidth+this.digitGap;
            
            
        }
        
        //Draw glare    
        canvas.beginPath();
        //canvas.rect(x, y, this.digitWidth*this.digits+ (this.digits-1)*this.digitGap + this.horizontalMargin*2 , this.digitHeight);
        
        var gradient = canvas.createLinearGradient(x, y, x,y+this.digitHeight);
        gradient.addColorStop(0, 'rgba(0,0,0,1)');
        gradient.addColorStop(0.1, 'rgba(0,0,0,0.8)');
        gradient.addColorStop(0.2, 'rgba(60,90,90,0.8)');
        gradient.addColorStop(0.3, 'rgba(250,250,250,0.3)')
        gradient.addColorStop(0.5, 'rgba(0,0,0,0.4)')
        gradient.addColorStop(0.9, 'rgba(0,0,0,0.92)')
        gradient.addColorStop(1, 'rgba(0,0,0,1)')
        
        canvas.fillStyle = gradient;
        canvas.fillRect(x,y, this.digitWidth*this.digits+ (this.digits-1)*this.digitGap + this.horizontalMargin*2 , this.digitHeight);
        canvas.closePath();
	

        
    }
    this.tick = function(){
	this.countState.tick();
	this.e.tick();
	if (this.e.connectors['+1'].state.get()==1) {
		this.countState.set(1)
	}
	if (this.e.connectors['+1'].state.get()==0 && this.countState.get()==1) {
		this.countState.set(0);
		this.add(1);
	}
	
	
	if (this.e.connectors['time'].state.get()==1) {
		this.add(1);
	}
		
	if (this.e.connectors['reset'].state.get()==1) {
		this.goTo(0);
	}
	
	
	
        
    }
    	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	this.save = function(){
		var data = {};
		data.type = ['ScenarioObjects','Rotary counter'];
		data.position = this.position
		this.e.save(data);
		return(data);
	}
	this.load = function(data){
		
		if (data.position) {
			this.goTo(data.position);
		}
		
	}
	
}

Miscellaneous = {}
//To store the tape data in a string :).
function Uint8ToString(u8a){
  var CHUNK_SZ = 0x8000;
  var c = [];
  for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
    c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
  }
  return c.join("");
}

Miscellaneous['Tape drive'] = function(x,y,rotation, world){

	this.backplaneLoaded = false;
	this.backplane = new Image();
	this.backplane.src = "./images/tapedrive/backplane.png";
	var parent = this;
	this.backplane.onload = function(){
		parent.backplaneLoaded = true;
	}
	
	this.on = false;
	this.forward = true;
	this.backward = false;
	
	this.write = false; //If write is false, then read is true
	
	this.spindelImageLoaded = false;
	this.spindelImage = new Image();
	this.spindelImage.src = "./images/tapedrive/spindel.png";
	var parent = this;
	this.spindelImage.onload = function(){
		parent.spindelImageLoaded = true;
	}
	this.defaultSpeed = 0.01;
	this.maxReadSpeed = 0.05;
	this.speed = this.defaultSpeed;
	this.spindelA = {x:-61, y:-43};
	this.spindelB = {x:6, y:-43};
	this.innerSpindelWidth = 8;
	this.spindelHeading = 0;
	this.size = 1024; //Bits length
	
	
	this.sectorDistance = 0.3; //Distance between two bytes on the tape.

	
	this.position = 0; //Position of the reader
	this.physicalTapeSize = 38; //Space the tape takes on the spindel (Excluding inner spindel width, next line)
	this.physicalTapeSize = this.physicalTapeSize - this.innerSpindelWidth;
	
	this.endReached = false;
	this.targetPosition = 0;
	
	this.world = world;
	this.e = new electronicObject(x,y,rotation,{width:200, height:200, parent:this})
	this.e.connectors = {
		'Backward':new Connector(-33, -75, 0, this.e, {connectorType:1,label:'Backward'}),
		'Speed':new Connector(-53, -75, 0, this.e, {connectorType:1,label:'Speed (analog)'}),
		'Forward':new Connector(23, -75, 0, this.e, {connectorType:1,label:'Forward'}),
		'Write':new Connector(60, -75, 0, this.e, {connectorType:1,label:'Write(1)/Read(0)'}),
		'End':new Connector(-67, -56, 0, this.e, {connectorType:2,label:'End of tape reached'})
	};
	
	this.tapeBitWidth = 7; //7bits so it can fit ASCII
	
	this.ioWXstart = -80;
	this.ioRXstart = 10;
	this.ioY = 90; 
	for(var bit=0; bit<this.tapeBitWidth; bit++){
		
		this.e.connectors['W'+bit] = new Connector(this.ioWXstart+bit*12, this.ioY, 0, this.e, {connectorType:1,label:'W'+bit} )
		this.e.connectors['R'+bit] = new Connector(this.ioRXstart+bit*12, this.ioY, 0, this.e, {connectorType:2,label:'R'+bit} )
	}
	
	this.initialiseTapeData = function(){
		
		this.data = Uint8Array(this.size);
	}
	//Initialise the tape...
	this.initialiseTapeData();
	
	//this.e.connectors['Input'].state.set(-1);
	this.render = function(env){
		
		
		if (this.backplaneLoaded) {
			this.imageXoffset = -100;
			this.imageYoffset = -80;
			
			LoadImageToCanvas(env, this.backplane, this.e.xpos, this.e.ypos,  0, 200 + this.imageXoffset, 175 + this.imageYoffset)
		}
		
		var rollup = (this.position/this.size)*this.physicalTapeSize;
		env.beginPath();
		env.arc(this.e.xpos+this.spindelA.x+27.5, this.e.ypos-this.spindelA.y-27.5, this.innerSpindelWidth + this.physicalTapeSize - rollup , 0, 2 * Math.PI, false);
		env.fillStyle = '#332000';
		env.fill();
		env.lineWidth = 1;
		env.strokeStyle = '#003300';
		env.stroke();
		
		env.strokeStyle = '#332000';
		env.beginPath();
		env.moveTo(this.e.xpos+this.spindelA.x+27.5 - this.innerSpindelWidth - this.physicalTapeSize + rollup +1 , this.e.ypos-this.spindelA.y-27.5)
		env.lineTo(this.e.xpos+this.spindelA.x-10,  this.e.ypos-36)
		env.lineTo(this.e.xpos+this.spindelA.x-9,  this.e.ypos-40)
		env.lineTo(this.e.xpos+this.spindelB.x+62,  this.e.ypos-40)
		env.lineTo(this.e.xpos+this.spindelB.x+64,  this.e.ypos-36)
		env.lineTo(this.e.xpos+this.spindelB.x+64,  this.e.ypos-34)
		env.lineTo(this.e.xpos+this.spindelB.x+64,  this.e.ypos-34)
		
		env.lineTo(this.e.xpos+this.spindelB.x+27.5 + this.innerSpindelWidth  + rollup -1 , this.e.ypos-this.spindelB.y-27.5)
		env.stroke();
		
		env.beginPath();
		env.arc(this.e.xpos+this.spindelB.x+27.5, this.e.ypos-this.spindelB.y-27.5, this.innerSpindelWidth + rollup, 0, 2 * Math.PI, false);
		env.fillStyle = '#332000';
		env.fill();
		env.lineWidth = 1;
		env.strokeStyle = '#003300';
		env.stroke();
		
		if (this.spindelImageLoaded) {
					//+ this.spindelA.x this.spindelA.y
			LoadImageToCanvas(env, this.spindelImage, this.e.xpos+this.spindelA.x+27.5, this.e.ypos-this.spindelA.y-27.5,  this.spindelHeading, 27.8, 27.8)
			LoadImageToCanvas(env, this.spindelImage, this.e.xpos+this.spindelB.x+27.5, this.e.ypos-this.spindelB.y-27.5,  this.spindelHeading+0.3, 27.8, 27.8)
		}
		
		
		this.e.render(env, true);
		
		
		
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	
	
	this.getHeadBytePosition = function(){
		
		//Get the closest value:
		var closest = Math.round( this.position );
		var dist = this.position - closest;
		
		if (dist>this.sectorDistance || closest==this.size || closest==-1) {
			return(-1)
		}
		return(closest)
		
	}
	
	this.read = function(){
		
		//set bit n) y = x | (1<<n)
		//unset bit n)  y = x & ~(1<<n)
		//Read bit (n x & (1<<n)
		var pos = this.getHeadBytePosition();
		if (pos!=-1 && this.speed<=this.maxReadSpeed) { //

			for(var bit=0; bit<this.tapeBitWidth; bit++){
				
				this.e.connectors['R'+bit].state.set(this.data[pos] & (1<<bit));
				
			}
		} else {
			for(var bit=0; bit<this.tapeBitWidth; bit++){
				this.e.connectors['R'+bit].state.set(-1);
			}
		}
		
	}
	
	this.write = function(){
		var pos = this.getHeadBytePosition();
		if (pos!=-1) {
			for(var bit=0; bit<this.tapeBitWidth; bit++){
				var val = this.e.connectors['W'+bit].state.get();
				if (val>0) {
					this.data[pos] = this.data[pos] | (1<<bit);
				} else {
					this.data[pos] = this.data[pos] & ~(1<<bit);
				}
			}
		} 
		
	}
	

	this.tick = function(){
		this.e.tick();
		this.spindelHeading = 0.3*this.position;
		
		/*
		if (this.position!=this.targetPosition) {
			var diff = this.targetPosition - this.position;
			this.position += Math.min(this.speed, diff);
		}*/
		if (this.e.connectors['Speed'].state.getFloating()!=0) {
			
			this.speed = this.defaultSpeed + this.defaultSpeed*15*this.e.connectors['Speed'].state.getFloating();
		} else {
			this.speed = this.defaultSpeed;
		}
		
		if (this.e.connectors['Forward'].state.get()==1 && this.e.connectors['Backward'].state.get()!=1)  {
			this.position+=this.speed;
			this.position = Math.min(this.position, this.size);
		}

		if (this.e.connectors['Backward'].state.get()==1 && this.e.connectors['Forward'].state.get()!=1)  {
			this.position-=this.speed;
			this.position = Math.max(this.position, 0);
		}
		
		if (this.position==0 || this.position==this.size) {
			
			this.endReached = false;
			if (this.position==this.size && this.e.connectors['Forward'].state.get()==1) {
				this.endReached = true;
			}
			if (this.position<this.sectorDistance && this.e.connectors['Backward'].state.get()==1) {
				this.endReached = true;
			}
			
			if (this.endReached) {
				this.e.connectors['End'].state.set(1)
			} else {
				this.e.connectors['End'].state.set(0)
			}
			
		} else {
			this.endReached = false;
			this.e.connectors['End'].state.set(0)
		}
		if (this.e.connectors['Write'].state.get()==1) {
			this.write();
		} 
		//if(this.e.connectors['Write'].state.get()==0){
		this.read();
		
		//}
	}
	
	this.save = function(){
		var data = {};
		data.type = ['Miscellaneous','Tape drive'];
		data.size = this.size;
		data.tapeBitWidth = this.tapeBitWidth;
		data.position = this.position;
		data.sectorDistance = this.sectorDistance;
		data.defaultSpeed = this.defaultSpeed;
		this.e.save(data);
		//Store the tape data on disk;
		data.tapeData = btoa( Uint8ToString(this.data));
		return(data);
	}
	
	this.load = function(data){
		this.size = data.size;
		this.position = data.position;
		this.tapeBitWidth = data.tapeBitWidth;
		this.sectorDistance = data.sectorDistance;
		this.defaultSpeed = data.defaultSpeed;
		this.initialiseTapeData();
		console.log(data.tapeData)
		this.data = new Uint8Array(atob(data.tapeData).split("").map(function(c) {return c.charCodeAt(0); }));
		
	}
	
		
	this.e.configure = function(me){
		//Me is electronic object in this case :). (The base of the tape drive basically), me.parent is the tape drive itself
		var conf = {}
		
		conf.tapeLength = {value:me.parent.size, label:'Tape length', desciption:'Length of the tape in bytes', range:{start:8, end:10000, step:8},
				set:function(me, value){ me.parent.position = 0; me.parent.size=value; }
			};
		
		conf.defaultSpeed = {value:me.parent.defaultSpeed, label:'Default speed', desciption:'The tapedrive will run at this speed by default (lowest speed), the maximum speed will be 16 times higher', range:{start:0.001, end:0.02, step:0.001},
				set:function(me, value){ console.log('AAAP'), console.log(me.parent); me.parent.speed = 0; me.parent.defaultSpeed = value; }
			};
			
		
		conf.sectorDistance = {value:me.parent.sectorDistance, label:'Sector size', desciption:'How big a sector/bit is alters the distance between two bytes; this defines the duration of the floating signal between bytes', range:{start:0, end:0.9, step:0.1},
				set:function(me, value){ me.parent.sectorDistance = value; }
			};
		
		return(conf);
	}
	
}


MeasurementObjects={};

MeasurementObjects['Analog meter'] = function(x,y,rotation, world){

	this.meterBackLoaded = false;
	this.meterBack = new Image();
	this.meterBack.src = "./images/gauges/vintage_black_backplate.png";
	var parent = this;
	this.meterBack.onload = function(){
		parent.meterBackLoaded = true;
	}
	
	this.meterFrontLoaded = false;
	this.meterFront = new Image();
	this.meterFront.src = "./images/gauges/vintage_black_front.png";
	var parent = this;
	this.meterFront.onload = function(){
		parent.meterFrontLoaded = true;
	}
	
	this.value = 1;

	
	this.world = world;
	this.e = new electronicObject(x,y,rotation,{width:150, height:150})
	this.e.connectors = {
		'Input':new Connector(0, 70, 0, this.e, {connectorType:1,label:'Input'}),
		
		};
	this.e.connectors['Input'].state.set(-1);
	this.render = function(env){
		
		this.e.render(env);
		if (this.meterBackLoaded) {
			this.imageXoffset = -70;
			this.imageYoffset = -65;
			
			LoadImageToCanvas(env, this.meterBack, this.e.xpos, this.e.ypos,  0, 140 + this.imageXoffset, 141 + this.imageYoffset)
		}
		
		env.lineWidth=2;
		
		env.strokeStyle="#666";
		env.beginPath();

		env.moveTo(this.e.xpos,this.e.ypos);
		var r = 50;
		var a = -(this.value/1 * Math.PI)-0.5*Math.PI; 
		env.lineTo(this.e.xpos+Math.sin(a)*r,this.e.ypos+Math.cos(a)*r);
		env.stroke();
		

		
		
		if (this.meterFrontLoaded) {
			this.imageXoffset = -70;
			this.imageYoffset = -65;
			
			LoadImageToCanvas(env, this.meterFront, this.e.xpos, this.e.ypos,  0, 140 + this.imageXoffset, 141 + this.imageYoffset)
		}
		
		

		
		
		
	}
	
	this.hover = function(x,y){
		this.e.hover(x,y)
	}
	
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	

	this.tick = function(){
		this.e.tick();
		var diff = this.value - Math.min(1.1, Math.max(0.0,this.e.connectors['Input'].state.getFloating()));
		//console.log(this.e.connectors['Input'].state.getFloating())
		this.value -= 0.05*diff; 
		
		
	}
	
	this.save = function(){
		var data = {};
		data.type = ['MeasurementObjects','Analog meter'];
		this.e.save(data);
		return(data);
	}

}



AvailableObjects = {
	
	'Wiring':
	{
		'name':'Wiring',
		'contents':Wiring
	
	},
	
	'BasicGates':
	{
		'name':'Basic Gates',
		'contents':BasicGates
	
	},
	'Inputs':
	{
		'name':'Input',
		'contents':Inputs
		
	},
	'Output':
	{
		'name':'Output',
		'contents':Output
		
	},
	'SimpleIcs':
	{
		'name':'Simple ics',
		'contents':SimpleIcs
		
	},
	'Miscellaneous':
	{
		'name':'Miscellaneous',
		'contents':Miscellaneous
		
	},
	'ScenarioObjects':
	{
		'name':'Scenario objects',
		'contents':ScenarioObjects
		
	},
	'MeasurementObjects':
	{
		'name':'Measurement',
		'contents':MeasurementObjects
		
	}
	
	
	
}



function Level(){
	/*
	//w = new Wegmeubulair();
	this.objects = []
	
	//Vak:
	this.objects.push(new Wegmeubulair_pylonnen(200,200,250,200, 20))
	this.objects.push(new Wegmeubulair_pylonnen(250,220,250,400, 20))
	*/
	
	
	
	
	this.render = function(env){

		for(var index in this.objects){
						
			this.objects[index].render(env);
		}

	}

}

EditorModi = {}
EditorModi.array = function(){
		
		this.pointA = Coord();
		this.pointB = Coord();
		
		
		this.render = function(){
			
			
			
		}
		
		
		
		this.leftClick = function( position, n ){
			
			if (n==0) {
				this.pointA.x = position.x
				this.pointA.y = position.y
			}
			if (n==1) {
				this.pointB.x = position.x
				this.pointB.y = position.y
			}
			
	
		}
		
		
		
		
		
	}
	




function Editor(appendTo, canvii){
	
	$(appendTo).append('<div id="editor"></div>');
	
	
	this.modi = ['place', 'place_array']
	this.modus = 'place'
	
	//Array tool:
	this.pointA = new Coord();
	this.pointB = new Coord();
	this.timesClicked = 0;
	
	//Multi click tool:
	this.clicks = [];
	this.selectedCatalogObject
	
	this.processArrayToolClick = function(x,y){
		
		if (this.selectedCatalogObject==undefined) {
			this.timesClicked = 0;
			return(0)
		}
		
			this.timesClicked++;
			if (this.timesClicked==1) {
				console.log(this)
				this.pointA.x = x
				this.pointA.y = y
			}
			if (this.timesClicked==2) {
				this.pointB.x = x
				this.pointB.y = y
				
				var points = subdivideOver(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y, 25)
				for(var index in points){
					
					world.addObject(new this.selectedCatalogObject(points[index].x, points[index].y, 0, world))
				}
				this.timesClicked = 0;
				
			}
			
	}
	
	
	this.mouseDown = function(x,y){
		
		
		//IF the object we clicked on has an own handler we are going to fire it, else we are placing stuff.
		var o = world.objectAt(x,y);
		if (o==undefined) {
			world.selected = [];
		}
		if (o && !((o instanceof Connector && this.selectedCatalogObjectId=="Wiring_Wire" ) || (o instanceof RotationHandle))) {
			world.click(x,y);
			
			
		} else {
			if ( this.modus == 'place' ) {
				
				
				
				if (this.targetClicks>1) {
					if (this.timesClicked == 0) {
						this.clicks = []	
					}
					
					this.clicks.push({x:x, y:y})
					this.timesClicked++;
					
					if (this.timesClicked==this.targetClicks) {
						world.addObject(new this.selectedCatalogObject(x, y, 0, world, this.clicks))
						this.timesClicked  = 0;
					} 
					
					
				} else {
					world.addObject(new this.selectedCatalogObject(x, y, 0, world))
				}
			}
		
			
			if ( this.modus == 'place_array' ) {
				this.processArrayToolClick(x,y)
			}
		}
	}
	
	
	this.drawCatalog = function(){
		
		this.html = "";
		var index = 0;
		for( var groupId in AvailableObjects ){
			
			this.html += '<div class="editorCatalogGroup"><h3>'+AvailableObjects[groupId].name+'</h3>'
			
			for(var objectId in AvailableObjects[groupId].contents){
				
				this.html += '<div class="editorCatalogObject" id="'+groupId+'_'+objectId+'"><div class="titleBox" style="background-color:'+getColourFromGroup('5_norm',index)+';">' + objectId + '</div><canvas id="canvas_'+groupId+'_'+objectId+'" width="100px" height="100px"></canvas></div>';
				
			}
			this.html += "</div>"
			index += 1;
			
		}
		$('#editor').html(this.html);
		
	
		//Draw a preview of all elements:
		for( var groupId in AvailableObjects ){
			for(var objectId in AvailableObjects[groupId].contents){
				var canvasContext = document.getElementById('canvas_'+groupId+'_'+objectId).getContext("2d");
				var o = new AvailableObjects[groupId].contents[objectId]
				o.render(canvasContext);
	
			}
			
		}
		
		$('.editorCatalogObject').on('click', function(e, i){
			document.editor.setSelectedCatalogObject(e.currentTarget.id)
			
		})
		
		this.selectedCatalogObject = false
		this.selectedCatalogObjectId = "";
		this.setSelectedCatalogObject = function( id ){
			
			var parts = id.split("_")
			this.selectedCatalogObject = AvailableObjects[parts[0]].contents[parts[1]]
			this.selectedCatalogObjectId  = id;
			console.log("Selected " + id + " from the catalog");
			this.timesClicked = 0;
			this.targetClicks = 1;
			//Check if the object wants/requires multiple clicks;
			var mclick = new this.selectedCatalogObject().multiclick
			if(  mclick  ){
				console.log("accepting "+ mclick +" clicks for this object");
				this.targetClicks = mclick;
			}
		}
	}
	
	this.configure = function(obj){
		
		console.log(obj)
		var conf = obj.configure(obj);
		console.log(conf)
		$('#config').html('');
		
		for(var index in conf){
			var c = conf[index];
			var id = 'slider_' + index;
			$('#config').append('<div class="configSliderWrapper"><div class="slider" id="'+id+'"></div></div>');
			$('#'+id).prepend('<p><label for="'+id+'_amount">'+c.label+'</label>'+'<input type="text" id="'+id+'_amount" readonly style="border:0; color:#f6931f; font-weight:bold;"></p>')
			.slider({
				value:c.value,
				min:c.range.start,
				max:c.range.end,
				step:c.range.step,
				slide: function( event, ui ) {
					$( "#"+ $(this).attr('id') +'_amount' ).val(  ui.value );
					$(this).data('configObj').set(obj,ui.value)	
			         }
			}).data('configObj',c);
			
			$( '#'+id+'_amount' ).val( $( "#"+id ).slider( "value" ) );
		}
		
		
	}
	
	this.drawCatalog()
	$('#editor').prepend('<button id="save">Save</button>');
	$('#editor').append('<div id="saveList"></div>');
	$('#editor').append('<div id="config"></div>');
	$('#save').on('click', function(){world.save();})
	
	$.post('./save.php', {author:'anon',mode:'list'}, function(saveList){
	
		for(var saveIndex in saveList){
			$('#saveList').append('<button class="loadSave" saveId="'+saveList[saveIndex]+'">' +  saveList[saveIndex] + '</button>' );
		}
		$('.loadSave').on('click', function(){
			
			$.post('./save.php', {mode:'view', id:$(this).attr('saveId')}, function(file){
				world.load(file);
			
			}, "json");
		});
	}, "json");
	
	
	
	
	
}

function Wind(){
	
	this.direction = 0; //Math.random() * Math.PI*2;
	this.speed = 4; //Beaufort based wind speed (12 = max)
	this.target = this.direction;
	
	this.tick = function(){
		
		this.direction = this.direction%(Math.PI*2)
		
		
		if (Math.random()>0.90) {
			
			if (Math.random()>0.98) {
				this.target = Math.random() * Math.PI*2;
			} else {
				this.target += 0.4 * Math.random() - 0.2;
			}
			
		}
		
		
		
		var diff = getShortAngle( this.direction, this.target);
		this.direction += 0.1*diff;
	}
	
}

function World() {

	this.translateX = 0;
	this.translateY = 0;
	this.viewCenterX = canvas.width/2;
	this.viewCenterY = canvas.height/2;
	this.targetFrameTime = 40; //Time in milisec per frame, to set FPS to 60 = 1000/60 => 16.6, 24 fps => 41
	
	this.maxParticles = 10000;
	this.objects = [];
	this.particles = [];
	this.recalculateWorld = false;
	this.wind = new Wind();
	
	this.pause = false;
	this.paused = false;
	this.pauseActions = [];
	
	this.save = function(){
		//Pause the simulation..
		this.pause = true;
		//Wait on the frame to finish
		this.pauseActions.push('save');
		this.pauseActions.push('continue');
	}
	
	this.saveFunction = function(){
		console.log(this)
		//Store all information of the objects in the world;
		
		this.saveData = [];
		for (var objectIndex in this.objects) {
			if (this.objects[objectIndex]!=null) {
				console.log(this.objects[objectIndex])
				this.saveData.push( this.objects[objectIndex].save() )
				
				//console.log( serialize( this.objects[objectIndex] ))
			}
		}
		//console.log( JSON.stringify( {'dataFormatVersion':0, 'data':this.saveData} ));
		
		$.post('./save.php', {mode:'post','data':JSON.stringify( {'dataFormatVersion':0, 'data':this.saveData} ), author:'anon'},
		       function(response){
			console.log(response)
		       }
		       
		       );
		
	}
	
	this.load = function(saveStructure){
		console.log('Will load a save..')
		
		this.loadSaveData =  JSON.parse(saveStructure);
		this.pauseActions.push('load');
		this.pauseActions.push('continue');
		this.pause=true;

	}
	
	this.clear = function(){
		this.objects = [];
	}
	
	this.loadFunction = function(){
		this.clear();
		saveStructure = this.loadSaveData
		console.log(AvailableObjects)
		var version = saveStructure.dataFormatVersion;
		for (var objectIndex in saveStructure.data) {
			
			var type = saveStructure.data[objectIndex].type;
			console.log('Adding object with type ' + type );
			var x = saveStructure.data[objectIndex]['xpos'];
			var y = saveStructure.data[objectIndex]['ypos']
			var rotation = saveStructure.data[objectIndex]['rotation']
			
			
			
			if( AvailableObjects[type[0]]['contents'][type[1]] ){
				
				var o = new AvailableObjects[type[0]]['contents'][type[1]](x,y,rotation,this);
				console.log(o)
				this.addObject( o );
				if (o.load) {
					console.log(saveStructure.data[objectIndex])
					o.load(saveStructure.data[objectIndex]);
				}
				
				
			}
			
		}
	}
	
	this.tick  = function(){

		this.wind.tick();
		var date = new Date();
		var tickStart = date.getMilliseconds();
		
		if (this.pause) {
			console.log('Pausing world state')
			this.paused = true;
			for(var i in this.pauseActions){
				
				if (this.pauseActions[i]  == 'save') {
					this.saveFunction();
				}
				
				if (this.pauseActions[i]  == 'load') {
					console.log('Loading save now...')
					this.loadFunction();
				}
				
				
				
				if (this.pauseActions[i]  == 'continue') {
					this.paused = false;
					this.pause = false
				}
				
				
				
			}
			this.pauseActions = [];
			if (this.pause == false) {
				console.log('Resuming world state')
				this.paused = false;
			} else {
				return(false);
			}
		}
		
		//We run multiple ticks per render frame
		for (var tickId=0; tickId<5; tickId++) {
			//Recalculate all object id's
			if( this.recalculateWorld ){
				
				var newObjects = [];
				var pointer = 0;
				for (var objectIndex in this.objects) {
				
					if (this.objects[objectIndex]!=null) {
						
						newObjects.push(this.objects[objectIndex]);
						this.objects[objectIndex].worldId = pointer;
						pointer++;
					}
					
				}
				this.objects = newObjects;
				
			}
			
			
			for (var objectIndex in this.objects) {
				if (this.objects[objectIndex]!=null) {
					
					if (this.objects[objectIndex].killMe) {
						console.log('Removing object from world')
						this.removeObject(objectIndex);
					} else {
						this.objects[objectIndex].tick();
					}
				}
			}
		
		}
		for (var particleIndex in this.particles) {
			if (this.objects[objectIndex]!=null) {
				this.particles[particleIndex].tick();
			}
		}
		
		var date = new Date();
		var tickEnd = date.getMilliseconds(); 

		
		this.render( tickEnd - tickStart );
	
	}
	
	this.hover = function(x,y){
		
		for (var objectIndex in this.objects) {
			if (this.objects[objectIndex]!=null && this.objects[objectIndex].hover) {
				this.objects[objectIndex].hover(x,y);
			}
		}
		
	}
	
	this.click = function(x,y){
		var io = this.indexObjectAt(x,y);
		if (io){
			if(io.object && io.object.click!=undefined) {
			    console.log('Clicking at '+io);
			    io.object.click(x,y);
				
			}
			this.selected = [io.index];
			console.log('Selected ' + io.index)
			if (io.object) {
				if (io.object.configure) {
					console.log('Configuring...')
					console.log(document.editor)
					document.editor.configure(io.object);	
				}
			}
			
		}
		
	}
	
	this.dragStart = function(startX,startY, endX, endY){
		this.dragFromTo(startX, startY,endX,endY);
	}
	
	this.drag = function(startX, startY, prevX, prevY, endX, endY){
		this.dragFromTo(prevX, prevY,endX,endY);
	}
	
	this.dragFromTo = function(startX,startY,endX,endY){
		var o = this.objectAt(startX,startY);
		if (o && o.drag) {
			o.drag(startX,startY,endX,endY);
		}
	}
	
	this.objectAt = function(x,y){
		for (var objectIndex in this.objects) {
			if (this.objects[objectIndex]!=null && this.objects[objectIndex].hit) {
				var h = this.objects[objectIndex].hit(x,y);
				if (h) {
					return(h)
				}
				
			}
		}
	}
	this.indexObjectAt = function(x,y){
		for (var objectIndex in this.objects) {
			if (this.objects[objectIndex]!=null && this.objects[objectIndex].hit) {
				var h = this.objects[objectIndex].hit(x,y);
				if (h) {
					return({index:objectIndex, object:h});
				}
				
			}
		}
	}
	
	this.render=function( tickTime ) {
		
		
		var date = new Date();
		var frameStart = date.getMilliseconds(); 
		//Empty the canvas
		context.clearRect(-10000, -10000, 10000*canvas.width, 10000*canvas.height);
		context.translate (this.translateX, this.translateY);
		
		this.viewCenterX = this.viewCenterX - this.translateX;
		this.viewCenterY = this.viewCenterY - this.translateY;
		
		this.minX = this.viewCenterX  - 0.5*canvas.width;
		this.maxX = this.viewCenterX  + 0.5*canvas.width;
		this.minY = this.viewCenterY  - 0.5*canvas.height;
		this.maxY = this.viewCenterY  + 0.5*canvas.height;
		
		//Draw background (Grid)
		context.fillStyle= '#053066'
		context.fillRect(-10000, -10000, 10000*canvas.width, 10000*canvas.height);
		context.lineWidth = 1;
		context.strokeStyle = "#DDDDDD";
		
		var cellSize = 50;
		
		for(var y=this.minY - this.viewCenterY%cellSize; y<this.maxY; y+=cellSize){

			context.beginPath();
			context.moveTo(this.minX, y);
			context.lineTo(this.maxX, y);
			context.stroke();
			
		}
		
		for(var x=this.minX - this.viewCenterX%cellSize; x<this.maxX; x+=cellSize){

			
			context.beginPath();
			context.moveTo(x, this.minY);
			context.lineTo(x, this.maxY);
			context.stroke();
			
		}
		
		
		
		
		for (var particleIndex in this.particles) {
			
			if (this.particles[particleIndex]!=null) {

				this.particles[particleIndex].render();
			}
			
		}
		
		
		for (var objectIndex in this.objects) {
			
			if (this.objects[objectIndex]!=null) {

				this.objects[objectIndex].render(context);
			}
			
		}
		
		
		var endDate = new Date();
		var frameStop = endDate.getMilliseconds(); 
		var frameTime = frameStop-frameStart;
		//context.font="30px Arial";
		//context.fillText(frameTime + " / " + tickTime,playerOrganism.physics.xpos, playerOrganism.physics.ypos);
		
		
		self = this;
		var timeout = this.targetFrameTime - frameTime - tickTime;
		if (timeout<=0 || timeout>this.targetFrameTime) {
			
			
			setTimeout(function(){self.tick();}, 1);
		} else {
			
			
			
			setTimeout(function(){self.tick();}, timeout);
		}
	}
	
	this.addParticle = function( particle ){
		
		this.particles.push(particle);
		if ((this.particles.length - 1 )>=this.maxParticles ) {
			
			this.particles.shift();
		}
		
	}
	
	this.addObject = function( objectToAdd ){
		
		this.objects.push(objectToAdd);
		objectToAdd.worldId = this.objects.length-1;
		
	}
	
	this.selected = [];
	//This is fired when delete is pressed;
	this.key_delete = function(){
		for(var i in this.selected){
			this.removeObject(this.selected[i])
		}
		this.selected = [];
	}
	
	this.removeObject = function(id){
		console.log(this.objects[id])
		
		if (this.objects[id].e) {
			if (this.objects[id].e.delete) {
				this.objects[id].e.delete()
			}
		}
		
		if( this.objects[id].delete ){
			this.objects[id].delete()
		}
			
		this.objects[id].dead = true;
		this.recalculateWorld = true;
		this.objects[id] = null;
		
	}
	

}





$(document).ready( function(){
	
	
	canvas = document.getElementById("sim");
	var ctx = canvas.getContext("2d");
	context = ctx
	document.editor = new Editor('.simWrapper')
	level = new Level();
	world = new World();
	
	
	mousePrevPos =  CanvasFunctions.getRelativeMousePosition(canvas, ctx, world);
	canvas.addEventListener('mousemove', function(evt) {
		var mousePos = CanvasFunctions.getMousePos(canvas, evt);
		
		var mouseX = world.viewCenterX-canvas.width*0.5 + mousePos.x
		var mouseY = world.viewCenterY-canvas.height*0.5 + mousePos.y
		if (mouseIsDown) {
			
			if (dragStarted) {
				world.dragStart(mouseStart.x, mouseStart.y, mouseX, mouseY);
				dragStarted = false;
			} else {
				world.drag(mouseStart.x, mouseStart.y, mousePrevPos.x, mousePrevPos.y, mouseX, mouseY);
			}
			mousePrevPos =  CanvasFunctions.getRelativeMousePosition(canvas, evt, world);
		} else {
			world.hover(mouseX, mouseY)
		}
	});
	
	mouseIsDown = false;
	dragStarted = false;
	mouseStart = CanvasFunctions.getRelativeMousePosition(canvas, ctx, world);
	canvas.addEventListener('mousedown', function(evt) {
		mouseIsDown = true;
		dragStarted = true;
		var mousePos = CanvasFunctions.getMousePos(canvas, evt);
		
		mouseX = mousePos.x + world.viewCenterX-canvas.width*0.5
		mouseY = mousePos.y+world.viewCenterY-canvas.height*0.5
		mouseStart = {x:mouseX, y:mouseY};
		
		console.log(world.viewCenterX + ", "+ canvas.width*0.5)
		var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y + ":"+mouseX + ", "+mouseY;
		//document.editor.mouseDown(mouseX,mouseY)

		console.log(message)
	
	}, false);
	
	canvas.addEventListener('mouseup', function(evt) {
		mouseIsDown = false;
		var newPos = CanvasFunctions.getRelativeMousePosition(canvas, evt, world);
		//Check if there was no drag, then it is a click!		
		if( newPos.x - mouseStart.x < 2 &&newPos.y - mouseStart.y < 2 ){
			document.editor.mouseDown(newPos.x, newPos.y)
			//world.click(newPos.x, newPos.y)
		}
	}, false);
		

		


var pressedKeys = {};


$(document).keydown(function (e) {
    pressedKeys[e.keyCode] = true;
});

$(document).keyup(function (e) {
    delete pressedKeys[e.keyCode];
});




iterations = 0
testAngle =0

window.viewportX = world.viewCenterX;
window.viewportY = world.viewCenterY;

setTarget = false
setInterval( function(){
	//ctx.clearRect(0,0,1000,1000);
	
	
	//Camera movement:
	var viewportX = window.viewportX;
	var viewportY = window.viewportY;
	
	var distanceX = Math.abs(viewportX-world.viewCenterX);
	if (distanceX>4) {
		
		var xspeed = 0.0004*Math.pow( distanceX, 2 );
		if (viewportX>world.viewCenterX) {
			world.translateX = -xspeed;
		}
		if (viewportX<world.viewCenterX) {
			world.translateX = xspeed;
		}	
	} else {
		world.translateX = 0;
		
	}
	
	
	var distanceY = Math.abs(viewportY-world.viewCenterY);
	if (distanceY>4) {
		
		var yspeed = 0.0003*Math.pow( distanceY, 2 );
		if (viewportY>world.viewCenterY) {
			world.translateY = -yspeed;
		}
		if (viewportY<world.viewCenterY) {
			world.translateY = yspeed;
		}	
	} else {
		world.translateY = 0;
		
	}	


	//world.render();
	//level.render(ctx)

		
	iterations++
	//car.heading+=0.01;
	
	if (pressedKeys[39] || pressedKeys[38] || pressedKeys[37] || pressedKeys[40]) {
		console.log(window.viewportX)
	}
	
	if(pressedKeys[39]){
		window.viewportX+=10;
	}
	if(pressedKeys[37]){
		window.viewportX-=10;
	}

	if(pressedKeys[38]){
		window.viewportY-=10;
	}

	if(pressedKeys[40]){
		window.viewportY+=10;
	}
	
	if(pressedKeys[46]){
		world.key_delete();
	}
	
	
	
	
}, 50 );
world.tick();
})



