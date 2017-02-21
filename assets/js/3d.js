
//wrap three.js code
(function()
{
	//
	var voxel;
	var mouseCanvas = {};
	var canvasRect;

	// standard global variables
	var container, scene, camera, renderer, controls, stats;
	var keyboard = new KeyboardState();
	var clock = new THREE.Clock();
	var projector;

	// custom global variables
	var grid, mesh, floor;
	var mouse2D, mouse3D, raycaster;
	var hoverData = undefined;
	var xCell = -1;
	var yCell = -1;

	world = {};

	//code postal boundaries
	world.codePostals = {};
	world.codePostalOpacity = 0.15;

	//updatable cell bars
	world.bars = [];

	//lines
	world.cellLines = [];

	//tween options
	world.tweenParams = {
		duration : 500,
		delay : 50,
		easing : TWEEN.Easing.Quadratic.In,
		minOpacity : 0.02,
		maxOpacity : 0.30
	};

	world.scopeColors = [0xff0000, 0x00ff00, 0x0000ff];

	world.hoveredCellLng = -1;
	world.hoveredCellLat = -1;
	world.hoveredCellMeshes = undefined;
	world.mouseOverFloor = false;

	world.create = function()
	{
		this.init();
		this.generateBars();
		this.updateCurrentWeek();
		// this.drawPOIs();
		animate();
	}


	world.init = function()
	{
		//set a log scale to translate km to bar's height
		world.heightScale = d3.scale.linear()
		//.base([10])


		.domain([1, model[constants.KEY_MAX_KM][constants.KEY_OTHERS]])
		.range([0, 15000]);

		world.opacityScaleCity = d3.scale.log()
			.domain([1, model[constants.KEY_MAX_KM][constants.KEY_CITY]])
			.range([this.tweenParams.minOpacity, this.tweenParams.maxOpacity]);

		world.opacityScaleProvince = d3.scale.log()
			.domain([1, model[constants.KEY_MAX_KM][constants.KEY_PROVINCE]])
			.range([this.tweenParams.minOpacity, this.tweenParams.maxOpacity]);

		world.opacityScaleOthers = d3.scale.log()
			.domain([1, model[constants.KEY_MAX_KM][constants.KEY_OTHERS]])
			.range([this.tweenParams.minOpacity, this.tweenParams.maxOpacity]);

		// SCENE
		scene = new THREE.Scene();

		// CAMERA
		var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
		var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
		camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
		scene.add(camera);
		camera.position.set(1300,250,-150);
		camera.lookAt(scene.position);

		// RENDERER
		if ( Detector.webgl )
			renderer = new THREE.WebGLRenderer( {antialias:true} );
		else
			renderer = new THREE.CanvasRenderer();
		renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
		renderer.sortObjects = false;


		container = document.getElementById( 'ThreeJS' );
		container.appendChild( renderer.domElement );

		// EVENTS
		// THREE.WindowResize(renderer, camera);

		// CONTROLS, added third parameter to change the lookAt point
		controls = new THREE.OrbitControls( camera, renderer.domElement, new THREE.Vector3(500, 0, -600) );

		// STATS
		/*stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.bottom = '0px';
		stats.domElement.style.zIndex = 100;
		container.appendChild( stats.domElement );*/

		// LIGHT
		light = new THREE.DirectionalLight( 0xeeeeee );
		light.position.set( 1, 1, 1);
		light.intensity = 0.8;
		scene.add( light );

		// FLOOR
		var floorGeometry = new THREE.PlaneGeometry(1200, 1200);
		var floorMaterial = new THREE.MeshBasicMaterial( { color: 0x111111, side: THREE.DoubleSide} );
		floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.rotation.x = Math.PI / 2;
		floor.position.x += 600;
		floor.position.z -= 600;
		scene.add(floor);

		// SKYBOX - background
		var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
		var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x111111, side: THREE.BackSide } );
		var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
		scene.add(skyBox);


		var extrusionSettings = {
			//amount: getRandomArbitary(5,50),
			bevelEnabled: false,
			bevelSegments: 12,
			steps: 2
			}; // bevelSegments: 2, steps: 2 , bevelSegments: 5, bevelSize: 8, bevelThickness:5,

		var geometry = [];
		var cityGeometry = new THREE.Geometry();
		var postalCodesBoundariesGeometry = new THREE.Geometry();

		//picking
		projector = new THREE.Projector();
		mouse2D = new THREE.Vector3( 0, 10000, 0.5 );
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );

		//DRA POSTAL CODE BOUNDARIES
		jQuery.getJSON('data/postalcodes_boundaries.json', function(data, textStatus, jqXHR)
		{
			for (var cpKey in data)
			{
				geometry = [];
				for(var co=data[cpKey][0].length-1; co>=0; co--)
				{
					geometry.push( new THREE.Vector2 (data[cpKey][0][co][1], data[cpKey][0][co][0]));
				}
				var shape = new THREE.Shape(geometry);
				extrusionSettings.amount = 15;
				var shapeGeometry = new THREE.ExtrudeGeometry( shape, extrusionSettings);
				codePostalMesh = new THREE.Mesh(shapeGeometry, new THREE.MeshBasicMaterial({transparent:true, opacity:0, color : 0xff0000}));
				//for some reason, we have to correct the scale of the x
				codePostalMesh.scale.x = 1.12;
				codePostalMesh.rotation.x = -Math.PI / 2;
				world.codePostals[cpKey] = codePostalMesh;
				scene.add(codePostalMesh);
			}
		});

		// DRAW GRID
		var lineMaterial = new THREE.LineBasicMaterial( {color: 0x080808} );
		var geometry = new THREE.Geometry();

		//translate coordinates
		for(var i=0; i<model.latitudes.length; i++)
			model.latitudes[i] -= 19.05;
		for(var i=0; i<model.longitudes.length; i++)
			model.longitudes[i] -= 19.05;

		//draw horizontal lines
		for(var i=0; i<model.latitudes.length; i++)
		{
			geometry.vertices.push(new THREE.Vector3(model.longitudes[0], 0, -model.latitudes[i]));
			geometry.vertices.push(new THREE.Vector3(model.longitudes[model.longitudes.length-1], 0, -model.latitudes[i]));
		}
		//draw verical lines
		for(var i=0; i<model.longitudes.length; i++)
		{
			geometry.vertices.push(new THREE.Vector3(model.longitudes[i], 0, -model.latitudes[0]));
			geometry.vertices.push(new THREE.Vector3(model.longitudes[i], 0, -model.latitudes[model.latitudes.length-1]));
		}
		grid = new THREE.Line(geometry, lineMaterial, THREE.LinePieces);
		scene.add(grid);



		// DRAW CITY

		//jQuery.getJSON('data/BCN-Illes-datum-rounded.json', function(data, textStatus, jqXHR)
		//{
			//$.each(data.geometry, function(i, polygon)
			$.each(world.cityGeometry.geometry, function(i, polygon)
			{
					geometry = [];
					$.each(polygon, function(index, coordinate)
					{
						geometry.push( new THREE.Vector2 (coordinate[0], coordinate[1]));
					});
					var shape = new THREE.Shape(geometry);
					extrusionSettings.amount = Math.random() * (15 - 3) + 3;
					var shapeGeometry = new THREE.ExtrudeGeometry( shape, extrusionSettings);
					THREE.GeometryUtils.merge(cityGeometry, shapeGeometry);

			});

			//build the city mesh
			var material  = new THREE.MeshLambertMaterial({
	  			shading: THREE.FlatShading,
	  			color : 0x555555
			});

			//var cityBufferGeometry = THREE.BufferGeometryUtils.fromGeometry( cityGeometry );
			var city = new THREE.Mesh(cityGeometry, material);

			city.rotation.x = -Math.PI / 2;
			scene.add(city);
		//});

		//voxel to show the hovered cell
		voxel = new THREE.Mesh(
			new THREE.CubeGeometry( model.cellWidth, 25, model.cellHeight),
			new THREE.MeshLambertMaterial({ color: 0xff0000, transparent: true, opacity:0.4})
		);
		voxel.y = 50;
		voxel.visible = false;
		scene.add(voxel);
	}



	world.removeLines = function()
	{
		for(var x=0; x<this.cellLines.length; x++)
		{
			scene.remove(this.cellLines[x]);
			//renderer.deallocateObject(this.cellLines[x]);
		}
		this.cellLines = [];
	}

	//loop over the data of the current week and draw arc from the postal codes of origin to the cell
	world.drawLines = function(lng, lat)
	{
		var material = new THREE.LineBasicMaterial({color: 0xff0000, transparent: true, opacity:0.4});
		var numPoints = 30;
		var colors = [];

		//data for cells is acces by lng-lat key
				//check if key exists and if there are city zip code for this cell
				key = getKey(lng, lat)
				if(key in model.currentWeek().data &&
					model.currentWeek().data[key]['c']['l'].length > 0)
				{
					for(var p=0; p<model.currentWeek().data[key]['c']['l'].length-1; p++)
					{
						postalCode = model.currentWeek().data[key]['c']['l'][p];
						var pointA = {	x : model.postalCodes[postalCode].x,
										y : -model.postalCodes[postalCode].y};
						var pointC = {	x : model.longitudesCenters[lng]+(model.cellWidth/2),
										y : -(model.latitudesCenters[lat]+(model.cellHeight/2))};
						var pointB = interpolate(pointA, pointC, 0.5);
						//get position for postal code origin
						spline = new THREE.Spline([
							new THREE.Vector3(pointA.x, 0, pointA.y),
							new THREE.Vector3(pointB.x, 100, pointB.y),
							new THREE.Vector3(pointC.x, 0, pointC.y)
							]);
						var geometry = new THREE.Geometry();

						for(var i = 0; i < numPoints; i++){
							index = i / numPoints;
							position = spline.getPoint(index);
	    					geometry.vertices[i] = new THREE.Vector3(position.x, position.y, position.z);
	    					//colors[ i ] = new THREE.Color( 0xffffff );
							//colors[ i ].setHSL( 0.6, 1.0, Math.max( 0, - position.x / 200 ) + 0.5 );
						}
						//geometry.colors = colors;
						var line = new THREE.Line(geometry, material);
						this.cellLines.push(line);
						scene.add(line);

						//and finally show the mesh of the postal code
						world.codePostals[postalCode].material.opacity = world.codePostalOpacity;
					}
				}
	}

	world.generateBars = function()
	{
		var sizeCube = model.cellWidth;	//width and height for the cube
		var minHeightCube = 1;
		var colorCube = new THREE.Color( 0xffffff ); //define start color (it does not matter the value here) and material
		var wFactor = 5;
		var hFactor = 5;
		var cubeGeo = new THREE.CubeGeometry(model.cellWidth/wFactor, minHeightCube, model.cellHeight/hFactor);
		var planeGeo = new THREE.PlaneGeometry(model.cellWidth/wFactor, model.cellHeight/hFactor, 10, 10);

		//remove top and bottom face - it is never seen
		cubeGeo.faces.splice( 4, 1 );	//first two are the triangles of top face
		cubeGeo.faces.splice( 4, 1 );
		cubeGeo.faces.splice( 4, 1 );	//last two are triangles of bottom face
		cubeGeo.faces.splice( 4, 1 );

		//We change the pivot point to be at the bottom of the cube, instead of its center. So we translate the whole geometry.
		cubeGeo.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

		for(var lng = 0; lng<model.longitudesCenters.length; lng++)
		{
			this.bars[lng] = [];
			for(var lat=0; lat<model.latitudesCenters.length; lat++)
			{
				//check if key exists
				//if (getKey(lng, lat) in model.currentWeek().data)
				//{
					//draw bars and planes for all the cells, even for those without data. Meshes without data are set to visible=false
					//and are not rendered (no impact in performace)
					//for each cell, 3 measures: the km for city, province and others
					cubesInCell = {};
					for(var x=0; x<3; x++)
					{
						var cube = new THREE.Mesh(cubeGeo, new THREE.MeshBasicMaterial({color:colorCube, transparent:true, opacity: this.tweenParams.maxOpacity}));
						//place each cube in different positions inside the cell
						cube.position.x = model.longitudesCenters[lng]  + (model.cellWidth/2);
						cube.position.z = -(model.latitudesCenters[lat] + (model.cellHeight/2));
						if(x==1)
							cube.position.z += (model.cellHeight/hFactor);
						else if(x==2)
							cube.position.z -= model.cellHeight/hFactor;
						cube.position.y = minHeightCube/2;
						cube.visible = false;

						//decide scope for each cube
						scopeKey = (x==0)? constants.KEY_CITY : (x==1)? constants.KEY_PROVINCE : constants.KEY_OTHERS;
						cubesInCell[scopeKey] = cube;
						scene.add(cube);
					}

					//for each cell, generate the planes for each cube
					planesInCell = {};
					for(var x=0; x<3; x++)
					{
						//We change the pivot point to be at the bottom of the cube, instead of its center. So we translate the whole geometry.
						var plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({color:colorCube, transparent:true, opacity: 0.8}));
						//place each cube in different positions inside the cell
						plane.position.x = model.longitudesCenters[lng]  + (model.cellWidth/2);
						plane.position.z = -(model.latitudesCenters[lat] + (model.cellHeight/2));
						if(x==1)
							plane.position.z += model.cellHeight/hFactor;
						else if(x==2)
							plane.position.z -= model.cellHeight/hFactor;
						plane.position.y = minHeightCube/2;
						plane.rotation.x = -Math.PI/2;
						plane.visible = false;

						//decide scope for each cube
						scopeKey = (x==0)? constants.KEY_CITY : (x==1)? constants.KEY_PROVINCE : constants.KEY_OTHERS;
						planesInCell[scopeKey] = plane;
						scene.add(plane);
					}

					//store the 3 cubes for this cell
					this.bars[lng][lat] = [cubesInCell, planesInCell];
			//	}
			}
		}
	}


	world.updateCurrentWeek = function()
	{
		var kmTotalCity = model[constants.KEY_MAX_KM][constants.KEY_CITY]; //model["maxKmValues"]["city"];
		var kmTotalProvince = model[constants.KEY_MAX_KM][constants.KEY_PROVINCE];
		var kmTotalOthers = model[constants.KEY_MAX_KM][constants.KEY_OTHERS];

		var heightCube;
		var tweens = [];
		var mesh;

		// remove previous tweens if needed
		TWEEN.removeAll();

		//data for cells is acces by lng-lat key
		for(var lng = 0; lng<model.longitudesCenters.length; lng++)
		{
			for(var lat=0; lat<model.latitudesCenters.length; lat++)
			{
				//check if key exists and if there are city zip code for this cell
				key = getKey(lng, lat);
				if(key in model.currentWeek().data)
				{

					//bug: skip last value for xCell (39) and 17 first values for yCell. These are cells in the sea but
					//they have data ¿? It seems all the columns is invalid...
					//if(lng == 40/* && lat < 18*/)
					//	continue;

					for(var x=0; x<3; x++)
					{
						//get the scope of the bar
						scopeKey = (x==0)? constants.KEY_CITY : (x==1)? constants.KEY_PROVINCE : constants.KEY_OTHERS;

						//get maximum value to compare for this scope
						kmTotal = (x==0)? kmTotalCity : (x==1)? kmTotalProvince : kmTotalOthers;

						//get maximum height to compare for this scope
						//heightTop = (kmTotal * 200)/kmTotalCity;	//values too high for scope = other

						//get value and total
						var km = (key in model.currentWeek().data)? model.currentWeek().data[key][scopeKey][constants.KEY_KM] : 0;
						//calculate final height of the bar
						//heightCube = (key in model.currentWeek().data)?	mapValue(km, 0, kmTotal, 0, heightTop) : 0;
						heightCube = world.heightScale((km==0)?1:km); //avoid zero values for the log scale

						//calculate color for the bar
						//http://hslpicker.com/ -> hue goes from 0 to 360, we use:
						//from 0(red) to yellow(60) for city scope
						//from 100(green) to soft blue (177) for province scope
						//from 	241 (dark blue) to pink (322)
						//three.js expects values from 0 to 1 for the hue.
						colorCube = new THREE.Color( 0xffffff );

						hue = 	(scopeKey == constants.KEY_CITY)?		mapValue(km, 0, kmTotalCity, 0.155, 0) :
								(scopeKey == constants.KEY_PROVINCE)?	mapValue(km, 0, kmTotalProvince, 0.5, 0.341) : mapValue(km, 0, kmTotalOthers, 0.83, 0.658);

						if(key in model.currentWeek().data)
							colorCube.setHSL(hue, 1, 0.5);
						else
							colorCube.setHSL(0, 1, 0.5);
						world.bars[lng][lat][0][scopeKey].material.color = colorCube;
						world.bars[lng][lat][1][scopeKey].material.color = colorCube;

						//map opacity
						//var opacityCube = (key in model.currentWeek().data)? mapValue(km, 0, kmTotal, this.tweenParams.minOpacity, this.tweenParams.maxOpacity):0;
						//world.bars[lng][lat][0][scopeKey].material.opacity = opacityCube;
						//world.bars[lng][lat][1][scopeKey].material.opacity = opacityCube;
						var opacityCube = 	(scopeKey == constants.KEY_CITY)?		this.opacityScaleCity(km):
											(scopeKey == constants.KEY_PROVINCE)?	this.opacityScaleProvince(km):this.opacityScaleOthers(km);

						//store height of the bar
						world.bars[lng][lat][0][scopeKey].userData["heightCube"] = heightCube;

						//check if need to hide the bar
						if(	heightCube == 0)
							world.bars[lng][lat][0][scopeKey].visible = world.bars[lng][lat][1][scopeKey].visible = false;
						else if(model.scopeIsVisible(scopeKey))
							world.bars[lng][lat][0][scopeKey].visible = world.bars[lng][lat][1][scopeKey].visible = true;

							var tween = new TWEEN.Tween(world.bars[lng][lat][0][scopeKey].scale)
										.to({y:heightCube}, world.tweenParams.duration)
										.delay(world.tweenParams.delay)
										.easing(world.tweenParams.easing)
										.start();
							var tweenTops = new TWEEN.Tween(world.bars[lng][lat][1][scopeKey].position)
										.to({y:heightCube+1}, world.tweenParams.duration*2)
										.delay(world.tweenParams.delay)
										.easing(world.tweenParams.easing)
										.start();
							var tweenAlpha = new TWEEN.Tween(world.bars[lng][lat][0][scopeKey].material)
										.to({opacity:opacityCube}, world.tweenParams.duration)
										.delay(world.tweenParams.delay)
										.easing(world.tweenParams.easing)
										.start();
					}
				}
				/*else
				{
					//no data for this cell and week
					var opacityCube = 0;
					world.bars[lng][lat][0][scopeKey].userData["heightCube"] = 0;
				}*/
			}
		}
	}



	world.updateVisibleBars = function(scopeKey, isVisible)
	{
		for(var lng = 0; lng<model.longitudesCenters.length; lng++)
		{
			for(var lat=0; lat<model.latitudesCenters.length; lat++)
			{
				if(world.bars[lng][lat][0][scopeKey].userData["heightCube"] > 0)
					world.bars[lng][lat][0][scopeKey].visible = world.bars[lng][lat][1][scopeKey].visible = isVisible;
			}
		}
	}

	world.drawPOIs = function()
	{
		var textColor = 0x888888;
		//draw text for the commercial points of interest
		for(var x=0; x<model["POIS"].length; x++)
		{
			poi = model["POIS"][x];
			var text3d = new THREE.TextGeometry( poi["name"], {
					size: 8,
					height: 2,
					curveSegments: 2,
					font: "helvetiker"
				});

			text3d.computeBoundingBox();
			var textMaterial = new THREE.MeshBasicMaterial( { color: textColor, overdraw: true } );
			text = new THREE.Mesh( text3d, textMaterial );
			text.position.x = poi["x"] + ( text3d.boundingBox.max.x - text3d.boundingBox.min.x );
			text.rotation.z = 90 * Math.PI / 180;
			text.position.z = -poi["y"];
			text.position.y = 15;
			text.rotation.y = 45;

			group = new THREE.Object3D();
			group.add(text);
			scene.add(group);
		}
	}

	world.unhoverCell = function()
	{
		if(hoverData != undefined)
		{
			world.bars[hoverData.lng][hoverData.lat][0][constants.KEY_CITY].material.color = hoverData.materialCellCity;
			world.bars[hoverData.lng][hoverData.lat][0][constants.KEY_PROVINCE].material.color = hoverData.materialCellProvince;
			world.bars[hoverData.lng][hoverData.lat][0][constants.KEY_OTHERS].material.color = hoverData.materialCellOthers;

			world.bars[hoverData.lng][hoverData.lat][1][constants.KEY_CITY].material.color = hoverData.materialPlaneCity;
			world.bars[hoverData.lng][hoverData.lat][1][constants.KEY_PROVINCE].material.color = hoverData.materialPlaneProvince;
			world.bars[hoverData.lng][hoverData.lat][1][constants.KEY_OTHERS].material.color = hoverData.materialPlaneOthers;

			world.bars[hoverData.lng][hoverData.lat][0][constants.KEY_CITY].material.opacity = hoverData.opacityCellCity;
			world.bars[hoverData.lng][hoverData.lat][0][constants.KEY_PROVINCE].material.opacity = hoverData.opacityCellProvince;
			world.bars[hoverData.lng][hoverData.lat][0][constants.KEY_OTHERS].material.opacity = hoverData.opacityCellOthers;
			hoverData = undefined;
		}
	}

	world.hoverCell = function(lng, lat)
	{
		world.unhoverCell();
		if(world.bars[lng] != undefined && world.bars[lng][lat] != undefined)
		{
			hoverData = {};
			hoverData.lng = lng;
			hoverData.lat = lat;
			hoverData.materialCellCity 		= world.bars[lng][lat][0][constants.KEY_CITY].material.color;
			hoverData.materialCellProvince 	= world.bars[lng][lat][0][constants.KEY_PROVINCE].material.color;
			hoverData.materialPlaneCity 	= world.bars[lng][lat][1][constants.KEY_CITY].material.color;
			hoverData.materialPlaneProvince = world.bars[lng][lat][1][constants.KEY_PROVINCE].material.color;
			hoverData.materialPlaneOthers 	= world.bars[lng][lat][1][constants.KEY_OTHERS].material.color;
			hoverData.opacityCellCity 		= world.bars[lng][lat][0][constants.KEY_CITY].material.opacity;
			hoverData.opacityCellProvince 	= world.bars[lng][lat][0][constants.KEY_PROVINCE].material.opacity;
			hoverData.opacityCellOthers 	= world.bars[lng][lat][0][constants.KEY_OTHERS].material.opacity;

			var whiteColor = new THREE.Color( 0xffffff );
			world.bars[lng][lat][0][constants.KEY_CITY].material.color = whiteColor;
			world.bars[lng][lat][0][constants.KEY_PROVINCE].material.color = whiteColor;
			world.bars[lng][lat][0][constants.KEY_OTHERS].material.color = whiteColor;
			world.bars[lng][lat][1][constants.KEY_CITY].material.color = whiteColor;
			world.bars[lng][lat][1][constants.KEY_PROVINCE].material.color = whiteColor;
			world.bars[lng][lat][1][constants.KEY_OTHERS].material.color = whiteColor;

			world.bars[lng][lat][0][constants.KEY_CITY].material.opacity = 1;
			world.bars[lng][lat][0][constants.KEY_PROVINCE].material.opacity = 1;
			world.bars[lng][lat][0][constants.KEY_OTHERS].material.opacity = 1;
		}
	}


	function onDocumentMouseMove( event )
	{
		//get bounds of the canvas
		canvasRect = $("canvas")[0].getBoundingClientRect();
		event.preventDefault();
		mouse2D.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse2D.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
		mouseCanvas.x =  event.clientX - canvasRect.left;
        mouseCanvas.y =  event.clientY - canvasRect.top;
	}

	//called from OrbitControl.js when a mouse click (without drag) is detected
	world.checkForCellData = function()
	{
		if(this.mouseOverFloor == true)
		{
			key = getKey(xCell, yCell)
			if(key in model.currentWeek().data && model.currentWeek().data[key][constants.KEY_KM] > 0)
				showDataForCell(model.currentWeek().data[key], mouseCanvas);
			else
				//hide any previous marker
				$("#marker").hide();
		}
		else
			//hide any previous marker
			$("#marker").hide();
	}


	function getRealIntersector( intersects )
	{
		for( i = 0; i < intersects.length; i++ )
		{
			intersector = intersects[ i ];
			if ( intersector.object == floor)
			{
				return intersector;
			}
		}
		return null;
	}

	function animate()
	{
	    requestAnimationFrame(animate );
		render();
		update();

		//update the tweens
		TWEEN.update();
	}

	function update()
	{
		controls.update();
		//stats.update();
	}

	function render()
	{
		raycaster = projector.pickingRay( mouse2D.clone(), camera )
		var intersects = raycaster.intersectObject(floor, false);	//not recursive

		world.mouseOverFloor = ( intersects.length > 0 );
		if ( intersects.length > 0 )
		{
			xCell = Math.floor(intersects[0].point.x / model.cellWidth);
			yCell = Math.floor(Math.abs(intersects[0].point.z) / model.cellHeight);
			//don't do hover continuously
			/*if(hoverData == undefined || hoverData.lng != xCell || hoverData.lat != yCell)
				world.hoverCell(xCell, yCell);
			*/
				//draw voxel for the rolloved cell and the lines from postal code origins to the cell destination
				if(voxel.userData["x"] != xCell || voxel.userData["y"] != yCell)
				{
					voxel.position.x = (xCell * model.cellWidth) + (model.cellWidth/2);
					voxel.position.z = -(yCell * model.cellHeight) - (model.cellHeight/2);
					voxel.userData = {"x": xCell, "y":yCell};
					voxel.visible = true;
					scene.add(voxel);
				}
		}
		else
		{
			voxel.visible = false;
			//world.unhoverCell();
		}

		if(model.showLines == true)
		{
			world.removeLines();
			for(postalCode in world.codePostals)
				world.codePostals[postalCode].material.opacity = 0;

			if ( intersects.length > 0 )
			{
				world.drawLines(xCell, yCell);
			}
		}


		renderer.render( scene, camera);
		console.log('butts');
	}
})();
