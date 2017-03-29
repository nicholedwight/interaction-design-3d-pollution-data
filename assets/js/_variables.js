// COLOURS INNIT

var brislingtonC = 0xe77784;
var fishpondsC = 0x8285dc;
var newfoundC = 0xae74c5;
var parsonC = 0x5bbeca;
var rupertC = 0xedb850;
var wellsC = 0x9ccb47;

var container = document.getElementById('container');
var canvas = document.getElementsByTagName('canvas');
var scene, renderer, camera, controls, control, raycaster, effect;
var mouse = new THREE.Vector2(), INTERSECTED;
var mouseIsDown = false;
var selection = null;
var intersects, groupIntersects;
var offset = new THREE.Vector3();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var wells, bristol;
var slider;
var particleGroupCrash;
var emitter, particleGroup, clock;
var group = new THREE.Group();
var interact = [];
var pollution;

pollution = document.getElementById('no').value;
var fieldset = document.querySelector('#radio-group');
var monthsArray = [];
// these would actually be hooked up to the zoopla api, these are the housing prices (will affect the size of the house)
// brislington.scale, fishponds.scale, newfound.scale, parson.scale, rupert.scale, wells.scale
var scalesArray = [
  {x: 3, y: 2.4, z: 3}, // brislington
  {x: 3, y: 1.4, z: 3}, // fishponds
  {x: 3, y: 3.4, z: 3}, // newfoundland
  {x: 3, y: 2.7, z: 3}, // parsons
  {x: 3, y: 3.1, z: 3}, // rupert
  {x: 3, y: 2, z: 3} // wells
];
var positionsArray = [
  {x: 850, y: 110.2, z: 250}, // brislington
  {x: 990, y: 233.453196750264, z: -250}, // fishponds
  {x: -530, y: 276.307907627712, z: -600}, //newfoundland
  {x: 300, y: 212.166835528538, z: 350}, // parsons
  {x: 380, y: 440.81266490766, z: 100}, // rupert
  {x: 850, y: 261.30006930007, z: 600} // well
];


var shininess = 50, specular = 0x333333, bumpScale = 1, shading = THREE.SmoothShading;
var alpha = 0.5;
var gamma = 0.5;
var beta = 0.8;

var specularShininess = Math.pow( 2, alpha * 10 );
var specularColor = new THREE.Color( beta * 0.2, beta * 0.2, beta * 0.2 );
var diffuseColor = new THREE.Color(0.1,0.1,0.1);
var test = document.querySelector('#test');
