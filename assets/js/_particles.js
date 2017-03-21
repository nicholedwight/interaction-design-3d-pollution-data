// function initParticles() {
//   var loader = new THREE.TextureLoader();
//   var url = 'assets/img/cloudSml.png';
//   var texture = loader.load( url );
//
//   var particleGroupCrash = new SPE.Group({
//       texture: {
//           value: texture
//       },
//       blending: THREE.NormalBlending
//   });
//
//   var crashemitter = new SPE.Emitter({
//
//       maxAge: { value: 12 },
//       position: {
//           value: new THREE.Vector3( 0, 0, 0 ),
//           spread: new THREE.Vector3( 10, 50, 20 ),
//       },
//       acceleration: {
//           value: new THREE.Vector3( 0, 0, 0 ),
//       },
//       rotation: {
//           axis: new THREE.Vector3( 0, 1, 0 ),
//           spread: new THREE.Vector3( 0, 20, 0 ),
//           angle: 100 * Math.PI / 180,
//       },
//       velocity: {
//           value: new THREE.Vector3( 0, 1, -0.5 ),
//           spread: new THREE.Vector3( 0.25, 0.1, 0.25 )
//       },
//       opacity: {
//           value: [ 0.2, 0.5, 0 ]
//       },
//       size: {
//          value: 75,
//          spread: 50
//      },
//       color: {
//           value: [ new THREE.Color( 0x333333 ), new THREE.Color( 0x111111 ) ],
//           spread: [ new THREE.Vector3( 0.2, 0.1, 0.1 ), new THREE.Vector3( 0, 0, 0 ) ]
//       },
//       particleCount: 600,
//   });
//
//   particleGroupCrash.addEmitter(crashemitter);
//   scene.add(particleGroupCrash.mesh);
//   console.log(particleGroupCrash);
// }
