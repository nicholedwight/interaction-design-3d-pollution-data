// COLOURS INNIT

var sunset = 0xfcc396;
var peach = 0xfca095;
var salmon = 0xf87c87;
var annoyingBarbie = 0xf25292;
var grape = 0x9a50a5;
var dusk = 0x59569d;
var midnight = 0x38477e;

var container = document.getElementById('container');
var canvas = document.getElementsByTagName('canvas');
var scene, renderer, camera, controls, control, raycaster;
var mouse = new THREE.Vector2(), INTERSECTED;
var mouseIsDown = false;
var selection = null;
var intersects, groupIntersects;
var offset = new THREE.Vector3();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var wells, bristol;
