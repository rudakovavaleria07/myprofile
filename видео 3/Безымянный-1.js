(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Безымянный_1_atlas_1", frames: [[0,0,1920,1920]]},
		{name:"Безымянный_1_atlas_2", frames: [[802,0,564,508],[1368,328,500,320],[1368,0,549,326],[0,0,800,706],[1870,328,156,129]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._0dc812c26a56c54354305d13a276f71b = function() {
	this.initialize(ss["Безымянный_1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.колесоfotorbgremover202410280850 = function() {
	this.initialize(ss["Безымянный_1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.машинателоAmoyShare1 = function() {
	this.initialize(ss["Безымянный_1_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.телоAmoyShare = function() {
	this.initialize(ss["Безымянный_1_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.хвостAmoyShare1 = function() {
	this.initialize(ss["Безымянный_1_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom7 = function() {
	this.initialize(ss["Безымянный_1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.колесоfotorbgremover202410280850();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,500,320), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.хвостAmoyShare1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,156,129), null);


(lib.xvost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(156.05,128.95,1,1,-53.69,0,0,155.5,129.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:78,regY:64.5,rotation:-33.4728,x:55.7,y:117.75},0).wait(1).to({rotation:-13.2552,x:65.8,y:83.75},0).wait(1).to({rotation:9.2446,x:89.95,y:52.7},0).wait(1).to({rotation:31.7444,x:124.15,y:33.25},0).wait(1).to({rotation:6.9997,x:87,y:55.35},0).wait(1).to({rotation:-17.7451,x:62.55,y:91},0).wait(1).to({rotation:-37.4769,x:55.2,y:124.75},0).wait(1).to({rotation:-57.2087,x:59.7,y:159.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-62.6,270.3,322.20000000000005);


(lib.dog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.xvost();
	this.instance.setTransform(98.15,205.95,1,1,0,0,0,58,153.1);

	this.instance_1 = new lib.телоAmoyShare();
	this.instance_1.setTransform(90.45,0,0.6368,0.6368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog, new cjs.Rectangle(0,0,599.9,449.6), null);


(lib.колесо = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(71.75,59.95,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:250,regY:160,scaleX:0.9881,scaleY:0.9881,x:274.45,y:173.75},0).wait(1).to({scaleX:0.9761,scaleY:0.9761,x:272.05,y:172.4},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,x:269.6,y:171},0).wait(1).to({scaleX:0.9523,scaleY:0.9523,x:267.1,y:169.6},0).wait(1).to({scaleX:0.9403,scaleY:0.9403,x:264.7,y:168.25},0).wait(1).to({scaleX:0.9284,scaleY:0.9284,x:262.25,y:166.9},0).wait(1).to({scaleX:0.9165,scaleY:0.9165,x:259.75,y:165.5},0).wait(1).to({scaleX:0.9045,scaleY:0.9045,x:257.35,y:164.15},0).wait(1).to({scaleX:0.8926,scaleY:0.8926,x:254.9,y:162.75},0).wait(1).to({scaleX:0.8807,scaleY:0.8807,x:252.4,y:161.35},0).wait(1).to({scaleX:0.8687,scaleY:0.8687,x:250,y:160},0).wait(1).to({scaleX:0.8935,scaleY:0.8935,x:255.1,y:162.85},0).wait(1).to({scaleX:0.9183,scaleY:0.9183,x:260.15,y:165.75},0).wait(1).to({scaleX:0.9431,scaleY:0.9431,x:265.25,y:168.6},0).wait(1).to({scaleX:0.9679,scaleY:0.9679,x:270.3,y:171.4},0).wait(1).to({scaleX:0.9926,scaleY:0.9926,x:275.4,y:174.25},0).wait(1).to({scaleX:1.0174,scaleY:1.0174,x:280.5,y:177.15},0).wait(1).to({scaleX:1.0422,scaleY:1.0422,x:285.6,y:180},0).wait(1).to({scaleX:1.067,scaleY:1.067,x:290.7,y:182.85},0).wait(1).to({scaleX:1.0917,scaleY:1.0917,x:295.75,y:185.7},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.9,11.1,545.8000000000001,349.29999999999995);


(lib.машинка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.колесо();
	this.instance.setTransform(193.25,214.85,0.679,0.679,0,0,0,276.9,175.2);

	this.instance_1 = new lib.колесо();
	this.instance_1.setTransform(321.4,217.1,0.6929,0.6929,0,0,0,276.9,175.2);

	this.instance_2 = new lib.машинателоAmoyShare1();
	this.instance_2.setTransform(0,0,0.4119,0.4119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.машинка, new cjs.Rectangle(0,0,494.7,327.9), null);


// stage content:
(lib.Безымянный1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_13
	this.instance = new lib.машинка();
	this.instance.setTransform(278.8,428.65,0.6823,0.6823,0,0,0,116.2,87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:261.8,regY:172.7,x:388.35,y:486.45},0).wait(1).to({x:398.55,y:486.25},0).wait(1).to({x:408.8,y:486.05},0).wait(1).to({x:419,y:485.85},0).wait(1).to({x:429.25,y:485.65},0).wait(1).to({x:439.45,y:485.45},0).wait(1).to({x:449.7,y:485.25},0).wait(1).to({x:459.9,y:485.05},0).wait(1).to({x:470.15,y:484.85},0).wait(1).to({x:480.35,y:484.65},0).wait(1).to({x:490.55,y:484.45},0).wait(1).to({x:500.8,y:484.25},0).wait(1).to({x:511,y:484.05},0).wait(1).to({x:521.25,y:483.85},0).wait(1).to({x:531.45,y:483.65},0).wait(1).to({x:541.7,y:483.45},0).wait(1).to({x:551.9,y:483.25},0).wait(1).to({x:562.15,y:483.05},0).wait(1).to({x:572.35,y:482.85},0).wait(1).to({x:582.6,y:482.65},0).wait(1).to({x:592.8,y:482.45},0).wait(1).to({x:603,y:482.25},0).wait(1).to({x:613.25,y:482.05},0).wait(1).to({x:623.45,y:481.85},0).wait(1).to({x:633.7,y:481.65},0).wait(1).to({x:643.9,y:481.45},0).wait(1).to({x:654.15,y:481.25},0).wait(1).to({x:664.35,y:481.05},0).wait(1).to({x:674.6,y:480.85},0).wait(1).to({x:684.8,y:480.65},0).wait(1).to({x:695.05,y:480.45},0).wait(1).to({x:705.25,y:480.25},0).wait(1).to({x:715.45,y:480.05},0).wait(1));

	// Слой_4
	this.instance_1 = new lib.dog();
	this.instance_1.setTransform(130.2,611.1,0.3881,0.3881,0,0,0,300.7,225.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:297,regY:219.9,rotation:0.9302,x:137.3,y:608.85},0).wait(1).to({rotation:1.8604,x:145.95},0).wait(1).to({rotation:2.7906,x:154.5,y:608.8},0).wait(1).to({rotation:3.7208,x:163.1},0).wait(1).to({rotation:4.651,x:171.7,y:608.75},0).wait(1).to({rotation:5.5812,x:180.25},0).wait(1).to({rotation:6.5114,x:188.8,y:608.7},0).wait(1).to({rotation:7.4416,x:197.45,y:608.75},0).wait(1).to({rotation:6.4445,x:205.6},0).wait(1).to({rotation:5.4474,x:213.75},0).wait(1).to({rotation:4.4503,x:221.95,y:608.8},0).wait(1).to({rotation:3.4532,x:230.05},0).wait(1).to({rotation:2.4561,x:238.25},0).wait(1).to({rotation:1.459,x:246.45,y:608.85},0).wait(1).to({rotation:0.4619,x:254.55,y:608.9},0).wait(1).to({rotation:-0.5351,x:262.75},0).wait(1).to({rotation:-1.5322,x:270.95},0).wait(1).to({rotation:-0.5079,x:279.15},0).wait(1).to({rotation:0.5164,x:287.45},0).wait(1).to({rotation:1.5407,x:295.7,y:608.8},0).wait(1).to({rotation:2.565,x:303.95},0).wait(1).to({rotation:3.5894,x:312.15},0).wait(1).to({rotation:4.6137,x:320.45,y:608.7},0).wait(1).to({rotation:5.638,x:328.65,y:608.75},0).wait(1).to({rotation:6.6623,x:336.9,y:608.7},0).wait(1).to({x:345.1},0).wait(1).to({x:353.35},0).wait(1).to({x:361.55},0).wait(1).to({x:369.75},0).wait(1).to({x:377.95},0).wait(1).to({x:386.15},0).wait(1).to({x:394.35},0).wait(1).to({x:402.55},0).wait(1));

	// xvost
	this.instance_2 = new lib.dog();
	this.instance_2.setTransform(158,478.55,0.3741,0.3741,0,0,0,299.9,224.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(33));

	// Слой_6
	this.instance_3 = new lib.dog();
	this.instance_3.setTransform(1247.3,612.1,0.397,0.3743,0,0,180,299.9,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:297,regY:219.9,skewX:1.1321,skewY:181.1321,x:1232.7,y:610.3},0).wait(1).to({skewX:2.2642,skewY:182.2642,x:1216.95,y:610.45},0).wait(1).to({skewX:3.3963,skewY:183.3963,x:1201.2,y:610.55},0).wait(1).to({skewX:4.5283,skewY:184.5283,x:1185.45,y:610.75},0).wait(1).to({skewX:5.6604,skewY:185.6604,x:1169.75,y:610.85},0).wait(1).to({skewX:6.7925,skewY:186.7925,x:1153.95,y:611},0).wait(1).to({skewX:1.5794,skewY:181.5794,x:1138.1},0).wait(1).to({skewX:-3.6338,skewY:176.3662,x:1122.15},0).wait(1).to({skewX:-2.4192,skewY:177.5808,x:1106.4,y:611.2},0).wait(1).to({skewX:-1.2046,skewY:178.7954,x:1090.65,y:611.3},0).wait(1).to({skewX:0.01,skewY:180.01,x:1074.95,y:611.45},0).wait(1).to({skewX:1.2246,skewY:181.2246,x:1059.2,y:611.6},0).wait(1).to({skewX:2.4392,skewY:182.4392,x:1043.5,y:611.7},0).wait(1).to({skewX:3.6538,skewY:183.6538,x:1027.75,y:611.9},0).wait(1).to({skewX:1.7843,skewY:181.7843,x:1011.95,y:611.95},0).wait(1).to({skewX:-0.0851,skewY:179.9149,x:996.05,y:612},0).wait(1).to({skewX:-1.9546,skewY:178.0454,x:980.25,y:612.05},0).wait(1).to({skewX:-3.8241,skewY:176.1759,x:964.4,y:612.15},0).wait(1).to({skewX:-5.6936,skewY:174.3064,x:948.55,y:612.25},0).wait(1).to({skewX:-4.2603,skewY:175.7397,x:932.8,y:612.35},0).wait(1).to({skewX:-2.827,skewY:177.173,x:917.15,y:612.5},0).wait(1).to({skewX:-1.3937,skewY:178.6063,x:901.45,y:612.65},0).wait(1).to({skewX:0.0396,skewY:180.0396,x:885.7,y:612.8},0).wait(1).to({skewX:1.4729,skewY:181.4729,x:870,y:612.95},0).wait(1).to({skewX:2.9062,skewY:182.9062,x:854.25,y:613.1},0).wait(1).to({skewX:1.86,skewY:181.86,x:838.45,y:613.25},0).wait(1).to({skewX:0.8138,skewY:180.8138,x:822.65,y:613.35},0).wait(1).to({skewX:-0.2324,skewY:179.7676,x:806.85,y:613.4},0).wait(1).to({skewX:-1.2785,skewY:178.7215,x:791,y:613.55},0).wait(1).to({skewX:-2.3247,skewY:177.6753,x:775.25,y:613.6},0).wait(1).to({skewX:-3.3709,skewY:176.6291,x:759.4,y:613.7},0).wait(1).to({skewX:-4.4171,skewY:175.5829,x:743.6,y:613.8},0).wait(1).to({skewX:-5.4633,skewY:174.5367,x:727.8,y:613.9},0).wait(1));

	// Слой_5
	this.instance_4 = new lib.pngwingcom7();
	this.instance_4.setTransform(529,629,0.0474,0.0474);

	this.instance_5 = new lib._0dc812c26a56c54354305d13a276f71b();
	this.instance_5.setTransform(-7,-73,2.2826,1.5618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(34));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(633,287,733.3,433.4);
// library properties:
lib.properties = {
	id: 'E79640BE0941A94F858FD7EC2CE9E865',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Безымянный_1_atlas_1.png", id:"Безымянный_1_atlas_1"},
		{src:"images/Безымянный_1_atlas_2.png", id:"Безымянный_1_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E79640BE0941A94F858FD7EC2CE9E865'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;