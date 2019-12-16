

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
	'LatchesAndFlipFlops':
	{
	    name:'Latches and flip-flops',
	    contents:LatchesAndFlipFlops

	},

	'SimpleIcs':
	{
		'name':'Simple ics',
		'contents':SimpleIcs

	},
	'AudioObjects':{
	    'name':'Audio',
	    contents:AudioObjects

	},
	'Miscellaneous':
	{
		'name':'Miscellaneous',
		'contents':Miscellaneous

	},

	'MeasurementObjects':
	{
		'name':'Measurement',
		'contents':MeasurementObjects
	}
}


EditorModi = {}
EditorModi.array = function(){

		this.pointA = Coord();
		this.pointB = Coord();
		this.render = function(){}
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

function verifySavingName(value){
	if(value===undefined){
		return false;
	}
	if(value.length>3){
		return true;
	}
	return false;
}

function verifySavingInput(){
	v = $('#simulationName').val()
	v = v.replace(/[^a-z0-9 ]/gi,'');
	$('#simulationName').val(v);
	$('#save').prop('disabled', !verifySavingName(v));
	return verifySavingName(v)
}

function removeParam(key, sourceURL) { // https://stackoverflow.com/questions/16941104/remove-a-parameter-to-the-url-with-javascript
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

function getUrlVars() { // from https://stackoverflow.com/a/20097994
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
	function(m,key,value) {
	  vars[key] = value;
	});
	return vars;
}


function Editor(appendTo, canvii){

	$(appendTo).prepend('<div id="editorMenuBar"></div><div id="editor"></div>');
	 $('#editorMenuBar').prepend('<button id="logout">Buysdb.nl</button>')
	 $('#logout').on('click', function(){
			document.location.href = "http://www.buysdb.nl/index.php?page_id=wip_logics_sandbox_first_pre_alpha";
	 });
	 $('#editorMenuBar').prepend('<button id="loadlist">Load</button><input style="width:180px; z-index:1000;" type="text" placeholder="name of you simulation" id="simulationName"></input><button id="save">Save</button>')

	  $('#loadlist').on('click', function(){
		  world.drawSaveList()
	  });

	 $('#simulationName').keyup(function(e) {
		// Verify:
		verifySavingInput();
	 })
	 verifySavingInput();

	 $('#save').on('click', function(){
		if( verifySavingInput() ){
			console.log('Saving world')
			world.save( $('#simulationName').val() )
		} else {
			console.log('Invalid input')
		}
	 });

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

		if(world.allowWire){
			if (this.selectedCatalogObject==undefined) {
				this.timesClicked = 0;
				return(0)
			}

				this.timesClicked++;
				if (this.timesClicked==1) {

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
			if(!world.allowWire){
				return;
			}
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
				    if(this.selectedCatalogObject){
					world.addObject(new this.selectedCatalogObject(x, y, 0, world))
				    }
				}
			}


			if ( this.modus == 'place_array' ) {
				this.processArrayToolClick(x,y)
			}
		}
	}

	this.getLiveSelectedObject = function(){
	    if (this.selectedCatalogObjectId && this.liveAvailableObjects[this.selectedCatalogObjectId] != undefined  ) {
		return(this.liveAvailableObjects[this.selectedCatalogObjectId])
	    }
	    return(undefined)

	}

	this.resize = function(w,h){

	    $('#editor').css('height',h-100)

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

		//Store all elements to access attributes:
		this.liveAvailableObjects = [];
		//Draw a preview of all elements:
		for( var groupId in AvailableObjects ){
			for(var objectId in AvailableObjects[groupId].contents){
				c = new Canvii();
				c.setWidth(120); c.setHeight(120);
				c.registerCanvas('canvas_'+groupId+'_'+objectId);
				//Let all known aliases point to the same canvas: (refer to the world object for these!)
				c.linkAliases(0, ['element-fg','element-bg','effects','wire-bg','wire-fg','connector-bg','connector-fg']);

				//var canvasContext = document.getElementById('canvas_'+groupId+'_'+objectId).getContext("2d");

				if (AvailableObjects[groupId]==undefined) {

				} else if (AvailableObjects[groupId].contents[objectId]==undefined) {

				} else {
				var o = new AvailableObjects[groupId].contents[objectId]
				o.render(c);
				this.liveAvailableObjects[groupId+'_'+objectId] = (o)
				}
			}
		}

		$('.editorCatalogObject').on('click', function(e, i){
			document.editor.setSelectedCatalogObject(e.currentTarget.id)
			$('.editorCatalogObject').removeClass("selected");
			$(this).addClass("selected")
		})

		this.selectedCatalogObject = false
		this.selectedCatalogObjectId = "";
		this.setSelectedCatalogObject = function( id ){

			var parts = id.split("_")
			this.selectedCatalogObject = AvailableObjects[parts[0]].contents[parts[1]]
			this.selectedCatalogObjectId  = id;

			this.timesClicked = 0;
			this.targetClicks = 1;
			//Check if the object wants/requires multiple clicks;
			this.selectedObjectInstance = new this.selectedCatalogObject()
			var mclick = this.selectedObjectInstance.multiclick
			if(  mclick  ){

				this.targetClicks = mclick;
			}
		}
	}

	this.configure = function(obj){

		var conf = obj.configure(obj);
		if (conf==undefined) {
		    conf = {};
		}
		//@waypoint
		var me = obj;
		if (obj instanceof electronicObject) {
		    conf['colour'] = {value:me.colorId, label:'Background color', desciption:'Background color of element', range:{start:1, end:me.colors.length, step:1 },
				    set:function(me, value){
					    me.setColor(value);
				    }
			    };
		}

		$('#config').html('');
		for(var index in conf){
			var c = conf[index];
			var id = 'slider_' + index;
			$('#config').append('<div class="configSliderWrapper"><div class="slider" id="'+id+'"></div></div>' );
			$('#'+id).prepend('<p><label for="'+id+'_amount">'+c.label+'</label>'+'<input type="text" id="'+id+'_amount" readonly style="border:0; color:#f6931f; font-weight:bold;"></p>')
			.slider({
				value:c.value,
				min:c.range.start,
				max:c.range.end,
				step:c.range.step,
				slide: function( event, ui ) {
					$( "#"+ $(this).attr('id') +'_amount' ).val(  ui.value );
					$(this).data('configObj').set(obj,ui.value);
					world.canvasUpdate(1);
			         }
			}).data('configObj',c);

			$( '#'+id+'_amount' ).val( $( "#"+id ).slider( "value" ) );
		}
	}

	this.drawCatalog()
	$('<div id="saveList"></div>').insertAfter( "#worldSimWrapper" );
	$('<div id="config"></div>').insertAfter( "#worldSimWrapper" );
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

	this.canvii = new Canvii('worldSimWrapper','world');
	this.canvii.initCanvas(1,'background'); //Always static
	this.canvii.initCanvas(4,'grid'); //Changes only when viewport moves
	this.canvii.initCanvas(8,'element-bg'); // Background of element, changes only when element is moved or viewport is moved
	this.canvii.initCanvas(10,'liquidjs-A'); // First liquidJS layer. is always updated
	this.canvii.initCanvas(12,'element-fg'); // Foreground of element, changes when element or viewport is moved or element animates; will not be cleared explcitly.
	this.canvii.initCanvas(16,'connector-fg'); // Foreground of connector, changes always
	this.canvii.initCanvas(18,'wire-bg'); //Changes only on move or creation
	this.canvii.initCanvas(19,'wire-fg'); //Changes always
	this.canvii.initCanvas(20,'effects'); // Effects layer, changes always but limited update rate.
	this.canvii.initCanvas(22,'static-overlay'); // Contains the level title and description. Only changes on change of those. Does _not_ move.
	this.canvii['static-overlay'].doTranslate = false;
	this.canvii.registerCanvas('sim'); //Top canvas, only used to track mouse

	this.translateX = 0;
	this.translateY = 0;
	this.viewCenterX = this.canvii.width/2;
	this.viewCenterY = this.canvii.height/2;
	this.targetFrameTime = 25; //Time in milisec per frame, to set FPS to 60 = 1000/60 => 16.6, 24 fps => 41

	this.title = 'LogicsSandbox Pre-alpha 1.00';
	this.description = '';
	this.canvii.requireUpdate('static-overlay');

	this.maxParticles = 10000;
	this.objects = [];
	this.particles = [];
	this.recalculateWorld = false;
	this.wind = new Wind();

	this.pause = false;
	this.paused = false;
	this.pauseActions = [];

	this.allowDrag = true; // Set to false to not allow dragging of objects
	this.allowWire = true; // Set to false to not allow placing of wires
	this.isEmbedded = false; // if the simulation is embedded
	//Initialise audio:
	this.audioContext = undefined//new AudioContext();

	this.requestAudio = function(){
	    if (this.audioContext==undefined) {
		this.audioContext = new AudioContext();
	    }

	}

	this.save = function(name){
		//Pause the simulation..
		this.pause = true;
		this.name = name;
		//Wait on the frame to finish
		this.pauseActions.push('save');
		this.pauseActions.push('continue');
	}

	this.saveFunction = function(){

		//Store all information of the objects in the world;

		this.saveData = [];
		for (var objectIndex in this.objects) {
			if (this.objects[objectIndex]!=null) {

				var savedObject = this.objects[objectIndex].save();
				//Also store e data;
				if (this.objects[objectIndex].e!=undefined) {
				    if (this.objects[objectIndex].e.colorId!=undefined) {
						savedObject.colorId = this.objects[objectIndex].e.colorId;
				    }
				}
				this.saveData.push( savedObject )
			}
		}

		// Create thumbnail:
		//thumbData = this.generateThumb(800,600)
		// Submit the save
		$.ajax({
		  url:'http://87.209.245.2:5000/save',
		  type:"POST",
		  data:JSON.stringify({
  			'name':this.name,
  			'data':this.saveData
			//'thumbnail': thumbData
  		}),

		xhrFields: { withCredentials: true },
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		  success: function(data){
			  if( ('reason' in data) && (data.reason=='not_logged_in')){
				  window.open("http://87.209.245.2:5000/login");
				  console.log('Not logged in')
				  alert( "Not logged in! Allow pop-ups to get to the login screen" );
			  } else {

				  alert( "Succes!" );
			  }
		  },
	        error: function(e) {
				console.log(e);
	            alert('Error occured');
	        }
		})
	}

	this.destroySaveList = function(){
		$('.coverAll').html('')
		$('.coverAll').hide()
	}
	this.drawSaveList = function(){

		$('.coverAll').html('<div id="container"><ul class="save-list" style="display: flex; height: '+ ($(window).height()-10) + 'px ; width: '+ ($(window).width()-20) + 'px ;  flex-direction: row; flex-wrap:wrap;  overflow-y: auto;"></ul></div>')
		$('.coverAll').show()


		const _getCatImg = () => {
		  const randomNum = () => {
		    return Math.floor(Math.random() * 100000);
		  };
		  const url = "https://source.unsplash.com/collection/139386/100x100/?sig=";
		  return url + randomNum();
		};



		let topSentinelPreviousY = 0;
		let topSentinelPreviousRatio = 0;
		let bottomSentinelPreviousY = 0;
		let bottomSentinelPreviousRatio = 0;

		let listSize = 20;
		let DBSize = 200;

		const initDB = num => {
			const db = [];
		  for (let i = 0; i < num; i++) {
		  	db.push({
		    	catCounter: i,
		      title: `save image number ${i}`,
		      imgSrc: _getCatImg()
		    })
		  }
		  return db;
		}

		let DB = [];

		let currentIndex = 0;

		const initList = num => {
			const container = document.querySelector(".save-list");

		  for (let i = 0; i < num; i++) {
		  	const tile = document.createElement("LI");
		    tile.setAttribute("class", "save-tile");
		    tile.setAttribute("id", "save-tile-" + i);
		    const title = document.createElement("div");
			title.setAttribute('class','centered')
			title.setAttribute('style','color:#FFF; font-family:Sans-serif; ')
		    const t = document.createTextNode(DB[i].title);
		    title.appendChild(t);
		    tile.appendChild(title);
		    const img = document.createElement("IMG");
		    img.setAttribute("src", DB[i].imgSrc);

		    tile.appendChild(img);
			tile.setAttribute("user",DB[i].user)
			tile.setAttribute("saveName",DB[i].saveName)
		  	container.appendChild(tile);
			tile.addEventListener("click", function(event){

				var targetElement = event.currentTarget ;
				console.log(targetElement)
				console.log('Got click! ' + targetElement.getAttribute('user')  + ' ' +  targetElement.getAttribute('saveName'))
				if( targetElement.getAttribute('user')!==null ){
					console.log(targetElement.getAttribute('user'))
					world.load( targetElement.getAttribute('user'),  targetElement.getAttribute('saveName'))

					setTimeout( function(){ window.location.reload(false) }, 500 ) // @todo remove handlers
				}
			});

			//@todo:
		  }

		}

		const getSlidingWindow = isScrollDown => {
			const increment = listSize / 2;
			let firstIndex;

		  if (isScrollDown) {
		  	firstIndex = currentIndex + increment;
		  } else {
		    firstIndex = currentIndex - increment - listSize;
		  }

		  if (firstIndex < 0) {
		  	firstIndex = 0;
		  }

		  return firstIndex;
		}

		const recycleDOM = firstIndex => {
			for (let i = 0; i < listSize; i++) {
		  	const tile = document.querySelector("#save-tile-" + i);
		    tile.firstElementChild.innerText = DB[i + firstIndex].title;
		    tile.lastChild.setAttribute("src", DB[i + firstIndex].imgSrc);
		  }
		}

		const getNumFromStyle = numStr => Number(numStr.substring(0, numStr.length - 2));

		const adjustPaddings = isScrollDown => {
			const container = document.querySelector(".save-list");
		  const currentPaddingTop = getNumFromStyle(container.style.paddingTop);
		  const currentPaddingBottom = getNumFromStyle(container.style.paddingBottom);
		  const remPaddingsVal = 170 * (listSize / 2);
			if (isScrollDown) {
		  	container.style.paddingTop = currentPaddingTop + remPaddingsVal + "px";
		    container.style.paddingBottom = currentPaddingBottom === 0 ? "0px" : currentPaddingBottom - remPaddingsVal + "px";
		  } else {
		  	container.style.paddingBottom = currentPaddingBottom + remPaddingsVal + "px";
		    container.style.paddingTop = currentPaddingTop === 0 ? "0px" : currentPaddingTop - remPaddingsVal + "px";

		  }
		}

		const topSentCallback = entry => {
			if (currentIndex === 0) {
				const container = document.querySelector(".save-list");
		  	container.style.paddingTop = "0px";
		  	container.style.paddingBottom = "0px";
		  }

		  const currentY = entry.boundingClientRect.top;
		  const currentRatio = entry.intersectionRatio;
		  const isIntersecting = entry.isIntersecting;

		  // conditional check for Scrolling up
		  if (
		    currentY > topSentinelPreviousY &&
		    isIntersecting &&
		    currentRatio >= topSentinelPreviousRatio &&
		    currentIndex !== 0
		  ) {
		    const firstIndex = getSlidingWindow(false);
		    adjustPaddings(false);
		    recycleDOM(firstIndex);
		    currentIndex = firstIndex;
		  }

		  topSentinelPreviousY = currentY;
		  topSentinelPreviousRatio = currentRatio;
		}

		const botSentCallback = entry => {
			if (currentIndex === DBSize - listSize) {
		  	return;
		  }
		  const currentY = entry.boundingClientRect.top;
		  const currentRatio = entry.intersectionRatio;
		  const isIntersecting = entry.isIntersecting;

		  // conditional check for Scrolling down
		  if (
		    currentY < bottomSentinelPreviousY &&
		    currentRatio > bottomSentinelPreviousRatio &&
		    isIntersecting
		  ) {
		    const firstIndex = getSlidingWindow(true);
		    adjustPaddings(true);
		    recycleDOM(firstIndex);
		    currentIndex = firstIndex;
		  }

		  bottomSentinelPreviousY = currentY;
		  bottomSentinelPreviousRatio = currentRatio;
		}

		const initIntersectionObserver = () => {
		  const options = {}

		  const callback = entries => {
		    entries.forEach(entry => {
		      if (entry.target.id === 'save-tile-0') {
		        topSentCallback(entry);
		      } else if (entry.target.id === `save-tile-${listSize - 1}`) {
		        botSentCallback(entry);
		      }
		    });
		  }

		  var observer = new IntersectionObserver(callback, options);
		  observer.observe(document.querySelector("#save-tile-0"));
		  observer.observe(document.querySelector(`#save-tile-${listSize - 1}`));


		}

		const start = () => {


			DBSize = 0;
			$.ajax({
				url:'http://87.209.245.2:5000/list',
				type:"GET",
				xhrFields: { withCredentials: true },
				contentType:"application/json; charset=utf-8",
				dataType:"json",
				success: function(data){
					console.log(data)
					//var h = ""
					for(user in data){
						for(save_index in data[user]){
							//h += '<div>' + data[user][save_index] + ' by <span>' + user + '</span></div>'
							DB.push({'user':user, 'saveName':data[user][save_index],'title':data[user][save_index] + ' by ' + user , imgSrc:'http://87.209.245.2/LogicsSandbox/thumbs/' + user + '/' + data[user][save_index] + '.png' })
							DBSize += 1
						}
					}
					listSize = Math.min(listSize, DBSize)
					initList( listSize );
					initIntersectionObserver();

				},
				error: function(e) {
					console.log(e);
					alert('Error occured');
				}
			})



		}
		start();

	}

	this.load = function(user, saveName, replace_url=true){

		$.ajax({
		  url:'http://87.209.245.2:5000/load?user='+user + '&name='+ saveName,
		  type:"GET",
		xhrFields: { withCredentials: true },
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		  success: function(data){
			  console.log("Loading save " + user + ' ' +  saveName )
			  console.log(data)
			  world.loadSaveData = {data:data}
			  world.pauseActions.push('load');
			  world.pauseActions.push('continue');
			  world.pause=true;
			  // Hide the loader...
			  world.destroySaveList();

			  var currURL= window.location.href; //get current address

		      var afterDomain= currURL.substring(currURL.lastIndexOf('/') + 1);
		      //2- get the part before '?'
		      var beforeQueryString= afterDomain.split("?")[0];

			if(replace_url){
		  		window.history.pushState({}, document.title, beforeQueryString + '?user=' + user + '&saveName=' + saveName);
			}

		  },
	        error: function(e) {
				console.log(e);
	            alert('Error occured');
	        }
		})

	}


	this.generateThumb = function(w,h){

		this.canvii.initCanvas(0,'thumb');
		this.canvii.setWidth(w);
		this.canvii.setHeight(h);

		var offsetX = 0;
		var offsetY = 0;

		this.viewCenterX = this.canvii.width*0.5 - offsetX;
		this.viewCenterY = this.canvii.height*0.5 - offsetY;
		window.viewportX = this.canvii.width*0.5 - offsetX;;
		window.viewportY = this.canvii.height*0.5 - offsetY;

		this.translateX = 0;
		this.translateY = 0;
		this.canvasUpdate(0);

		// Now we generate a target canvas of the size of the thumb:

		thumb = this.canvii.canvii[0]['context']
		thumb.crossOrigin = "anonymous";  // This enables CORS
		// Write all layers except for the bottom ones
		for(var i in this.canvii.canvii){
			if(i>=8 && i<99){
				thumb.drawImage(this.canvii.canvii[i]['canvas'], 0,0,400, 300)
			}
		}
		thumb_data = this.canvii.canvii[0]['canvas'].toDataURL();

		return thumb_data
	}

	this.resizeFunction = function(w,h){

		if(w === undefined){
		    var w = this.wTarget;
		    var h = this.hTarget;
		}

		if(this.isEmbedded){
			this.canvii.setWidth(Math.floor(w));
			this.canvii.setHeight(Math.floor( h));
		} else {
		    this.canvii.setWidth(Math.floor(w-380));
		    this.canvii.setHeight(Math.floor( h-100));
		}

	    var offsetX = 0;
	    var offsetY = 0;

	    this.viewCenterX = this.canvii.width*0.5 - offsetX;
	    this.viewCenterY = this.canvii.height*0.5 - offsetY;
	    window.viewportX = this.canvii.width*0.5 - offsetX;;
	    window.viewportY = this.canvii.height*0.5 - offsetY;

	    this.translateX = 0;
	    this.translateY = 0;
	    this.canvasUpdate(0);
	}

	this.resize = function(w,h){
		//Pause the simulation..
		this.pause = true;
		//Wait on the frame to finish
		this.wTarget = w;
		this.hTarget = h;

		this.pauseActions.push('resize');
		this.pauseActions.push('continue');
	}


	this.clear = function(){
		this.objects = [];
		this.canvasUpdate(0);
	}

	this.loadFunction = function(){
	    this.clear();
	    saveStructure = this.loadSaveData
		if(saveStructure===undefined){
			return
		}
	    var version = saveStructure.dataFormatVersion;
	    for (var objectIndex in saveStructure.data) {

		var type = saveStructure.data[objectIndex].type;

		var x = saveStructure.data[objectIndex]['xpos'];
		var y = saveStructure.data[objectIndex]['ypos']
		var rotation = saveStructure.data[objectIndex]['rotation']
		var colorId =  saveStructure.data[objectIndex]['colorId'];

		//Check if the object in the save exists in the database of available objects:
		if( AvailableObjects[type[0]]['contents'][type[1]] ){
		    //Initialise a new instance of the required object:
		    var o = new AvailableObjects[type[0]]['contents'][type[1]](x,y,rotation,this);
		    //Add the object to the world
		    this.addObject( o );
		    //Run the load function if available.
		    if (o.load) {

			o.load(saveStructure.data[objectIndex]);
			//Load color information if available
			if (colorId!=undefined) {
			    o.e.setColor(colorId);
			}
		    }


		}

	    }
	    this.canvasUpdate(0);
	}

	this.isSelected = function(id){
	    if (this.selected.indexOf(''+id)!=-1 ) {
		return(true)
	    }
	    return(false)
	}

	this.tick  = function(){

		this.wind.tick();
		var date = new Date();
		var tickStart = date.getMilliseconds();

		if (this.pause) {

			this.paused = true;
			for(var i in this.pauseActions){

				if (this.pauseActions[i]  == 'save') {
					this.saveFunction();
				}

				if (this.pauseActions[i]  == 'resize') {
					this.resizeFunction();
				}

				if (this.pauseActions[i]  == 'load') {

					this.loadFunction();
				}



				if (this.pauseActions[i]  == 'continue') {
					this.paused = false;
					this.pause = false
				}



			}
			this.pauseActions = [];
			if (this.pause == false) {

				this.paused = false;
			} else {
				return(false);
			}
		}

		//We run multiple ticks per render frame
		for (var tickId=0; tickId<window.Settings.tickRatio; tickId++) {
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

						this.removeObject(objectIndex);
					} else {
						this.objects[objectIndex].tick(tickId);
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

	this.outlineActive = false;
	this.outlineOpacity = 0;
	this.outlineParams = {}
	this.outlineObject = {};
	this.outline=function(x,y,o){
	    this.outlineActive = true;
	    this.outlineParams.x = x;
	    this.outlineParams.y = y;
	    this.outlineObject = o;
	}



	this.hover = function(x,y,noReset){

		var hasHovered = false;

		for (var objectIndex in this.objects) {
			if (this.objects[objectIndex]!=null){
			    if( this.objects[objectIndex].hover) {
				var h = this.objects[objectIndex].hover(x,y)
				if(h){
				    hasHovered = true;
				    if (h!==true) {
					 document.body.style.cursor = h
				    } else {
					document.body.style.cursor = 'pointer';
				    }
				}
			    } else {
				if( this.objects[objectIndex].e.hover) {
				    if(this.objects[objectIndex].e.hover(x,y)){
					hasHovered = true;
					document.body.style.cursor = 'pointer';
				    }
				}
			    }
			}
		}
		if (hasHovered==false) {

		    var o = document.editor.getLiveSelectedObject();
		    if (o && o.e && o.e.width && o.e.height) {
			this.outline(x,y,o);

		    } else {
			this.outlineActive = false;
			this.outlineOpacity = 0;
		    }


		} else {
		    this.outlineActive = false;
		    this.outlineOpacity = 0;
		}

	}

	this.click = function(x,y){
		var io = this.indexObjectAt(x,y);
		if (io){
			if(io.object && io.object.click!=undefined) {

			    io.object.click(x,y);

			}
			this.selected = [io.index];

			if (io.object) {
				if (io.object.configure) {


					document.editor.configure(io.object);
				}
			}

		}

	}

	this.dragging = false;
	this.dragStartX = 0;
	this.dragStartY = 0;
	this.dragObjects = undefined;
	this.selectionRectangle = false; //Whether we are in the process of selecting something

	this.dragStart = function(startX,startY, endX, endY){

		this.dragStartX = startX;
		this.dragStartY = startY;
		if (this.objectAt(startX,startY)) {
		    this.dragObjects = [this.objectAt(startX,startY)];
		} else {
		    this.dragObjects = undefined;
		}

		//this.dragFromTo(startX, startY,endX,endY);

		if (this.dragObjects==undefined || this.dragObjects.length==0 && this.selected.length==0) {

		    this.selectionRectangle = true;
		} else {

		    this.selectionRectangle=false;
		}

	}

	this.dragEnd = function(endX,endY){

	    this.dragFromTo(this.dragStartX,this.dragStartY,endX,endY)
	    //Request element move update;
	    this.canvasUpdate(2);
	    this.updateSelected();
	   if (this.selectionRectangle) {

	    this.selected = this.objectsWithin(this.dragStartX, this.dragStartY, this.dragX, this.dragY);
	    for(var i in this.selected){
		this.objects[this.selected[i]].e.selected = true;
	    }
	    this.selectionRectangle=false;
	   }


	}

	this.drag = function(startX, startY, prevX, prevY, endX, endY){

		if( this.allowDrag==false ){
			return
		}
	    //this.dragFromTo(prevX, prevY,endX,endY);
	    document.body.style.cursor = 'grabbing';
	    this.dragX = prevX;
	    this.dragY = prevY;
	    for(var index in this.dragObjects){
		if (this.dragObjects[index] && this.dragObjects[index].drag) {
		    //Request element move update;
		    this.canvasUpdate(2);
		    this.dragObjects[index].drag(startX,startY,endX,endY);
		}
	    }
	}

	/*
	 * Request a canvas update:
	 * modes:
	 * 0: full redraw of everything
	 * 1: viewport move; redraw all but background
	 * 2: element move; redraw all but background and grid
	 * 3:
	 * 10: tick: redraw element fg, wire fg and effects
	 */
	this.canvasUpdate = function(mode){

	    //0: Full redraw
	    if (mode==0) {
		this.canvii.requireUpdate('static-overlay');
		this.canvii.requireUpdate('background');
		this.canvii.requireUpdate('grid');
		this.canvii.requireUpdate('connector-fg');
		this.canvii.requireUpdate('element-fg');
		this.canvii.requireUpdate('element-bg');
		this.canvii.requireUpdate('wire-bg');
		this.canvii.requireUpdate('wire-fg');
		this.canvii.requireUpdate('effects');
		this.canvii.requireUpdate('liquidjs-A');

	    }
	    //1: viewport move; redraw all but background
	    if (mode==1) {
		//this.canvii.requireUpdate('background');
		this.canvii.requireUpdate('grid');
		this.canvii.requireUpdate('connector-fg');
		this.canvii.requireUpdate('element-fg');
		this.canvii.requireUpdate('element-bg');
		this.canvii.requireUpdate('wire-bg');
		this.canvii.requireUpdate('wire-fg');
		this.canvii.requireUpdate('effects');
		this.canvii.requireUpdate('liquidjs-A');
	    }

	    //2: element move; redraw all but background and grid
	    if (mode==2) {
		//this.canvii.requireUpdate('background');
		//this.canvii.requireUpdate('grid');
		this.canvii.requireUpdate('connector-fg');
		this.canvii.requireUpdate('element-fg');
		this.canvii.requireUpdate('element-bg');
		this.canvii.requireUpdate('wire-bg');
		this.canvii.requireUpdate('wire-fg');
		this.canvii.requireUpdate('effects');
		this.canvii.requireUpdate('liquidjs-A');
	    }


	    //10: tick: redraw element fg, wire fg, connector fg and effects
	    if (mode==10) {
		//this.canvii.requireUpdate('background');
		//this.canvii.requireUpdate('grid');
		this.canvii.requireUpdate('connector-fg');
		this.canvii.requireUpdate('element-fg');
		//this.canvii.requireUpdate('element-bg');
		//this.canvii.requireUpdate('wire-bg');
		this.canvii.requireUpdate('wire-fg');
		this.canvii.requireUpdate('effects');
		this.canvii.requireUpdate('liquidjs-A');
	    }
	}

	this.dragFromTo = function(startX,startY,endX,endY){

	    var dx = endX - startX;
	    var dy = endY - startY;
	    //if (this.selected.length==0) {
		var o = this.objectAt(startX,startY);
		if (o && o.drag) {
			o.drag(startX,startY,endX,endY);
		}
		/*
	    } else {

		for (var index in this.selected) {
		    var o = world.objects[this.selected[index]];

		    if( o!=undefined && o.e.drag ){

			o.e.drag(o.e.xpos, o.e.ypos, o.e.xpos+dx,  o.e.ypos+dy);
		    }
		}

	    }*/

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

	this.objectsWithin = function(x0,y0,x1,y1){

	    var objs = [];
	    for (var objectIndex in this.objects) {
		if (this.objects[objectIndex]!=null) {
		    if (this.objects[objectIndex].e != undefined) {
			if (this.objects[objectIndex].e.xpos >= Math.min(x0,x1) &&
			    this.objects[objectIndex].e.xpos <= Math.max(x0,x1) &&
			    this.objects[objectIndex].e.ypos >= Math.min(y0,y1) &&
			    this.objects[objectIndex].e.ypos <= Math.max(y0,y1)
			    ) {
			    //objs.push( {index:objectIndex, object:this.objects[objectIndex]} );
			    objs.push(objectIndex);
			}


		    }

		}
	    }
	    return(objs)
	}

	this.render=function( tickTime ) {


		var date = new Date();
		var frameStart = date.getMilliseconds();


		this.viewCenterX = this.viewCenterX - this.translateX;
		this.viewCenterY = this.viewCenterY - this.translateY;

		this.minX = this.viewCenterX  - 0.5*this.canvii.width;
		this.maxX = this.viewCenterX  + 0.5*this.canvii.width;
		this.minY = this.viewCenterY  - 0.5*this.canvii.height;
		this.maxY = this.viewCenterY  + 0.5*this.canvii.height;

		//Effects and such are always cleared.
		this.canvasUpdate(10);

		if (this.canvii.updateRequired('static-overlay')) {
		    this.canvii['static-overlay'].context.clearRect(0, 0, this.canvii.width, this.canvii.height);

		    this.canvii['static-overlay'].context.shadowColor = '#000';
		    this.canvii['static-overlay'].context.shadowBlur = 5;
		    this.canvii['static-overlay'].context.shadowOffsetX = 1;
		    this.canvii['static-overlay'].context.shadowOffsetY = 1;

		    //Draw modification gear
			/*
		    this.canvii['static-overlay'].context.fillStyle = 'rgba(250,250,250,0.2)'
		    this.canvii['static-overlay'].context.fillRect(0,0,250,50);

		    //Draw the title and description

		    this.canvii['static-overlay'].context.font = '16px Cambria';
		    this.canvii['static-overlay'].context.textAlign = 'left';
		    this.canvii['static-overlay'].context.fillStyle = 'rgba(250,250,250,0.8)'
		    this.canvii['static-overlay'].context.fillText(this.title,20,25);*/

		    this.canvii.registerUpdate('static-overlay');
		}


		//Empty the canvas
		if (this.canvii.updateRequired('background') || this.translateX!=0 || this.translateY!=0) {
		    //When translating a full update is needed
		    this.canvasUpdate(0);

		    canvas = this.canvii['background'].canvas;
		    context = this.canvii['background'].context;


		    context.clearRect(this.minX, this.minY, this.canvii.width, this.canvii.height);


		    //Fix translation
		    var tx = this.translateX;
		    var ty = this.translateY;
		    for(c in this.canvii.canvii){
			if (this.canvii.canvii[c].doTranslate) {
			    this.canvii.canvii[c].context.translate(tx, ty)
			}


		    }
		    this.translateX = 0;
		    this.translateY = 0;



		    //Draw background (Grid), only required when the viewport moved or when the background has been cleared
		    context.fillStyle= '#053066'
		    context.fillRect(this.minX, this.minY, this.canvii.width, this.canvii.height);
		    this.canvii['grid'].context.clearRect(this.minX, this.minY, this.canvii.width, this.canvii.height);
		    this.canvii['grid'].context.lineWidth = 0.5;
		    this.canvii['grid'].context.strokeStyle = "#AAA";

		    var cellSize = 50;

		    this.canvii['grid'].context.beginPath();
		    for(var y=this.minY - this.viewCenterY%cellSize; y<this.maxY; y+=cellSize){
			    this.canvii['grid'].context.moveTo(this.minX, y);
			    this.canvii['grid'].context.lineTo(this.maxX, y);

		    }

		    for(var x=this.minX - this.viewCenterX%cellSize; x<this.maxX; x+=cellSize){

			    this.canvii['grid'].context.moveTo(x, this.minY);
			    this.canvii['grid'].context.lineTo(x, this.maxY);


		    }
		    this.canvii['grid'].context.stroke();

		    //Draw the view center
		    /*
		    context.strokeStyle = '#0F0';
		    context.beginPath()
		    context.arc(this.viewCenterX ,this.viewCenterY, 10, 0, 2*Math.PI,false )
		    context.stroke(); */

		    this.canvii.registerUpdate('background');
		    this.canvii.registerUpdate('grid');

		}



		var canviiUpdateNames = ['element-bg','element-fg','effects','connector-fg','wire-fg','wire-bg','liquidjs-A']
		for(var canviiNameIndex in canviiUpdateNames){
		    if (this.canvii.updateRequired(canviiUpdateNames[canviiNameIndex])) {
			//Clear the canvas:
			this.canvii[canviiUpdateNames[canviiNameIndex]].context.clearRect(this.minX, this.minY, this.canvii.width, this.canvii.height)
		    }
		}

		for (var objectIndex in this.objects) {

			if (this.objects[objectIndex]!=null) {

				this.objects[objectIndex].render(this.canvii);
			}

		}


		for(var canviiNameIndex in canviiUpdateNames){
		    if (this.canvii.updateRequired(canviiUpdateNames[canviiNameIndex])) {
			this.canvii.registerUpdate( canviiUpdateNames[canviiNameIndex] )
		    }
		}


		for (var particleIndex in this.particles) {

			if (this.particles[particleIndex]!=null) {

				this.particles[particleIndex].render();
			}

		}

		//Draw outline
		if(this.outlineActive==true && this.selectionRectangle==false ){
		    this.outlineOpacity = Math.min(this.outlineOpacity+0.1,1);
		    if( this.outlineObject.renderOutline ){
			this.outlineObject.renderOutline(this.canvii['effects'].context,this.outlineParams.x, this.outlineParams.y,this.outlineOpacity,this.canvii );
		    } else if (this.outlineObject.e.renderOutline) {
			this.outlineObject.e.renderOutline(this.canvii['effects'].context,this.outlineParams.x, this.outlineParams.y,this.outlineOpacity );
		    }

		}

		//Draw outline for multiclick objects (wires)
		if (document.editor.targetClicks==2 && document.editor.timesClicked==1) {
		    if (document.editor.selectedObjectInstance!=undefined) {
			if (document.editor.selectedObjectInstance.multiclickRender!=undefined) {
			    document.editor.selectedObjectInstance.multiclickRender(this.canvii,document.editor.clicks[0].x,document.editor.clicks[0].y, document.editor.mouseX,document.editor.mouseY)
			}
		    }
		}

		if (this.selectionRectangle) {
		    this.canvii['effects'].context.strokeStyle = "rgba(255,255,255,0.9)";
		    this.canvii['effects'].context.lineWidth = 1;
		    this.canvii['effects'].context.strokeRect(this.dragStartX, this.dragStartY,this.dragX-this.dragStartX, this.dragY-this.dragStartY)

		}

		//Draw blogic logo and frametime
		/*
		this.canvii['effects'].context.fillStyle = "#FFF";
		this.canvii['effects'].context.textAlign="left";
		this.canvii['effects'].context.font = "10px Cambria";
		this.canvii['effects'].context.fillText("Dev",this.maxX - 60, this.maxY - 20);
		this.canvii['effects'].context.fillText(this.timeout,this.maxX - 60, this.maxY - 10);*/

		var endDate = new Date();
		var frameStop = endDate.getMilliseconds();
		var frameTime = frameStop-frameStart;
		this.lastFrameTime = frameTime;
		//context.font="30px Arial";
		//context.fillText(frameTime + " / " + tickTime,playerOrganism.physics.xpos, playerOrganism.physics.ypos);


		self = this;
		var timeout = this.targetFrameTime - frameTime - tickTime;
		this.timeout = timeout;
		if (timeout<=0 || timeout>this.targetFrameTime) {

			//We need to set some timeout to prevent a freeze.
			setTimeout(function(){self.tick();}, 1);
		} else {



			setTimeout(function(){self.tick();}, timeout);
		}
	}

	for(var c in this.canvii.canvii){


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
		this.canvasUpdate(2);
	}



	this.selected = [];
	this.selectNone = function(){
	    for(var i in this.objects){
		if (this.objects[i]!=null && this.objects[i].e != undefined) {
		    this.objects[i].e.selected = false;
		}
	    }
	}
	this.updateSelected = function(){
	    for(var i in this.objects){
		if (this.objects[i]!=null && this.objects[i].e != undefined) {
		    if (this.selected.indexOf(i)!=-1) {
			this.objects[i].e.selected = true;
		    } else {
			this.objects[i].e.selected = false;
		    }
		}
	    }
	}

	//This is fired when delete is pressed;
	this.key_delete = function(){
		$('#config').html('');
		for(var i in this.selected){
			this.removeObject(this.selected[i])
		}
		this.selected = [];
	}


	this.removeObject = function(id){


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
		this.canvasUpdate(1);
	}


}





$(document).ready( function(){

	//Initialise audio:
	lowLag.init({'urlPrefix':'audio/'});
	lowLag.load(['rotary-phone-dialing.mp3','rotary-phone-dialing.ogg'],'rotary_dialing');
	lowLag.load(['rotary-phone-dialing_pass.mp3','rotary-phone-dialing_pass.ogg'],'rotary_dialing_pass');

	for(i=1; i<=4; i++){
	    lowLag.load(['new_click_'+i+'.mp3','new_click_'+i+'.ogg'],'key_'+i);
	}
	lowLag.load(['carriage_return_3.mp3','carriage_return_3.ogg'],'key_carriage');
	lowLag.load(['switch_medium.mp3','switch_medium.ogg'],'switch_medium');
	lowLag.load(['switch_small.mp3','switch_small.ogg'],'switch_small');


	/** pre canvii hack: **/
	    canvas = document.getElementById("sim");
	    var ctx = canvas.getContext("2d");
	    context = ctx

	document.editor = new Editor('.simWrapper')
	world = new World();


	$('#loader').hide();

	$( window ).resize(function() {
	    world.resize( $( window ).width(), $( window ).height());
	    document.editor.resize( $( window ).width(), $( window ).height())
	  });
	world.resize( $( window ).width(), $( window ).height());
	document.editor.resize( $( window ).width(), $( window ).height())
	mousePrevPos =  CanvasFunctions.getRelativeMousePosition(canvas, ctx, world);
	canvas.addEventListener('mousemove', function(evt) {

		var mousePos = CanvasFunctions.getMousePos(canvas, evt);
		var mouseX = world.viewCenterX-world.canvii.width*0.5 + mousePos.x
		var mouseY = world.viewCenterY-world.canvii.height*0.5 + mousePos.y

		document.editor.mouseX = mouseX;
		document.editor.mouseY = mouseY;
		if (mouseIsDown) {

			if(world.allowDrag){
				if (dragStarted) {
					world.dragStart(mouseStart.x, mouseStart.y, mouseX, mouseY);
					dragStarted = false;
					world.dragging = true;
				} else {
					world.drag(mouseStart.x, mouseStart.y, mousePrevPos.x, mousePrevPos.y, mouseX, mouseY);
					world.dragging = true;
				}
				mousePrevPos =  CanvasFunctions.getRelativeMousePosition(canvas, evt, world);
			}
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


		var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y + ":"+mouseX + ", "+mouseY;
		//document.editor.mouseDown(mouseX,mouseY)



	}
	, false);

	canvas.addEventListener('mouseup', function(evt) {
		 if (world.dragging) {

		    	var mousePos = CanvasFunctions.getMousePos(canvas, evt);
			var mouseX = world.viewCenterX-world.canvii.width*0.5 + mousePos.x
			var mouseY = world.viewCenterY-world.canvii.height*0.5 + mousePos.y


			world.dragEnd(mouseX, mouseY);
			world.dragging = false;
		    }
		mouseIsDown = false;
		var newPos = CanvasFunctions.getRelativeMousePosition(canvas, evt, world);
		//Check if there was no drag, then it is a click!
		if( newPos.x - mouseStart.x < 2 &&newPos.y - mouseStart.y < 2 ){
			document.editor.mouseDown(newPos.x, newPos.y)
			//world.click(newPos.x, newPos.y)
		} else {
		    world.hover(newPos.x, newPos.y);
		}
	}, false);


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
	var maxSpd = 30;
	var distanceX = Math.abs(viewportX-world.viewCenterX);
	if (distanceX!=0) {

		var xspeed = Math.min( distanceX*0.5, maxSpd );
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
	if (distanceY!=0) {

		var yspeed = Math.min( distanceY*0.5, maxSpd );
		if (viewportY>world.viewCenterY) {
			world.translateY = -yspeed;
		}
		if (viewportY<world.viewCenterY) {
			world.translateY = yspeed;
		}
	} else {
		world.translateY = 0;

	}



	iterations++
	if (pressedKeys[39] || pressedKeys[38] || pressedKeys[37] || pressedKeys[40]) {

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

// Load save if defined in URL
url_vars = getUrlVars();
if(  ('user' in url_vars) && ('saveName' in url_vars) ){

	if (('shadow' in url_vars) &&  (url_vars['shadow']=='false')) {
		window.Settings['drawShadows'] = false
	}

	if (('hideBackground' in url_vars) &&  (url_vars['hideBackground']=='true')) {
		console.log('Hiding background')
		$('#world_1').hide()
		$('#world_4').hide()
	}

	if( ('embed' in url_vars) &&  (url_vars['embed']=='true')){
		$('#editorMenuBar').hide();
		$('#editor').hide();
		world.allowDrag = false;
		world.allowWire = false;
		world.isEmbedded = true
		console.log('embed mode!')
		$('canvas').css({'left':0})
		$('#config').hide()
		world.load(url_vars['user'], url_vars['saveName'], replace_url=false);
		if('w' in url_vars && 'h' in url_vars ){
			world.resizeFunction(url_vars['w'], url_vars['h']);
			$('.main').css({'height':url_vars['h'], 'width':url_vars['w']})
		}
		$('#editor').hide();
		$('.main').append('<div style="position: relative; bottom: 20px; pointer-events: none; z-index:999"><span id="linkout" style=" background-color:rgba(200,200,200,0.5); pointer-events: auto; padding: 3px;  font-family:Sans-serif; ">Edit this simulation</span></div>');
		// file:///N:/projects/LogicsSandbox/index.html?user=BuysDB&saveName=test&embed=true&w=600&h=400

		$("#linkout").on("click",function(){
			world.pause = true
			location.href="index.html?user="+ url_vars['user'] + '&' + url_vars['saveName']  })

	} else {
		world.load(url_vars['user'], url_vars['saveName']);
	}
}
})
