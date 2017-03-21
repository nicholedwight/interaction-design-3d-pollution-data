var container = document.getElementById('ThreeJS');


function init() {
	scene = new THREE.Scene();
  raycaster = new THREE.Raycaster();
  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.set( 100, 200, 4000 );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setClearColor( 0x3a3a3c );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild(renderer.domElement);

  var light = new THREE.PointLight( 0xffffff, 0.8 );
  camera.add( light );

  controls = new THREE.TrackballControls( camera );
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;
  controls.minDistance = 100;
  controls.maxDistance = 9000;
  controls.noZoom = false;
  controls.noPan = false;
  controls.staticMoving = true;
  controls.dynamicDampingFactor = 0.3;
  controls.addEventListener( 'change', render );

  // createBristol();
	createData();
	animate();

  document.addEventListener( 'mousemove', onMouseMove, false );
}

function render() {
  requestAnimationFrame(render);
  // raycaster.setFromCamera( mouse, camera );
  // intersects = raycaster.intersectObjects(scene.children, true);
  // if (intersects.length > 0) {
  //   if (INTERSECTED != intersects[0].object) {
  //     if (INTERSECTED) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  //     selection = intersects[0].object;
  //   }
  //   pointer = true;
  //   interactable = true;
  //   container.style.cursor="pointer";
  //   // console.log('interactable');
  // } else {
  //   selection = null;
  //   interactable = false;
  //   container.style.cursor="default";
  //   // console.log('not bruh');
  // }
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame( animate );
  controls.update();
  render();
}

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

function onMouseMove(event) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onWindowLoaded() {
  init();
}

window.addEventListener('load', onWindowLoaded, false);
window.addEventListener('resize', onWindowResize, false);
