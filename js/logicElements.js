BuysDB_ColorScheme = {

    groups:{
	'5_heat':['#66a43e','#8fa33d','#d1ac17','#f6853a','#aa0000'],
	'5_norm':['#3770c4','#66a43e','#8fa33d','#d1ac17','#f6853a','#aa0000','#999999'],
	'8_norm':['#aaaaaa','#3770c4','#66a43e','#8fa33d','#d1ac17','#f6853a','#aa0000','#9E8F74','#808080'],
    }

}

window.Settings = {

    'drawShadows':true,
    'tickRatio':21

}
var pressedKeys = {};
$(document).keydown(function (e) {

    pressedKeys[e.keyCode] = true;
    if (e.keyCode==27) {
	world.selectNone();
    }
    if (e.keyCode!=116) {
	e.preventDefault();
    }

});

$(document).keyup(function (e) {
    delete pressedKeys[e.keyCode];
});

Output = {}
Fonts = {

    'ixi':{
	'x':[
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ]
	],
	A: [
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ]

	],

	B: [
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ]

	],

	C: [
	    [ 0, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 1, 0 ]

	],

	D: [
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ]

	],
	E: [
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	F: [
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ]

	],
	G: [
	    [ 0, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ]

	],
	H: [
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ]

	],
	I: [
	    [ 1, 1, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	J: [
	    [ 1, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ]

	],
	K: [
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ]

	],
	L: [
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	M: [
	    [ 1, 0, 0, 1 ],
	    [ 1, 1, 1, 1 ],
	    [ 1, 0, 1, 1 ],
	    [ 1, 0, 1, 1 ],
	    [ 1, 0, 1, 1 ]

	],
	N: [
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ]

	],
	O: [
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	P: [
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ]

	],
	Q: [
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 1, 1 ]

	],
	R: [
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ]

	],
	S: [
	    [ 0, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	T: [
	    [ 1, 1, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	U: [
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	V: [
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	W: [
	    [ 1, 0, 0, 1 ],
	    [ 1, 0, 0, 1 ],
	    [ 1, 0, 1, 1 ],
	    [ 1, 1, 0, 1 ],
	    [ 0, 1, 1, 0 ]

	],
	X: [
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ]

	],
	Y: [
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	Z: [
	    [ 1, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	'0': [
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	'1': [
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ]

	],
	'2': [
	    [ 1, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	'3': [
	    [ 1, 1, 0, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ]

	],
	'4': [
	    [ 1, 0, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ]

	],
	'5': [
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 0, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	'6': [
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	'7': [
	    [ 1, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ]

	],
	'8': [
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ]

	],
	'9': [
	    [ 1, 1, 1, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 1, 1, 0, 0 ]

	],
	',': [
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	'.': [
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	' ': [
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ]

	],
	'!': [
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	'@': [
	    [ 0, 1, 1, 0 ],
	    [ 1, 0, 1, 1 ],
	    [ 1, 1, 0, 1 ],
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 1, 1 ]

	],
	'#': [
	    [ 0, 1, 1, 0 ],
	    [ 1, 1, 1, 1 ],
	    [ 0, 1, 1, 0 ],
	    [ 1, 1, 1, 1 ],
	    [ 0, 1, 1, 0 ]

	],
	'$': [
	    [ 0, 1, 1, 1 ],
	    [ 1, 0, 1, 0 ],
	    [ 1, 1, 1, 1 ],
	    [ 0, 1, 0, 1 ],
	    [ 1, 1, 1, 0 ]

	],
	'^': [
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ]

	],

	'-': [
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ]

	],
	'+': [
	    [ 0, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 0, 0, 0 ]

	],
	'*': [
	    [ 1, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 1, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ]

	],

	'\'': [
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ]

	],

	'?': [
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 1, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ]

	],
	'CURSOR': [
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 1, 1, 1, 0 ]]
	,
	':': [
	    [ 0, 1, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ]],
	';': [
	    [ 0, 1, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ]],
	 '>': [
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ]],
	 '<': [
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 0, 1, 0 ]],
	 '|': [
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ]],
	 '[': [
	    [ 1, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 1, 0, 0 ]],
	  ']': [
	    [ 1, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 1, 0, 0 ]],
	'(': [
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ]],
	  ')': [
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ]],
	'\\': [
	    [ 1, 0, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 0, 1, 0 ]],
	'/': [
	    [ 0, 0, 1, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 0, 1, 0, 0 ],
	    [ 1, 0, 0, 0 ]]
    }

}

ASCII = ['NUL','SOH','STX','ETX','EOT','ENQ','ACK','BEL','BS','HT','LF','VT','FF','\n','SO','SI','DLE','DC1','DC2','DC3','DC4',
'NAK','SYN','ETB','CAN','EM','SUB','ESC','FS','GS','RS','US',' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
'0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'[','\\',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL']

KEY_TO_ASCII = {

    190:'.',
    173:'-',
    188:',',
    191:'/',
    220:'\\',
    59:';',
    222:"'",
    61:'+'
}

SHIFT_KEY_TO_ASCII = {
    188:'<',
    190:'>',
    221:'[',
    219:']',
    49:'!',
    50:'@',
    51:'#',
    52:'$',
    53:'^',
    54:'&',
    55:'*'

}

function randInt(min, max) {
    return( Math.floor((Math.random()*max)+1)+min );
}
function electronicObject(x,y,rotation,settings){
    this.xpos = x || 50;
    this.ypos = y || 50;
    this.rotation = rotation || 0;
    this.settings = settings;
    this.selected = false;
    this.colors = BuysDB_ColorScheme.groups['8_norm'];
    this.colorId = randInt(0,this.colors .length-1);
    this.getColor = function(){
	return(this.colors[this.colorId]);
    }
    this.setColor = function(val){
	if (this.colors[val]!=undefined) {
	    this.colorId = val;
	    //this.colors[this.colorId] = val;
	} else {

	}
    }

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

		    this.connectors[connectorIndex].tick();

	    }

    }

    this.setHeight = function(h){
	    this.height = h;
	    this.recalcBoundingCoordinates();
    }

    this.setWidth = function(w){
	    this.width = w;
	    this.recalcBoundingCoordinates();
    }

    /*
     * The following canvii layers are used:
     * element-bg (For the element base)
     * effects (For the hovering effect)
     */
    this.render = function(canvii, noDrawPlane){

	    noDrawPlane = noDrawPlane || false;

	    //Draw the base plane if required:
	    if( canvii.updateRequired('element-bg') ){
		if (!noDrawPlane) {
		    /** Boundary creation code: **/
		    /*
		    canvii['element-bg'].context.beginPath();
		    for (var i in this.boundingCoordinates) {
			    if (i==0) {
				    canvii['element-bg'].context.moveTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y);
			    } else {
				    canvii['element-bg'].context.lineTo(this.boundingCoordinates[i].x, this.boundingCoordinates[i].y);
			    }
		    }
		    canvii['element-bg'].context.lineTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y)
		    //End
		    */
		    CanvasFunctions.drawRoundedRectangle(canvii['element-bg'].context, this.xpos-0.5*this.width, this.ypos-0.5*this.height, this.width, this.height, 4);
		    canvii['element-bg'].context.fillStyle=this.getColor();
		    canvii['element-bg'].context.strokeStyle = "#CCC";
		    canvii['element-bg'].context.lineWidth=1;
		    if(window.Settings.drawShadows){
			canvii['element-bg'].context.shadowColor = '#222';
			canvii['element-bg'].context.shadowBlur = 5;
			canvii['element-bg'].context.shadowOffsetX = 2;
			canvii['element-bg'].context.shadowOffsetY = 2;
		    }
		    canvii['element-bg'].context.fill();
		    canvii['element-bg'].context.shadowColor = "transparent";
		    canvii['element-bg'].context.stroke();

		}
	    }
	    //Effects:
	    if( canvii.updateRequired('effects') ){
		if (this.hovering || this.selected) {
		    /** Boundary creation code: **/
		    canvii['effects'].context.beginPath();
		    for (var i in this.boundingCoordinates) {
			    if (i==0) {
				    canvii['effects'].context.moveTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y);
			    } else {
				    canvii['effects'].context.lineTo(this.boundingCoordinates[i].x, this.boundingCoordinates[i].y);
			    }
		    }
		    canvii['effects'].context.lineTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y)
		    //End
		    canvii['effects'].context.strokeStyle = this.hoverColor;
		    canvii['effects'].context.stroke();
		}
	    }

	    for(var connectorIndex in this.connectors){
		this.connectors[connectorIndex].render(canvii);
	    }

    }

    this.delete = function(){

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
		    return(true)
		    //this.rotationHandle.show();
	    } else {
		    this.hovering = false;
	    }
	    return(false);

    }

    //This is a placeholder for objects which do not configure anything, preventing the configure object not to exist.
    this.configure = function(me){
	var conf = {};
	return(conf)
    }

    this.drag = function(prevX,prevY,newX,newY){
	    this.xpos = newX;
	    this.ypos = newY;
	    this.recalcBoundingCoordinates();
	    /*
	    var d = (25+this.xpos)%50;

	    if (d<5) {
		    this.xpos = Math.round(this.xpos/100)*100 +25 ;
		    this.recalcBoundingCoordinates();
	    }*/
	    if(this.parent){
		    if(this.parent.drag){
			    this.parent.drag();
		    }

	    }

    }

    this.click = function(x,y){

	if (this.settings.click==true) {
	    if (this.parent) {
		this.parent.click(x,y);
	    }
	}

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
		    obj.colorId = this.colorId;

	    }
    }

    this.load = function(data){

	if (data!==undefined) {
		/*
		this.xpos = this.xpos;
		this.ypos = this.ypos;
		this.rotation = this.rotation;
		*/
		if (data.colorId) {
		    this.setColor(data.colorId);
		}

	}

    }

    //This function is called when the user wants to place the element somewhere
    this.renderOutline = function(env, x,y, opacity){

	    env.strokeStyle="rgba(200,200,200,"+ (0.8*opacity) +")";

	    env.lineWidth = 2;
	    env.beginPath()
	    env.rect(x-0.5*this.width,y-0.5*this.height,this.width, this.height);
	    env.stroke()
	    env.lineWidth = 1;
	     env.strokeStyle="rgba(200,200,200,"+ (0.3*opacity) +")";
	    env.beginPath()
	    env.moveTo(x-0.5*this.width,y-0.5*this.height)
	    env.lineTo(x+0.5*this.width,y+0.5*this.height)
	    env.moveTo(x-0.5*this.width,y+0.5*this.height)
	    env.lineTo(x+0.5*this.width,y-0.5*this.height)
	    env.stroke();
	     env.strokeStyle="rgba(200,200,200,"+ (0.8*opacity) +")";
	    //Now render the outline of the connectors!
	    for(var connectorIndex in this.connectors){

		    this.connectors[connectorIndex].renderOutline(env,x,y);
	    }

    }

}

getColourFromGroup = function(scheme, n){

    var len = BuysDB_ColorScheme.groups[scheme].length;

    var col = BuysDB_ColorScheme.groups[scheme][ ((n) % (len))];
    return( col );

}

function Canvii(parentId,baseId){

    this.parentId = parentId;
    this.width = 1280;
    this.height = 800;
    this.baseId = baseId;
    this.canvii = []
    this.shortCuts = {}
    //The z-index decides the order of the canvas, the alias allows fast access to the canvas
    this.initCanvas = function(zIndex,alias){
	var id = this.baseId+'_'+zIndex;
	$('#'+this.parentId).prepend('<canvas id="'+id+'" width="'+this.width +'px" height="'+this.height +'px" style="position:absolute; left:210px; z-index:'+zIndex+'"></canvas>');
	this.canvii[zIndex] = {canvas:document.getElementById(id), id:id, doTranslate:true, context:document.getElementById(id).getContext("2d"), requiresUpdate:true};
	if (alias!=undefined) {
	    this[alias] = this.canvii[zIndex];
	}
    }

    this.registerUpdate = function(alias){
	this[alias].requiresUpdate = false;
    }

    this.updateRequired = function(alias){

	if (this[alias]==undefined) {
	    console.warn('Canvii.updateRequired '+alias+' was not registered, forcing FALSE.')
	    return(false);
	}

	return(this[alias].requiresUpdate)
    }

    this.requireUpdate = function(alias){

	if (alias=='all') {
	    for(var i in this.canvii){
		this.canvii[i].requiresUpdate = true;

	    }
	} else {
	    this[alias].requiresUpdate = true
	}
    }

    this.linkAliases = function(index, aliases){

	for(aliasIndex in aliases){
	    this[aliases[aliasIndex]] = this.canvii[index];
	}

    }

    this.registerCanvas = function(id){

	if ($('#'+id).length == 0) {
	    console.warn('Canvii.registerCanvas: tried to register a canvas which does not exist! '+id);
	    return(false)
	}

	var z = $('#'+id).css('z-index');
	if (z==undefined || z=='auto') {
	    if (this.canvii[0]==undefined) {
		this.canvii[0] = {canvas:document.getElementById(id), id:id,  doTranslate:true, context:document.getElementById(id).getContext("2d"), requiresUpdate:true};

	    } else {
		throw new Error('Canvii.registerCanvas: tried to register a canvas with no z-index attribute, z0 already taken');
	    }
	} else {
	    this.canvii[z] = {canvas:document.getElementById(id), id:id,  doTranslate:true,  context:document.getElementById(id).getContext("2d"), requiresUpdate:true};
	}

    }

    this.setWidth = function(w){
	this.width = w;
	this.setAll('canvas','width',w);

    }
    this.setHeight = function(h){
	this.height = h;
	this.setAll('canvas','height',h);
    }

    //Run a function on all canvii
    this.apply = function( f, zIndices ){

	if (f==undefined) {
	    throw new Error('Canvii.apply: no function supplied');
	}

	if (zIndices==undefined) {
	    for( zIndex in this.canvii ){

		f( this.canvii[zIndex] );
	    }
	} else {
	    for( zIndex in zIndices ){
		if (this.canvii[zIndex]) {
		    f( this.canvii[zIndex] );
		}
	    }
	}
    }
    //Set a value on all canvii
    this.setAll = function( contextOrCanvas, key,value, zIndices ){

	if (key==undefined) {
	    throw new Error('Canvii.setAll: no key supplied');
	}

	if (zIndices==undefined) {
	    for( zIndex in this.canvii ){

		this.canvii[zIndex][contextOrCanvas][key] = value;
	    }
	} else {
	    for( zIndex in zIndices ){
		if (this.canvii[zIndex]) {

		    this.canvii[zIndex][contextOrCanvas][key] = value;
		}
	    }
	}

    }
    this.sortNumber = function(a,b) {
	return a - b;
    }
}
offsetX = 0
offsetY = 0

CanvasFunctions = {

	'getMousePos' : function (canvas, evt) {

		var rect = canvas.getBoundingClientRect();

		x = evt.clientX - rect.left - offsetX;
		y =  evt.clientY - rect.top - offsetY;
		return {
			//x: rect.left - evt.originalTarget.offsetLeft
			//y: evt.clientY - rect.top + evt.originalTarget.offsetTop
			x: x,
			y: y
	  };
	},

	'getRelativeMousePosition':function(canvas, evt, world){

		var rect = canvas.getBoundingClientRect();
		var x = evt.clientX - rect.left - offsetX;
		var y =  evt.clientY - rect.top - offsetY;
		return({x:x + world.viewCenterX-canvas.width*0.5, y:y + world.viewCenterY-canvas.height*0.5});

	},

	'drawRoundedRectangle':function(ctx, x, y, width, height, radius) {

		if (typeof radius === "undefined") {
		  radius = 5;
		}
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
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
sx 	Optional. The x coordinate where to start clipping 	Play it ?
sy 	Optional. The y coordinate where to start clipping 	Play it ?
swidth 	Optional. The width of the clipped image 	Play it ?
sheight 	Optional. The height of the clipped image 	Play it ?
x 	The x coordinate where to place the image on the canvas 	Play it ?
y 	The y coordinate where to place the image on the canvas 	Play it ?
width 	Optional. The width of the image to use (stretch or reduce the image) 	Play it ?
height 	Optional. The height of the image to use (stretch or reduce the image)
*/
function LoadImageToCanvas(env, imageObj, positionX, positionY, angleInRad , axisX, axisY){

    if(imageObj.complete && imageObj.naturalHeight !== 0){
        env.translate( positionX, positionY );
        env.rotate( angleInRad );
        env.drawImage( imageObj, -axisX, -axisY );
        env.rotate( -angleInRad );
        env.translate( -positionX, -positionY );
    } else {
        imageObj.onload = function () {
            env.translate( positionX, positionY );
          	env.rotate( angleInRad );
          	env.drawImage( imageObj, -axisX, -axisY );
          	env.rotate( -angleInRad );
          	env.translate( -positionX, -positionY );
        }
    }
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
function ftan(a,b){

    var x = Math.atan2(b,a)
    return( (x > 0 ? x : (2*Math.PI + x)) * Math.PI * 2 / (2*Math.PI) )

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

		coords.push( new Coord( xStart+Math.sin(angle)*d, yStart+Math.cos(angle)*d ))
	}
	return(coords)
}
function State() {

	this.value = 0;
	this.target = 0;
	this.spd = 0.5; //was 0.3
	this.floatTargetVal = 0;
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

			this.target = this.floatTargetVal;
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
	this.setImmediate = function(val){
	    this.set(val);
	    this.value = this.target;
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

/*
 * edge type: 1: rising, 0: falling
 */
function EdgeTrigger(state,edgeType){

    this.state = state;
    this.previous = new State();
    this.edgeType = edgeType;
    this.triggered = false;

    this.update = function(){
	this.previous.tick();
	this.triggered = false;
	if ( (this.previous.get()==1 || this.previous.get()==0)) {

	    if (this.state.get()!= this.previous.get() && (this.state.get()==1 || this.state.get()==0) && this.state.get()==this.edgeType) {

		if (this.state.get()!=this.previous.get()) {
		    this.triggered = true;
		}

	    }
	}
	//Set immediate;
	if ((this.state.get()==1 || this.state.get()==0)) {
	    this.previous.set( this.state.get() );
	}
	return(this.triggered);
    }

    this.setEdgeType = function(type){
	if (type==0 || type==1) {
	    this.edgeType = type;
	}
    }
}
function Connector(x,y,rotation,parent,settings){

	/*	Settings object:
	 *	settings.connectorType = 1 input, 2 = output
	 *      settings.label = label for the connector
	 * 	settings.lines = Amount of bits, setting this value higher than 1 makes this connector a bus, defaults to one
	 * 	settings.busConnector = Visual representation of the bus; options; 0 [DIN](default),
	 */
	this.connectorType = settings.connectorType || 1; //1 = input; 2= output;
	this.connectionType = settings.connectionType || 1; //1 = state connection, 2=audio connection, in case of audio please also supply the audio source/target
	if (this.connectorType==1) {
	    this.audioTarget = settings.audioTarget;
	} else {
	    this.audioSource = settings.audioSource;
	}

	this.rotation = rotation || 0;
	this.label = "" || settings.label;
	this.radius = 5;
	this.x = x;
	this.y = y;
	this.hovering = false;
	this.hoverTime = 0;
	this.parent = parent;
	this.lines = settings.lines || 1

	this.busConnector = settings.busConnector || 0;

	this.setLineCount = function(count){
		this.states = [];
		this.lines = count;
		if (this.lines>1) {
			for(var line=0; line<this.lines; line++){
				this.states.push(new State())
			}
			this.state = this.states[0];
		} else {
			this.state = new State();
			this.states = [this.state];
		}

	}
	this.setLineCount (this.lines);

	this.labelEnergy = 50;
	//Show the label for the connector
	this.showLabel = function(){
		if (this.label) {
			this.labelEnergy = 50;
		}
	}
	this.getState = function(line){

	    if (line==undefined) {
		return(this.state)
	    }
	    if (line>=0 && line<this.lines) {
		return( this.states[line] )
	    }

	}

	this.getLineCount = function(){

	    return(this.lines)
	}

	this.getIntValue = function(){

	    var result = 0;
	    for(var bit=0; bit<this.lines; bit++){

		var val = this.getState(bit).get();
		if (val>0) {
			result = result | (1<<bit);
		} else {
			result = result & ~(1<<bit);
		}
	    }
	    return(parseInt(result))
	}

	//Returns false on an overflow
	this.setIntValue = function(val){
	    val = parseInt(val);
	    for(var bit=0; bit<this.lines; ++bit){
		    var s = (val >> bit) & 1
		    if (s==1) {
			this.getState(bit).set(1);
			this.getState(bit).tick();
		    } else {
			this.getState(bit).set(0);
		    }
	    }
	    if (Math.pow(2,this.lines)<val) {
		return(false)
	    } else {
		return(true)
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

	this.tick = function(){

	    //Tick all states:
	    if (this.lines>1) {
		for(var line in this.states){
		    this.states[line].tick()
		}
	    } else {
		this.state.tick();
	    }
	}

	this.hover = function(x,y){
		this.hovering = false;
		if (this.hit(x,y)) {
			this.hovering = true;
			this.hoverTime = 24;
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

	//Warning, this function does not set a color or stroke style
	this.renderOutline= function(env,x,y){
	    env.beginPath()
	    env.arc(x+this.x, y+this.y, this.radius, 0, 2 * Math.PI, false);
	    env.stroke();
	}

	this.connectedWires = [];
	this.registerWire = function(wire){
	    this.connectedWires.push( wire );
	}

	this.deRegisterWire = function(wire){
	    for (var wireIndex in this.connectedWires) {
		if( wire.worldId == this.connectedWires[wireIndex].worldId ){
		    this.connectedWires.splice(wireIndex, 1);

		    return(true)
		}

	    }
	    return(false)
	}
	this.reconnectAudio = function(){
	    for (var wireIndex in this.connectedWires) {
		this.connectedWires[wireIndex].reconnectAudio();
	    }
	}

	/**
	 * The connector consists of multiple parts:
	 * 1:['element-bg'] the base, a fixed circle with shadow and pinout
	 * 2:['connector-fg'] the connector indicator lights (pins and edge)
	 * 3:['effects'] textual labels
	 */
	this.render = function(canvii){
	    if (this.lines==1) {
		/* The base of the connector: */
		if( canvii.updateRequired('element-bg') ){

		    if(window.Settings.drawShadows){
			canvii['element-bg'].context.shadowColor = '#222';
			canvii['element-bg'].context.shadowBlur = 3;
			canvii['element-bg'].context.shadowOffsetX = 0;
			canvii['element-bg'].context.shadowOffsetY = 0;
		    }

		    canvii['element-bg'].context.beginPath();
		    canvii['element-bg'].context.arc(this.getX(), this.getY(), this.radius, 0, 2 * Math.PI, false);
		    canvii['element-bg'].context.lineWidth = 1;
		    canvii['element-bg'].context.strokeStyle = '#003300';
		    canvii['element-bg'].context.stroke();

		    if (this.connectionType==1) {
			canvii['element-bg'].context.fillStyle = '#222';
		    } else if(this.connectionType==2){
			canvii['element-bg'].context.fillStyle = '#F22';
		    }
		    canvii['element-bg'].context.fill();
		    canvii['element-bg'].context.shadowColor = "transparent";

		}

		/* These are the effects which show the connector state */
		if( canvii.updateRequired('connector-fg') ){

		    canvii['connector-fg'].context.beginPath();
		    canvii['connector-fg'].context.arc(this.getX(), this.getY(), this.radius, 0, 2 * Math.PI, false);
		    if (this.hovering) {
			    canvii['connector-fg'].context.fillStyle = '#FFF';
		    } else {
			    if (this.connectionType==1) {
				var state = this.state.get();
				if (state == 1) {
					canvii['connector-fg'].context.fillStyle = '#2F2';
				} else if (state == 0) {
					canvii['connector-fg'].context.fillStyle = '#222';
				} else {
					canvii['connector-fg'].context.fillStyle = 'grey';
				}
			    } else if(this.connectionType==2){
				canvii['connector-fg'].context.fillStyle = '#F22';
			    }

		    }
		    canvii['connector-fg'].context.fill();

		    //Draw the pinhole in the center of the connector:
		    canvii['connector-fg'].context.beginPath();
		    canvii['connector-fg'].context.fillStyle = '#000';
		    canvii['connector-fg'].context.arc(this.getX(), this.getY(), this.radius*0.5, 0, 2 * Math.PI, false);
		    canvii['connector-fg'].context.fill();
		}
	    } else {
		//DIN Bus connector has code 0
		if( this.busConnector == 0){

		    //Calculate the radius of the connector (@TODO: optimise)
		    radius = this.radius;
		    if(this.lines>8){
			    radius = 1.5 * radius;
		    }
		    var pinRadius = radius*0.8;

		    //Max of this amounts of pins per circle:
		    var maxPinsPerCircle = 8;
		    //Render the background of the connector if neccesary:
		    if( canvii.updateRequired('element-bg') ){
			canvii['element-bg'].context.beginPath();
			canvii['element-bg'].context.fillStyle = '#000'
			canvii['element-bg'].context.arc(this.getX(), this.getY(), radius, 0, 2 * Math.PI, false);
			if(window.Settings.drawShadows){
			    canvii['element-bg'].context.shadowColor = '#222';
			    canvii['element-bg'].context.shadowBlur = 3;
			    canvii['element-bg'].context.shadowOffsetX = 0;
			    canvii['element-bg'].context.shadowOffsetY = 0;
			}
			canvii['element-bg'].context.fill();
			canvii['element-bg'].context.shadowColor = "transparent";

			//Draw the pins:
			canvii['element-bg'].context.lineWidth = 1;
			canvii['element-bg'].context.fillStyle = '#FF7200';
			for(var line=0; line<this.lines; line++){
			    var theta = ((Math.PI*2)/(Math.min(maxPinsPerCircle-1,this.lines))*line);
			    var r = pinRadius - pinRadius*0.4*Math.floor( line /maxPinsPerCircle)

			    canvii['element-bg'].context.beginPath();
			    canvii['element-bg'].context.arc(this.getX()+Math.sin(theta)*r, this.getY()+Math.cos(theta)*r, 1/(1+Math.floor( line /maxPinsPerCircle)), 0, 2 * Math.PI, false);
			    canvii['element-bg'].context.fill();
		       }
		    }

		    /* Connector foreground layer shows; the state of the pins*/
		    //@TODO: update only on change

		    if( canvii.updateRequired('connector-fg') ){
			//Draw the pin/line states:
			canvii['connector-fg'].context.strokeStyle = '#2F2';
			for(var line=0; line<this.lines; line++){
			    if (this.getState(line).get()==1) {
				var theta = ((Math.PI*2)/(Math.min(maxPinsPerCircle-1,this.lines))*line);
				var r = pinRadius - pinRadius*0.4*Math.floor( line /maxPinsPerCircle)

				canvii['connector-fg'].context.beginPath();
				canvii['connector-fg'].context.arc(this.getX()+Math.sin(theta)*r, this.getY()+Math.cos(theta)*r, 1/(1+Math.floor( line /maxPinsPerCircle)), 0, 2 * Math.PI, false);
				canvii['connector-fg'].context.stroke();
			    }
			}

		    }
		}
	    }

	    //The effect layer shows the hovering state and labels
	    if( canvii.updateRequired('effects') ){

		//Draw the hovering state:
		if (this.hovering) {
		    canvii['effects'].context.beginPath();
		    canvii['effects'].context.arc(this.getX(), this.getY(), radius, 0, 2 * Math.PI, false);
		    canvii['effects'].context.strokeStyle = '#FFF';
		    canvii['effects'].context.stroke();
		}
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

		    canvii['effects'].context.font="8px Georgia";
		    canvii['effects'].context.fillStyle='#FFF';
		    if (this.connectionType==1) {
			if (this.lines==1 && this.state.floating) {
				canvii['effects'].context.fillText(this.label + ' [' + Math.round(this.state.getFloating()*100)/100 +']',this.getX()+Math.sin(r)*widthMod-offsetX,this.getY()+Math.cos(r)*heightMod);
			} else {
				canvii['effects'].context.fillText(this.label ,this.getX()+Math.sin(r)*widthMod-offsetX,this.getY()+Math.cos(r)*heightMod);
			}
		    } else if(this.connectionType==2){
			canvii['effects'].context.fillText(this.label + '[AUDIO]' ,this.getX()+Math.sin(r)*widthMod-offsetX,this.getY()+Math.cos(r)*heightMod);
		    }

		    this.labelEnergy--;
		}
	    }

	    if (this.hovering) {

		this.hoverTime--;
		if (this.hoverTime==0) {
		    this.hovering = 0;
		}
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

    if (a==undefined || b==undefined) {
	return(false)
    }
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

function ScreenCharacter(symbolCode,x,y,width,height) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.symbolCode = symbolCode;

    this.getSymbolCode = function(){

	return this.symbolCode;
    }

    this.executeSymbol = function( parent ){

	if (this.symbolCode=="\n") {

	}

    }

    this.setSymbol = function(s){
	this.symbolCode = s;
    }

    this.renderPixels = function(crt, parent, r, c){

	//
	//c.strokeStyle('#009900');
	var yStart = r*parent.charDistanceY;
	var xStart = c*parent.charDistanceX;

	var bitmap = Fonts.ixi[this.symbolCode];
	if (Fonts.ixi[this.symbolCode]!=undefined) {

	    for (var row=0; row<bitmap.length; row++) {
		for (var col=0; col<bitmap[row].length; col++) {

		    if (bitmap[row][col]==1) {

			crt.plotPixel(xStart+col, yStart+row);
		    }

		}
	    }
	}

    }

    this.tick = function(crt){

    }

    this.render = function(c, x, y, width, height){

	//
	//c.strokeStyle('#009900');
	var bitmap = Fonts.ixi[this.symbolCode];
	if (Fonts.ixi[this.symbolCode]!=undefined) {

	    var widthOfBitmap=bitmap.length;
	    var heigthOfBitmap=bitmap[0].length;
	    var pixWidth = 2;
	    var pixHeight = 2;
	    for (var row=0; row<bitmap.length; row++) {
		for (var col=0; col<bitmap[row].length; col++) {

		    if (bitmap[row][col]==1) {
			var xStart = x+((col/widthOfBitmap)*width);
			var yStart = y+((row/heigthOfBitmap)*height);
			var intensity = randInt(80,100)/100;
			c.fillStyle = 'rgba(22,90,22, '+ intensity*0.4 +')';
			//c.fillStyle = 'rgba(22,90,22,0.5)';
			c.strokeStyle = 'rgba(22,90,22, '+ intensity*0.3 +')';
			c.lineWidth =2;
			c.beginPath();

			c.arc( xStart , yStart, pixWidth*2.5 ,0,2*Math.PI, false);

			c.stroke();
			c.fill();
			c.closePath();
			c.beginPath();
			c.lineWidth =0;
			c.fillStyle = 'rgba(172, 231, 172, '+ intensity*0.6 +')';
			c.arc( xStart , yStart, pixHeight ,0,2*Math.PI, false);
			c.fill();
			c.closePath();
			c.beginPath();
			c.fillStyle = 'rgba(172, 231, 172, '+ intensity*0.8 +')';
			c.rect( xStart - 0.5*pixWidth, yStart - 0.5*pixHeight,  pixWidth,  pixHeight );
			c.fill();

			c.beginPath();
			c.fillStyle = 'rgba(241, 241, 241, '+ intensity +')';
			c.rect( xStart - 0.5*pixWidth, yStart - 0.5*pixHeight,  pixWidth,  pixHeight );
			c.fill();
		    }

		}
	    }
	}

    }

}

function CharacterMatrix(rows, cols) {

    //Initialize the matrix
    this.rows=rows;
    this.columns=cols;
    this.matrix = [];
    for (var r=0; r<rows; r++) {
	this.matrix[r] = [];
	for (var c=0; c<cols; c++) {
	    this.matrix[r][c] = new ScreenCharacter('NULL');
	}
    }

    //Function to set a char at X.Y
    this.setChar = function(row, column, char ){

	if (row>=this.rows||row<0||column>=this.columns||column<0) {
	    //Not ok: out of bounds; do nothing
	} else {
	    this.matrix[row][column] = char;
	}

    }

    this.changeChar = function(row, column, char ){

	if (row>=this.rows||row<0||column>=this.columns||column<0) {
	    //Not ok: out of bounds; do nothing
	} else {
	    this.matrix[row][column].setSymbol(char);
	}

    }
    //Function to shift the matrix
    this.shift = function(){

	//generate a new empty line
	var newline = [];
	for (var c=0; c<cols; c++) {
	    newline[c] = new ScreenCharacter('NULL');
	}

	//Add it to the matrix;
	this.matrix.push( newline );

	//Remove the last
	//this.matrix.shift();
       this.matrix.shift();
    }

    //Function to retrieve char
    this.getChar = function(row, column){

	return( this.matrix[row][column] )

    }

    this.clear = function(){
	for(var i in this.matrix){
	    for(var j in this.matrix[i]){
		this.matrix[i][j].setSymbol('NULL')
	    }
	}
    }
}

//CharacterMatrix tests:
function CharacterMatrixTester() {

    //Test if characters are correctly read
    var matrix= new CharacterMatrix(10,10);

    var expected = 'H';
    matrix.setChar( 1, 1, new ScreenCharacter(expected));
    var retrieved =matrix.getChar(1,1).getSymbolCode();
    if (expected==retrieved) {
    } else {
    }

    //Shift the register by one and check again:
    matrix.shift();
    var retrieved =matrix.getChar(0,1).getSymbolCode();
    if (expected==retrieved) {
    } else {
    }
}
new CharacterMatrixTester();

function diff(num1, num2){
    return (num1 > num2)? num1-num2 : num2-num1
  }

function Pixel(x, y, parent, parentCRT) {

    this.fitness = 100; //How well this thing performs at best :P (maxlife), min 0 max 100
    this.deviation = 2;
    this.parent = parent;
    this.parentCRT = parentCRT;
    this.xpos = x;
    this.ypos = y;
    this.life = 0;
    this.curlife = 0;
    this.diePerTick = 50;
    this.dead = true;
    this.height = 1.5;
    this.width = 1.5;
    this.justAwake = false;
    this.keepAlive = false;
    this.isRound = true;
    this.focus = 1.8;
    this.noiseEnabled = true;
    this.noiseChance = 1500; //Ratio of chance the pixel will light up by itself, 1 = 100% chance, 100 = 1% chance
    this.noiseStrength= 20; //Strength of noise when light up by chance, value between 100 and 0

    this.setLife = function(value){

	this.life = Math.max(0, Math.min( value, this.fitness));

    }
    this.setCurlife = function(value){

	this.curlife = Math.max(0, Math.min( value, this.fitness));

    }
    this.tick = function(){

	if (this.parentCRT.enabled==false) {
	    this.keepAlive=false;
	    this.life=0;
	    this.justAwake = false;

	}

	if (this.keepAlive==true) {
	    this.justAwake = true;
	    this.curlife = this.awakeTarget;
	    //this.wake();
	}
	if (this.dead==false) {
	    if (this.justAwake==false) {
		//this.life = this.life - this.diePerTick;
		this.life = 0;
		if (this.life<=0) {
		    this.life=0;
		}

		this.setCurlife(  this.curlife -  0.1*this.curlife );

		this.curlife -= randInt(0.5*this.diePerTick, this.diePerTick)

		if (this.curlife<=5) {
		    this.dead = true;
		}

	    } else {
		//Flicker a little?
		this.setCurlife( this.curlife + randInt(0, this.deviation) - randInt(0, this.deviation));

	    }

	    if (this.curlife<this.life) {
		this.curlife += randInt(5, 10);
	    }
	} else {

	    if ( this.noiseEnabled  && this.parentCRT.enabled==true && Math.floor(this.noiseChance*Math.random())==0) {

		this.dead = false;
		//Simulate noise
		 this.setCurlife(Math.random()*this.noiseStrength);
		 this.setLife( this.curlife );

	    }

	}
	this.justAwake = false;

    }
    //Once awake the pixel
    this.wake = function(){

	this.life = this.fitness;

	this.dead = false;
	this.justAwake = true;

    }

    //Enable the pixel untill disable
    this.enable = function(v){

	if (v!=undefined) {
	    this.life = v;
	    this.curlife = v;
	    this.awakeTarget = v;
	} else {
	    this.life = this.fitness;
	}
	this.keepAlive = true;
	this.wake();

    }

    this.scanline = function(value){

	this.setLife(this.life*value);
	this.setCurlife( this.curlife*value );

    }

    this.disable = function(){

	this.keepAlive = false;

    }

    this.setMaxLife = function( value ){

	this.fitness = value;

    }
    this.render = function(c){

	if (this.dead==false) {

	    var xStart = this.xpos + parent.xpos + this.parentCRT.deviationX;
	    var yStart = this.ypos + parent.ypos + this.parentCRT.deviationY;
	    //var intensity = randInt(80,100)/100;
	    var intensity = 0.01*this.parentCRT.getBrightness() * (this.curlife / 100);

	    if (intensity>0.1) {
		c.fillStyle = 'rgba(22,90,22, '+ intensity*0.4 +')';
		//c.fillStyle = 'rgba(22,90,22,0.5)';
		c.strokeStyle = 'rgba(22,90,22, '+ intensity*0.3 +')';
		c.lineWidth =2;
		c.beginPath();

		c.arc( xStart , yStart, this.width*2.5*this.focus ,0,2*Math.PI, false);

		c.stroke();
		c.fill();
		c.closePath();
		c.beginPath();
		c.lineWidth =0;
		c.fillStyle = 'rgba(172, 231, 172, '+ intensity*0.6 +')';
		c.arc( xStart , yStart, this.height ,0,2*Math.PI, false);
		c.fill();
		c.closePath();

	    }
	    if (this.isRound) {
		c.beginPath();
		c.fillStyle = 'rgba(172, 231, 172, '+ intensity*0.8 +')';
		c.arc( xStart - 0.5*this.width, yStart - 0.5*this.height,  this.width*this.focus,  0,2*Math.PI, false);
		c.fill();
		c.beginPath();
		c.fillStyle = 'rgba(241, 241, 241, '+ intensity +')';
		c.arc( xStart - 0.5*this.width, yStart - 0.5*this.height,  this.width*this.focus, 0,2*Math.PI, false);
		c.fill();
	    } else {
		c.beginPath();
		c.fillStyle = 'rgba(172, 231, 172, '+ intensity*0.8 +')';
		c.rect( xStart - 0.5*this.width, yStart - 0.5*this.height,  this.width*this.focus,  this.height );
		c.fill();
		c.beginPath();
		c.fillStyle = 'rgba(241, 241, 241, '+ intensity +')';
		c.rect( xStart - 0.5*this.width, yStart - 0.5*this.height,  this.width*this.focus,  this.height );
		c.fill();
	    }

	}
    }
}
function odd(x) {
    return ( x & 1 ) ? true : false;
  }
function CRT(pixelsX, pixelsY, parent) {

    this.enabled = true;
    this.scanLinePosition = 5;

    //Quick test:
    this.brightness = 30;
    this.focus = 1.1;
    this.parent = parent;
    //This is the relative placement of the pixels on the screen ;q
    this.deviationX = 10; //10
    this.deviationY = 10; //49
    this.deviationFixSpeed = 0.005;

    this.pixelsX = pixelsX;
    this.pixelsY = pixelsY;
    this.oddSwitch = true;

    this.pixels = [];
    this.pixelWidth = 2.6;
    this.pixelHeight = 2.5;

    this.height =  this.pixelsY*this.pixelHeight;
    this.width = this.pixelsX*this.pixelWidth;

    this.rx = this.pixelWidth*this.pixelsX * 0.5;
    this.ry = this.pixelHeight*this.pixelsY * 0.5;

    this.p1 = 0;
    this.p2 = 0;
    this.p3 = 0;
    this.p4 = 0;
    this.k1 = -0.0000045;
    this.k2 = 0;

    //Draw the grid for the pixels
    /* LED PATTERN:
     for (var x=0; x<this.pixelsX + 2*parent.xIndent; x++) {
	for (var y=0; y<this.pixelsY + 2*parent.yIndent; y++) {

	    c..beginPath();
	    c..rect(x*this.pixelWidth + parent.xIndent*this.pixelWidth, y*this.pixelHeight+ parent.yIndent*this.pixelHeight, this.pixelWidth, this.pixelHeight);
	    c..strokeStyle = 'rgba(90,90,90, 0.1)';

	    c..stroke();

	}
    }*/
    /*
    for (var x=0; x<this.pixelsX + 2*parent.xIndent; x++) {
	for (var y=0; y<this.pixelsY + 2*parent.yIndent; y++) {

	    c..beginPath();
	    c..arc(
			       x*this.pixelWidth + parent.xIndent*this.pixelWidth + (odd(y) ? this.pixelWidth/2: 0),
			       y*this.pixelHeight+ parent.yIndent*this.pixelHeight,
			       this.pixelHeight,
			       0, Math.PI*2, false);
	    c..strokeStyle = 'rgba(90,90,90, 0.2)';

	    c..stroke();

	}
    }*/

    var originX = this.pixelWidth*this.pixelsX * 0.5;
    var originY = this.pixelHeight*this.pixelsY * 0.5;

    for (var x=0; x<this.pixelsX; x++) {
	this.pixels[x] = [];
	for (var y=0; y<this.pixelsY; y++) {

	        //Distort:

		//Distortion center:
		/*
		var xc = this.pixelsX*this.pixelWidth*0.5;
		var yc = this.pixelsY*this.pixelHeight*0.5;

		var xu = x*this.pixelWidth ;
		var yu = y*this.pixelHeight;
		var r = Math.sqrt(Math.pow(xc-xu,2) + Math.pow(yc-yu,2));
		var xdist = xu*(1+this.k1*Math.pow(r,2) + this.k2*Math.pow(r,4) ) + (this.p2*(Math.pow(r,2) + 2*this.p1*xu*yu))*(1+this.p3*Math.pow(r,2)+this.p4*Math.pow(r,4))
		var ydist = yu*(1+this.k1*Math.pow(r,2) + this.k2*Math.pow(r,4) ) + (this.p1*(Math.pow(r,2) + 2*this.p2*xu*yu))*(1+this.p3*Math.pow(r,2)+this.p4*Math.pow(r,4))
		*/

		var xc = 0;
		var yc = 0;

		var xu = x*this.pixelWidth -   this.pixelWidth*this.pixelsX * 0.5;
		var yu = y*this.pixelHeight -  this.pixelHeight*this.pixelsY *0.5;
		var r = Math.sqrt(Math.pow(xc-xu,2) + Math.pow(yc-yu,2));
		var xdist = xu*(1+this.k1*Math.pow(r,2) + this.k2*Math.pow(r,4) ) + (this.p2*(Math.pow(r,2) + 2*this.p1*xu*yu))*(1+this.p3*Math.pow(r,2)+this.p4*Math.pow(r,4))
		var ydist = yu*(1+this.k1*Math.pow(r,2) + this.k2*Math.pow(r,4) ) + (this.p1*(Math.pow(r,2) + 2*this.p2*xu*yu))*(1+this.p3*Math.pow(r,2)+this.p4*Math.pow(r,4))
		//var xdist = xp + 2*this.p1*yp+this.p2*(r*r + 2*xp*xp);
		//var ydist = yp + this.p1*(r*r+2*yp*yp) + 2*this.p2*xp;

	       var px = new Pixel(this.pixelWidth + xdist +originX, this.pixelHeight + ydist + originY, parent, this);
	       /*
	       if (r<5 || (x%10==0 && y%2==0) || (y%10==0 && x%2==0)) {
		 px.keepAlive = true;
	       }*/

	   //var px = new Pixel(x*this.pixelWidth + parent.xIndent*this.pixelWidth, y*this.pixelHeight+ parent.yIndent*this.pixelHeight, parent, this);

		px.focus = 1+0.015*Math.sqrt(r);

	    //if( y<2 || (y+3)>this.pixelsY) { px.noiseChance = 3; px.noiseStrength=15; }
	    this.pixels[x][y] = px;
	}
    }

    this.getBrightness = function(){

	return this.brightness;
    }

    this.render = function(c){
    	c.beginPath();
    	//@todo real formula for this
    	c.rect(parent.xpos, parent.ypos, parent.pxWidth*parent.pixWidth, parent.pxHeight*parent.pixHeight );
    	var q = 10;
    	c.fillStyle = 'rgb('+q+', '+q+', '+q+')';
    	c.fill();
    	for (var x in this.pixels) {
    	    for(var y in this.pixels[x]){
    		this.pixels[x][y].render(c);
    	    }

    	}
    	if (odd(y)&&this.oddSwitch) {

    	    //this.pixels[0][this.scanLinePosition].wake();
    	}

    }

    this.tick = function(){

	for (var x in this.pixels) {
	    for(var y in this.pixels[x]){
		this.pixels[x][y].tick();

		var scanlineDiff = diff( y, this.scanLinePosition);
		if ( scanlineDiff<2 ) {

		    this.pixels[x][y].scanline(1.2); //0.5 + 0.5*(scanlineDiff/8)
		}

		if (odd(y)) {
		   //this.pixels[x][y].scanline( randInt(50,70)*0.01 );
		}

	    }

	}

	this.scanLinePosition+=1;
	if (this.scanLinePosition>=this.pixelsY) {
	    this.scanLinePosition=0;
	}

    }

    this.plotPixel = function(x,y){
	x = Math.round(x);
	y = Math.round(y);

	if (x>=0 && x<this.pixelsX && y>=0 && y<this.pixelsY) {
	    this.pixels[x][y].wake();

	}
    }

    this.enable = function(){

	this.enabled = true;
	this.deviationX = randInt(40, 90);
	this.deviationY = randInt(40, 90);

    }

    this.disable = function(){

	this.enabled = false;
    }

    this.toggle = function(){

	if (this.enabled) {
	    this.disable();
	} else {
	    this.enable();
	}
    }

    this.plotGreyPixel = function(x,y,value){

	x = Math.round(x);
	y = Math.round(y);
	if (x>=0 && x<this.pixelsX && y>=0 && y<this.pixelsY) {
	    this.pixels[x][y].setCurlife(value);
	    this.pixels[x][y].setLife(value);
	    this.pixels[x][y].dead = false;

	}

    }

    this.setPixel = function(x,y,v){

	x = Math.round(x);
	y = Math.round(y);
	if (x>=0 && x<this.pixelsX && y>=0 && y<this.pixelsY) {

	    if (v) {
		this.pixels[x][y].enable(v);
	    } else {

		this.pixels[x][y].disable();
	    }
	}
    }

    //Clear all pixels
    this.reset = function(){
	for (var x in this.pixels) {
	    for(var y in this.pixels[x]){
		this.pixels[x][y].disable();
	    }
	}
    }

    this.enablePixel = function(x,y,v){
	x = Math.round(x);
	y = Math.round(y);
	if (x>=0 && x<this.pixelsX && y>=0 && y<this.pixelsY) {

	    this.pixels[x][y].enable(v);

	}

    }

    this.setBrightness=function(value){

	this.parent.characterPointer.x = 0;
	this.parent.characterPointer.y = 0;
	this.parent.emptyBuffer();
	this.parent.writeWord("\f\f\f\f\n\n[ ! INFORMATION ! ]\n  BRIGHTNESS:\n  ["+value+"]\n                  \f\f\f\f\f\f\f");
	this.brightness = value;
	this.focus = (value+40)/100;

    }

    this.increaseBrightness = function(){

	this.setBrightness( Math.min(100, this.getBrightness() + 10 ));

    }

    this.decreaseBrightness = function(){

	this.setBrightness( Math.max(1, this.getBrightness() - 10 ));

    }
}

Output.Screen = function (x,y,rotation,world) {
    this.e = new electronicObject(x,y,rotation,{width:324, height:270, parent:this});
    this.ioWXstart = -80;
    this.ioRXstart = -140;
    this.ioY = 123;

    this.e.connectors['W'] = new Connector(this.ioRXstart, this.ioY, 0, this.e, {connectorType:1,label:'W', lines:7} )
    this.e.connectors['C'] = new Connector(this.ioRXstart+2*12 +10, this.ioY, 0, this.e, {connectorType:1,label:'Clock'});
    this.e.connectors['R'] = new Connector(this.ioRXstart+2*12 +35, this.ioY, 0, this.e, {connectorType:1,label:'Reset'});

    //Direct pixel control
    this.e.connectors['X'] = new Connector(this.ioRXstart+2*12 +75, this.ioY, 0, this.e, {connectorType:1,lines:8, label:'X'});
    this.e.connectors['Y'] = new Connector(this.ioRXstart+2*12 +90, this.ioY, 0, this.e, {connectorType:1,lines:8,label:'Y'});
    this.e.connectors['Pval'] = new Connector(this.ioRXstart+2*12 +105, this.ioY, 0, this.e, {connectorType:1, lines:4, label:'Pixel value'});
    this.e.connectors['Pclock'] = new Connector(this.ioRXstart+2*12 +120, this.ioY, 0, this.e, {connectorType:1,label:'Pixel clock'});

    this.clock = 0;
    this.imageFrontLoaded = false;
    this.imageFront = new Image();
    this.imageFront.src = "./images/terminal/edges.png";
    var parent = this;
    this.imageFront.onload = function(){
	    parent.imageFrontLoaded = true;
    }
    this.hit = function(x,y){
	    return( this.e.hit(x,y) );
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.save = function(){
	    var data = {};
	    data.type = ['Output','Screen'];
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

    this.rows = 10;
    this.columns =18;

    this.charDistanceX = 5;
    this.charDistanceY = 7;

    this.charactersPerTick = 3;

    this.xpos = x;
    this.ypos = y;
    this.xIndent = 0;
    this.yIndent = 0;
    this.rowDistance = 8;

    this.characterBuffer = [];
    this.characterMatrix = new CharacterMatrix(this.rows, this.columns);
    this.characterPointer = {x:0, y:0};
    this.characterWidth = 4;
    this.characterHeight = 6;
    this.pixWidth = 3;
    this.pixHeight = 3 ;

    this.width =  this.columns * this.characterWidth;
    this.height = this.rows * this.characterHeight;

    this.pxWidth = (this.columns * this.characterWidth  + this.columns-1 );
    this.pxHeight = (this.rows * this.characterHeight  + this.rows-1 );

    this.CRT = new CRT(  this.pxWidth, this.pxHeight,  this);
    //Draw a glass layer on layer3
    /*
    grd=canvas.layer3.createRadialGradient( this.pxWidth/10 ,this.pxHeight/10 ,10 ,this.pxWidth/10 + 20 ,this.pxHeight/10 + 20 ,250);
    grd.addColorStop(0, 'rgba(100,100,100,0.3)' );
    grd.addColorStop(1, 'rgba(0,0,0,0.2');
    */

    // Fill with gradient
    //canvas.layer3.fillStyle=grd;
    //canvas.layer3.fillRect(this.xpos, this.ypos, this.pxWidth, this.pxHeight);
    this.offsetX = 0
    this.offsetY = 10

    this.xpos = this.xpos - 161;
    this.ypos = this.ypos - 130;
    this.monitorTopEdgeHeight = 0;
    this.monitorBottomEdgeHeight = 0;
    this.monitorSideEdgeWidth = 0;
    this.monitorHeight = this.pxHeight;
    this.monitorWidth =  this.pxWidth;
    this.emptyBuffer = function(){

	this.characterBuffer = [];

    }

    this.render =  function(canvii){
	this.e.render(canvii);
	this.CRT.render(canvii['element-fg'].context);
	//Draw the screen:
	this.imageXoffset = this.offsetX;
	this.imageYoffset = this.offsetY;

	LoadImageToCanvas(canvii['element-fg'].context, this.imageFront, this.e.xpos, this.e.ypos, 0, 161 + this.imageXoffset, 130 + this.imageYoffset)


	//Print every character
	for (var row=0; row<this.rows; row++) {
	    for (var col=0; col<this.columns; col++) {

		//this.characterMatrix.getChar(row, col).renderPixels(this.CRT, this.xIndent + this.xpos+(col * this.characterWidth), this.yIndent + this.ypos+(row*this.characterHeigth)+row*this.rowDistance, this.characterWidth, this.characterHeigth);
		this.characterMatrix.getChar(row, col).renderPixels(this.CRT, this, row, col);

	    }
	}

    }
    this.cursorTime = 0;
    this.cursorDown = false;
    this.cursorInit = function(){
	this.cursorTime = 0;
	this.cursorDown = true;

    }
    /**
     *  The basic tick function
     *
     */
    this.cursorInit()
    this.tick = function(t){
	this.e.tick();
	if (this.e.connectors['Pclock'].state.get()==1) {
	    this.CRT.enablePixel(this.e.connectors['X'].getIntValue(),this.e.connectors['Y'].getIntValue(), (this.e.connectors['Pval'].getIntValue()/Math.pow(2,this.e.connectors['Pval'].lines)) * 100)

	}

	var byteData = 0;

	if( this.e.connectors['C'].state.get()==0 && this.clock==1 ){
	 this.clock = 0;
	}

	if( this.e.connectors['R'].state.get()==1){
	 this.emptyBuffer();
	 this.characterMatrix.clear();
	 this.CRT.reset();
	 this.characterPointer.x = 0;
	 this.characterPointer.y = 0;
	}

	if( this.e.connectors['C'].state.get()==1 && this.clock==0 ){
	    for(var bit=0; bit<7; bit++){

		if (this.e.connectors['W'].getState(bit).get()==1) {
		    byteData += Math.pow( 2, bit)
		}

	    }

	    character = ASCII[byteData]
	    this.writeChar(character);
	    this.clock = 1;
	}
	if (t==0) {
	    this.xpos = this.e.xpos - 125;
	    this.ypos = this.e.ypos - 105;

	    //Check whether there is an action in the buffer
	    this.cursorTime++;
	    if (this.cursorTime>25) {
		this.cursorTime=0;
	    }
	    if (this.characterBuffer.length>0) {

		var charactersToAdd = Math.min(this.characterBuffer.length, this.charactersPerTick)
		for (var r=0; r<charactersToAdd; r++) {

		    var symbolToAdd = this.characterBuffer.pop();
		    this.putChar(symbolToAdd);
		}

	    } else {

		if (this.cursorDown) {
		    if (this.cursorTime<10 ) {
			this.putCursor();
		    } else {
			this.characterMatrix.changeChar( this.characterPointer.y, this.characterPointer.x,' ')
		    }
		}
	    }
	    this.CRT.tick();

	    //Update all pixels;
	    for(var row=0; row<this.rows; row++){
		for(var col=0; col<this.columns; col++){
		    this.characterMatrix.matrix[row][col].tick(this.CRT);
		}

	    }
	}

    }

    this.putCursor = function(){

	this.characterMatrix.changeChar( this.characterPointer.y, this.characterPointer.x, 'CURSOR');
    }

    this.newLine = function(){

	//Remove the cursor:
	if( this.cursorDown){
	    this.characterMatrix.changeChar( this.characterPointer.y, this.characterPointer.x, ' ');

	}
	//this.characterMatrix.shift();
	this.characterPointer.x = 0;
	this.pointerIncrement(0,1);

    }

    this.scrollDown = function(){

	this.characterMatrix.shift();

    }

    this.pointerIncrement = function(incrementX, incrementY){

	this.characterPointer.x = this.characterPointer.x + incrementX;
	this.characterPointer.y = this.characterPointer.y + incrementY;

	if (this.characterPointer.x>this.columns-1) {
	    this.characterPointer.x = 0;
	    this.characterPointer.y += 1;
	}
	if (this.characterPointer.x<0) {
	    this.characterPointer.y -= 1;
	    this.characterPointer.x = this.columns-1;
	}

	if (this.characterPointer.y>=this.rows) {
	    this.characterPointer.y-=1;
	    this.scrollDown();
	}
	//This means we are basically null pointering...
	if (this.characterPointer.y<0) {
	    this.characterPointer.y = 0;
	}

    }

    this.putCharToMatrix = function( char ){

	if (char.symbolCode=="BS") {
	    this.characterMatrix.setChar( this.characterPointer.y, this.characterPointer.x, new ScreenCharacter(' '));
	    this.pointerIncrement(-1,0);
	    this.characterMatrix.setChar( this.characterPointer.y, this.characterPointer.x, new ScreenCharacter(' '));
	    return(true);
	}

	if (char.symbolCode=="\n") {

	    this.newLine();
	    return(true);
	}

	if (char.symbolCode=="\f") {
	    this.scrollDown();
	    return(true);

	}
	this.characterMatrix.setChar( this.characterPointer.y, this.characterPointer.x, char);
	this.pointerIncrement(1,0);
    }

    this.putChar = function(char){

	this.putCharToMatrix( char );
    }

    this.writeWord = function( string ){

	for (var index=0; index<string.length; index++) {

	    this.characterBuffer.unshift( new ScreenCharacter( string.charAt(index)));
	}

    }
    this.writeChar = function( string ){
	this.characterBuffer.unshift( new ScreenCharacter( string ));
    }

    //Boot sequence;
    //this.writeWord("W"+this.CRT.pixelsX + " H"+this.CRT.pixelsY + " R"+this.rows+" C"+this.columns+"\n")
}

function GraphicsCard(crt){

    this.monitor = crt;
    this.screen = crt.parent;
    this.pixelsX = crt.pixelsX;
    this.pixelsY = crt.pixelsY;

    this.pixelSet = function(x, y, v){

	this.monitor.setPixel(x,y,v);

    }

    this.line = function(x0, y0, x1, y1, v) {

	v = v || true;
	x0 = Math.round(x0);
	x1 = Math.round(x1);
	y0 = Math.round(y0);
	y1 = Math.round(y1);

	if(x0>x1){
	    var temp=x0;
	    x0=x1;
	    x1=temp;
	}
	if(y0>y1){
	    var temp=y0;
	    y0=y1;
	    y1=temp;
	}

	if(x0==x1){
	    for(var y=y0; y<=y1; y++){
		this.pixelSet(Math.floor(x0),Math.floor(y), v)
	    }
	} else {
	    var dx = Math.abs(x1-x0);
	    var dy = Math.abs(y1-y0);
	    if(x0 < x1){
		var sx = 1;
	    } else {
		var sx = -1;
	    }

	    if (y0 < y1){
		var sy = 1;
	    } else {
		var sy = -1;
	    }

	    var err = dx-dy;
	    var e2=0;

	    while(x0 != x1 && y0 != y1){
		this.pixelSet(Math.floor(x0),Math.floor(y0),v )

		e2 = 2*err;
		if (e2 > -dy){
		    err = err - dy
		    x0 = x0 + sx
		}
		if(e2 <  dx){
		    err = err + dx
		    y0 = y0 + sy
		}
	    }
	}
    }

}

function OS
(args) {
    //code
}

// CRT END

Wiring = {}

function WireRoutingPoint(x,y,parentWire){

    this.x = x;
    this.y = y;
    this.parent = parentWire;

}

function WireRoutingPoints(parent){

    this.parent = parent;
    this.routingPoints = [];
    this.addRoutingPoint = function(x,y,index){
	//Find the index

	this.routingPoints.splice(index,0,new WireRoutingPoint(x,y,this.parent));

    }

}
Wiring.Wire = function(x, y, rotation, world, clicks){

	this.world = world;
	this.lines = 1;// We default to one state.
	this.connectedLines = 1; //It is possible that the busses don't align properly, this value holds the amount of lines which are connected.

	this.hovering = false;
	this.hoverColor = '#FFF';
	this.hoveringNode = -1; //Index of node which is hovered
	this.state = new State();
	this.states = [this.state];
	this.width = 3;
	this.colourGroup = 0;
	this.colourGroups = BuysDB_ColorScheme.groups['8_norm'];
	this.nodesEditted = false; //When this is true the polyline will not autoconfigure.
	this.getState = function(line){
	    //@todo make safe
	    return(this.states[line]);
	}

	//Check if this wire can connect to obj
	this.validateConnect= function(obj){

		if ( obj instanceof Connector) {
			return(true)
		} else {
			return(false)
		}

	}

	this.calculatePoly = function(){
		if(this.nodesEditted){
		    this.centerLine[0].x = this.from.getX()
		    this.centerLine[0].y = this.from.getY();
		    this.centerLine[this.centerLine.length-1].x = this.to.getX()
		    this.centerLine[this.centerLine.length-1].y = this.to.getY()

		    this.boundingCoordinates = this.createThickenedPoly(this.centerLine);
		    return(false)
		}
		var dx = this.to.getX() - this.from.getX();
		var dy = this.to.getY() - this.from.getY();

		if ( (Math.abs(dy/dx))<1) {
		    var xfactor = 0.25;
		    var yfactor = 0.05;
		} else {
		    var xfactor = 0.05;
		    var yfactor = 0.25;

		}
		var centerX = this.from.getX() + 0.5*dx;
		var centerY = this.from.getY() + 0.5*dy;
		var c1x =  this.from.getX() + dx*xfactor;
		var c1y =  this.from.getY() + dy*yfactor;
		this.centerLine = [];
		this.centerLine[0] = {x:this.from.getX(), y:this.from.getY()};
		this.centerLine[1] = {x:c1x, y:c1y };
		this.centerLine[2] = {x:centerX, y:centerY };
		this.centerLine[3] = {x:this.to.getX()-dx*xfactor, y:this.to.getY()-dy*yfactor };
		this.centerLine[4] = {x:this.to.getX(), y:this.to.getY()};

		this.boundingCoordinates = this.createThickenedPoly(this.centerLine);

	}

	this.createThickenedPoly = function(poly){

	    var len = poly.length;

	    //Calculate alpha for all nodes;
	    for ( var i=0; i<len; i++) {
		if (i>0 && i<len-1) {
		    //Calculate the angle between the nodes
		    var a = Math.PI - ftan(poly[i].x -poly[i+1].x, poly[i].y-poly[i+1].y )+ 0.5*Math.PI;  ;
		    var b = Math.PI - ftan(poly[i-1].x - poly[i].x , poly[i-1].y-poly[i].y)+ 0.5*Math.PI;  ;

		    poly[i].alpha = ((a+b))/2;
		} else if (i==0) {
		    poly[i].alpha = Math.PI - ftan(poly[i].x - poly[i+1].x, poly[i].y - poly[i+1].y ) + 0.5*Math.PI;
		    //Move radius from the start point to expose the connector
		    poly[i].x+=Math.sin(poly[i].alpha)*this.from.radius;
		    poly[i].y+=Math.cos(poly[i].alpha)*this.from.radius;
		} else if (i==(len-1)) {
		    poly[i].alpha = Math.PI -ftan(poly[i-1].x - poly[i].x  , poly[i-1].y - poly[i].y    ) + 0.5*Math.PI;
		    //Move radius from the end point to expose the connector
		    poly[i].x-=Math.sin(poly[i].alpha)*this.to.radius;
		    poly[i].y-=Math.cos(poly[i].alpha)*this.to.radius;
		}

	    }

	    //Huh
	    //this.centerLine = poly;

	    //Create thick poly:
	    var thickPoly = []
	    for ( var i=0; i<len; i++) {
		thickPoly[i] = {x:poly[i].x+this.width*Math.sin(poly[i].alpha-Math.PI*0.5), y:poly[i].y+this.width*Math.cos(poly[i].alpha-Math.PI*0.5)}
		thickPoly[2*len-i-1] = {x:poly[i].x+this.width*Math.sin(poly[i].alpha+Math.PI*0.5), y:poly[i].y+this.width*Math.cos(poly[i].alpha+Math.PI*0.5)}
	    }
	    return(thickPoly);
	}
	this.init = function(){

	    //Find out how many states we need;
	    if (this.from!=undefined && this.to!=undefined) {

		this.lines = Math.max( this.from.getLineCount(), this.to.getLineCount());
		this.connectedLines = Math.min( this.from.getLineCount(), this.to.getLineCount());
		this.states = [];
		for(var line=0; line<this.lines; line++){
		    this.states.push(new State());
		}
		//Create a reference to the first line state: (For support for single line based devices....)
		this.sourceConnector = false;
		if (this.from.connectorType==1 && this.to.connectorType==2) {
		    this.sourceConnector = this.to;
		    this.targetConnector = this.from;
		} else if(this.from.connectorType==2 && this.to.connectorType==1){
		    this.sourceConnector = this.from;
		    this.targetConnector = this.to;
		}
		if (this.sourceConnector.parent != undefined){
		    if(this.sourceConnector.parent.parent != undefined) {
			//this.colourGroup = sourceConnector.parent.parent.worldId%this.colourGroups.length;
			this.colourGroup = this.sourceConnector.parent.colorId;

		    }
		}

		this.reconnectAudio();

		this.state = this.states[0];

		this.width = Math.sqrt(this.lines) + 2;
		if (this.targetConnector!=undefined && this.sourceConnector!=undefined) {
		   this.targetConnector.registerWire(this);
		   this.sourceConnector.registerWire(this);
		}
	    }

	}

	this.reconnectAudio = function(){
	    if (this.from.connectionType==2 && this.to.connectionType==2) { //Check wether both the in and output are audio connectors
		if( this.targetConnector.audioTarget != undefined && this.sourceConnector.audioSource != undefined ){
		    this.sourceConnector.audioSource.connect( this.targetConnector.audioTarget );
		} else {
		    console.warn('No connection possible; audio source or target missing');
		}
	    }
	}
	this.multiclick = 2;

	this.multiclickRender = function(canvii, x0,y0,x1,y1){

	    canvii['effects'].context.strokeStyle = '#AAA'
	    canvii['effects'].context.lineWidth=2;
	    canvii['effects'].context.beginPath();
	    canvii['effects'].context.moveTo(x0,y0);
	    canvii['effects'].context.lineTo(x1,y1);
	    canvii['effects'].context.stroke();
	    canvii['effects'].context.lineWidth=1;
	    canvii['effects'].context.strokeStyle = '#FFF'
	    canvii['effects'].context.beginPath();
	    canvii['effects'].context.arc(x1,y1,5,0,2*Math.PI)
	    canvii['effects'].context.stroke();
	}

	if (world && clicks) {
		//Find if there are suitable objects to connect;
		var from = world.objectAt(clicks[0].x,clicks[0].y);
		var to =   world.objectAt(clicks[1].x,clicks[1].y);

		if( from!=undefined && to!=undefined  && this.validateConnect(from) && this.validateConnect(to) ){ //&& !(from.x===to.x && from.y===to.y)
			this.from = from;
			this.to = to;
			this.calculatePoly();
			this.init();

		} else {

		    if (from!=undefined && to!=undefined && from.x===to.x && from.y===to.y) {
			console.log('Not placing wire; same target as source.')
			console.log(from.x,to.x, from.y,to.y)
		    } else {

		    }
		    this.killMe = true;

		}

	}
	this.render = function(canvii){

		/** WIRE renderer:
		 * First we check wether we are able to render: coordinates should be available
		 * 1) We render the background of the wire if required (wire-bg)
		 * 2) We render the state of the wire (wire-fg)
		 * 3) we render the hover state of the wire (effects)
		 **/

		if (this.boundingCoordinates) {

			//Draw the wire background base:

			if( canvii.updateRequired('wire-bg') ){
			    //@Todo really optimise:
			    this.calculatePoly();
			    canvii['wire-bg'].context.fillStyle = 'grey';
			    canvii['wire-bg'].context.lineWidth=2;

			    /** Bounding path generation code, (warn) duplicated below **/
			    canvii['wire-bg'].context.beginPath();
			    for (var i in this.boundingCoordinates) {
				    if (i==0) {
					    canvii['wire-bg'].context.moveTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y);
				    } else {
					    canvii['wire-bg'].context.lineTo(this.boundingCoordinates[i].x, this.boundingCoordinates[i].y);
				    }
			    }
			    canvii['wire-bg'].context.lineTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y)
			    //End

			    /*
			    if (this.lines==1) {

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
			    } else {
				//No fancy pancy rendering function for bus lines
				if (this.hovering) {
				    cnv.strokeStyle = this.hoverColor;;
				} else {
				    cnv.strokeStyle = 'grey';
				}
				cnv.stroke();
			    }*/

			    canvii['wire-bg'].context.fillStyle = this.colourGroups[this.colourGroup];
			    if(window.Settings.drawShadows){
				canvii['wire-bg'].context.shadowColor = '#222';
				canvii['wire-bg'].context.shadowBlur = 7;
				canvii['wire-bg'].context.shadowOffsetX = 2;
				canvii['wire-bg'].context.shadowOffsetY = 2;
			    }
			    canvii['wire-bg'].context.fill();
			    canvii['wire-bg'].context.shadowColor = 'transparent';
			}
		// Wire foreground rendering:
		if( canvii.updateRequired('wire-fg') ){

		    canvii['wire-fg'].context.beginPath();
		    for (var i in this.boundingCoordinates) {
			    if (i==0) {
				    canvii['wire-fg'].context.moveTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y);
			    } else {
				    canvii['wire-fg'].context.lineTo(this.boundingCoordinates[i].x, this.boundingCoordinates[i].y);
			    }
		    }
		    canvii['wire-fg'].context.lineTo(this.boundingCoordinates[0].x,this.boundingCoordinates[0].y)
		    if (this.hovering) {
			//@TODO: this is a violation; hovering should be rendered on the effects layer.
			canvii['wire-fg'].context.strokeStyle = this.hoverColor;
		    } else {
			var state = this.state.get();
			if (state == 1) {
				canvii['wire-fg'].context.strokeStyle = '#2F2';
			} else if (state == 0) {
				canvii['wire-fg'].context.strokeStyle = '#222';
			} else {
				canvii['wire-fg'].context.strokeStyle = '#F33';
			}
		    }
		    //canvii['wire-fg'].context.stroke();

		    //The center line shows the state of the first line
		    if (this.centerLine) {

			//@TODO: nicefy (CNV hack)
			var cnv = canvii['wire-fg'].context;
			cnv.strokeStyle = '#F22';
			cnv.lineWidth=1;
			for(var i in this.centerLine){

			    cnv.beginPath();
			    cnv.moveTo(this.centerLine[i].x + this.width*Math.sin(this.centerLine[i].alpha+0.5*Math.PI), this.centerLine[i].y + this.width*Math.cos(this.centerLine[i].alpha+0.5*Math.PI));
			    cnv.lineTo(this.centerLine[i].x + this.width*Math.sin(this.centerLine[i].alpha-0.5*Math.PI), this.centerLine[i].y + this.width*Math.cos(this.centerLine[i].alpha-0.5*Math.PI));
			}

			//cnv.stroke();
			/* Markers: */
			if (this.hovering) {

			    for(var i in this.centerLine){

				if (this.hoveringNode == i) {
				    cnv.fillStyle = '#F22';
				    cnv.strokeStyle = '#F22';
				} else {
				    cnv.fillStyle = '#222';
				    cnv.strokeStyle = '#222';
				}

				cnv.beginPath();
				cnv.arc(this.centerLine[i].x, this.centerLine[i].y, 2, 0, 2 * Math.PI, false);
				cnv.fill();
				cnv.beginPath();
				cnv.arc(this.centerLine[i].x, this.centerLine[i].y, this.width, 0, 2 * Math.PI, false);
				cnv.stroke();
			    }
			}

			var val = this.states[0].get();
			if (val) {
			    cnv.strokeStyle = '#2F2';
			} else {
			    cnv.strokeStyle = 'grey';
			}
			cnv.beginPath();
			cnv.moveTo(this.centerLine[0].x , this.centerLine[0].y);
			 for(var i in this.centerLine){
			    if (i>0) {
				cnv.lineTo(this.centerLine[i].x , this.centerLine[i].y);
			    }
			}
			cnv.stroke();

		    }
		}
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

			//Calculate wether there is a hit with a marker:
			this.hoveringNode = -1;
			for(var i in this.centerLine){
			    if (Math.sqrt(Math.pow(x-this.centerLine[i].x,2) + Math.pow(y-this.centerLine[i].y,2))<this.width) {
				this.hoveringNode = i;
				this.hovering = true;
			    }

			}
			return(true)
		} else {
			this.hovering = false;
			this.hoveringNode = -1;
		}

	}

	this.drag = function(prevX,prevY,newX,newY){
	    if (this.hovering&&this.hoveringNode!=-1) {
		this.centerLine[this.hoveringNode].x = newX;
		this.centerLine[this.hoveringNode].y = newY;
		this.nodesEditted = true;

	    }
	}

	this.delete = function(){

		if (this.from){
			if(this.from.connectorType==1) {

			    for(var lineId=0; lineId<this.connectedLines; lineId++){
				this.from.getState(lineId).set( -1 );
			    }

				//this.from.state.set(-1);
		       }
		}
		if (this.to){
			if(this.to.connectorType==1) {

			    for(var lineId=0; lineId<this.connectedLines; lineId++){
				this.to.getState(lineId).set( -1 );
			    }

			    //this.to.state.set(-1);
			}
		}

		if (this.targetConnector!=undefined) {
		    this.targetConnector.deRegisterWire(this);
		}
		if (this.sourceConnector!=undefined) {
		    if (this.sourceConnector.deRegisterWire!=undefined) {

			this.sourceConnector.deRegisterWire(this);
			if( this.sourceConnector.audioSource != undefined ){
			    //This is tricky; it destroys all connections from the audio source to all its targets; a reconnect is required for all still connected cables
			    this.sourceConnector.audioSource.disconnect();
			    //Reconnect to the remaining connectors
			    this.sourceConnector.reconnectAudio();
			}
		    }
		}

	}

	this.tick = function(){
		if (this.from.dead || this.to.dead || this.from.killMe || this.to.killMe || this.from==undefined || this.to==undefined) {
			//Cable is not connected!

			this.delete();
			this.killMe = true;
			return(false);
		}
		//Tick all states:
		for (var stateId in this.states) {
		    this.states[stateId].tick();
		}

		//Try to find outputs; (1==input, 2==output, see Connector())
		if (this.from.connectorType==1 && this.to.connectorType==1) {
			this.state.setImmediate(-1) //Todo fix
			return(false);
		}

		//Check if the amount of connected lines has not changed:
		if(this.connectedLines != Math.min( this.from.getLineCount(), this.to.getLineCount()) ){
		    this.init();
		}

		if (this.from.connectorType==2) {
		    for(var lineId=0; lineId<this.connectedLines; lineId++){
			this.getState(lineId).setImmediate( this.from.getState(lineId).getFloating() );
		    }
		}
		if (this.to.connectorType==2) {
		    	for(var lineId=0; lineId<this.connectedLines; lineId++){
			    this.getState(lineId).setImmediate( this.to.getState(lineId).getFloating() );
			}
		}
		if (this.from.connectorType==1) {
		    	for(var lineId=0; lineId<this.connectedLines; lineId++){
			    this.from.getState(lineId).setImmediate( this.getState(lineId).getFloating() );
			}

			//this.from.state.set(this.state.getFloating());
		}
		if (this.to.connectorType==1) {

		    for(var lineId=0; lineId<this.connectedLines; lineId++){
			this.to.getState(lineId).setImmediate( this.getState(lineId).getFloating() );
		    }

		    //this.to.state.set(this.state.getFloating());
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
		data.colourGroup = this.colourGroup;
		return(data);
	}
	this.load = function(data){
		//Redefine from and to...

		var from = this.world.objectAt(data.from.x, data.from.y);
		var to = this.world.objectAt(data.to.x, data.to.y);
		if( this.validateConnect(from) && this.validateConnect(to) ){

			if (data.colourGroup) {
			    this.colourGroup = data.colourGroup;
			}

			this.from = from;
			this.to = to;
			this.init();
			this.calculatePoly();

		} else {

			this.killMe = true;

		}
	}

	this.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.undecidedOutput, label:'Colour group', desciption:'Colour the wire', range:{start:0, end:me.colourGroups.length-1, step:1 },
				set:function(me, value){ me.colourGroup = value; }
			};
		return(conf);
	}
};
BasicGates = {}

BasicGates.Not = function(x,y,rotation, world){
	this.undecidedOutput = -1;
	this.e = new electronicObject(x,y,rotation,{width:50, height:25, parent:this})
	this.e.connectors = { 'in':new Connector(-15, 0, 0, this.e, {connectorType:1, label:'in'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2, label:'out'}) };
		this.imgUrlGate = "./images/gates/not_ansii.png";
	this.imgObjGate= new Image();
	this.imgObjGate.src = this.imgUrlGate;
	var parent = this;
	this.imageLoadedGate = false;
	this.imgObjGate.onload = function(){
		parent.imageLoadedGate = true;
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
	    this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){

		  LoadImageToCanvas(canvii['element-bg'].context, this.imgObjGate, this.e.xpos, this.e.ypos, 0,25,25)

	    }
	}
	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();
		var state = this.e.connectors['in'].state.get();
		//
		 if (state==1) {
			this.e.connectors['out'].state.set(0);
		} else if (state==0) {
			this.e.connectors['out'].state.set(1);
		} else {
			this.e.connectors['out'].state.set(this.undecidedOutput);
		}//

	    //this.e.connectors['out'].state.set(1-state);

	}
	this.save = function(){
		var data = {};
		data.type = ['BasicGates','Not'];
		this.e.save(data);
		this.e.save(data);
		return(data);
	}

	this.load = function(data){
	    if (data.undecidedOutput==0 || data.undecidedOutput==1 || data.undecidedOutput==1) {
		this.undecidedOutput = data.undecided
	    }

	}

	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		return(conf);
	}

}
/*
BasicGates.And = function(x,y,rotation, world){
	this.undecidedOutput = -1;
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'A':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };

	this.imgUrlGate = "./images/gates/and_ansii.png";
	this.imgObjGate= new Image();
	this.imgObjGate.src = this.imgUrlGate;
	var parent = this;
	this.imageLoadedGate = false;
	this.imgObjGate.onload = function(){
		parent.imageLoadedGate = true;
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
	    this.e.render(canvii);

	    if( canvii.updateRequired('element-bg') ){
		      if (this.imageLoadedGate) {
		          LoadImageToCanvas(canvii['element-bg'].context, this.imgObjGate, this.e.xpos, this.e.ypos, 0,25,25)
		          }
	    }
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();
		var stateA = this.e.connectors['A'].state.getFloating();
		var stateB = this.e.connectors['B'].state.getFloating();
    //this.e.connectors['out'].state.set(stateA*stateB)

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
		data.undecidedOutput = this.undecidedOutput;
		this.e.save(data);
		return(data);
	}

	this.load = function(data){
	    if (data.undecidedOutput) {
		this.undecidedOutput = data.undecidedOutput
	    }

	}

	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		conf.lines = {value:me.parent.lines, label:'lines',  desciption:'Amount of lines', range:{start:1, end:me.parent.maxLines, step:1 },set:function(me,value){ me.parent.setLines(value) }
		}
		return(conf);
	}
	this.setImageUrl = function(url){
	    this.imgUrlGate = url;
	    this.imgObjGate.src = this.imgUrlGate;
	}
	this.setTruthTable = function(t){
	    this.truthTable = t;
	}

}

BasicGates.And = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([0, 0, 0, 1]);
    this.setImageUrl('./images/gates/and_ansii.png')
    this.gateType='And';
}
BasicGates.And.prototype = new Gate();

BasicGates.Or = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([0, 1, 1, 1]);
    this.setImageUrl('./images/gates/or_ansii.png')
    this.gateType='Or';
}
BasicGates.Or.prototype = new Gate();

BasicGates.Xor = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([0, 1, 1, 0]);
    this.setImageUrl('./images/gates/xor_ansii.png')
    this.gateType='Xor';
}

BasicGates.Nand = function(x,y,rotation, world){
	this.undecidedOutput = -1
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'A':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };

	this.imgUrlGate = "./images/gates/nand_ansii.png";
	this.imgObjGate= new Image();
	this.imgObjGate.src = this.imgUrlGate;
	var parent = this;
	this.imageLoadedGate = false;
	this.imgObjGate.onload = function(){
		parent.imageLoadedGate = true;
	}
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
	    this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){
		if (this.imageLoadedGate) {
		    LoadImageToCanvas(canvii['element-bg'].context, this.imgObjGate, this.e.xpos, this.e.ypos, 0,25,25)
		}
	    }
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();
		var stateA = this.e.connectors['A'].state.getFloating();
		var stateB = this.e.connectors['B'].state.getFloating();

		this.e.connectors['out'].state.set(Math.min(1,1-(stateA*stateB)+0.1));
    //
		if ( stateA==1 && stateB==1 ){
			this.e.connectors['out'].state.set(0);
		} else if (stateA==-1 || stateB==-1) {

			this.e.connectors['out'].state.set(this.undecidedOutput);
		} else {
			this.e.connectors['out'].state.set(1);
		}
		//
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
	this.e.connectors = { 'A':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	this.imgUrlGate = "./images/gates/or_ansii.png";
	this.imgObjGate= new Image();
	this.imgObjGate.src = this.imgUrlGate;
	var parent = this;
	this.imageLoadedGate = false;
	this.imgObjGate.onload = function(){
		parent.imageLoadedGate = true;
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
	    this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){
		if (this.imageLoadedGate) {
		    LoadImageToCanvas(canvii['element-bg'].context, this.imgObjGate, this.e.xpos, this.e.ypos, 0,25,25)
		}
	    }
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();
		//var stateA = this.e.connectors['A'].state.getFloating();
		//var stateB = this.e.connectors['B'].state.getFloating();

		if ( (stateA==1 && stateB==0) || (stateB==1 && stateA==0) || (stateB==1 && stateA==1) ){
			this.e.connectors['out'].state.set(1);
		} else if (stateA==-1 || stateB==-1) {
			this.e.connectors['out'].state.set(this.undecidedOutput);
		} else {
			this.e.connectors['out'].state.set(0);
		}
	}
  this.e.connectors['out'].state.set(stateA+stateB);};

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
	this.e.connectors = { 'A':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	this.imgUrlGate = "./images/gates/xor_ansii.png";
	this.imgObjGate= new Image();
	this.imgObjGate.src = this.imgUrlGate;
	var parent = this;
	this.imageLoadedGate = false;
	this.imgObjGate.onload = function(){
		parent.imageLoadedGate = true;
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
	    this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){
		if (this.imageLoadedGate) {
		    LoadImageToCanvas(canvii['element-bg'].context, this.imgObjGate, this.e.xpos, this.e.ypos, 0,25,25)
		}
	    }
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
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
*/
function Gate(x,y,rotation, world){

	this.world = world;
	this.undecidedOutput = -1;
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'A':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'A'}), 'B':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'B'}), 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	this.gateType='null';
	this.lines = 1;
	this.maxLines = 16;
	this.truthTable = [0, 0, 0, 0];
	/* SET THESE USING YOUR PROTOTYPE
	this.imgUrlGate = "./images/gates/xor_ansii.png";
	this.imgObjGate.src = this.imgUrlGate;
	*/
	this.imgObjGate= new Image();
	var parent = this;


	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.setLines = function(count){
	    count = Math.floor(count);
	    if (count>=1 && count<=this.maxLines) {
		this.lines = count;
		//Update the connector sizes:
		this.e.connectors['A'].setLineCount(this.lines);
		this.e.connectors['B'].setLineCount(this.lines);
		this.e.connectors['out'].setLineCount(this.lines);
	    }

	}

	this.render = function(canvii){
	    this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){

		    LoadImageToCanvas(canvii['element-bg'].context, this.imgObjGate, this.e.xpos, this.e.ypos, 0,25,25)

	    }

	    //Some code to load the images on the thumbnails on a single render pass.
	    if (this.world==undefined){
		    LoadImageToCanvas(canvii['element-bg'].context, parent.imgObjGate, parent.e.xpos, parent.e.ypos, 0,25,25)

	    }
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();

		for(var line=0; line<this.lines; line++){
		    var stateA = this.e.connectors['A'].getState(line).get();
		    var stateB = this.e.connectors['B'].getState(line).get();

		    if (stateA==0 && stateB==0){
			this.e.connectors['out'].getState(line).set(this.truthTable[0]);
		    } else if(stateA==1 && stateB==0){
			this.e.connectors['out'].getState(line).set(this.truthTable[1]);
		    } else if(stateA==0 && stateB==1){
			this.e.connectors['out'].getState(line).set(this.truthTable[2]);
		    } else if(stateA==1 && stateB==1){
			this.e.connectors['out'].getState(line).set(this.truthTable[3]);
		    } else {
			this.e.connectors['out'].getState(line).set(this.undecidedOutput);
		    }
		}
	}

	this.save = function(){
		var data = {};
		data.type = ['BasicGates',this.gateType];
		this.e.save(data);
		data.lines = this.lines;
		data.undecidedOutput = this.undecidedOutput;
		return(data);
	}

	this.load = function(data){
		this.undecidedOutput = data.undecidedOutput
		this.setLines(data.lines);
	}

	this.e.configure = function(me){
		var conf = {}
		conf.floatingOutput = {value:me.parent.undecidedOutput, label:'Undecided output', desciption:'Output when the result is undecided (-1 is floating)', range:{start:-1, end:1, step:1 },
				set:function(me, value){ me.parent.undecidedOutput  = value; }
			};
		conf.lines = {value:me.parent.lines, label:'lines',  desciption:'Amount of lines', range:{start:1, end:me.parent.maxLines, step:1 },set:function(me,value){ me.parent.setLines(value) }
		}
		return(conf);
	}
	this.setImageUrl = function(url){
	    this.imgUrlGate = url;
	    this.imgObjGate.src = this.imgUrlGate;
	}
	this.setTruthTable = function(t){
	    this.truthTable = t;
	}

}

BasicGates.And = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([0, 0, 0, 1]);
    this.setImageUrl('./images/gates/and_ansii.png')
    this.gateType='And';
}
BasicGates.And.prototype = new Gate();

BasicGates.Or = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([0, 1, 1, 1]);
    this.setImageUrl('./images/gates/or_ansii.png')
    this.gateType='Or';
}
BasicGates.Or.prototype = new Gate();

BasicGates.Xor = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([0, 1, 1, 0]);
    this.setImageUrl('./images/gates/xor_ansii.png')
    this.gateType='Xor';
}
BasicGates.Xor.prototype = new Gate();

BasicGates.Nand = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([1, 1, 1, 0]);
    this.setImageUrl('./images/gates/nand_ansii.png')
    this.gateType='Nand';
}
BasicGates.Nand.prototype = new Gate();

BasicGates.Nor = function(x,y,rotation, world){
    Gate.call(this,x,y,rotation, world)
    this.setTruthTable([1, 0, 0, 0]);
    this.setImageUrl('./images/gates/nor_ansii.png')
    this.gateType='Nor';
}
BasicGates.Nor.prototype = new Gate();

LatchesAndFlipFlops = {};
LatchesAndFlipFlops['SR-Latch'] = function(x,y,rotation, world){
	this.e = new electronicObject(x,y,rotation,{width:50, height:50,parent:this})
	this.e.connectors = {
		'set':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'S'}),
		'reset':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'R'}),
		'Q':new Connector(15, -15, 0, this.e, {connectorType:2,label:'Q'}),
		'Qn1':new Connector(15, 15, 0, this.e, {connectorType:2,label:'Qn+1'})
		};
	this.Q = new State();
	this.Q.set(-1)
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();
		this.Q.tick();
		if ( this.e.connectors['set'].state.get()==1 && this.e.connectors['reset'].state.get()==0) {
			this.Q.set(1)
		} else if ( this.e.connectors['set'].state.get()==0 && this.e.connectors['reset'].state.get()==1) {
			this.Q.set(0)

		} else if (this.e.connectors['set'].state.get()==0 && this.e.connectors['reset'].state.get()==0){
			//Hold state.

		} else if (this.e.connectors['set'].state.get()==1 && this.e.connectors['reset'].state.get()==1){
		    //Invalid state
		    this.Q.set(-1);
		}else{
			//do nothing
		}
		this.e.connectors['Q'].state.set(this.Q.get());
		this.e.connectors['Qn1'].state.setInv(this.Q.get());
	}

	this.save = function(){
		var data = {};
		data.type = ['LatchesAndFlipFlops','SR-Latch'];
		this.e.save(data);
		return(data);
	}
}
LatchesAndFlipFlops['SR-Flip-Flop'] = function(x,y,rotation, world){
	this.e = new electronicObject(x,y,rotation,{width:50, height:50,parent:this})
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

	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
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
			} else if (this.e.connectors['set'].state.get()==1 && this.e.connectors['reset'].state.get()==1){
			    //Invalid state
			    this.Q.set(-1);

			}else{
				//do nothing
			}

		}
		this.e.connectors['Q'].state.set(this.Q.get());
		this.e.connectors['Qn1'].state.setInv(this.Q.get());
	}

	this.save = function(){
		var data = {};
		data.type = ['LatchesAndFlipFlops','SR-Flip-Flop'];
		this.e.save(data);
		return(data);
	}
}
LatchesAndFlipFlops['JK-Flip-Flop'] = function(x,y,rotation, world){
	this.e = new electronicObject(x,y,rotation,{width:50, height:50,parent:this})
	this.e.connectors = {
		'J':new Connector(-15, -15, 0, this.e, {connectorType:1,label:'J'}),
		'K':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'K'}),
		'clock':new Connector(-15, 0, 0, this.e, {connectorType:1,label:'Clock'}),

		'Q':new Connector(15, -15, 0, this.e, {connectorType:2,label:'Q'}),
		'Qn1':new Connector(15, 15, 0, this.e, {connectorType:2,label:'Qn+1'})
		};
	this.Q = new State();
	this.Q.set(-1)
	this.edgeTrigger = new EdgeTrigger(this.e.connectors['clock'].state, 0);
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();
		this.Q.tick();

		if ( this.edgeTrigger.update() ) {
		    console.log('triggered')
			if ( this.e.connectors['J'].state.get()==0 && this.e.connectors['K'].state.get()==0) {
				// Hold state
		    console.log('hold')
			} else if ( this.e.connectors['J'].state.get()==0 && this.e.connectors['K'].state.get()==1) {
				this.Q.set(0); //Reset
		    console.log('reset')
			} else if (this.e.connectors['J'].state.get()==1 && this.e.connectors['K'].state.get()==0){
				this.Q.set(1); // Set
		    console.log('set')
			} else if (this.e.connectors['J'].state.get()==1 && this.e.connectors['K'].state.get()==1){
			    //Toggle
		    console.log('toggle')
			    this.Q.setInv(this.Q.get());
			} else {
			    console.log('Other')
			}
		}
		this.e.connectors['Q'].state.set(this.Q.get());
		this.e.connectors['Qn1'].state.setInv(this.Q.get());
	}

	this.save = function(){
		var data = {};
		data.type = ['LatchesAndFlipFlops','JK-Flip-Flop'];
		this.e.save(data);
		return(data);
	}
}

SimpleIcs = {};

SimpleIcs['Register'] = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:75, height:150, parent:this})
	this.bits = 8;
    this.vertical_offset = 40;
    this.vertical_translate = 5;
    this.set_lamps = function(){
        this.lamps = []
        this.color = {r:250, g:195, b:3, a:1}
        for(var i=0; i<this.bits; i++){
                if(this.bits==1){
                    this.lamps.push( new IndicatorLamp(this,0, -0.5*this.e.height + this.vertical_offset*0.5 + (this.e.height - this.vertical_offset)*0.5 + this.vertical_translate,12,this.color) );
                } else if (this.bits<=8) {
                    var extra_offset_vert = 8 + 20*(this.bits==2) + 20*(this.bits<=4) ;
                    this.lamps.push( new IndicatorLamp(this,0, extra_offset_vert*0.5 + this.vertical_translate+ -0.5*this.e.height + 0.5*this.vertical_offset + (this.e.height - this.vertical_offset - extra_offset_vert)*(i/(this.bits-1)),8-(2*(this.bits>4)),this.color) );
                } else {
                    this.lamps.push( new IndicatorLamp(this,-8+14*( (i%2) == 0), this.vertical_translate -0.5*this.e.height + this.vertical_offset*0.5 + (this.e.height - this.vertical_offset)*( (i - (i%2))/((this.bits)-1)),6,this.color) );
                }
               this.lamps[i].setValue(255);
        }
    }
    this.set_lamps();
	this.e.connectors = {
		'dataIn':new Connector(-25, 10, 0, this.e, {connectorType:1,label:'dataIn', lines:this.bits}),
		'dataOut':new Connector(25, 0, 0, this.e, {connectorType:2,label:'dataOut',lines:this.bits}),
		'clock':new Connector(-25, -25, 0, this.e, {connectorType:1,label:'Clock'}),
		'write':new Connector(-25, -10, 0, this.e, {connectorType:1,label:'Write'}),
    'reset':new Connector(-25, 25, 0, this.e, {connectorType:1,label:'Reset'}),
		};

	this.memory = [];
	for(var bit=0; bit<this.bits; bit++){
	    this.memory[bit] = 0; //Register memory is only 1 or 0. No inbetween stuffs here.
        this.lamps[bit].setValue(0);
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);

        for (var i in this.lamps) {
            this.lamps[i].render(canvii);
        }

        if( canvii.updateRequired('element-fg') ){
		    var env = canvii['element-fg'].context;

            //Label:
            env.beginPath();
            env.rect(this.e.xpos-0.4*this.e.width, this.e.ypos-0.5*this.e.height+1, this.e.width*0.8, 15 );
            env.fillStyle = '#333';
            env.fill();


		    env.font="8pt Arial";
		    env.textAlign = 'center';
            env.fillStyle = '#CCC';
            env.fillText( "Register" , this.e.xpos, this.e.ypos + -0.5*this.e.height+13)
            env.lineWidth = 0.5;
            env.strokeStyle = '#777';


            env.strokeText( "Register" , this.e.xpos, this.e.ypos + -0.5*this.e.height+13)

            // -0.5*this.e.width, -0.5*this.e.height);

        }

	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}
	this.updateLines = function(size){
		this.e.connectors['dataIn'].setLineCount(size);
		this.e.connectors['dataOut'].setLineCount(size);
	}

	this.tick = function(){
		this.e.tick();

    	if (this.e.connectors['clock'].getState().get()==1){
    		//Writing to the register:
    		if(this.e.connectors['reset'].getState().get()==1){
          for(var bit=0; bit<this.bits; bit++){
              this.memory[bit] = 0;
              this.lamps[bit].setValue(0);
          }

        } else if (this.e.connectors['write'].getState().get()==1) {
    		    	for(var bit=0; bit<this.bits; bit++){

    			    if ( this.e.connectors['dataIn'].getState(bit).get()==1) {
    				this.memory[bit] = 1;
                    this.lamps[bit].setValue(255);
    			    } else {
    				this.memory[bit] = 0;
                    this.lamps[bit].setValue(0);
    			    }
    			}
    		}
        //Reading always happens when the clock is high
    		for(var bit=0; bit<this.bits; bit++){

    			this.e.connectors['dataOut'].getState(bit).set(this.memory[bit]);
    		}
    }
	}

	this.e.configure = function(me){
		var conf = {}
		conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bit size of register', range:{start:1, end:16, step:1 },
				set:function(me, value){
					//Increase the size of the bus:
					me.parent.updateLines(value)
					me.parent.bits  = value;
                    me.parent.set_lamps();
					}
			};
		return(conf);
	}

	//@TODO ADD LOAD AND SAVE FUNCTIONS
	this.save = function(){
		var data = {};
		data.type = ['SimpleIcs','Register'];
        data.bits = this.bits;
        this.set_lamps()
		this.e.save(data);
		return(data);
	}
  	this.load = function(data){
      this.updateLines(data.bits);
      this.bits  = data.bits;
  	}

}

SimpleIcs['Memory'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:50, height:100, parent:this})
    this.bits = 8;
    this.addressSize = 8;
    this.addressPointer = 0; //Current selected address
    this.accessTime = 10;
    this.readTimer = 0;
    this.e.connectors = {
	    'dataIn':new Connector(-15, 20, 0, this.e, {connectorType:1,label:'dataIn', lines:this.bits}),
	    'address':new Connector(-15, 0, 0, this.e, {connectorType:1,label:'Address', lines:this.addressSize}),
	    'dataOut':new Connector(15, -15, 0, this.e, {connectorType:2,label:'dataOut',lines:this.bits}),
      'ready':new Connector(15, 15, 0, this.e, {connectorType:2,label:'Ready'}),
	    'clock':new Connector(-15, -35, 0, this.e, {connectorType:1,label:'Clock'}),
	    'write':new Connector(-15, -20, 0, this.e, {connectorType:1,label:'Write'}),
      'reset':new Connector(-15, 35, 0, this.e, {connectorType:1,label:'Reset'})
	    };
      this.wasReset = true;
    this.data = new Uint8Array(Math.pow(2,this.addressSize));
    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();

	if (this.e.connectors['clock'].getState(0).get()==1){

      if(this.addressPointer!=this.e.connectors['address'].getIntValue()){
        this.readTimer = this.accessTime;
        this.e.connectors['ready'].getState(0).set(0);
        this.addressPointer = this.e.connectors['address'].getIntValue();
      }

      //Writing to the register:
      if(this.e.connectors['reset'].getState().get()==1){
        //@TODO: this might be expensive
        if(this.wasReset==false){
          this.wasReset = true;
          this.data = Uint8Array(Math.pow(2,this.addressSize));
          this.e.connectors['ready'].getState(0).set(1);
        }
      } else if (this.e.connectors['write'].getState(0).get()==1) {
        this.wasReset = false;
		    this.data[this.e.connectors['address'].getIntValue()] = this.e.connectors['dataIn'].getIntValue();
        this.e.connectors['ready'].getState(0).set(1);
	    } else {

        //We will read if no reset or write is issued
        if(this.readTimer==0){
      		for(var bit=0; bit<this.bits; bit++){
      		    this.e.connectors['dataOut'].getState(bit).set(this.data[this.e.connectors['address'].getIntValue()] & (1<<bit));
      		}
          this.e.connectors['ready'].getState(0).set(1);
        } else {
          this.e.connectors['ready'].getState(0).set(0);
        }
	    }
      if(this.readTimer>0){
          this.readTimer--;
      }
	}

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
    	var data = {};
    	data.type = ['SimpleIcs','Memory'];
      data.accessTime = this.accessTime;
    	this.e.save(data);
    	return(data);
    }

    this.e.configure = function(me){
      var conf = {}
      conf.bits = {value:me.parent.accessTime, label:'Access time', desciption:'Access time of memory (ticks)', range:{start:0, end:100, step:1 },
          set:function(me, value){
            //Increase the size of the bus:
            me.parent.accessTime  = value;

            }
        };
      return(conf);
    }

    this.load = function(data){
      this.accessTime = data.accessTime;
    }

}
SimpleIcs['de-Multiplexer'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:50, height:100, parent:this})
    this.inBusses = 4;
    this.maxInBusses = 16;
    this.maxBits = 16;
    this.bits = 8;
    this.addressSize = 2;
    this.transport = 0;

    this.setBitSize = function(value){
	this.bits = value;
	for(var bus=0; bus<this.inBusses; bus++){
	    this.e.connectors['bus_'+bus].setLineCount(this.bits);
	}

    }

    this.e.connectors = {
	    'selector':new Connector(0, 10, 0, this.e, {connectorType:1,label:'Selector', lines:this.addressSize}),
	    'input':new Connector(-15, 0, 0, this.e, {connectorType:1,label:'Input', lines:this.bits})
	    };
    this.initBusses = function(){
	//Calculate the required amount of bits for addressing
	this.addressSize = Math.max(1, Math.ceil( Math.log(this.inBusses)/Math.log(2) ));
	this.e.connectors['selector'].setLineCount(this.addressSize);

	this.e.setHeight( 20+this.inBusses*15 ) ; //15 extra for the data selector
	var y = -0.5*this.e.height + 10;
	this.e.connectors['selector'].y = y;
	for(var bus=0; bus<this.inBusses; bus++){
		this.e.connectors['bus_'+bus]=(new Connector(15, y+(1+bus)*15 , 0, this.e, {connectorType:2,label:'dataOut', lines:this.bits}))
	}

	//Remove all unused connectors:
	var toRemove = []
	for(var bus=this.inBusses; bus<this.maxInBusses; bus++){
		if('bus_'+bus in this.e.connectors){
			toRemove.push('bus_'+bus)
		}
	}
	for(var index in toRemove){
		this.e.connectors[ toRemove[index] ].killMe = true;
		delete this.e.connectors[ toRemove[index] ];

	}
    }
    this.initBusses();

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	var selected = this.e.connectors['selector'].getIntValue()

	for(var bus=0; bus<this.inBusses; bus++){

	    if (selected==bus) {
		      if(this.transport==0){
		        this.e.connectors['bus_'+bus].setIntValue(this.e.connectors['input'].getIntValue());
          } else {
            this.e.connectors['bus_'+bus].set(this.e.connectors['input'].getFloatValue());
          }
	    } else {
		this.e.connectors['bus_'+bus].setIntValue(0)
	    }
	}

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','de-Multiplexer'];

	data.inBusses = this.inBusses;
	data.bits = this.bits;
	data.addressSize = this.addressSize;
  data.transport = this.transport;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.inBusses = data.inBusses;
	this.addressSize = data.addressSize;
	this.bits = data.bits;
  this.transport = data.transport;
	this.initBusses();
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bus size to control in bits', range:{start:1, end:me.parent.maxBits, step:1 },
	    set:function(me, value){
		me.parent.setBitSize(value);
	    }
	};
  conf.transport = {value:me.parent.transport, label:'Digital 0, Analog 1', desciption:'Transport values digitally or analog', range:{start:0, end:1, step:1 },
      set:function(me, value){
          me.parent.transport = 0;
      }
  };

	conf.busses = {value:me.parent.inBusses, label:'Amount of in busses', desciption:'Amount of in busses', range:{start:1, end:16, step:1 },
	    set:function(me, value){
		me.parent.inBusses  = value;
		me.parent.initBusses();
	    }
	};
	return(conf);
    }

}

SimpleIcs['SineWaveGenerator'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
    this.maxBits = 16;
    this.bits = 4;

    this.range = Math.pow(2,this.bits)-1;
    this.setBitSize = function(b){
	if (this.converter==0) {
	    b=Math.min(b,6);
	}

	this.e.connectors['frequency'].setLineCount(b);
	this.e.connectors['x'].setLineCount(b);
	this.e.connectors['phase'].setLineCount(b);
	this.e.connectors['doutput'].setLineCount(b);
	this.bits = b;
	this.range = Math.pow(2,this.bits)-1;
    }
    this.e.connectors = {
	'frequency':new Connector(-this.e.width/2+10, 0, 0, this.e, {connectorType:1,label:'1/Frequency', lines:this.bits}),
	'x':new Connector(-this.e.width/2+10, -15, 0, this.e, {connectorType:1,label:'x', lines:this.bits}),
	'phase':new Connector(-this.e.width/2+10, 15, 0, this.e, {connectorType:1,label:'Phase', lines:this.bits}),
	'doutput':new Connector(this.e.width/2-10, 15, 0, this.e, {connectorType:2,label:'Digital Output', lines:this.bits}),
	'aoutput':new Connector(this.e.width/2-10, -15, 0, this.e, {connectorType:2,label:'Analog Output', lines:1})
    };
    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }
    this.render = function(canvii){
	this.e.render(canvii);

    }

    this.hover = function(x,y){return(this.e.hover(x,y));};

    this.tick = function(){
	this.e.tick();

	var multiplier = (1/this.range);
	var s = Math.sin( 2*Math.PI* (1/(this.e.connectors['frequency'].getIntValue()/this.range))*multiplier* this.e.connectors['x'].getIntValue()+this.e.connectors['phase'].getIntValue() );
	if (!isNaN(s)) {

	    this.e.connectors['doutput'].setIntValue( Math.round( this.range*(0.5*s+0.5) ));
	    this.e.connectors['aoutput'].state.set( 0.5+0.5*s)
	    this.s = s;
	}
    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','SineWaveGenerator'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.bits = data.bits;
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bits of input (precision)', range:{start:1, end:me.parent.maxBits, step:1 },
	    set:function(me, value){
		me.parent.setBitSize(value);
	    }
	};
	return(conf)
    }

}
SimpleIcs['Comparator'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:50, height:75, parent:this})
    this.margin = 0.02;

    this.e.connectors = {
	    'Mode':new Connector(-15, 0, 0, this.e, {connectorType:1,label:'Mode', lines:1}),
	    'A':new Connector(-15, -25, 0, this.e, {connectorType:1,label:'Input A'}),
	    'B':new Connector(-15, 25, 0, this.e, {connectorType:1,label:'Input B'}),
	    'Output':new Connector(15, 0, 0, this.e, {connectorType:2,label:'Output'})
	    };

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	var mode = this.e.connectors['Mode'].getIntValue()
	if (mode==0) {
	    this.e.connectors['Output'].state.set( Math.abs(this.e.connectors['A'].state.getFloating() - this.e.connectors['B'].state.getFloating()) < this.margin );
	} else if (mode==1) {
	    this.e.connectors['Output'].state.set( this.e.connectors['A'].state.getFloating() < this.e.connectors['B'].state.getFloating() );
	}
    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','Comparator'];
	data.margin = this.margin;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.margin = data.margin;
    }

    this.e.configure = function(me){
	var conf = {}
	conf.margin = {value:me.parent.margin, label:'Margin', desciption:'Equality margin (mode 0)', range:{start:0, end:0.9, step:0.01 },
	    set:function(me, value){
		me.parent.margin = value;
	    }
	};

	return(conf);
    }

}
//These functions allow for a global way of dealing with binary representation of frequencies
function mapFrequencyToRange(freq,range){
    return( 0.125 * range * (Math.log(25000*freq/171641))  )
}

function mapRangeToFrequency(intValue, range) {
    return( 6.86564*Math.exp( 8*(intValue/range) ) );
}
function MOSOscillator(parent){

    this.parent = parent;
    this.enabled = false;
    this.type = 2;
    this.availableTypes = [0, 3, 2, 1];
    this.decay = 0;
    this.sustain = 1;
    this.attack = 0;
    this.release = 0;
    this.frequency = 160;
    this.smallAmplitude = 0.001;
    this.fineFrequency = 0;
    this.fineTune = 1000000 / 16777216;
    this.filterEnabled = true;

    this.updateFrequency = function(){
	this.frequencyValue = this.frequency + this.fineFrequency * this.fineTune;
    }
    this.updateFrequency();
    this.getTypeText= function(){

	return( this.parent.oscillatorWaveForms[this.type] )
    }

    //Create the sound source:
    this.oscillator = this.parent.context.createOscillator();
    this.gainNode = this.parent.context.createGain();
    this.gainNode.gain.value = 1.0;

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.parent.filterNode);

    this.turnOnVoice = function(){
	var now = this.parent.context.currentTime;
	this.gainNode.gain.cancelScheduledValues(now);
	this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
	this.gainNode.gain.linearRampToValueAtTime(1, now + (0.002 * Math.pow(2, this.attack * 12)));
	this.gainNode.gain.exponentialRampToValueAtTime(this.sustain, now + (0.002 * Math.pow(2, this.attack * 12)) + (0.006 * Math.pow(2, this.decay * 12)));
    }
    this.turnOffVoice = function(){
	var now = this.parent.context.currentTime;
	this.gainNode.gain.cancelScheduledValues(now);
	this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
	this.gainNode.gain.exponentialRampToValueAtTime(this.smallAmplitude, now + (0.006 * Math.pow(2, this.release * 12)));
    }

    this.start = function(){
	if (!this.enabled) {
	    this.turnOnVoice();
	    this.oscillator.start(0);
	    this.gainNode.gain.value = 1.0;
	    this.enabled = true;
	} else {
	    this.gainNode.gain.value = 1.0;
	}
    }
    this.stop = function(){
	if (this.enabled) {
	    //this.turnOffVoice();
	    //this.enabled = false;

	    this.gainNode.gain.value = 0.0;
	    this.oscillator.frequency.value = 200;

	}

    }

    this.setGain = function(value){
	this.gainNode.value = value;
    }

    this.setFilterState = function(bool){
	this.filterEnabled = bool;
	if (bool) {
	    this.gainNode.disconnect();
	    this.gainNode.connect(this.parent.filterNode);
	} else {
	    this.gainNode.disconnect();
	    this.gainNode.connect(this.parent.gainNode);
	}
    }

    this.setCoarse = function(value){
	this.frequency = 20 * Math.pow(2, value / 12);
	this.updateFrequency();
    }
    this.setFine = function(value){
	this.fineFrequency = value;
	this.updateFrequency();
    }
    this.setWaveForm = function(value){

	//Check if the waveform exists:
	if(this.parent.oscillatorWaveForms[value]!=undefined){
	    this.type = value;
	    if (this.type==4) {
		this.setPeriodicWave(this.parent.this.periodicWave);
	    } else {
		this.oscillator.type = this.parent.oscillatorWaveForms[this.type];
	    }
	}

    }
    this.setPulseWidth = function(value){
	this.pulseWidth = value / 128;

	for (var i = 0; i < this.parent.pulseLength; i++) {
	    pulseA[i] = (Math.sin(2 * Math.PI * i * this.pulseWidth) / (i * Math.PI));
	    pulseB[i] = ((1 - Math.cos(2 * Math.PI * i * this.pulseWidth)) / (i * Math.PI));
	}

	var myPeriodicWave = this.parent.context.createPeriodicWave(pulseA, pulseB);

	if (this.type == 4) {
	    this.setPeriodicWave(myPeriodicWave);
	}

    }

    this.setAttack = function(value){
	this.attack = value;
    }

    this.setDecay = function(value){
	this.decay = value/15;
    }

    this.setSustain = function(value){
	this.sustain = value/15;
	if (this.sustain == 0) {
	    this.sustain = this.smallAmplitude;
	}
    }

    this.setRelease = function(value){
	this.release = value/15;
    }

}
AudioObjects = {};
AudioObjects['Speaker'] = function(x,y,rotation, world){

    this.world = world;
    this.e = new electronicObject(x,y,rotation,{width:125, height:175, parent:this})

    if (world!=undefined) {
	world.requestAudio();
	this.e.connectors = {
	'input':new Connector(-this.e.width/2+10, 0, 0, this.e, {connectorType:1,connectionType:2,audioTarget:this.world.audioContext.destination,label:'input', lines:1})
	};
    }
    this.imgObj= new Image();
    this.imgObj.src = "./images/audio/speaker.png";
    var parent = this;
    this.imageLoaded = false;
    this.imgObj.onload = function(){
	    parent.imageLoaded = true;
    }
    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }
    this.render = function(canvii){
	this.e.render(canvii);
	if( canvii.updateRequired('element-bg') ){
	    LoadImageToCanvas(canvii['element-bg'].context, this.imgObj, this.e.xpos+this.e.width*0.5 - 8, this.e.ypos+this.e.height*0.5 -9, 0, 100, 157)
	}
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['AudioObjects','Speaker'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.bits = data.bits;
    }

}
AudioObjects['Amplifier'] = function(x,y,rotation, world){

    this.world = world;

    this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})

    if (world!=undefined) {

	world.requestAudio();
	this.gainNode = world.audioContext.createGain();

	this.e.connectors = {
	'input':new Connector(-this.e.width/2+10, -10, 0, this.e, {connectorType:1,connectionType:2,audioTarget:this.gainNode,label:'input', lines:1}),
	'output':new Connector(this.e.width/2-10, 0, 0, this.e, {connectorType:2,connectionType:2,audioSource:this.gainNode,label:'output', lines:1}),
	'gain':new Connector(-this.e.width/2+10, 10, 0, this.e, {connectorType:1,connectionType:1,label:'gain', lines:1})
	};
    }

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }
    this.render = function(canvii){
	this.e.render(canvii);
	//canvii['element-fg'].context.fillText((0.5+0.5*this.s) + ' , ' + this.s, this.e.xpos, this.e.ypos);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	this.gainNode.gain.value = Math.min(1,Math.max(0,this.e.connectors['gain'].state.getFloating()));

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['AudioObjects','Amplifier'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.bits = data.bits;
    }

}

function IndicatorLamp(parent, x,y,r,color,value){

    this.value = value || 0;
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = color;

    this.render = function(canvii){

	if( canvii.updateRequired('element-bg') ){
		var cX = parent.e.xpos + this.x;
		var cY = parent.e.ypos + this.y;
		canvii['element-bg'].context.fillStyle = '#333';
		canvii['element-bg'].context.strokeStyle = '#AAA';
		canvii['element-bg'].context.beginPath();
		canvii['element-bg'].context.arc(cX, cY, this.radius, 0, 2*Math.PI, false);
		if (window.Settings['drawShadows']) {
		    canvii['element-bg'].context.shadowColor = '#000';
		    canvii['element-bg'].context.shadowBlur = 3;
		    canvii['element-bg'].context.shadowOffsetX = 1;
		    canvii['element-bg'].context.shadowOffsetY = 1;
		}
		canvii['element-bg'].context.fill();
		canvii['element-bg'].context.stroke();
		canvii['element-bg'].context.shadowColor = 'transparent';

	    }
	if( canvii.updateRequired('element-fg') && this.value>20 ){
		var cX = parent.e.xpos + this.x;
		var cY = parent.e.ypos + this.y;

		var grad = canvii['element-fg'].context.createRadialGradient(cX, cY, this.radius*0.25, cX, cY, this.radius*2);
		grad.addColorStop(0,"rgba("+this.color.r+","+this.color.g+","+this.color.b+",0.8)");
		grad.addColorStop(0.5, "rgba("+this.color.r+","+this.color.g+","+this.color.b+",0.5)");
		grad.addColorStop(1, "rgba("+this.color.r+","+this.color.g+","+this.color.b+",0.0)");

		canvii['element-fg'].context.beginPath();
		canvii['element-fg'].context.arc(cX, cY, this.radius*2, 0, 2 * Math.PI, false);
		canvii['element-fg'].context.fillStyle = grad;
		canvii['element-fg'].context.fill();

		var v = this.value;
		canvii['element-fg'].context.fillStyle = "rgb("+v+","+v+","+v+")";
		canvii['element-fg'].context.beginPath();
		canvii['element-fg'].context.arc(cX, cY, this.radius*0.5, 0, 2*Math.PI, false);
		canvii['element-fg'].context.fill();
	}

    }

    this.setValue = function(value){

	this.value = Math.min(Math.max(0,value),255);

    }
}

AudioObjects['Filter'] = function(x,y,rotation, world){

    this.world = world;

    this.e = new electronicObject(x,y,rotation,{width:150, height:150, parent:this})
    this.bits = 8;
    this.range = Math.pow(2,this.bits)-1;

    //Freq: 0=lower, 1=center, 2=upper
    this.filters = [

	{name:'lowpass',freq:0, Q:true,gain:false},
	{name:'highpass',freq:2, Q:true,gain:false},
	{name:'bandpass',freq:1, Q:true,gain:false},
        {name:'lowshelf',freq:0, Q:false,gain:true},
	{name:'highhelf',freq:2, Q:false,gain:true},
	{name:'peaking',freq:1, Q:true,gain:true},
	{name:'notch',freq:2, Q:true,gain:false},
	{name:'allpass',freq:1, Q:true,gain:false}

    ]
    this.filterType = 0;
    this.imgObj= new Image();
    this.imgObj.src = "./images/audio/filterPanel.png";
    var parent = this;
    this.imageLoaded = false;
    this.imgObj.onload = function(){
	    parent.imageLoaded = true;
    }

    if (world!=undefined) {

	world.requestAudio();
	this.filterNode = world.audioContext.createBiquadFilter();

	this.e.connectors = {
	'input':new Connector(-this.e.width/2+15, -this.e.height*0.5+15, 0, this.e, {connectorType:1,connectionType:2,audioTarget:this.filterNode,label:'Audio input', lines:1}),
	'filterType':new Connector(-this.e.width/2+15,  -this.e.height*0.5+45, 0, this.e, {connectorType:1,connectionType:1,label:'Filter type', lines:3}),
	'frequency':new Connector(-this.e.width/2+30, -this.e.height*0.5+70, 0, this.e, {connectorType:1,connectionType:1,label:'Frequency', lines:8}),
	'QFactor':new Connector(-this.e.width/2+30, -this.e.height*0.5+95, 0, this.e, {connectorType:1,connectionType:1,label:'Q Factor', lines:8}),
	'gain':new Connector(-this.e.width/2+30, -this.e.height*0.5+120, 0, this.e, {connectorType:1,connectionType:1,label:'gain', lines:4}),

	'output':new Connector(this.e.width/2-15, -this.e.height*0.5+70, 0, this.e, {connectorType:2,connectionType:2,audioSource:this.filterNode,label:'Audio output', lines:1})
	};
    }

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.lamps = {};
    this.lamps['QActive'] = new IndicatorLamp(this, -this.e.width/2+50, -this.e.height*0.5+95, 5, {r:250, g:10, b:0}  )
    this.lamps['gainActive'] = new IndicatorLamp(this, -this.e.width/2+50, -this.e.height*0.5+120, 5, {r:250, g:10, b:0}  )
    this.lamps['freqLow'] = new IndicatorLamp(this, -this.e.width/2+65, -this.e.height*0.5+70, 5, {r:250, g:10, b:0}  )
    this.lamps['freqCenter'] = new IndicatorLamp(this, -this.e.width/2+80, -this.e.height*0.5+70, 5, {r:250, g:10, b:0}  )
    this.lamps['freqHigh'] = new IndicatorLamp(this, -this.e.width/2+95, -this.e.height*0.5+70, 5, {r:250, g:10, b:0}  )
    this.render = function(canvii){
	       this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){

		 LoadImageToCanvas(canvii['element-bg'].context, this.imgObj, this.e.xpos+this.e.width*0.5, this.e.ypos+this.e.height*0.5, 0, 150, 150)

    	}
    	for(var i in this.lamps){
    	    this.lamps[i].render(canvii);
    	}

    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	if(this.filterType != this.e.connectors['filterType'].getIntValue() ){

	    if( this.filters[ this.filterType] != undefined ){
		this.filterType = this.e.connectors['filterType'].getIntValue();
		if( this.filters[ this.filterType ].freq==0){
		    this.lamps['freqLow'].setValue(255); this.lamps['freqCenter'].setValue(0); this.lamps['freqHigh'].setValue(0);
		} else if( this.filters[ this.filterType ].freq==1){
		    this.lamps['freqLow'].setValue(0); this.lamps['freqCenter'].setValue(255); this.lamps['freqHigh'].setValue(0);
		} else if( this.filters[ this.filterType ].freq==2){
		    this.lamps['freqLow'].setValue(0); this.lamps['freqCenter'].setValue(0); this.lamps['freqHigh'].setValue(255);
		}
	    }

	    if (this.filters[ this.filterType ].Q) {
		this.lamps['QActive'].setValue(255);
	    } else {
		this.lamps['QActive'].setValue(0);
	    }
	    if (this.filters[ this.filterType ].gain) {
		this.lamps['gainActive'].setValue(255);
	    } else {
		this.lamps['gainActive'].setValue(0);
	    }

	    this.filterNode.type = this.filters[ this.filterType].name;

	}

	this.filterNode.frequency.value = mapRangeToFrequency( this.e.connectors.frequency.getIntValue(), this.range);
	this.filterNode.gain.value = this.e.connectors.gain.getIntValue();
    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['AudioObjects','Filter'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.bits = data.bits;
    }

}

AudioObjects['FourierTransform'] = function(x,y,rotation, world){

    this.world = world;

    this.e = new electronicObject(x,y,rotation,{width:75, height:100, parent:this})
    this.bits = 8;
    this.range = Math.pow(2,this.bits)-1;
    this.fftResult = new Uint8Array(256);

    this.filterType = 0;

    if (world!=undefined) {

	world.requestAudio();
	this.measuringNode = world.audioContext.createAnalyser();
	this.measuringNode.fftSize = 512;

	this.e.connectors = {
	'input':new Connector(-this.e.width/2+15, -25, 0, this.e, {connectorType:1,connectionType:2,audioTarget:this.measuringNode,label:'Audio input', lines:1}),
	'takeSample':new Connector(-this.e.width/2+15,  0, 0, this.e, {connectorType:1,connectionType:1,label:'sample', lines:1}),
	'frequencyBinSelect':new Connector(-this.e.width/2+15, 25, 0, this.e, {connectorType:1,connectionType:1,label:'Frequency bin to select (1 - 256)', lines:8})
	};
    }

    this.e.connectors.output =new Connector(this.e.width/2-15, 0, 0, this.e, {connectorType:2,connectionType:1,label:'Output', lines:8})

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.lamps = {};
    this.lampCount = 6;
    for(var i = 0; i<this.lampCount; i++){
	this.lamps[i] = new IndicatorLamp(this,0, 0.5*this.e.height - i*15 -12, 5, {r:Math.round((i/this.lampCount)*255), g:Math.round(255-(i/this.lampCount)*255), b:0}  )
    }
    this.render = function(canvii){
	this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){
		canvii['element-bg'].context.fillText(this.e.xpos, this.e.ypos,'Fourier Transform')
	}

	var a = (this.e.connectors['output'].getIntValue()/this.range)*this.lampCount
	for(var i in this.lamps){
	    this.lamps[i].render(canvii);

	   if (a>i) {
	    this.lamps[i].setValue(255)
	   } else {
	    this.lamps[i].setValue(0)
	   }

	}
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.sampled = false; //Whether a sample has been taken already.
    this.tick = function(){
	this.e.tick();

	if (this.e.connectors['takeSample'].state.get() == 1){
	    if(this.sampled == false) {

		this.sampled = true;
		this.measuringNode.getByteFrequencyData(this.fftResult);
	    }
	} else {
	    if (this.e.connectors['takeSample'].state.get() == 0){
		this.sampled = false;
	    }
	}
	this.e.connectors['output'].setIntValue(this.fftResult[this.e.connectors['frequencyBinSelect'].getIntValue()]);

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['AudioObjects','FourierTransform'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.bits = data.bits;
    }

}
AudioObjects['Oscillator'] = function(x,y,rotation, world){

    this.world = world;
    if (world) {
	if (world.audioContext == undefined) {
	    world.audioContext = new AudioContext();
	}

	this.ctx = world.audioContext;

	//this.ctx = new AudioContext();
    }

    this.imgObj= new Image();
    this.imgObj.src = "./images/audio/waveIcons.png";
    var parent = this;

    this.color = {r:250, g:195, b:3, a:1}
    this.e = new electronicObject(x,y,rotation,{width:75, height:100, parent:this})
    this.on = false;
    this.oscillatorCount = 1;

    //This should be parented;

    this.oscillatorWaveForms = ["sine", "square", "sawtooth", "triangle"];
    this.waveForm = 0;

    this.pulseLength = 4096;
    var pulseA = new Float32Array(this.pulseLength);
    var pulseB = new Float32Array(this.pulseLength);
    var pulseWidth = 0.25;
    for (var i = 0; i < this.pulseLength; i++) {
       pulseA[i] = (Math.sin(2 * Math.PI * i * pulseWidth) / (i * Math.PI));
       pulseB[i] = ((1 - Math.cos(2 * Math.PI * i * pulseWidth)) / (i * Math.PI));
   }

   //Node-net structure:
   this.oscillators = {};
   this.initialiseOscillators = function(){
	this.gainNode = this.ctx.createGain();
	for (var i=0; i<this.oscillatorCount; i++) {

	    this.oscillators[i] = this.ctx.createOscillator();
	    this.oscillators[i].frequency.value = 400;
	    this.oscillators[i].connect(this.gainNode);

	    //this.gainNode.connect(this.world.audioContext.destination);
	     this.oscillators[i].start(0);
	}
   }

   if (world!=undefined) {
    //this.periodicWave = this.world.audioContext.createPeriodicWave(pulseA, pulseB);
    this.initialiseOscillators();
   }

    this.maxBits = 16;
    this.bits = 8;
    this.range = Math.pow(2,this.bits)-1;
    /*
    this.setBitSize = function(b){
	if (this.converter==0) {
	    b=Math.min(b,6);
	}

	this.e.connectors['frequency'].setLineCount(b);
	this.e.connectors['x'].setLineCount(b);
	this.e.connectors['phase'].setLineCount(b);
	this.e.connectors['doutput'].setLineCount(b);
	this.bits = b;
	this.range = Math.pow(2,this.bits)-1;
    }*/
    if (this.world!=undefined) {
	this.e.connectors = {
	    'on':new Connector(-this.e.width/2+10, 0, 0, this.e, {connectorType:1,label:'enable', lines:1}),
	    'frequency':new Connector(-this.e.width/2+10, 30, 0, this.e, {connectorType:1,label:'Frequency', lines:this.bits}),
	    'waveForm':new Connector(-this.e.width/2+10, -30, 0, this.e, {connectorType:1,label:'Wave form', lines:2}),
	    'output':new Connector(this.e.width/2-10, 0, 0, this.e, {connectorType:2,connectionType:2,audioSource:this.gainNode,label:'output', lines:1})
	};
    }
    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }
    this.lamps = []
    for (var i in this.oscillatorWaveForms) {
	this.lamps.push( new IndicatorLamp(this,8, -0.5*this.e.height + 15 + (this.e.height - 30)*(i/(this.oscillatorWaveForms.length-1)),8,this.color) );
    }
    this.lamps[0].setValue(255);

    this.render = function(canvii){
	this.e.render(canvii);
	if( canvii.updateRequired('element-bg') ){

		 LoadImageToCanvas(canvii['element-bg'].context, this.imgObj, this.e.xpos-3, this.e.ypos+this.e.height*0.5-10, 0, 16, 83)

	}

	for (var i in this.lamps) {
	    this.lamps[i].render(canvii);
	}
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();

	if (this.on==false && this.e.connectors['on'].state.get()==1) {
	    this.gainNode.gain.value = 1.0;
	    this.on = true;
	} else if(this.on==true && this.e.connectors['on'].state.get()==0){
	    this.gainNode.gain.value = 0.0;
	    this.on = false;
	}

	this.oscillators[0].frequency.value = mapRangeToFrequency(this.e.connectors.frequency.getIntValue(), this.range);
	//this.gainNode.gain.value = Math.min(1,Math.max(0,this.e.connectors['gain'].state.getFloating()));
	if (this.e.connectors['waveForm'].getIntValue()!=this.waveForm) {
	    this.waveForm = this.e.connectors['waveForm'].getIntValue();
	    for (var i in this.lamps) {
		if (this.waveForm==i) {
		    this.lamps[i].setValue(255);
		} else {
		    this.lamps[i].setValue(0)
		}
	    }

	    for (var i in this.oscillators) {
		this.oscillators[i].type =  this.oscillatorWaveForms[this.waveForm];

	    }

	}

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['AudioObjects','Oscillator'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.bits = data.bits;
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bits of input (precision)', range:{start:1, end:me.parent.maxBits, step:1 },
	    set:function(me, value){
		me.parent.setBitSize(value);
	    }
	};
	return(conf)
    }

}
SimpleIcs['ADC'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
    this.maxBits = 16;
    this.bits = 4;

    this.range = Math.pow(2,this.bits)-1;
    this.setBitSize = function(b){
	if (this.converter==0) {
	    b=Math.min(b,6);
	}

	this.e.connectors['output'].setLineCount(b);
	this.bits = b;
	this.range = Math.pow(2,this.bits)-1;
    }
    this.e.connectors = {
	'output':new Connector(this.e.width/2-10, 0, 0, this.e, {connectorType:2,label:'Digital out', lines:this.bits}),
	'input':new Connector(-this.e.width/2+10, 0, 0, this.e, {connectorType:1,label:'Analog input', lines:1})
    };
    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }
    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	this.e.connectors['output'].setIntValue( (this.e.connectors['input'].state.getFloating())*this.range);

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','ADC'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.bits = data.bits;
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bits of input (precision)', range:{start:1, end:me.parent.maxBits, step:1 },
	    set:function(me, value){
		me.parent.setBitSize(value);
	    }
	};
	return(conf)
    }

}
SimpleIcs['DAC'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:150, height:150, parent:this})
    this.maxBits = 16;
    this.bits = 4;
    this.converter = 0; //1 = mechanical whiffle 0=Digital. Beware: the whiffle does not work in non-render mode as the value depends on the whiffle positions
    this.range = Math.pow(2,this.bits)-1;
    this.setBitSize = function(b){
	if (this.mode==1) {
	    b=Math.min(b,6);
	}

	this.e.connectors['input'].setLineCount(b);
	this.bits = b;
	this.range = Math.pow(2,this.bits)-1;
    }
    this.analogValue = 0; //This is only used in converter mode 0
    this.previousValues = {};
    this.mode = 1; //0 = digital, 1 = mechanical

    this.e.connectors = {
	'output':new Connector(this.e.width/2-10, 0, 0, this.e, {connectorType:2,label:'Analog out', lines:1}),
	'input':new Connector(-this.e.width/2+10, 0, 0, this.e, {connectorType:1,label:'Digital input', lines:this.bits})
    };
    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    /*
    env.strokeStyle="#44584C";
	env.lineWidth = 8;
	env.beginPath();
	env.moveTo(whiffleX+whifleLength, whiffleYstart+2)
	env.lineTo(whiffleX+whifleLength, whiffleYstart+12)
	env.stroke();
	env.shadowColor ='transparent'
	env.lineWidth = 1;
	var g = Math.round(bValue*200);
	var c = Math.round(bValue*20);
	env.strokeStyle="rgb("+c+","+g+","+c+")";
	env.beginPath();
	for (var i=4; i<9; i+=2) {
	    env.moveTo(whiffleX+whifleLength-4, whiffleYstart+i)
	    env.lineTo(whiffleX+whifleLength+4, whiffleYstart+i+1)
	}
	env.stroke();
	env.shadowColor = '#000';

       env.lineWidth = 2;
       */
    this.drawCoil = function(x,y,value,env){
	env.strokeStyle="#44584C";
	env.lineWidth = 8;
	env.beginPath();
	env.moveTo(x, y+2)
	env.lineTo(x, y+12)
	env.stroke();

	env.shadowColor ='transparent'
	env.lineWidth = 1;
	var g = Math.round(value*200);
	var c = Math.round(value*20);
	env.strokeStyle="rgb("+c+","+g+","+c+")";
	env.beginPath();
	for (var i=4; i<9; i+=2) {
	    env.moveTo(x-4, y+i)
	    env.lineTo(x+4, y+i+1)
	}
	env.stroke();
	env.shadowColor = '#000';

       env.lineWidth = 2;
    }

    this.pistonSound = function(index, value){

	var  d= this.previousValues[index]-value;
	if (this.previousValues[index]== undefined || d>0.3){
	    lowLag.play('switch_medium');
	} else  if (d<-0.3) {
	    lowLag.play('switch_small');
	}
	this.previousValues[index] = value
    }
    this.render = function(canvii){
	this.e.render(canvii);

	if (this.mode==0) {
	    this.analogValue = this.e.connectors['input'].getIntValue()/(Math.pow(2,this.bits)-1);
	} else {
	    //All the visualisation is perfomed on element-fg
	    var env = canvii['element-fg'].context;

	    //Whiffletree visualisation :D.
	    var whifleLength = 30;
	    var whiffleHeight = 10;
	    var whiffles = Math.min(this.e.connectors['input'].lines,this.bits-1);
	    var whifflesStartX = this.e.xpos-60;
	    var whiffleBarPct = 0.66;
	    var pistonSize = 5;
	    //We have to work from the bottom to the top; every whiffle is dependent on the other

	    var inputIndex = 0;
	    var bitIndex = 0;
	    var dy = 15;
	     env.lineWidth = 2;
	      env.shadowColor = '#000';
			env.shadowBlur = 3;
			env.shadowOffsetX = 1;
			env.shadowOffsetY = 1;

	    for (var whiffle=0; whiffle<whiffles; whiffle++) {

		var whiffleYstart = this.e.ypos - whiffle*whiffleHeight + 50;
		var whiffleX = whifflesStartX+0.5*whifleLength+whiffle*whiffleBarPct*whifleLength ;

		if (whiffle==0) {
		    var bValue = this.e.connectors['input'].getState(bitIndex).getFloating();
		    var whiffleAY = whiffleYstart - bValue*pistonSize
		    this.pistonSound(bitIndex,bValue)

		    bitIndex++;
		    //Draw the piston:
		    env.strokeStyle="#AAA";
		    env.beginPath();
		    env.moveTo(whiffleX,whiffleAY)
		    env.lineTo(whiffleX,whiffleYstart+2)
		    env.stroke();

		    //Draw the coil:
		    this.drawCoil(whiffleX, whiffleYstart,bValue, env);

		} else {
		    var whiffleAY = whiffleYstart+prevDy;

		    //Draw the piston:
		    env.strokeStyle="#AAA";
		    env.beginPath();
		    env.moveTo(prevX,prevY-3)
		    env.lineTo(whiffleX,whiffleAY)
		    env.stroke();
		}
		inputIndex++;

	       // if (whiffle==0) {
	       var bValue = this.e.connectors['input'].getState(bitIndex).getFloating()
		var whiffleBY = whiffleYstart - bValue*pistonSize;
		this.pistonSound(bitIndex,bValue)
		bitIndex++;
		//Calculate whiffle output height:
		var phi = Math.atan2( whifleLength, whiffleBY-whiffleAY);
		env.strokeStyle="#AAA";
		env.beginPath();
		var dx = (Math.sin(phi)*whifleLength*whiffleBarPct);
		var dy = (Math.cos(phi)*whifleLength*whiffleBarPct);
		env.arc(whiffleX+dx, whiffleAY+dy, 2, 0, 2 * Math.PI, false);
		env.stroke();
		var prevX = whiffleX+dx;
		var prevY = whiffleAY+dy;
		var prevDy = prevY-whiffleYstart;
		inputIndex++;
		 //Draw the piston:
		env.strokeStyle="#AAA";
		env.beginPath();
		env.moveTo(whiffleX+whifleLength,whiffleYstart+2)
		env.lineTo(whiffleX+whifleLength,whiffleBY)
		env.stroke();

		env.lineWidth = 3;
		env.strokeStyle="#B26814";
		env.beginPath();
		env.moveTo(whiffleX,whiffleAY)
		env.lineTo(whiffleX+whifleLength, whiffleBY)
		env.stroke();
	       //Draw coil:
		this.drawCoil(whiffleX+whifleLength, whiffleYstart,bValue, env);

	    }

	    //Draw final piston:
	    env.strokeStyle="#AAA";
	    env.beginPath();
	    env.moveTo(whiffleX,whiffleAY)
	    env.lineTo(whiffleX,whiffleYstart+2)
	    env.stroke();
	    //Calculate the analog value:
	    this.analogValue = -prevDy/pistonSize;
	    env.lineWidth = 1;
	    env.shadowColor ='transparent'
	}
    }
    //0: digital, 1; whiffle
    this.setMode = function(mode){
	if (mode==0 || mode==1 && this.mode!=mode) {
	    this.mode = mode;
	    if (mode==0) {
		this.e.width = 50;
		this.e.height = 50;
	    } else {
		this.e.width = 150;
		this.e.height = 150;
	    }

	    this.e.connectors.input.x = -this.e.width/2+10;
	    this.e.connectors.output.x = this.e.width/2-10;
	    this.e.recalcBoundingCoordinates();

	} else {

	}
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	if (this.converter==0) {
	    this.e.connectors['output'].getState().set( this.analogValue);
	} else {
	    this.e.connectors['output'].getState().set( this.e.connectors['input'].getIntValue()/this.range );
	}

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','DAC'];
	data.bits = this.bits;
	data.mode = this.mode;
	this.e.save(data);
	return(data);

    }

    this.load = function(data){
	this.setBitSize(data.bits);
	this.setMode(data.mode);
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bits of input (precision)', range:{start:1, end:me.parent.maxBits, step:1 },
	    set:function(me, value){
		me.parent.setBitSize(value);
	    }
	};

	conf.mode = {value:me.parent.mode, label:'Mode (0: digital, 1:mechanical)', desciption:'Mode of operation', range:{start:0, end:1, step:1 },
	    set:function(me, value){
		me.parent.setMode(value);
	    }
	};

	return(conf)
    }

}
SimpleIcs['Multiplexer'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:50, height:100, parent:this})
    this.inBusses = 4;
    this.maxInBusses = 16;
    this.maxBits = 16;
    this.bits = 8;
    this.addressSize = 2;
    this.setBitSize = function(value){
	this.bits = value;
	for(var bus=0; bus<this.inBusses; bus++){
	    this.e.connectors['bus_'+bus].setLineCount(this.bits);
	}

    }

    this.e.connectors = {
	    'selector':new Connector(0, 10, 0, this.e, {connectorType:1,label:'Selector', lines:this.addressSize}),
	    'output':new Connector(15, 0, 0, this.e, {connectorType:2,label:'Output', lines:this.bits})
	    };
    this.initBusses = function(){
	//Calculate the required amount of bits for addressing
	this.addressSize = Math.max(1, Math.ceil( Math.log(this.inBusses)/Math.log(2) ));
	this.e.connectors['selector'].setLineCount(this.addressSize);

	this.e.setHeight( 20+this.inBusses*15 ) ; //15 extra for the data selector
	var y = -0.5*this.e.height + 10;
	this.e.connectors['selector'].y = y;
	for(var bus=0; bus<this.inBusses; bus++){
		this.e.connectors['bus_'+bus]=(new Connector(-15, y+(1+bus)*15 , 0, this.e, {connectorType:1,label:'dataIn', lines:this.bits}))
	}

	//Remove all unused connectors:
	var toRemove = []
	for(var bus=this.inBusses; bus<this.maxInBusses; bus++){
		if('bus_'+bus in this.e.connectors){
			toRemove.push('bus_'+bus)
		}
	}
	for(var index in toRemove){
		this.e.connectors[ toRemove[index] ].killMe = true;
		delete this.e.connectors[ toRemove[index] ];

	}
    }
    this.initBusses();

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	var selected = this.e.connectors['selector'].getIntValue()
	if (selected>=0 && selected<this.inBusses) {
	    this.e.connectors['output'].setIntValue(this.e.connectors['bus_'+selected].getIntValue());

	}

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','Multiplexer'];

	data.inBusses = this.inBusses;
	data.bits = this.bits;
	data.addressSize = this.addressSize;

	this.e.save(data);
	return(data);

    }
    this.load = function(data){
	this.inBusses = data.inBusses;
	this.addressSize = data.addressSize;
	this.bits = data.bits;
	this.initBusses();
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bus size to control in bits', range:{start:1, end:me.parent.maxBits, step:1 },
	    set:function(me, value){
		me.parent.setBitSize(value);
	    }
	};

	conf.busses = {value:me.parent.inBusses, label:'Busses in', desciption:'Amount of in busses', range:{start:1, end:16, step:1 },
	    set:function(me, value){
		me.parent.inBusses  = value;
		me.parent.initBusses();
	    }
	};
	return(conf);
    }

}

SimpleIcs['BUS-encoder'] = function(x,y,rotation, world){
    this.e = new electronicObject(x,y,rotation,{width:50, height:100, parent:this});
    this.bits = 8;
    this.maxBits = 32; //Maximum bus encoding size
    this.inWires = this.bits;
    this.e.connectors = { 'output':new Connector(15, 0, 0, this.e, {connectorType:2, label:'Output', lines:this.bits}) };

    this.initWires = function(){

	this.inWires = this.bits;
	this.e.setHeight((this.inWires)*15 +20) ;
	var y = -0.5*this.e.height + 15;
	this.e.connectors['output'].setLineCount(this.bits)
	for(var bit=0; bit<this.inWires; bit++){
	    if('bit_'+bit in this.e.connectors){
		this.e.connectors['bit_' + bit ].x = -15;
		this.e.connectors['bit_' + bit ].y = y+(bit)*15;
	    } else {
		this.e.connectors['bit_'+bit]=(new Connector(-15, y+(bit)*15 , 0, this.e, {connectorType:1,label:'bit '+bit}))
	    }
	}
	//Remove all unused connectors:
	var toRemove = []
	for(var bit=this.inWires; bit<this.maxBits; bit++){
	    if('bit_'+bit in this.e.connectors){
		    toRemove.push('bit_'+bit)
	    }
	}
	for(var index in toRemove){
	    this.e.connectors[ toRemove[index] ].killMe = true;
	    delete this.e.connectors[ toRemove[index] ];

	}

    }
    this.initWires();

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	//Add all inputs:
	var val = 0;
	for(var bit=0; bit<this.bits; bit++){
    this.e.connectors['output'].getState(bit).set(this.e.connectors['bit_'+bit].getState(0).getFloating());

	}
    }
	    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','BUS-encoder'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);
    }

    this.load = function(data){
	this.bits = data.bits;
	this.initWires();
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bus size to control in bits', range:{start:1, end:me.parent.maxBits, step:1 },
			set:function(me, value){
				me.parent.bits  = value;
				me.parent.initWires();
			}
		};
	return(conf);
    }
}
SimpleIcs['BUS-decoder'] = function(x,y,rotation, world){
    this.e = new electronicObject(x,y,rotation,{width:50, height:100, parent:this});
    this.bits = 8;
    this.maxBits = 32; //Maximum bus encoding size
    this.inWires = this.bits;
    this.e.connectors = { 'input':new Connector(-15, 0, 0, this.e, {connectorType:1, label:'input', lines:this.bits}) };

    this.initWires = function(){

	this.inWires = this.bits;
	this.e.setHeight((this.inWires)*15 +20) ;
	var y = -0.5*this.e.height + 15;
	this.e.connectors['input'].setLineCount(this.bits)
	for(var bit=0; bit<this.inWires; bit++){
	    if('bit_'+bit in this.e.connectors){
		this.e.connectors['bit_' + bit ].x = 15;
		this.e.connectors['bit_' + bit ].y = y+(bit)*15;
	    } else {
		this.e.connectors['bit_'+bit]=(new Connector(15, y+(bit)*15 , 0, this.e, {connectorType:2,label:'bit '+bit}))
	    }
	}
	//Remove all unused connectors:
	var toRemove = []
	for(var bit=this.inWires; bit<this.maxBits; bit++){
	    if('bit_'+bit in this.e.connectors){
		    toRemove.push('bit_'+bit)
	    }
	}
	for(var index in toRemove){
	    this.e.connectors[ toRemove[index] ].killMe = true;
	    delete this.e.connectors[ toRemove[index] ];

	}

    }
    this.initWires();

    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	this.e.tick();
	var val = 0;
	for(var bit=0; bit<this.bits; bit++){
	    this.e.connectors['bit_'+bit].getState(0).set(this.e.connectors['input'].getState(bit).getFloating())

	}
    }
	    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','BUS-decoder'];
	data.bits = this.bits;
	this.e.save(data);
	return(data);
    }

    this.load = function(data){
	this.bits = data.bits;
	this.initWires();
    }

    this.e.configure = function(me){
	var conf = {}
	conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Bus size to control in bits', range:{start:1, end:me.parent.maxBits, step:1 },
			set:function(me, value){
				me.parent.bits  = value;
				me.parent.initWires();
			}
		};
	return(conf);
    }
}
SimpleIcs['ALU'] = function(x,y,rotation, world){

    this.e = new electronicObject(x,y,rotation,{width:50, height:100})
    this.bits = 8;
    this.e.connectors = {
	'dataA':new Connector(-15, -30, 0, this.e, {connectorType:1,label:'Data A', lines:this.bits}),
	'dataB':new Connector(-15, 15, 0, this.e, {connectorType:1,label:'Data B', lines:this.bits}),
	'operation':new Connector(-15, -5, 0, this.e, {connectorType:1,label:'Operation', lines:3}),
	'dataOut':new Connector(15, -5, 0, this.e, {connectorType:2,label:'Data out',lines:this.bits}),
	'clock':new Connector(-15, 40, 0, this.e, {connectorType:1,label:'Clock'}),

	'zero':new Connector(15, 20, 0, this.e, {connectorType:2,label:'Zero'}),
	'cin':new Connector(-15, 30, 0, this.e, {connectorType:1,label:'Carry In'}),
	'cout':new Connector(15, 30, 0, this.e, {connectorType:2,label:'Carry Out'})
	//'overflow':new Connector(15, 40, 0, this.e, {connectorType:2,label:'Overflow'})

	};
    this.hit = function(x,y){
	return( this.e.hit(x,y) );
    }

    this.render = function(canvii){
	this.e.render(canvii);
    }

    this.hover = function(x,y){return(this.e.hover(x,y))
    }

    this.tick = function(){
	    this.e.tick();

	//Only do stuff when the clock is high
	if (this.e.connectors['clock'].getState().get()==1) {
	    //Calculate the value for A and B
	    var A = this.e.connectors['dataA'].getIntValue()
	    var B = this.e.connectors['dataB'].getIntValue()
	    //And Cin
	    var cin = 0
	    if (this.e.connectors['cin'].getState(0).get()==1) {
		cin = 1
	    }
	    switch (this.e.connectors['operation'].getIntValue()) {
		case 0:
		    var result = A+B+cin;
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( !noOverflow );
		    break;
		case 1:
		    var result = A-(B+cin);
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( !noOverflow );
		    break;
		case 2:
		    var result = A*B;
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( 0 );
		    break;
		case 3:
		    var result = A/B;
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( 0 );
		    break;
		case 4:
		    var result = (A==B) === true ? 1:0;
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( 0 );
		    break;
		case 5:
		    var result = (A<B) === true ? 1:0;
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( 0 );
		    break;

		case 6:
		    //@Todo: implement this.

		    var result = (A<<B);
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( 0 );
		    break;
		case 7:

		    var result = (A>>B);
		    var noOverflow = this.e.connectors['dataOut'].setIntValue(result);
		    this.e.connectors['cout'].getState(0).set( 0 );
		    break;
	    }

	    if(this.e.connectors['dataOut'].getIntValue()==0){
		 this.e.connectors['zero'].getState(0).set( 1 );

	    } else {
		this.e.connectors['zero'].getState(0).set( 0 );
	    }
	}

    }
    //@TODO ADD LOAD AND SAVE FUNCTIONS
    this.save = function(){
	var data = {};
	data.type = ['SimpleIcs','ALU'];
	this.e.save(data);
	return(data);

    }
}

SimpleIcs['BIN-to-7S'] = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:50, height:25})
	this.e.connectors = {
		'BinaryIn':new Connector(-15, 5, 0, this.e, {connectorType:1,lines:4,label:'Binary in'}),
		'7S':new Connector(0, -5, 0, this.e, {connectorType:2,lines:7,label:'7-Segment'})
		};
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.binTo7D = function(val){

	    if (val==0) {
		return(1+2+4+8+16+32)
	    }
	    if (val==1) {
		return(2+4)
	    }
	    if (val==2) {
		return(1+2+64+16+8)
	    }
	    if (val==3) {
		return(1+2+64+4+8)
	    }
	    if (val==4) {
		return(32+64+2+4)
	    }
	    if (val==5) {
		return(1+32+64+4+8)
	    }
	    if (val==6) {
		return(1+32+64+16+8+4)
	    }
	    if (val==7) {
		return(1+2+4)
	    }
	    if (val==8) {
		return(127)
	    }
	    if (val==9) {
		return(1+2+64+32+4+8)
	    }
	    if (val==10) {
		return(1+2+4+64+32+16)
	    }
	    if (val==11) {
		return(32+64+4+8+16)
	    }
	    if (val==12) {
		return(1+32+16+8)
	    }
	    if (val==13) {
		return(2+64+4+16+8)
	    }
	    if (val==14) {
		return(1+32+64+16+8)
	    }
	    if (val==15) {
		return(1+32+64+16)
	    }
	    return(16+4+8)
	}

	this.tick = function(){
		this.e.tick();
		val = this.e.connectors['BinaryIn'].getIntValue();
		this.e.connectors['7S'].setIntValue(this.binTo7D(val));

	}

	this.load = function(){

	}

	this.save = function(){
		var data = {};
		data.type = ['SimpleIcs','BIN-to-7S'];
		this.e.save(data);
		return(data);

	}
}
Inputs = {};
Inputs.Negative = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:25, height:25,parent:this})
	this.e.connectors = { 'out':new Connector(0, 0, 0, this.e, {connectorType:2}) };

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}
	this.tick = function(){
	    this.e.tick();
	    this.e.connectors['out'].state.set(0);
	}

	this.save = function(){
		var data = {};
		data.type = ['Inputs','Negative'];
		this.e.save(data);
		return(data);
	}
}

Inputs.Positive = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:25, height:25,parent:this})
	this.e.connectors = { 'out':new Connector(0, 0, 0, this.e, {connectorType:2}) };

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}
	this.tick = function(){
	    this.e.tick();
	    this.e.connectors['out'].state.set(1);
	}

	this.save = function(){
		var data = {};
		data.type = ['Inputs','Positive'];
		this.e.save(data);
		return(data);
	}
}
Inputs.Push = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:50, height:50,parent:this})
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

	this.render = function(canvii){
		this.e.render(canvii);

		//@todo: only on change
		if( canvii.updateRequired('element-fg') ){
		    var env = canvii['element-fg'].context;
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

		    //@TODO:move to effects?
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

	}

	this.hover = function(x,y){
	    if (this.e.hover(x,y)) {
		var xstart = this.e.xpos-this.e.switchWidth*0.5+this.switchXoffset;
		var xend = xstart + this.e.switchWidth;
		var ystart =  this.e.ypos-this.e.switchHeight*0.5 - this.switchYoffset;
		var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight - this.switchYoffset;

		if (x>=xstart && x<=xend && y>=ystart && y<=yend) {
		    return('url(./cursors/push_cursor.cur), auto' )
		} else {
		    return(this.e.hover(x,y))
		}
	    }
	   return(false)

	    //return(this.e.hover(x,y))
	}

	this.tick = function(t){
		this.e.tick();

	    if (t==0) {

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

	}

	this.e.click = function(x,y){
		lowLag.play('switch_medium');
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

	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'outA':new Connector(15, -15, 0, this.e, {connectorType:2}), 'outB':new Connector(15, 15, 0, this.e, {connectorType:2})  };
	this.e.switchPosition = 0;

	this.switchXoffset = -3;
	this.e.switchWidth = 20;
	this.e.switchHeight = 30;
	this.switched = false;
	this.world = world;

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);

		if( canvii.updateRequired('element-fg') ){
		    var env = canvii['element-fg'].context;
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

	}

	this.hover = function(x,y){

	    if (this.e.hover(x,y)) {

		var xstart = this.e.xpos-this.e.switchWidth*0.5+this.switchXoffset;
		var xend = xstart + this.e.switchWidth;
		var ystart =  this.e.ypos-this.e.switchHeight*0.5;
		var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight;
		if (x>=xstart && x<=xend && y>=ystart && y<=yend) {
		    if (this.e.switchPosition) {
			return('url(./cursors/push_cursor.cur), auto' )
		    } else {
			return('url(./cursors/push_up_cursor.cur), auto' )
		    }

		} else {
		    return(this.e.hover(x,y))
		}
	    }
	   return(false)
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

	this.updateState = function(){
	    	if(this.e.switchPosition==0){
			this.e.switchPosition=1;
		} else {
			this.e.switchPosition=0;
		}
		console.log(this.e.switchPosition)
		this.e.connectors['outA'].state.set(this.e.switchPosition);
		this.e.connectors['outB'].state.setInv(this.e.switchPosition);
		this.switched = true;
	}

	this.e.click = function(x,y){
		lowLag.play('switch_medium');
		this.parent.updateState();
		this.parent.world.hover(x,y)
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
			if (data.switchPosition===1 || data.switchPosition===0) {
			    this.e.switchPosition  = data.switchPosition;
			    this.updateState();
			}

		}

	}

	this.updateState();
}

Inputs.DipSwitch = function(x,y,rotation, world){

	this.maxBits = 32;
	this.bits = 8;
	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'out':new Connector(15, 0, 0, this.e, {connectorType:2}) };
	this.e.switchPositions = {};

	this.countOffset = 1;
	this.switchXoffset = 10;
	this.e.switchWidth = 5;
	this.e.switchHeight = 20;
	this.e.switchMargin = 10;
	this.e.connectorSpace = 20;
	this.reverse = 0;
	this.world = world;

    this.init = function(){

		this.e.setWidth(this.e.connectorSpace + this.bits*this.e.switchWidth + (this.bits-1)*this.e.switchMargin + this.switchXoffset*2)
		this.e.connectors['out'].setLineCount(this.bits)
		this.e.connectors['out'].x = 0.5*this.e.width - this.e.connectorSpace*0.75;

		this.e.switchPositions = {};
		for(var bitIndex=0; bitIndex<this.bits; bitIndex+=1){
			//copy these formulations also to the render function on change
			var xstart = this.e.xpos-this.e.width*0.5+bitIndex*(this.e.switchWidth+this.e.switchMargin)  +this.e.switchWidth*0.5+this.switchXoffset;
			var xend = xstart + this.e.switchWidth;
			var ystart =  this.e.ypos-this.e.switchHeight*0.5;
			var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight;
			// (not in a function for speed)
			this.e.switchPositions[bitIndex] = {value:0, poly:[{x:xstart, y:ystart},{x:xend, y:ystart},{x:xend, y:yend},{x:xstart, y:yend}]};

		}
    }
	this.init();

	this.recalculateHitBoxes = function(){
		for(var bitIndex=0; bitIndex<this.bits; bitIndex+=1){
			//copy these formulations also to the render function on change
			var xstart = this.e.xpos-this.e.width*0.5+bitIndex*(this.e.switchWidth+this.e.switchMargin)  +this.e.switchWidth*0.5+this.switchXoffset;
			var xend = xstart + this.e.switchWidth;
			var ystart =  this.e.ypos-this.e.switchHeight*0.5;
			var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight;
			// (not in a function for speed)
			this.e.switchPositions[bitIndex].poly = [{x:xstart, y:ystart},{x:xend, y:ystart},{x:xend, y:yend},{x:xstart, y:yend}];
		}
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);

		//@todo: only update on change
		if( canvii.updateRequired('element-fg') ){
		    var env = canvii['element-fg'].context;

		    for(var bitIndex in this.e.switchPositions){

			    //copy these formulations to the init function
			    var xstart = this.e.xpos-this.e.width*0.5+bitIndex*(this.e.switchWidth+this.e.switchMargin)  +this.e.switchWidth*0.5+this.switchXoffset;
			    var xend = xstart + this.e.switchWidth;
			    var ystart =  this.e.ypos-this.e.switchHeight*0.5;
			    var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight;
			    // (not in a function for speed)

			    env.fillStyle = '#FFF';
			    env.font="8pt Arial";
			    env.textAlign = 'center';
			    if (this.reverse==0) {
				env.fillText( (parseInt(bitIndex)+this.countOffset) ,xstart+0.5*this.e.switchWidth, yend+10);
			    } else {
				env.fillText( this.bits-(parseInt(bitIndex)+this.countOffset) ,xstart+0.5*this.e.switchWidth, yend+10);
			    }
			    if(bitIndex==0){

				    env.fillText( "ON" , xstart+this.e.switchWidth*0.25 , ystart-5);

			    }
			    env.beginPath();
			    if (this.e.switchPositions[bitIndex].value) {
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

			    if (this.e.hovering) {

				    env.beginPath();
				    env.moveTo(this.e.switchPositions[bitIndex].poly[0].x, this.e.switchPositions[bitIndex].poly[0].y);
				    env.lineTo(this.e.switchPositions[bitIndex].poly[1].x, this.e.switchPositions[bitIndex].poly[1].y);
				    env.lineTo(this.e.switchPositions[bitIndex].poly[2].x, this.e.switchPositions[bitIndex].poly[2].y);
				    env.lineTo(this.e.switchPositions[bitIndex].poly[3].x, this.e.switchPositions[bitIndex].poly[3].y);
				    env.lineTo(this.e.switchPositions[bitIndex].poly[0].x, this.e.switchPositions[bitIndex].poly[0].y);
				    env.strokeStyle = '#FF3300';
				    env.stroke();

			    }
		    }
		}

	}

	this.hover = function(x,y){

	    //@Todo mouse cursor
	    for(var bitIndex in this.e.switchPositions){

		    if( doPolygonsIntersect([{x:x-1,y:y+1},{x:x+1,y:y-1}],this.e.switchPositions[bitIndex].poly) ){
			    if( this.e.switchPositions[bitIndex].value ){
				return('url(./cursors/push_cursor.cur), auto' )
			    } else {
				return('url(./cursors/push_up_cursor.cur), auto' )
			    }
		    }

	    }
	    return(this.e.hover(x,y))
	}

	this.drag = function(x,y){
		this.recalculateHitBoxes();

	}
	this.tick = function(){
		this.e.tick();
	}

	this.e.click = function(x,y){

		//Find which switch is clicked on;
		for(var bitIndex in this.switchPositions){

			if( doPolygonsIntersect([{x:x-1,y:y+1},{x:x+1,y:y-1}],this.switchPositions[bitIndex].poly) ){
				this.switchPositions[bitIndex].value = !this.switchPositions[bitIndex].value;
				lowLag.play('switch_small');
				//Force update on the mouse cursor:
				this.parent.world.hover(x,y)
			}

			this.connectors['out'].getState(bitIndex).set(this.switchPositions[bitIndex].value);
		}
	}

	this.e.configure = function(me){
		var conf = {}
		conf.bits = {value:me.parent.bits, label:'Bits', desciption:'Amount of switches', range:{start:1, end:me.parent.maxBits, step:1 },
				set:function(me, value){
					me.parent.bits  = value;
					me.parent.init();
				}
			};
		conf.offset = {value:me.parent.countOffset, label:'Offset labels', desciption:'Start labeling with this number', range:{start:0, end:1, step:1 },
				set:function(me, value){
				    me.parent.countOffset  = value;
				}
			};

		conf.reverse = {value:me.parent.reverse, label:'Reverse labels', desciption:'Reverse the labeling order', range:{start:0, end:1, step:1 },
				set:function(me, value){
				    me.parent.reverse  = value;
				}
			};
		return(conf);
	}

	this.save = function(){
		var data = {};
		data.type = ['Inputs','DipSwitch'];
		data.bits = this.bits;
		data.countOffset = this.countOffset;
		data.reverse = this.reverse;
		data.switchPositionValues = []
		for (var bit=0; bit<this.bits; bit++) {
		    data.switchPositionValues[bit] = this.e.switchPositions[bit].value ? 1 : 0;
		}

		this.e.save(data);
		return(data);

	}

	this.load = function(data){
	    if (data.reverse==1) {
		this.reverse = 1;
	    }
	    if (data.countOffset==1) {
		this.countOffset = 1;
	    }

		this.countOffset = data.countOffset;
		this.bits = data.bits;
		this.init();
		if (data.switchPositionValues!=undefined) {
			for (var i=0; i<data.bits; i++) {
			    this.e.switchPositions[i].value = data.switchPositionValues[i];
			    this.e.connectors['out'].getState(i).set(this.e.switchPositions[i].value);
			}
		}
	}
}
Inputs['Selector-knob'] = function(x,y,rotation, world){

	this.maxLines= 16;
	this.lines = 8;
	this.bcd = true; //If false the output will be binary coded
	this.e = new electronicObject(x,y,rotation,{width:75, height:75, parent:this, click:true})
	this.e.connectors = { 'out':new Connector(25, 25, 0, this.e, {connectorType:2}) };
	this.angle=0;
	this.selectedLine = 0;
	this.countOffset = 1;
	this.switchXoffset = 0;
	this.switchYoffset = -3;
	this.markerLength = 3;
	this.e.switchWidth = 30;
	this.e.switchHeight = 20;
	this.e.switchMargin = 10;

	this.e.sweepStart = -0.5*Math.PI;
	this.e.sweepSize = Math.PI;

	this.imgObj= new Image();
	this.imgObj.src = "./images/knobs/selector.png";
	var parent = this;
	this.imageLoaded = false;
	this.imgObj.onload = function(){
		parent.imageLoaded = true;
	}
    this.init = function(){
	this.selectedLine = 0;
	this.angle=0;

	if (this.bcd) {
	    this.e.connectors['out'].setLineCount(this.lines);
	} else {
	    this.e.connectors['out'].setLineCount( Math.ceil(Math.log(this.lines)/Math.log(2)));
	}

	this.updateOutput();
    }

	this.hit = function(x,y){

		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);

		//@todo: only update on change
		if( canvii.updateRequired('element-fg') ){
		    var env = canvii['element-fg'].context;
		    //Draw markers
		    env.strokeStyle = '#FFF';
        env.beginPath();
		    for(var phi=0; phi<=this.e.sweepSize; phi+=this.e.sweepSize/(this.lines-1)){
			angle = this.e.sweepStart-phi;
			var cosA = Math.cos(angle);
			var sinA = Math.sin(angle);
			env.moveTo( this.e.xpos + this.switchXoffset + sinA*this.e.switchWidth,  this.e.ypos + this.switchYoffset + cosA*this.e.switchWidth)
			env.lineTo( this.e.xpos + this.switchXoffset + sinA*(this.e.switchWidth+this.markerLength),  this.e.ypos + this.switchYoffset + cosA*(this.e.switchWidth+this.markerLength) )
		    }
		    env.stroke();

		    if (this.imageLoaded) {
			  env.shadowColor = '#000';
			env.shadowBlur = 3;
			env.shadowOffsetX = 1;
			env.shadowOffsetY = 1;

			var delta = this.targetAngle - this.angle;
			if (delta!=0) {
			    this.angle+= 0.2*delta;
			    if (Math.abs(delta)<0.01) {
				this.angle=this.targetAngle;
			    }
			}

			LoadImageToCanvas(env, this.imgObj, this.e.xpos + this.switchXoffset, this.e.ypos + this.switchYoffset, this.angle, 29.5, 29.5)

			env.shadowColor = 'transparent';
		    }
		}

	}

	this.hover = function(x,y){
	    if( this.e.hover(x,y) ){
		if (Math.sqrt(Math.pow(this.e.xpos-x,2)+Math.pow(this.e.ypos-y,2))<15){
		        return('url(./cursors/rotate_cursor.cur), auto' )
		} else {
		    return(this.e.hover(x,y))
		}
	    }
	    return(false)

	}

	this.drag = function(x,y){

	}

	this.updateOutput = function(){

	    if (this.bcd) {
		    this.e.connectors['out'].setIntValue(Math.pow(2,this.selectedLine));
		} else {
		    this.e.connectors['out'].setIntValue(this.selectedLine);

		}
	    this.targetAngle = this.e.sweepStart + this.e.sweepSize*(this.selectedLine/(this.lines-1));
	}
	this.init();

	this.tick = function(){
		this.e.tick();
	}

	this.click = function(x,y){

	    //Find which switch is clicked on;
	    var line = 0;
	    for(var phi=0; phi<=this.e.sweepSize; phi+=this.e.sweepSize/(this.lines-1)){
		angle = this.e.sweepStart-phi;
		var cosA = Math.cos(angle);
		var sinA = Math.sin(angle);

		var xpos = this.e.xpos + this.switchXoffset + sinA*(this.e.switchWidth+0.5*this.markerLength)
		var ypos = this.e.ypos + this.switchYoffset + cosA*(this.e.switchWidth+0.5*this.markerLength)

		if (Math.sqrt(Math.pow(xpos-x,2)+Math.pow(ypos-y,2))<this.markerLength) {
		    this.selectedLine=line;
		     this.updateOutput();
		    return(line);
		}
		line++;
	    }
	    this.selectedLine+=1;
	    if (this.selectedLine>=(this.lines)) {
		this.selectedLine = 0;

	    }
	    this.updateOutput();

	}

	this.e.configure = function(me){
		var conf = {}
		conf.bits = {value:me.parent.lines, label:'lines', desciption:'Amount lines', range:{start:1, end:me.parent.maxLines, step:1 },
				set:function(me, value){
					me.parent.lines  = value;
					me.parent.init();
				}
			};
		conf.offset = {value:me.parent.countOffset, label:'Offset', desciption:'Start labeling with this number', range:{start:0, end:1, step:1 },
				set:function(me, value){
				    me.parent.countOffset  = value;
				}
			};
			this.bcd
		conf.bcd = {
			value:me.parent.bcd, label:'Line select(1) or Binary(0)', desciption:'Start labeling with this number', range:{start:0, end:1, step:1 },
				set:function(me, value){
				    me.parent.bcd  = value;
				    me.parent.init();
				}
		};

		return(conf);
	}

	this.save = function(){
		var data = {};
		data.type = ['Inputs','Selector-knob'];
		data.countOffset = this.countOffset;
		data.selectedLine = this.selectedLine;
		data.bcd = this.bcd;
		data.lines = this.lines;
		this.e.save(data);
		return(data);

	}

	this.load = function(data){

		this.countOffset = data.countOffset;
		this.bcd = data.bcd;
		this.lines = data.lines;
		this.init();
		if (data.selectedLine) {
			this.selectedLine  = data.selectedLine;
			this.updateOutput();
		}

	}
}

Inputs.Pulse = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'out':new Connector(15, 0, 0, this.e, {connectorType:2,label:'out'}) };
	this.interval = 100;
	this.position = 0;
	this.pulseDuration = 20;

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.setInterval = function(i){
		this.interval = i;
		this.pulseDuration = i/2;
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();

		this.position += 1;
		if(this.position>(this.interval-this.pulseDuration)){
			this.e.connectors['out'].state.set(1);
		} else {
			this.e.connectors['out'].state.set(0);
		}

		if(this.position>this.interval){
			this.position = 0;
		}

	}
	this.save = function(){
		var data = {};
		data.type = ['Inputs','Pulse'];
    data.interval = this.interval;
		this.e.save(data);
		return(data);
	}

	this.load = function(data){
		this.interval = data.interval
	}

	this.e.configure = function(me){
		var conf = {}
		conf.interval = {value:me.parent.interval, label:'Interval', desciption:'Interval of output', range:{start:10, end:1000, step:1 },
				set:function(me, value){ me.parent.setInterval( value ); }
			};
		return(conf);
	}
}
Output['LED'] = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this})
	this.e.connectors = { 'input':new Connector(0, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:3}) };
  this.speedPct = 0.1;
  this.speedMax = 10;
  this.greyValue = 30;
  this.color = {r:0, g:0, b:0};
  this.colorTarget = {r:0, g:0, b:0};

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	this.render = function(canvii){
		this.e.render(canvii);

    var cX = this.e.xpos;
    var cY = this.e.ypos - 10;

    if( canvii.updateRequired('element-bg') ){
        canvii['element-bg'].context.fillStyle = '#333';
        canvii['element-bg'].context.strokeStyle = '#AAA';
        canvii['element-bg'].context.beginPath();
        canvii['element-bg'].context.arc(cX, cY, 8, 0, 2*Math.PI, false);
        if (window.Settings['drawShadows']) {
            canvii['element-bg'].context.shadowColor = '#000';
            canvii['element-bg'].context.shadowBlur = 3;
            canvii['element-bg'].context.shadowOffsetX = 1;
            canvii['element-bg'].context.shadowOffsetY = 1;
        }
        canvii['element-bg'].context.fill();
        canvii['element-bg'].context.stroke();
        canvii['element-bg'].context.shadowColor = 'transparent';
    }

		if( canvii.updateRequired('element-fg') ){
      if(this.color.r+this.color.g+this.color.b > 150){
        var grad = canvii['element-fg'].context.createRadialGradient(cX, cY, 2, cX, cY, 20);
        grad.addColorStop(0,"rgba("+this.color.r+","+this.color.g+","+this.color.b+",0.8)");
        grad.addColorStop(0.5, "rgba("+this.color.r+","+this.color.g+","+this.color.b+",0.5)");
        grad.addColorStop(1, "rgba("+this.color.r+","+this.color.g+","+this.color.b+",0.0)");

        canvii['element-fg'].context.beginPath();
        canvii['element-fg'].context.arc(cX, cY, 20, 0, 2 * Math.PI, false);
        canvii['element-fg'].context.fillStyle = grad;
        canvii['element-fg'].context.fill();

        var v = Math.max(33,Math.min(255, Math.round(this.color.r+this.color.g+this.color.b)*2));
        canvii['element-fg'].context.fillStyle = "rgb("+v+","+v+","+v+")";
        canvii['element-fg'].context.beginPath();
        canvii['element-fg'].context.arc(cX, cY, 4, 0, 2*Math.PI, false);
        canvii['element-fg'].context.fill();
      } else {
        canvii['element-fg'].context.fillStyle = "rgb("+this.color.r+","+this.color.g+","+this.color.b+")";
        canvii['element-fg'].context.beginPath();
        canvii['element-fg'].context.arc(cX, cY, 4, 0, 2*Math.PI, false);
        canvii['element-fg'].context.fill();

      }

		}
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
	    this.e.tick();
	    this.colorTarget.r = Math.min(255, Math.max(0, Math.round( 250 * (this.e.connectors['input'].getState(0).getFloating()) )));
	    this.colorTarget.g = Math.min(255, Math.max(0, Math.round( 250 * (this.e.connectors['input'].getState(1).getFloating()) )));
	    this.colorTarget.b = Math.min(255, Math.max(0, Math.round( 250 * (this.e.connectors['input'].getState(2).getFloating()) )));
	    this.color.r -= Math.min(this.speedMax, Math.max(-this.speedMax, this.speedPct*(this.color.r - this.colorTarget.r)));
	    this.color.g -= Math.min(this.speedMax, Math.max(-this.speedMax, this.speedPct*(this.color.g - this.colorTarget.g)));
	    this.color.b -= Math.min(this.speedMax, Math.max(-this.speedMax, this.speedPct*(this.color.b - this.colorTarget.b)));
	    this.color.r = Math.max(this.greyValue,Math.min(255,Math.round(this.color.r)));
	    this.color.g = Math.max(this.greyValue,Math.min(255,Math.round(this.color.g)));
	    this.color.b = Math.max(this.greyValue,Math.min(255,Math.round(this.color.b)));
	}
	this.save = function(){
		var data = {};
		data.type = ['Output','LED'];
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
Output['Segment-display'] = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:50, height:90})
	this.e.connectors = { 'input':new Connector(0, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:7}) };
	this.segments = [1,1,1,1,1,1,1];

	this.switchXoffset = -3;
	this.yOffset = 10;
	this.e.switchWidth = 20;
	this.e.switchHeight = 50;
	this.segmentWidth = 5;

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.drawGauss = function(centerX,centerY,length,width,angle, env){
	    var k = 20;
	    var grad = env.createRadialGradient(centerX, centerY, 2, centerX, centerY, k);
	    grad.addColorStop(0,"rgba(250,0,0,0.8)");
	    grad.addColorStop(0.5, "rgba(250,0,0,0.5)");
	    grad.addColorStop(1, "rgba(250,0,0,0.0)");

	    env.beginPath();
	    env.arc(centerX, centerY, k, 0, 2 * Math.PI, false);
	    env.fillStyle = grad;
	    env.fill();

	}

	this.drawSegment = function(centerX,centerY,length,width,angle, state, env){
	    //Height of the top and bottom triangle : (tan(45 deg) * (0.5*w))
	    pointHeight = 1.0*(0.5*width);
	    //Rectangle length:
	    k = length-2*pointHeight;

	    if (angle==0) {
		env.beginPath();
		env.moveTo(centerX+0.5*width, centerY+0.5*k);
		env.lineTo(centerX, centerY+length*0.5);
		env.lineTo(centerX-0.5*width, centerY+0.5*k);
		env.lineTo(centerX-0.5*width, centerY-k*0.5);
		env.lineTo(centerX, centerY-length*0.5);
		env.lineTo(centerX+0.5*width, centerY-k*0.5);
		//Back to start
		env.lineTo(centerX+0.5*width, centerY+0.5*k);

	    } else {
		env.beginPath();
		env.moveTo(centerX+0.5*k, centerY+0.5*width);
		env.lineTo(centerX+length*0.5, centerY);
		env.lineTo(centerX+0.5*k, centerY-0.5*width);
		env.lineTo(centerX-k*0.5, centerY-0.5*width);
		env.lineTo(centerX-length*0.5, centerY);
		env.lineTo(centerX-k*0.5, centerY+0.5*width);
		//Back to start
		env.lineTo(centerX+0.5*k, centerY+0.5*width);
	    }
	    if (state==0) {
		env.fillStyle = '#AAA';
		env.strokeStyle = '#000';
		env.fill();
		env.stroke();
	    } else {

		env.fillStyle = '#FCFEFB';
		env.fill();
	    }

	}

	this.render = function(canvii){
		this.e.render(canvii);

		//@todo: only update on change
		if( canvii.updateRequired('element-fg') ){
		    env = canvii['element-fg'].context;
    		env.beginPath();

    		var xstart = this.e.xpos-this.e.switchWidth*0.5+this.switchXoffset;
    		var xend = xstart + this.e.switchWidth;
    		var ystart =  this.e.ypos-this.e.switchHeight*0.5 - this.yOffset;
    		var yend =  this.e.ypos-this.e.switchHeight*0.5+this.e.switchHeight - this.yOffset;
    		var l = Math.abs((ystart-yend)/2)-0;
    		var o = 0.5*this.segmentWidth

    		env.beginPath();
    		env.rect(this.e.xpos-0.5*this.e.width, this.e.ypos-0.5*this.e.height, this.e.width, l*2.8 );
    		env.fillStyle = '#333';
    		env.fill();

		env.strokeStyle = '#000';
        env.lineWidth = 1;

    		if(!this.segments[5]){
    		    this.drawSegment(xstart, ystart+0.5*l, l, this.segmentWidth, 0, 0, env );
    		}
    		if(!this.segments[4]){
    		    this.drawSegment(xstart, ystart+1.5*l, l, this.segmentWidth, 0,  0,env );
    		}
    		if(!this.segments[0]){
    		    this.drawSegment(xstart+0.5*l, ystart+0.5*this.segmentWidth-o, l, this.segmentWidth, 1,  0,env );
    		}
    		if(!this.segments[6]){
    		    this.drawSegment(xstart+0.5*l, ystart+0.5*this.segmentWidth+l-o, l, this.segmentWidth, 1,  0,env );
    		}
    		if(!this.segments[3]){
    		    this.drawSegment(xstart+0.5*l, ystart+0.5*this.segmentWidth+l*2-o, l, this.segmentWidth, 1,  0,env );
    		}
    		if(!this.segments[1]){
    		    this.drawSegment(xstart+l, ystart+0.5*l, l, this.segmentWidth, 0,  0,env );
    		}
    		if(!this.segments[2]){
    		    this.drawSegment(xstart+l, ystart+1.5*l, l, this.segmentWidth, 0,  0,env );
    		}
    		if(this.segments[5]){
    		    this.drawGauss(xstart, ystart+0.5*l, l, this.segmentWidth, 0, env );
    		}
    		if(this.segments[4]){
    		    this.drawGauss(xstart, ystart+1.5*l, l, this.segmentWidth, 0, env );
    		}
    		if(this.segments[0]){
    		    this.drawGauss(xstart+0.5*l, ystart+0.5*this.segmentWidth-o, l, this.segmentWidth, 1, env );
    		}
    		if(this.segments[6]){
    		    this.drawGauss(xstart+0.5*l, ystart+0.5*this.segmentWidth+l-o, l, this.segmentWidth, 1, env );
    		}
    		if(this.segments[3]){
    		    this.drawGauss(xstart+0.5*l, ystart+0.5*this.segmentWidth+l*2-o, l, this.segmentWidth, 1, env );
    		}
    		if(this.segments[1]){
    		    this.drawGauss(xstart+l, ystart+0.5*l, l, this.segmentWidth, 0, env );
    		}
    		if(this.segments[2]){
    		    this.drawGauss(xstart+l, ystart+1.5*l, l, this.segmentWidth, 0, env );
    		}

    		if(this.segments[5]){
    		    this.drawSegment(xstart, ystart+0.5*l, l, this.segmentWidth, 0, 1, env );
    		}
    		if(this.segments[4]){
    		    this.drawSegment(xstart, ystart+1.5*l, l, this.segmentWidth, 0,  1,env );
    		}
    		if(this.segments[0]){
    		    this.drawSegment(xstart+0.5*l, ystart+0.5*this.segmentWidth-o, l, this.segmentWidth, 1,  1,env );
    		}
    		if(this.segments[6]){
    		    this.drawSegment(xstart+0.5*l, ystart+0.5*this.segmentWidth+l-o, l, this.segmentWidth, 1,  1,env );
    		}
    		if(this.segments[3]){
    		    this.drawSegment(xstart+0.5*l, ystart+0.5*this.segmentWidth+l*2-o, l, this.segmentWidth, 1,  1,env );
    		}
    		if(this.segments[1]){
    		    this.drawSegment(xstart+l, ystart+0.5*l, l, this.segmentWidth, 0,  1,env );
    		}
    		if(this.segments[2]){
    		    this.drawSegment(xstart+l, ystart+1.5*l, l, this.segmentWidth, 0,  1,env );
    		}
    		}
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.tick = function(){
		this.e.tick();

		for(var i in this.segments){
		    this.segments[i] = (this.e.connectors.input.getState(i).get()==1)
		}

		/*
		if (Math.random()*100 > 99) {
		    var i = Math.round( Math.random()*6 );
		    this.segments[i] = !this.segments[i];
		}**/
	}

	this.save = function(){
		var data = {};
		data.type = ['Output','Segment-display'];
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
Inputs['Keyboard'] = function(x,y,rotation, world){

	this.keyboardImgLoaded = false;
	this.keyboardImg = new Image();
	this.keyboardImg.src = "./images/keyboard/keyboard.png";
	var parent = this;

	this.plug = 1; //0 is loose lines, 1: din bus

	this.save = function(){
		var data = {};
		data.type = ['Inputs','Keyboard'];
		this.e.save(data);
		return(data);
	}

	this.world = world;
	this.e = new electronicObject(x,y,rotation,{width:125, height:75,parent:this})

	this.ioRXstart = -43;
	this.ioY = -20;
	if (this.plug==0) {
	    for(var bit=0; bit<7; bit++){
		    this.e.connectors['R'+bit] = new Connector(this.ioRXstart+bit*12, this.ioY, 0, this.e, {connectorType:2,label:'R'+bit} )
	    }
	} else {
	    var bit=0;
	    this.e.connectors['R'] = new Connector(this.ioRXstart+bit*12, this.ioY, 0, this.e, {connectorType:2,label:'Readout',lines:7} )
	}

	this.e.connectors['C'] = new Connector(this.ioRXstart+bit*12+15, this.ioY, 0, this.e, {connectorType:2,label:'R'+bit} )
	this.render = function(canvii){
	    this.e.render(canvii);
	    if( canvii.updateRequired('element-bg') ){

			LoadImageToCanvas(canvii['element-bg'].context, this.keyboardImg, this.e.xpos+50, this.e.ypos+35, 0, 100, 35)

	    }
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	this.pressedWasFalse = false;
	this.tick = function(){
		this.e.tick();
		if (!this.pressed) {
		    this.pressedWasFalse = true;
		} else {
		    this.pressedWasFalse = false;
		}
		this.pressed = false;
		this.shift = false;
		if (this.world.isSelected(this.worldId)) {
		    for (keyIndex in pressedKeys) {

			if (keyIndex in ASCII || keyIndex in KEY_TO_ASCII || keyIndex in SHIFT_KEY_TO_ASCII) {
			    var q = keyIndex
			    if (q==16) {
				this.shift = true;
			    } else {
				this.pressed = true;

				if (this.shift && q!=16){
				    if (q in SHIFT_KEY_TO_ASCII) {
					q = ASCII.indexOf(SHIFT_KEY_TO_ASCII[q]);

				    } else {

				    }
				} else {
				    if (q in KEY_TO_ASCII) {
				    q = ASCII.indexOf(KEY_TO_ASCII[q]);

				}

				}

				for(var bit=0; bit<7; bit++){
					this.e.connectors['R'].getState(bit).set(q & (1<<bit));

				}
				if (this.pressedWasFalse) {

				    if (keyIndex==13) {
					//13 is carriage return:
					lowLag.play('key_carriage');
				    } else {

					lowLag.play('key_' + (Math.round(Math.random()*3)+1))
				    }
				}
			    }
    			}
			if (q!=16) {
			    break;
			}

		    }

    		}
		if (this.pressed==true) {
		   this.e.connectors['C'].state.set(1)
		} else {
		    this.e.connectors['C'].state.set(0)
		}

	}
}
BasicGates.Random = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this});
  this.bits = 8;
	this.e.connectors = {
    'out':new Connector(15, 0, 0, this.e, {connectorType:2, lines:this.bits}),
    'clock':new Connector(-15, 0, 0, this.e, {connectorType:1})
  };
	this.render = function(canvii){
		this.e.render(canvii);
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.tick = function(){
		this.e.tick();
    if(this.e.connectors['clock'].state.get()==1){
  		for(bit=0; bit<this.bits; bit++){
        this.e.connectors['out'].getState(bit).set(Math.round(Math.random()));
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

BasicGates.EdgeTrigger = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:50, height:50, parent:this});
	this.e.connectors = {

	    'in':new Connector(-15, -15, 0, this.e, {connectorType:1, label:"Input signal"}),
	    'edgeType':new Connector(-15, 15, 0, this.e, {connectorType:1, label:"Edge type"}),
	    'out':new Connector(15, 0, 0, this.e, {connectorType:2, label:"Output"})

	};
	this.pulseDuration = 20;
	this.pulsing = 0;
	this.edgeTrigger = new EdgeTrigger(this.e.connectors['in'].state, 0);
	this.render = function(canvii){
		this.e.render(canvii);
		if (canvii.updateRequired('element-fg')) {
		    var arrowHeightHalf = 10;
		    canvii['element-fg'].context.beginPath();
		    canvii['element-fg'].context.moveTo(this.e.xpos,this.e.ypos+arrowHeightHalf);
		    canvii['element-fg'].context.lineTo(this.e.xpos,this.e.ypos-arrowHeightHalf);
		    canvii['element-fg'].context.strokeStyle="#222";
		    canvii['element-fg'].context.stroke();

		    var arrowWidthHalf = 5;
		    var arrowKerning = 5;

		    canvii['element-fg'].context.beginPath();
		    canvii['element-fg'].context.moveTo(this.e.xpos-arrowWidthHalf,this.e.ypos+(arrowHeightHalf-arrowKerning)*(this.edgeTrigger.edgeType ? -1 : 1));
		    canvii['element-fg'].context.lineTo(this.e.xpos,this.e.ypos+arrowHeightHalf*(this.edgeTrigger.edgeType ? -1 : 1));
		    canvii['element-fg'].context.lineTo(this.e.xpos+arrowWidthHalf,this.e.ypos+(arrowHeightHalf-arrowKerning)*(this.edgeTrigger.edgeType ? -1 : 1));
		    canvii['element-fg'].context.strokeStyle="#222";
		    canvii['element-fg'].context.stroke();
		}
	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.tick = function(){
	    this.e.tick();
	    if( this.edgeTrigger.update() ){
		this.pulsing = this.pulseDuration;
	    }
	    if (this.pulsing>0) {

		this.e.connectors['out'].state.set(1);
		this.pulsing--;
	    } else {
		this.e.connectors['out'].state.set(0);
	    }

	    this.edgeTrigger.setEdgeType( this.e.connectors['edgeType'].state.get() );

	}

	this.save = function(){
		var data = {};
		data.type = ['BasicGates','EdgeTrigger'];
		this.e.save(data);
		return(data);

	}
}
function mod(m, n) {
        return ((m % n) + n) % n;
}

Miscellaneous = {};

Miscellaneous['Rotary-counter'] = function(x,y,rotation, world){
    this.e = new electronicObject(x,y,0,{width:150, height:100,parent:this})
	this.bits = 16;
	this.e.connectors = {
	'reset':new Connector(30, 25, 0, this.e, {connectorType:1,label:'Reset'}),
	'time':new Connector(15, 25, 0, this.e, {connectorType:1,label:'+Time'}),
	'+1':new Connector(0, 25, 0, this.e, {connectorType:1,label:'+1'}),

	'w_add':new Connector(-15, 25, 0, this.e, {connectorType:1,label:'Add value',lines:this.bits}),
	'w_current':new Connector(-30, 25, 0, this.e, {connectorType:1,label:'Write total value',lines:this.bits}),
	'r_current':new Connector(-45, 25, 0, this.e, {connectorType:2,label:'Read Current value',lines:this.bits})

	};

    this.digits = 6;
    this.position = 0;
    this.countState = new State();
    this.countState.set(0)

	this.countAddingState = new State();
	this.countAddingState.set(0);

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

    this.render = function(canvii){

	this.e.render(canvii);
	var canvas = canvii['element-fg'].context; //@todo optimise

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
		this.countAddingState.tick();

		var changed = false;
		this.e.tick();
		if (this.e.connectors['+1'].state.get()==1) {
			this.countState.set(1)
			changed =  true;
		}
		if (this.e.connectors['+1'].state.get()==0 && this.countState.get()==1) {
			this.countState.set(0);
			this.add(1);
			changed =  true;
		}
		if (this.e.connectors['time'].state.get()==1) {
			this.add(1);
			changed =  true;
		}

		if (this.e.connectors['reset'].state.get()==1) {
			this.goTo(0);
			changed =  true;
		}

		if (this.e.connectors['w_current'].getIntValue()>0) {

			this.goTo(this.e.connectors['w_current'].getIntValue());
			changed =  true;
		}

		if (this.e.connectors['w_add'].getIntValue()>0) {
			this.countAddingState.set(1)
			this.adding = this.e.connectors['w_add'].getIntValue();

		} else {
			if(this.countAddingState.get()==1){
				this.countAddingState.set(0);
				this.add(this.adding);
				changed =  true;
			}
		}
		if(changed){
			//Calculate current value
			this.e.connectors['r_current'].setIntValue(this.position)
		}
    }
    	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.save = function(){
		var data = {};
		data.type = ['Miscellaneous','Rotary-counter'];
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
//To store the tape data in a string :).
function Uint8ToString(u8a){
  var CHUNK_SZ = 0x8000;
  var c = [];
  for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
    c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
  }
  return c.join("");
}

Miscellaneous['Dekatron'] = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:150, height:150});
	this.decades = 9;
	this.position = 0;
	this.direction = 0;

	this.e.connectors = {
	    'Left':new Connector(-30, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:1}),
	    'Right':new Connector(30, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:1}),
	    'Output':new Connector(60, this.e.height/2 - 10, 0, this.e, {connectorType:2, lines:9, label:"Output"}),
	    'Set':new Connector(-60, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:9, label:"Set value"}),
	    };
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.drawGauss = function(centerX,centerY,length,width,angle, env){
	    var k = 20;
	    var grad = env.createRadialGradient(centerX, centerY, 2, centerX, centerY, k);
	    grad.addColorStop(0,"rgba(250,0,0,0.8)");
	    grad.addColorStop(0.5, "rgba(250,0,0,0.5)");
	    grad.addColorStop(1, "rgba(250,0,0,0.0)");

	    env.beginPath();
	    env.arc(centerX, centerY, k, 0, 2 * Math.PI, false);
	    env.fillStyle = grad;
	    env.fill();

	}

	this.setDecadeCount = function(val){
	    this.e.connectors['Output'].setLineCount(val);
	    this.decades = val;
	    this.position = Math.floor(Math.random()*this.decades)*3 //Initialisation is random but will always be on a MAIN pin

	}
	this.setDecadeCount(this.decades);
	this.render = function(canvii){
		this.e.render(canvii);
		var dekatronRadius = 62;
		var cathodeRadius = 33;
		var centerX = this.e.xpos;
		var centerY = this.e.ypos-8;

		//Draw the dekatron base
		if (canvii.updateRequired('element-bg')) {
		    var grad = canvii['element-bg'].context.createRadialGradient(centerX, centerY, 2, centerX, centerY, dekatronRadius);
		    grad.addColorStop(0,"#6F562E");
		    grad.addColorStop(0.07,"#6F562E");
		    grad.addColorStop(0.10, "#AAA");
		    grad.addColorStop(0.12, "#60482C");
		    grad.addColorStop(0.20, "#60482C");
		    grad.addColorStop(0.30, "#AAA");
		    grad.addColorStop(0.32, "#222");
		    grad.addColorStop(0.40, "#6F562E");
		    grad.addColorStop(0.65, "#6F562E");
		    grad.addColorStop(0.67, "#DDD");
		    grad.addColorStop(0.68, "#666");
		    grad.addColorStop(0.70, "#60482C");
		    grad.addColorStop(0.80, "#907856");
		    grad.addColorStop(0.90, "#BFA278");
		    grad.addColorStop(0.91, "#DDD");
		    grad.addColorStop(0.92, "#6F562E");
		    grad.addColorStop(0.96, "#222");
		    grad.addColorStop(1, "#6F562E");
		    canvii['element-bg'].context.beginPath();
		    canvii['element-bg'].context.arc(centerX, centerY, dekatronRadius, 0, 2 * Math.PI, false);
		    canvii['element-bg'].context.fillStyle =grad
		    canvii['element-bg'].context.fill();
		}
		//@todo: optimise
		var env = canvii['element-fg'].context;
		//Every main cathode has 2 guides, guide 1 and guide 2.This means we require 3*decades cathode pins to show
		for (var i=0; i<this.decades*3; i++) {
		    var phi = i*(Math.PI*2 / (this.decades*3))
		    var x = centerX+Math.sin(phi)*cathodeRadius
		    var y = centerY+Math.cos(phi)*cathodeRadius

		    env.beginPath();
		    env.arc(x, y, 1, 0, 2 * Math.PI, false);
		    env.fillStyle = '#666'
		    env.fill();
		    env.strokeStyle = '#111'
		    env.stroke();

		    //Draw the plasma glow
		    if (i == Math.floor(this.position)) {

			var grad = env.createRadialGradient(x+Math.random(), y+Math.random(), 2, x+Math.random(), y+Math.random(), 5);

			grad.addColorStop(0.021,"rgba(237,189,251,0.8)");
			grad.addColorStop(0.3,"rgba(237,189,251,"+ (Math.random()*0.3+0.7)+")" );
			grad.addColorStop(0.5,"rgba(217,148,239,"+ (Math.random()*0.5+0.3)+")");
			grad.addColorStop(1,"rgba(209,146,237,0.1)");
			env.beginPath();
			env.arc(x, y, 5, 0, 2 * Math.PI, false);
			env.fillStyle =grad
			env.fill();

			env.beginPath();
			env.arc(x, y, 1, 0, 2 * Math.PI, false);
			env.fillStyle = 'rgba(80,80,80,0.9)'
			env.fill();
			env.strokeStyle =  'rgba(80,80,80,0.9)'
			env.stroke();

		    }

		}

	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}
	this.lstate = 0;
	this.rstate = 0;
	this.updatePosition = function(force){

	    if (force || this.position%3!=0 ){
		this.position+=this.direction;
		if(this.position<0){
		    this.position=(this.decades*3)+this.position-1
		}
		if (this.direction==1) {
		    this.position = this.position%(this.decades*3);
		} else {

		}

		/*
		if(this.position==(this.decades*3)){
			this.position=0;
		    }*/

		this.e.connectors['Output'].setIntValue(0);

		if (this.position%3==0) {

		    var enable = Math.round(this.position/3);

		    if (enable==this.decades) {
			enable = 0
		    }
		    this.e.connectors['Output'].getState(enable).set(1);
		}
	    }
	}
	this.tick = function(){
	    this.e.tick();
	    if (this.position%3!=0 && Math.random()>0.5) {
		this.updatePosition(true)
	    }

	    if (this.e.connectors['Right'].state.get()==1){
		if (this.rstate == 0) {
		    this.direction = 1;
		    this.rstate = 1;
		    this.updatePosition(true);
		}

	    } else {
		this.rstate = 0;
	    }

	    if (this.e.connectors['Left'].state.get()==1) {
		if ( this.lstate == 0) {
		    this.direction = -1;
		    this.lstate = 1;
		    this.updatePosition(true);

		}
	    }else {
		    this.lstate = 0;
		}

	    if (this.e.connectors['Set'].getIntValue()>0) {
		//Get enabled line:
		for(var i=0; i<this.decades; i++){
		    if( this.e.connectors['Set'].getState(i).get()==1){
			this.position = i*3;
			this.updatePosition(true);
			return(true);
		    }
		}
	    }
	}
	this.save = function(){
		var data = {};
		data.type = ['Miscellaneous','Dekatron'];
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
Miscellaneous['Modem'] = function(x,y,rotation, world){

	this.e = new electronicObject(x,y,rotation,{width:150, height:150,parent:this});
	this.selfNumber = "0";
	this.callingNumber = "";
	this.dialPosition = 0;
	this.dialTarget = 0; this.dialTargetDigit = 0;
	this.dialVector = 0;
	this.dialLetGoWait = 0;
	this.showhover = false;
	this.dialInTransit = false;
	this.dialReturning = false;
	this.hoveringIndex = -1;
	this.dialNumberRadius = 38;

	this.e.connectors = {
	    'dataIn':new Connector(-60, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:8, label:'data in'}),
	    'dataOut':new Connector(60, this.e.height/2 - 10, 0, this.e, {connectorType:2, lines:8, label:'data out'}),
	    'dialDigit':new Connector(-20, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:4, label:'dial digit'}),
	    'dialExec':new Connector(0, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:1, label:'execute dial'}),
	    'openConnection':new Connector(-40, this.e.height/2 - 10, 0, this.e, {connectorType:1, lines:1, label:'open connection'}),
	    'busy':new Connector(40, this.e.height/2 - 10, 0, this.e, {connectorType:2, lines:1, label:'busy'}),
	    'incomingCall':new Connector(20, this.e.height/2 - 10, 0, this.e, {connectorType:2, lines:1, label:'incoming call'})
	    };
	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}

	this.dialImageLoaded = false;
	this.dialImage = new Image();
	this.dialImage.src = "./images/modem/dial.png";
	var parent = this;

	this.plateImageLoaded= false;
	this.plateImage = new Image();
	this.plateImage.src = "./images/modem/plate.png";
	var parent = this;

	this.dialToIndex = function(index){

	    //You can only dial a number when not in transit.
	    if (!this.dialInTransit) {
		//this.callingNumber
		var digit = 0;
		if(index>0){
		    digit = 10 - index;
		}
		console.log(index)
		this.dialTargetDigit = digit;
		this.dialInTransit = true;
		this.dialReturning = false;

		this.dialTarget = (9-index)*(Math.PI*2*0.83/10) +0.95
		console.log(this.dialTarget)
	    }
	}

	this.render = function(canvii){
		this.e.render(canvii);
		var dialRadius = 62;
		var centerX = this.e.xpos;
		var centerY = this.e.ypos-8;

		//Draw the modem base
		if (canvii.updateRequired('element-bg')) {
		    var env = canvii['element-bg'].context;
		    var grad = env.createRadialGradient(centerX, centerY, 2, centerX, centerY, dialRadius);
		    grad.addColorStop(0,"#DDD");
		    grad.addColorStop(0.67, "#DDD");
		    grad.addColorStop(0.80, "#666");
		    //grad.addColorStop(0.70, "#60482C");
		    //grad.addColorStop(0.80, "#907856");
		    grad.addColorStop(0.90, "#BFA278");
		    grad.addColorStop(0.91, "#DDD");
		    grad.addColorStop(0.92, "#6F562E");
		    grad.addColorStop(0.96, "#222");
		    grad.addColorStop(1, "#6F562E");
		    env.beginPath();
		    env.arc(centerX, centerY, dialRadius, 0, 2 * Math.PI, false);
		    env.fillStyle =grad
		    env.fill();
		}
		var env = canvii['element-fg'].context;

		    //+ this.spindelA.x this.spindelA.y
		    LoadImageToCanvas(env, this.plateImage, centerX, centerY,  0, 52.5, 52.5)

		    env.shadowColor = '#000';
		    env.shadowBlur = 3;
		    env.shadowOffsetX = 1;
		    env.shadowOffsetY = 1;
		    LoadImageToCanvas(env, this.dialImage, centerX, centerY,  this.dialPosition, 52.5, 52.5)
			env.shadowColor = "transparent";
			//this.dialPosition+= 0.01;

	    		//The dial disc has 10 numbers (1 -> 9 -> 0)
		if (this.showhover && this.hoveringIndex!=-1 && this.dialInTransit==false) {

			var phi =  0.9 - ( this.hoveringIndex * (0.83*Math.PI*2/10) ) - this.dialPosition
			var x = centerX+Math.sin(phi)*this.dialNumberRadius;
			var y = centerY+Math.cos(phi)*this.dialNumberRadius;

			env.beginPath();
			env.arc(x, y, 9, 0, 2 * Math.PI, false);
			env.strokeStyle = 'rgba(100,50,50,0.6)'
			env.stroke();
		}
		if (window.Settings['drawShadows']) {
		    env.shadowColor = '#000';
		    env.shadowBlur = 3;
		    env.shadowOffsetX = 1;
		    env.shadowOffsetY = 1;
		}

		env.beginPath();
		var offsetX = centerX + this.dialNumberRadius -18
		var offsetY = centerY+7;
		env.moveTo(offsetX+8, offsetY)
		env.lineTo(offsetX+15, offsetY+3)
		env.lineTo(offsetX+35, offsetY+4)
		env.lineTo(offsetX+35, offsetY+7)
		env.lineTo(offsetX+17, offsetY+5)
		env.lineTo(offsetX+10, offsetY+4)

		env.fillStyle='#AAA';
		env.fill();
		env.shadowColor = "transparent";

	}

	this.getDigitIndex = function(x,y){

	    var centerX = this.e.xpos;
	    var centerY = this.e.ypos-8;

	    for (var i=0; i<10; i++) {
		var phi = 0.9 - ( i * (0.83*Math.PI*2/10) )
		var xc = centerX+Math.sin(phi)*this.dialNumberRadius;
		var yc = centerY+Math.cos(phi)*this.dialNumberRadius;

		if (Math.sqrt( Math.pow(x-xc, 2)+ Math.pow(y-yc, 2))<9) {
		    return(i)
		}

	    }
	    return(-1);
	}

	this.hover = function(x,y){
	    var h = this.e.hover(x,y);
	    if (this.dialInTransit == false && h) {
		this.hoveringIndex = this.getDigitIndex(x,y)
	    } else {
		this.hoveringIndex = -1;
	    }

	}

	this.e.click = function(x,y){
	    var d = this.parent.getDigitIndex(x,y);
	    if (d!=-1) {

		this.parent.dialToIndex(d)
	    }

	}
	this.passPlayed = false;

	this.execState = 0;
	this.tick = function(){
	    this.e.tick();

	    if (this.e.connectors['dialExec'].state.get()==1) {
		if ( this.execState==0) {
		     this.execState=1;
		     var v = this.e.connectors['dialDigit'].getIntValue();
		     var d = 0;
		     if (v>0) {
			d = 10-v;
		     }
		     if (d<0 || d>9) {
			//Invalid digit :O.
		     } else {
			this.dialToIndex( d );
		     }
		}
	    } else {
		this.execState=0;
	    }
	    if (this.dialInTransit) {

		    if (this.dialReturning) {

			if (this.dialLetGoWait==0) {
			    var delta = this.dialPosition - this.dialTarget;
			    if (delta) {
				this.dialPosition -= Math.min(delta, 0.1)

				if (this.passPlayed==false){
				    this.passPlayed =true;
				     lowLag.play('rotary_dialing_pass');
				}

			    } else {
				lowLag.play('rotary_dialing');
				this.dialReturning = false;
				this.dialInTransit = false;
				this.passPlayed = false;
			    }
			} else {
			    this.dialLetGoWait-=1;
			}
		    } else {

			var delta = this.dialTarget - this.dialPosition;
			if (delta) {
			    this.dialPosition += Math.min(delta, 0.15)
			} else {
			    this.dialReturning = true;
			    this.dialTarget = 0;
			    this.dialLetGoWait = 50;
			}

		    }

		}
	}
	this.save = function(){
		var data = {};
		data.type = ['Miscellaneous','Modem'];
		data.switchPosition = this.e.switchPosition;
		this.e.save(data);
		return(data);

	}

	this.load = function(data){
	}
}
Miscellaneous['Tape-drive'] = function(x,y,rotation, world){

	this.backplaneLoaded = false;
	this.backplane = new Image();
	this.backplane.src = "./images/tapedrive/backplane.png";
	var parent = this;


	this.on = false;
	this.forward = true;
	this.backward = false;

	this.write = false; //If write is false, then read is true

	this.spindelImageLoaded = false;
	this.spindelImage = new Image();
	this.spindelImage.src = "./images/tapedrive/spindel.png";
	var parent = this;

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
	/*
	for(var bit=0; bit<this.tapeBitWidth; bit++){

		this.e.connectors['W'+bit] = new Connector(this.ioWXstart+bit*12, this.ioY, 0, this.e, {connectorType:1,label:'W'+bit} )
		this.e.connectors['R'+bit] = new Connector(this.ioRXstart+bit*12, this.ioY, 0, this.e, {connectorType:2,label:'R'+bit} )
	}*/
	this.e.connectors['W'] = new Connector(this.ioWXstart, this.ioY, 0, this.e, {connectorType:1,label:'Write', lines:this.tapeBitWidth} )
	this.e.connectors['R'] = new Connector(this.ioRXstart, this.ioY, 0, this.e, {connectorType:2,label:'Read', lines:this.tapeBitWidth} )
	this.e.connectors['OnByte'] = new Connector( 0.5*(this.ioWXstart+this.ioRXstart), this.ioY, 0, this.e, {connectorType:2,label:'on byte', lines:1} )

	this.initialiseTapeData = function(){

		this.data = new Uint8Array(this.size);
	}
	//Initialise the tape...
	this.initialiseTapeData();

	//this.e.connectors['Input'].state.set(-1);
	this.render = function(canvii){

		//Draw the background image
		if (canvii.updateRequired('element-bg')) {
		    var env = canvii['element-bg'].context;


			    this.imageXoffset = -100;
			    this.imageYoffset = -80;

			    LoadImageToCanvas(env, this.backplane, this.e.xpos, this.e.ypos,  0, 200 + this.imageXoffset, 175 + this.imageYoffset)

		}

		//Draw the spindels:
		if (canvii.updateRequired('element-fg')) {
		    var env = canvii['element-fg'].context;
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

					    //+ this.spindelA.x this.spindelA.y
			    LoadImageToCanvas(env, this.spindelImage, this.e.xpos+this.spindelA.x+27.5, this.e.ypos-this.spindelA.y-27.5,  this.spindelHeading, 27.8, 27.8)
			    LoadImageToCanvas(env, this.spindelImage, this.e.xpos+this.spindelB.x+27.5, this.e.ypos-this.spindelB.y-27.5,  this.spindelHeading+0.3, 27.8, 27.8)

		}

		this.e.render(canvii, true);

	}

	this.hover = function(x,y){return(this.e.hover(x,y))
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

				this.e.connectors['R'].getState(bit).set(this.data[pos] & (1<<bit));

			}
			this.e.connectors['OnByte'].getState().set(1);
		} else {
		    this.e.connectors['OnByte'].getState().set(0);
			for(var bit=0; bit<this.tapeBitWidth; bit++){
				this.e.connectors['R'].getState(bit).set(-1);
			}
		}
	}

	this.write = function(){
		var pos = this.getHeadBytePosition();
		if (pos!=-1) {
			for(var bit=0; bit<this.tapeBitWidth; bit++){
				var val = this.e.connectors['W'].getState(bit).get();
				if (val>0) {
					this.data[pos] = this.data[pos] | (1<<bit);
				} else {
					this.data[pos] = this.data[pos] & ~(1<<bit);
				}
			}
		}

	}
	this.tick = function(v){
		this.e.tick();
		if (v%4==0) {

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
	}

	this.save = function(){
		var data = {};
		data.type = ['Miscellaneous','Tape-drive'];
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

		this.data = new Uint8Array(atob(data.tapeData).split("").map(function(c) {return c.charCodeAt(0); }));

	}
	this.e.configure = function(me){
		//Me is electronic object in this case :). (The base of the tape drive basically), me.parent is the tape drive itself
		var conf = {}

		conf.tapeLength = {value:me.parent.size, label:'Tape length', desciption:'Length of the tape in bytes', range:{start:8, end:10000, step:8},
				set:function(me, value){ me.parent.position = 0; me.parent.size=value; }
			};

		conf.defaultSpeed = {value:me.parent.defaultSpeed, label:'Default speed', desciption:'The tapedrive will run at this speed by default (lowest speed), the maximum speed will be 16 times higher', range:{start:0.001, end:0.02, step:0.001},

			};
		conf.sectorDistance = {value:me.parent.sectorDistance, label:'Sector size', desciption:'How big a sector/bit is alters the distance between two bytes; this defines the duration of the floating signal between bytes', range:{start:0, end:0.9, step:0.1},
				set:function(me, value){ me.parent.sectorDistance = value; }
			};

		return(conf);
	}

}
MeasurementObjects={};

MeasurementObjects['Analog-meter'] = function(x,y,rotation, world){

	this.world = world
	this.meterBackLoaded = false;
	this.meterBack = new Image();
	this.meterBack.src = "./images/gauges/vintage_black_backplate.png";
	var parent = this;

	this.meterFrontLoaded = false;
	this.meterFront = new Image();
	this.meterFront.src = "./images/gauges/vintage_black_front.png";
	var parent = this;

	//Frequency mapping vars:
	this.bits = 8;

	this.value = 1;
	this.innerRadius = 35;
	this.vr = 0; //Angular velocity
	var phi = 0.3
	this.aStart = -0.5*Math.PI - phi;
	this.aEnd = Math.PI*0.5 + phi
	this.aRange = - (Math.PI - 2*phi);

	this.world = world;
	this.e = new electronicObject(x,y,rotation,{width:150, height:150, parent:this})
	this.e.connectors = {
		'Input':new Connector(0, 70, 0, this.e, {connectorType:1,label:'Input'}),

		};
	this.e.connectors['Input'].state.set(-1);

	this.translate = function(v){
	     return( (v*this.aRange)+ this.aStart )
	}

	this.setMode = function(m){

	    if (m!=this.mode) {
		if (m==1) {
		    this.range = Math.pow(2,this.bits)-1;
		    this.mode = 1;

		    this.label = 'Hz'
		    this.sublabel = 'log'
		    if (this.world!=undefined) {
			this.world.canvii.requireUpdate('element-bg');
		    }
		    this.e.connectors.Input.setLineCount(this.bits)

		} else if(m==0){
		    this.mode = 0;
		    this.label = 'V'
		    this.sublabel = 'x0.1'
		    if (this.world!=undefined) {
			this.world.canvii.requireUpdate('element-bg');
		    }
		    this.e.connectors.Input.setLineCount(1)
		}
	    }
	}
	this.setMode(0);
	this.render = function(canvii){

		this.e.render(canvii);
		if (canvii.updateRequired('element-bg')) {
		    var env = canvii['element-bg'].context;

		    this.imageXoffset = -70;
		    this.imageYoffset = -65;

		    LoadImageToCanvas(env, this.meterBack, this.e.xpos, this.e.ypos,  0, 140 + this.imageXoffset, 141 + this.imageYoffset)


		    canvii['element-bg'].context.textAlign = 'center';

		    //Draw values:
		    //Alpha range:
		    if (this.mode==0) {
			canvii['element-bg'].context.strokeStyle = '#666';
			canvii['element-bg'].context.fillStyle = '#666';
			canvii['element-bg'].context.lineWidth = 1.5;
			canvii['element-bg'].context.font = '5pt Century Gothic';
			for(var v=0; v<=1; v+=0.1){
			    var alpha = this.translate(v);
			    canvii['element-bg'].context.beginPath();
			    canvii['element-bg'].context.moveTo(this.e.xpos+Math.sin(alpha)*this.innerRadius,this.e.ypos+Math.cos(alpha)*this.innerRadius)
			    canvii['element-bg'].context.lineTo(this.e.xpos+Math.sin(alpha)*(7+this.innerRadius),this.e.ypos+Math.cos(alpha)*(7+this.innerRadius))
			    canvii['element-bg'].context.stroke();
			    canvii['element-bg'].context.fillText(Math.round(v*100)/10,this.e.xpos+Math.sin(alpha)*(10+this.innerRadius),this.e.ypos+Math.cos(alpha)*(10+this.innerRadius));

			}
			canvii['element-bg'].context.lineWidth = 1;
			canvii['element-bg'].context.strokeStyle = '#999';
			for(var v=0; v<=1; v+=0.025){
			    var alpha = this.translate(v)
			    canvii['element-bg'].context.beginPath();
			    canvii['element-bg'].context.moveTo(this.e.xpos+Math.sin(alpha)*(this.innerRadius),this.e.ypos+Math.cos(alpha)*(this.innerRadius))
			    canvii['element-bg'].context.lineTo(this.e.xpos+Math.sin(alpha)*(this.innerRadius+3),this.e.ypos+Math.cos(alpha)*(this.innerRadius+3))
			    canvii['element-bg'].context.stroke();
			}
		    } else if(this.mode==1){
			canvii['element-bg'].context.strokeStyle = '#666';
			canvii['element-bg'].context.fillStyle = '#666';
			canvii['element-bg'].context.lineWidth = 1.5;
			canvii['element-bg'].context.font = '5pt Century Gothic';
			var frequencies =  [10, 100, 1000, 5000, 21000 ];
			for(var freq in frequencies){
			    var v = mapFrequencyToRange(frequencies[freq],this.range)/(this.range)
			    var alpha = this.translate(v);
			    canvii['element-bg'].context.beginPath();
			    canvii['element-bg'].context.moveTo(this.e.xpos+Math.sin(alpha)*this.innerRadius,this.e.ypos+Math.cos(alpha)*this.innerRadius)
			    canvii['element-bg'].context.lineTo(this.e.xpos+Math.sin(alpha)*(7+this.innerRadius),this.e.ypos+Math.cos(alpha)*(7+this.innerRadius))
			    canvii['element-bg'].context.stroke();
			    canvii['element-bg'].context.fillText(frequencies[freq],this.e.xpos+Math.sin(alpha)*(10+this.innerRadius),this.e.ypos+Math.cos(alpha)*(10+this.innerRadius));

			}
			//Minor frequencies:

			canvii['element-bg'].context.lineWidth = 1;
			canvii['element-bg'].context.strokeStyle = '#999';
			for(var freq=1; freq<=21000; freq*=1.5){
			    var v = mapFrequencyToRange(freq,this.range)/(this.range)
			    if (v>0) {
				var alpha = this.translate(v)
				canvii['element-bg'].context.beginPath();
				canvii['element-bg'].context.moveTo(this.e.xpos+Math.sin(alpha)*(this.innerRadius),this.e.ypos+Math.cos(alpha)*(this.innerRadius))
				canvii['element-bg'].context.lineTo(this.e.xpos+Math.sin(alpha)*(this.innerRadius+3),this.e.ypos+Math.cos(alpha)*(this.innerRadius+3))
				canvii['element-bg'].context.stroke();
			    }
			}
		    }

		    //Draw labeling
		    canvii['element-bg'].context.font = '600 8pt Century Gothic';
		    canvii['element-bg'].context.fillStyle = '#333';
		    canvii['element-bg'].context.fillText(this.label, this.e.xpos, this.e.ypos-15);
		    canvii['element-bg'].context.font = '5pt Century Gothic';
		    canvii['element-bg'].context.fillStyle = '#666';
		    canvii['element-bg'].context.fillText(this.sublabel, this.e.xpos, this.e.ypos-5);
		}

		//@todo; create extra foreground layer and optimise
		var env = canvii['element-fg'].context;
		env.shadowColor = '#000';
		env.shadowBlur = 3;
		env.shadowOffsetX = 1;
		env.shadowOffsetY = 2;

		env.lineWidth=2;

		env.strokeStyle="#666";
		env.beginPath();

		env.moveTo(this.e.xpos,this.e.ypos);
		var r = this.innerRadius-5;
		//var a = -(this.value/1 * Math.PI)-0.5*Math.PI;
		var a = this.translate(this.value)
		var fatEndX = this.e.xpos+Math.sin(a)*r;
		var fatEndy = this.e.ypos+Math.cos(a)*r;
		env.lineTo(fatEndX,fatEndy);
		env.stroke();

		env.strokeStyle="#F66";
		env.beginPath();
		env.moveTo(fatEndX,fatEndy);
		var r = this.innerRadius+5;
		//var a = -(this.value/1 * this.aRange)-this.aStart;
		env.lineTo(this.e.xpos+Math.sin(a)*r,this.e.ypos+Math.cos(a)*r);
		env.lineWidth=1;
		env.stroke();
		env.lineWidth=1;
		env.shadowColor = 'transparent';
		//Debug:
		/*
		env.strokeStyle="#F66";
		env.beginPath();
		env.moveTo(this.e.xpos, this.e.ypos);
		env.lineTo(this.e.xpos+Math.sin(this.aStart)*this.innerRadius,this.e.ypos+Math.cos(this.aStart)*this.innerRadius)
		env.stroke()

		env.strokeStyle="#66F";
		env.beginPath();
		env.moveTo(this.e.xpos, this.e.ypos);
		env.lineTo(this.e.xpos+Math.sin(this.aEnd)*this.innerRadius,this.e.ypos+Math.cos(this.aEnd)*this.innerRadius)
		env.stroke()
		*/

		this.imageXoffset = -70;
		this.imageYoffset = -65;

		LoadImageToCanvas(env, this.meterFront, this.e.xpos, this.e.ypos,  0, 140 + this.imageXoffset, 141 + this.imageYoffset)

	}

	this.hover = function(x,y){return(this.e.hover(x,y))
	}

	this.hit = function(x,y){
		return( this.e.hit(x,y) );
	}
	this.tick = function(tickId){
		this.e.tick();

		//Make the analog meter not biased by the simulation/render ratio
		if (tickId==0) {

		    if (this.mode==0) {
			var diff = this.value - Math.min(1, Math.max(0.0,this.e.connectors['Input'].state.getFloating()));
		    } else if (this.mode==1) {
			var diff = this.value - Math.min(1, Math.max(0.0,this.e.connectors['Input'].getIntValue()/this.range));
		    }

		    //console.log(this.e.connectors['Input'].state.getFloating())

		    if (diff>0) {
			if (this.vr>0) {
			    this.vr*=0.7;
			}
			this.vr-=0.01*diff
		    } else {

			if (this.vr<0) {
			    this.vr*=0.7;
			}

			this.vr+=0.01*-diff
		    }

		    var vmax = 0.05
		    this.vr = Math.max(Math.min(vmax,this.vr), -vmax)
		    this.value += this.vr;
		}

	}

	this.save = function(){
		var data = {};
		data.type = ['MeasurementObjects','Analog-meter'];
		data.mode = this.mode;
		this.e.save(data);
		return(data);
	}

	this.load = function(c){
	    this.setMode(c.mode)
	}

	this.e.configure = function(me){
		var conf = {}
		conf.mode = {value:me.parent.mode, label:'Mode(0:volts, 1:freq mapping)', desciption:'-', range:{start:0, end:1, step:1},
				set:function(me, value){ me.parent.setMode(value) }
			};
		return(conf)
	}
}
