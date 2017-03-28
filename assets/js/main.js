var container, stats;

			var camera, scene, renderer, controls;

			var group;

			var targetRotation = 0;
			var targetRotationOnMouseDown = 0;

			var mouseX = 0;
			var mouseXOnMouseDown = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;


			init();
			// initParticles();


			setTimeout(animate, 0);

			function init() {

				container = document.getElementById( 'ThreeJS' );
				// document.body.appendChild( container );
				scene = new THREE.Scene();

				// camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
				var aspect = window.innerWidth / window.innerHeight;
				var d = 4000;
				camera = new THREE.OrthographicCamera(
					window.innerWidth / - 0.9,
					window.innerWidth / 0.9,
					window.innerHeight / 0.9,
					window.innerHeight / - 0.9,
					- 1000, //near
					6000  // far
				);
				camera.position.x = -800;
				camera.position.y = 1700;
				camera.position.z = 3000;
				camera.lookAt( scene.position);

				raycaster = new THREE.Raycaster();

				// controls = new THREE.TrackballControls( camera );
				// controls.rotateSpeed = 1.0;
				// controls.zoomSpeed = 1.2;
				// controls.panSpeed = 0.8;
				// controls.minDistance = 100;
				// controls.maxDistance = 9000;
				// controls.noZoom = false;
				// controls.noPan = false;
				// controls.staticMoving = true;
				// controls.dynamicDampingFactor = 0.3;
				// controls.addEventListener( 'change', render );

				scene.add( camera );

				var light = new THREE.PointLight( 0xffffff, 0.8 );
				camera.add( light );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setClearColor( 0x3a3a3c );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				createBristol();
				createData();

			  scene.add(group);

				clock = new THREE.Clock();

        scene.fog = new THREE.Fog( renderer.getClearColor(), 20, 0 );

				document.addEventListener( 'mousedown', onDocumentMouseDown, false );


				window.addEventListener( 'resize', onWindowResize, false );

				// animate();

			}

			function initParticles() {
			  console.log('calling particles');
			  particleGroup = new SPE.Group({
			      texture: {
			          value: THREE.ImageUtils.loadTexture('./assets/img/cloudSml.png')
			      },
			      blending: THREE.NormalBlending,
			      fog: true
			  });

			  emitter = new SPE.Emitter({
			      particleCount: 550,
			      maxAge: { value: 0.5 },
			      position: {
			          value: new THREE.Vector3( 0, 0, 0 ),
			          spread: new THREE.Vector3( 100, 500, 200 ),
			      },
			      acceleration: {
			          value: new THREE.Vector3( 0, 0, 0 ),
			      },
			      rotation: {
			          axis: new THREE.Vector3( 0, 1, 0 ),
			          spread: new THREE.Vector3( 0, 20, 0 ),
			          angle: 100 * Math.PI / 180,
			      },
			      velocity: {
			          value: new THREE.Vector3( 0, 1, -0.5 ),
			          spread: new THREE.Vector3( 0.25, 0.1, 0.25 )
			      },
			      opacity: {
			          value: [ 0.2, 0.5, 0 ]
			      },
			      size: {
			         value: 200,
			         spread: 25
			     },
					 color: {
							 value: [ new THREE.Color( 0x333333 ), new THREE.Color( 0x111111 ) ],
							 spread: [ new THREE.Vector3( 0.2, 0.1, 0.1 ), new THREE.Vector3( 0, 0, 0 ) ]
					 },

			  });

			  particleGroup.addEmitter( emitter );
			  scene.add( particleGroup.mesh );
			  // console.log(particleGroup.mesh);
			}


			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseDown( event ) {

				event.preventDefault();

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );

				// console.log(intersects);
				mouseXOnMouseDown = event.clientX - windowHalfX;
				targetRotationOnMouseDown = targetRotation;

			}

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;

				targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

			}

			function onDocumentMouseUp( event ) {

				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );

			}


			function animate() {

				requestAnimationFrame( animate );
				// controls.update();
				render( clock.getDelta() );
				// render();

			}

			function render( dt ) {
				group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
				// particleGroup.tick( dt );
				raycaster.setFromCamera( mouse, camera );
			  intersects = raycaster.intersectObjects(scene.children, true);
				if (intersects.length > 0) {
					if (INTERSECTED != intersects[0].object) {
						if (INTERSECTED) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			      selection = intersects[0].object;
					}
			    pointer = true;
			    interactable = true;
			    container.style.cursor="pointer";
					// console.log('interactable');
				} else {
					selection = null;
			    interactable = false;
			    container.style.cursor="default";
					// console.log('not bruh');
				}

				// group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
				renderer.render( scene, camera );

			}
