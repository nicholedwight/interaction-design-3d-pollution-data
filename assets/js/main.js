var container, stats;

			var camera, scene, renderer, controls;

			var group;

			var targetRotation = 0;
			var targetRotationOnMouseDown = 0;

			var mouseX = 0;
			var mouseXOnMouseDown = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;


			// COLOURS INNIT

			var sunset = 0xfcc396;
			var peach = 0xfca095;
			var salmon = 0xf87c87;
			var annoyingBarbie = 0xf25292;
			var grape = 0x9a50a5;
			var dusk = 0x59569d;
			var midnight = 0x38477e;

			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );
				scene = new THREE.Scene();

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 100, 200, 4000 );

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



				scene.add( camera );

				var light = new THREE.PointLight( 0xffffff, 0.8 );
				camera.add( light );

				group = new THREE.Group();
				group.position.y = 50;
				scene.add( group );


				function addShape( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {

					var geometry = new THREE.ShapeBufferGeometry( shape );


					// extruded shape

					var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );

					var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: color } ) );
					mesh.position.set( x, y, z - 75 );
					mesh.rotation.set( rx, ry, rz );
					mesh.scale.set( s, s, s );
					group.add( mesh );

					// lines

					shape.autoClose = true;
					var points = shape.createPointsGeometry();
					var spacedPoints = shape.createSpacedPointsGeometry( 50 );

				}

        var bristolNorthWest = [];

        bristolNorthWest.push(new THREE.Vector2(262.07, 336.888));
				bristolNorthWest.push(new THREE.Vector2(260.517, 336.791));
				bristolNorthWest.push(new THREE.Vector2(259.904, 333.574));
				bristolNorthWest.push(new THREE.Vector2(261.205, 330.086));
				bristolNorthWest.push(new THREE.Vector2(261.017, 322.38));
				bristolNorthWest.push(new THREE.Vector2(255.768, 303.527));
				bristolNorthWest.push(new THREE.Vector2(249.455, 297.766));
				bristolNorthWest.push(new THREE.Vector2(238.37, 293.988));
				bristolNorthWest.push(new THREE.Vector2(227.387, 288.368));
				bristolNorthWest.push(new THREE.Vector2(221.177, 282.556));
				bristolNorthWest.push(new THREE.Vector2(217.217, 277.023));
				bristolNorthWest.push(new THREE.Vector2(215.578, 276.435));
				bristolNorthWest.push(new THREE.Vector2(214.319, 262.194));
				bristolNorthWest.push(new THREE.Vector2(212.538, 255.908));
				bristolNorthWest.push(new THREE.Vector2(191.334, 228.422));
				bristolNorthWest.push(new THREE.Vector2(187.743, 227.671));
				bristolNorthWest.push(new THREE.Vector2(184.934, 229.435));
				bristolNorthWest.push(new THREE.Vector2(182.006, 237.269));
				bristolNorthWest.push(new THREE.Vector2(177.736, 241.054));
				bristolNorthWest.push(new THREE.Vector2(177.742, 244.415));
				bristolNorthWest.push(new THREE.Vector2(175.372, 246.626));
				bristolNorthWest.push(new THREE.Vector2(174.758, 247.043));
				bristolNorthWest.push(new THREE.Vector2(173.794, 247.449));
				bristolNorthWest.push(new THREE.Vector2(173.651, 247.174));
				bristolNorthWest.push(new THREE.Vector2(175.683, 244.466));
				bristolNorthWest.push(new THREE.Vector2(176.162, 243.504));
				bristolNorthWest.push(new THREE.Vector2(175.225, 242.935));
				bristolNorthWest.push(new THREE.Vector2(169.58, 247.439));
				bristolNorthWest.push(new THREE.Vector2(163.168, 250.675));
				bristolNorthWest.push(new THREE.Vector2(155.639, 252.578));
				bristolNorthWest.push(new THREE.Vector2(145.783, 249.806));
				bristolNorthWest.push(new THREE.Vector2(138.215, 244.224));
				bristolNorthWest.push(new THREE.Vector2(135.521, 249.028));
				bristolNorthWest.push(new THREE.Vector2(134.787, 248.357));
				bristolNorthWest.push(new THREE.Vector2(135.709, 242.364));
				bristolNorthWest.push(new THREE.Vector2(128.744, 236.745));
				bristolNorthWest.push(new THREE.Vector2(120.358, 226.423));
				bristolNorthWest.push(new THREE.Vector2(117.514, 227.643));
				bristolNorthWest.push(new THREE.Vector2(119.287, 225.254));
				bristolNorthWest.push(new THREE.Vector2(113.565, 218.314));
				bristolNorthWest.push(new THREE.Vector2(112.556, 218.502));
				bristolNorthWest.push(new THREE.Vector2(112.494, 217.145));
				bristolNorthWest.push(new THREE.Vector2(109.37, 215.864));
				bristolNorthWest.push(new THREE.Vector2(108.688, 213.405));
				bristolNorthWest.push(new THREE.Vector2(99.4964, 203.221));
				bristolNorthWest.push(new THREE.Vector2(96.8918, 203.093));
				bristolNorthWest.push(new THREE.Vector2(97.4985, 201.159));
				bristolNorthWest.push(new THREE.Vector2(91.8412, 197.257));
				bristolNorthWest.push(new THREE.Vector2(90.6793, 197.549));
				bristolNorthWest.push(new THREE.Vector2(88.616, 196.026));
				bristolNorthWest.push(new THREE.Vector2(88.3939, 196.779));
				bristolNorthWest.push(new THREE.Vector2(88.0886, 196.933));
				bristolNorthWest.push(new THREE.Vector2(87.6375, 196.92));
				bristolNorthWest.push(new THREE.Vector2(85.5897, 194.856));
				bristolNorthWest.push(new THREE.Vector2(79.3868, 192.51));
				bristolNorthWest.push(new THREE.Vector2(76.6189, 191.076));
				bristolNorthWest.push(new THREE.Vector2(71.8881, 188.122));
				bristolNorthWest.push(new THREE.Vector2(69.4012, 183.876));
				bristolNorthWest.push(new THREE.Vector2(58.2601, 173.582));
				bristolNorthWest.push(new THREE.Vector2(69.6047, 183.773));
				bristolNorthWest.push(new THREE.Vector2(72.0431, 187.964));
				bristolNorthWest.push(new THREE.Vector2(77.2172, 191.202));
				bristolNorthWest.push(new THREE.Vector2(79.0969, 192.123));
				bristolNorthWest.push(new THREE.Vector2(85.6961, 194.642));
				bristolNorthWest.push(new THREE.Vector2(87.8426, 196.763));
				bristolNorthWest.push(new THREE.Vector2(88.2258, 195.636));
				bristolNorthWest.push(new THREE.Vector2(91.0047, 196.691));
				bristolNorthWest.push(new THREE.Vector2(90.687, 197.278));
				bristolNorthWest.push(new THREE.Vector2(92.1967, 197.104));
				bristolNorthWest.push(new THREE.Vector2(97.6003, 201.107));
				bristolNorthWest.push(new THREE.Vector2(96.9982, 202.879));
				bristolNorthWest.push(new THREE.Vector2(99.117, 202.452));
				bristolNorthWest.push(new THREE.Vector2(108.844, 213.192));
				bristolNorthWest.push(new THREE.Vector2(109.625, 215.708));
				bristolNorthWest.push(new THREE.Vector2(112.503, 216.82));
				bristolNorthWest.push(new THREE.Vector2(112.711, 218.344));
				bristolNorthWest.push(new THREE.Vector2(113.721, 218.102));
				bristolNorthWest.push(new THREE.Vector2(119.439, 225.204));
				bristolNorthWest.push(new THREE.Vector2(117.768, 227.542));
				bristolNorthWest.push(new THREE.Vector2(120.365, 226.152));
				bristolNorthWest.push(new THREE.Vector2(128.998, 236.644));
				bristolNorthWest.push(new THREE.Vector2(136.154, 242.594));
				bristolNorthWest.push(new THREE.Vector2(135.196, 248.097));
				bristolNorthWest.push(new THREE.Vector2(137.829, 243.671));
				bristolNorthWest.push(new THREE.Vector2(145.888, 249.646));
				bristolNorthWest.push(new THREE.Vector2(156.195, 252.431));
				bristolNorthWest.push(new THREE.Vector2(163.529, 250.306));
				bristolNorthWest.push(new THREE.Vector2(169.688, 247.171));
				bristolNorthWest.push(new THREE.Vector2(175.381, 242.723));
				bristolNorthWest.push(new THREE.Vector2(176.419, 243.294));
				bristolNorthWest.push(new THREE.Vector2(175.828, 244.687));
				bristolNorthWest.push(new THREE.Vector2(174.005, 247.076));
				bristolNorthWest.push(new THREE.Vector2(175.17, 246.675));
				bristolNorthWest.push(new THREE.Vector2(176.101, 245.671));
				bristolNorthWest.push(new THREE.Vector2(177.55, 244.085));
				bristolNorthWest.push(new THREE.Vector2(177.437, 240.991));
				bristolNorthWest.push(new THREE.Vector2(181.037, 237.839));
				bristolNorthWest.push(new THREE.Vector2(182.635, 230.943));
				bristolNorthWest.push(new THREE.Vector2(184.263, 228.332));
				bristolNorthWest.push(new THREE.Vector2(188.68, 226.45));
				bristolNorthWest.push(new THREE.Vector2(192.301, 227.907));
				bristolNorthWest.push(new THREE.Vector2(201.75, 241.618));
				bristolNorthWest.push(new THREE.Vector2(202.898, 241.813));
				bristolNorthWest.push(new THREE.Vector2(212.749, 253.745));
				bristolNorthWest.push(new THREE.Vector2(214.927, 260.204));
				bristolNorthWest.push(new THREE.Vector2(215.503, 275.511));
				bristolNorthWest.push(new THREE.Vector2(217.005, 275.608));
				bristolNorthWest.push(new THREE.Vector2(221.335, 282.289));
				bristolNorthWest.push(new THREE.Vector2(222.927, 282.767));
				bristolNorthWest.push(new THREE.Vector2(228.133, 288.606));
				bristolNorthWest.push(new THREE.Vector2(238.281, 293.606));
				bristolNorthWest.push(new THREE.Vector2(249.569, 297.281));
				bristolNorthWest.push(new THREE.Vector2(256.37, 303.543));
				bristolNorthWest.push(new THREE.Vector2(261.559, 322.721));
				bristolNorthWest.push(new THREE.Vector2(262.072, 329.567));
				bristolNorthWest.push(new THREE.Vector2(261.153, 333.772));
				bristolNorthWest.push(new THREE.Vector2(499.508, 199.113));
				bristolNorthWest.push(new THREE.Vector2(488.352, 209.333));
				bristolNorthWest.push(new THREE.Vector2(445.804, 237.849));
				bristolNorthWest.push(new THREE.Vector2(440.612, 242.534));
				bristolNorthWest.push(new THREE.Vector2(437.622, 247.388));
				bristolNorthWest.push(new THREE.Vector2(435.332, 254.158));
				bristolNorthWest.push(new THREE.Vector2(434.29, 276.089));
				bristolNorthWest.push(new THREE.Vector2(431.536, 283.335));
				bristolNorthWest.push(new THREE.Vector2(428.091, 288.285));
				bristolNorthWest.push(new THREE.Vector2(422.704, 288.953));
				bristolNorthWest.push(new THREE.Vector2(422.093, 291.159));
				bristolNorthWest.push(new THREE.Vector2(424.58, 291.931));
				bristolNorthWest.push(new THREE.Vector2(415.948, 299.452));
				bristolNorthWest.push(new THREE.Vector2(400.784, 283.155));
				bristolNorthWest.push(new THREE.Vector2(397.643, 276.888));
				bristolNorthWest.push(new THREE.Vector2(395.876, 269.9));
				bristolNorthWest.push(new THREE.Vector2(395.645, 263.604));
				bristolNorthWest.push(new THREE.Vector2(396.931, 256.861));
				bristolNorthWest.push(new THREE.Vector2(390.122, 248.977));
				bristolNorthWest.push(new THREE.Vector2(389.057, 234.634));
				bristolNorthWest.push(new THREE.Vector2(385.322, 228.081));
				bristolNorthWest.push(new THREE.Vector2(383.108, 226.503));
				bristolNorthWest.push(new THREE.Vector2(375.16, 232.847));
				bristolNorthWest.push(new THREE.Vector2(372.785, 240.861));
				bristolNorthWest.push(new THREE.Vector2(370.053, 239.865));
				bristolNorthWest.push(new THREE.Vector2(368.53, 240.528));
				bristolNorthWest.push(new THREE.Vector2(368.007, 239.484));
				bristolNorthWest.push(new THREE.Vector2(366.336, 240.035));
				bristolNorthWest.push(new THREE.Vector2(365.679, 238.39));
				bristolNorthWest.push(new THREE.Vector2(364.262, 238.84));
				bristolNorthWest.push(new THREE.Vector2(360.839, 233.758));
				bristolNorthWest.push(new THREE.Vector2(360.686, 230.176));
				bristolNorthWest.push(new THREE.Vector2(357.191, 233.225));
				bristolNorthWest.push(new THREE.Vector2(351.549, 235.944));
				bristolNorthWest.push(new THREE.Vector2(340.104, 245.391));
				bristolNorthWest.push(new THREE.Vector2(328.025, 252.326));
				bristolNorthWest.push(new THREE.Vector2(313.752, 271.508));
				bristolNorthWest.push(new THREE.Vector2(309.753, 267.331));
				bristolNorthWest.push(new THREE.Vector2(307.521, 268.192));
				bristolNorthWest.push(new THREE.Vector2(308.086, 269.563));
				bristolNorthWest.push(new THREE.Vector2(304.829, 273.052));
				bristolNorthWest.push(new THREE.Vector2(299.46, 273.067));
				bristolNorthWest.push(new THREE.Vector2(301.191, 286.725));
				bristolNorthWest.push(new THREE.Vector2(297.037, 291.816));
				bristolNorthWest.push(new THREE.Vector2(288.983, 298.209));
				bristolNorthWest.push(new THREE.Vector2(288.504, 301.016));
				bristolNorthWest.push(new THREE.Vector2(289.964, 304.472));
				bristolNorthWest.push(new THREE.Vector2(289.31, 306.352));
				bristolNorthWest.push(new THREE.Vector2(267.606, 323.647));
				bristolNorthWest.push(new THREE.Vector2(267.497, 329.392));
				bristolNorthWest.push(new THREE.Vector2(265.728, 333.465));
				bristolNorthWest.push(new THREE.Vector2(266.185, 336.894));
				bristolNorthWest.push(new THREE.Vector2(265.281, 336.923));
				bristolNorthWest.push(new THREE.Vector2(264.389, 331.096));
				bristolNorthWest.push(new THREE.Vector2(265.096, 325.476));
				bristolNorthWest.push(new THREE.Vector2(258.856, 300.738));
				bristolNorthWest.push(new THREE.Vector2(251.997, 294.746));
				bristolNorthWest.push(new THREE.Vector2(232.729, 287.541));
				bristolNorthWest.push(new THREE.Vector2(219.995, 274.552));
				bristolNorthWest.push(new THREE.Vector2(218.878, 271.43));
				bristolNorthWest.push(new THREE.Vector2(220.036, 264.088));
				bristolNorthWest.push(new THREE.Vector2(217.06, 253.866));
				bristolNorthWest.push(new THREE.Vector2(222.844, 249.744));
				bristolNorthWest.push(new THREE.Vector2(220.297, 249.347));
				bristolNorthWest.push(new THREE.Vector2(218.702, 250.767));
				bristolNorthWest.push(new THREE.Vector2(215.981, 251.179));
				bristolNorthWest.push(new THREE.Vector2(213.732, 247.266));
				bristolNorthWest.push(new THREE.Vector2(204.567, 237.739));
				bristolNorthWest.push(new THREE.Vector2(203.798, 234.735));
				bristolNorthWest.push(new THREE.Vector2(202.2, 234.473));
				bristolNorthWest.push(new THREE.Vector2(198.851, 228.687));
				bristolNorthWest.push(new THREE.Vector2(193.206, 224.245));
				bristolNorthWest.push(new THREE.Vector2(188.524, 223.084));
				bristolNorthWest.push(new THREE.Vector2(184.333, 224.051));
				bristolNorthWest.push(new THREE.Vector2(180.962, 226.179));
				bristolNorthWest.push(new THREE.Vector2(175.825, 237.638));
				bristolNorthWest.push(new THREE.Vector2(162.82, 246.978));
				bristolNorthWest.push(new THREE.Vector2(154.539, 248.86));
				bristolNorthWest.push(new THREE.Vector2(149.899, 247.97));
				bristolNorthWest.push(new THREE.Vector2(146.095, 245.856));
				bristolNorthWest.push(new THREE.Vector2(132.072, 232.61));
				bristolNorthWest.push(new THREE.Vector2(117.761, 213.608));
				bristolNorthWest.push(new THREE.Vector2(107.83, 202.97));
				bristolNorthWest.push(new THREE.Vector2(105.971, 197.767));
				bristolNorthWest.push(new THREE.Vector2(102.527, 197.181));
				bristolNorthWest.push(new THREE.Vector2(94.0185, 191.246));
				bristolNorthWest.push(new THREE.Vector2(79.1813, 183.884));
				bristolNorthWest.push(new THREE.Vector2(77.2787, 180.251));
				bristolNorthWest.push(new THREE.Vector2(76.3951, 167.269));
				bristolNorthWest.push(new THREE.Vector2(75.154, 165.065));
				bristolNorthWest.push(new THREE.Vector2(65.9354, 155.964));
				bristolNorthWest.push(new THREE.Vector2(56.9179, 152.128));
				bristolNorthWest.push(new THREE.Vector2(65.6842, 154.222));
				bristolNorthWest.push(new THREE.Vector2(68.0656, 153.369));
				bristolNorthWest.push(new THREE.Vector2(58.4851, 146.427));
				bristolNorthWest.push(new THREE.Vector2(57.4355, 144.553));
				bristolNorthWest.push(new THREE.Vector2(61.9792, 148.749));
				bristolNorthWest.push(new THREE.Vector2(67.1867, 147.272));
				bristolNorthWest.push(new THREE.Vector2(67.2609, 144.671));
				bristolNorthWest.push(new THREE.Vector2(73.3027, 138.555));
				bristolNorthWest.push(new THREE.Vector2(75.5839, 134.175));
				bristolNorthWest.push(new THREE.Vector2(82.6526, 128.955));
				bristolNorthWest.push(new THREE.Vector2(84.5033, 129.116));
				bristolNorthWest.push(new THREE.Vector2(86.2462, 126.022));
				bristolNorthWest.push(new THREE.Vector2(87.1434, 126.21));
				bristolNorthWest.push(new THREE.Vector2(91.2827, 121.72));
				bristolNorthWest.push(new THREE.Vector2(95.1111, 119.335));
				bristolNorthWest.push(new THREE.Vector2(96.4815, 116.989));
				bristolNorthWest.push(new THREE.Vector2(96.261, 114.163));
				bristolNorthWest.push(new THREE.Vector2(99.4689, 114.2));
				bristolNorthWest.push(new THREE.Vector2(101.578, 112.309));
				bristolNorthWest.push(new THREE.Vector2(105.179, 105.581));
				bristolNorthWest.push(new THREE.Vector2(132.495, 68.6803));
				bristolNorthWest.push(new THREE.Vector2(134.799, 68.7455));
				bristolNorthWest.push(new THREE.Vector2(134.549, 66.9496));
				bristolNorthWest.push(new THREE.Vector2(137.916, 59.5644));
				bristolNorthWest.push(new THREE.Vector2(145.086, 48.8717));
				bristolNorthWest.push(new THREE.Vector2(147.472, 46.012));
				bristolNorthWest.push(new THREE.Vector2(149.513, 46.5033));
				bristolNorthWest.push(new THREE.Vector2(151.258, 48.6123));
				bristolNorthWest.push(new THREE.Vector2(150.313, 46.58));
				bristolNorthWest.push(new THREE.Vector2(148.677, 45.9376));
				bristolNorthWest.push(new THREE.Vector2(149.939, 42.0705));
				bristolNorthWest.push(new THREE.Vector2(168.211, 14.4));
				bristolNorthWest.push(new THREE.Vector2(191.832, 42.4357));
				bristolNorthWest.push(new THREE.Vector2(189.827, 46.0111));
				bristolNorthWest.push(new THREE.Vector2(191.462, 50.2849));
				bristolNorthWest.push(new THREE.Vector2(186.58, 54.5386));
				bristolNorthWest.push(new THREE.Vector2(189.013, 62.5208));
				bristolNorthWest.push(new THREE.Vector2(187.002, 64.5242));
				bristolNorthWest.push(new THREE.Vector2(199.432, 77.1231));
				bristolNorthWest.push(new THREE.Vector2(204.252, 80.4561));
				bristolNorthWest.push(new THREE.Vector2(214.546, 94.1873));
				bristolNorthWest.push(new THREE.Vector2(219.759, 103.223));
				bristolNorthWest.push(new THREE.Vector2(219.027, 106.076));
				bristolNorthWest.push(new THREE.Vector2(216.443, 107.033));
				bristolNorthWest.push(new THREE.Vector2(216.301, 108.547));
				bristolNorthWest.push(new THREE.Vector2(213.881, 110.811));
				bristolNorthWest.push(new THREE.Vector2(214.925, 120.11));
				bristolNorthWest.push(new THREE.Vector2(211.704, 124.14));
				bristolNorthWest.push(new THREE.Vector2(212.957, 125.964));
				bristolNorthWest.push(new THREE.Vector2(211.575, 128.744));
				bristolNorthWest.push(new THREE.Vector2(222.623, 133.552));
				bristolNorthWest.push(new THREE.Vector2(235.495, 135.862));
				bristolNorthWest.push(new THREE.Vector2(251.547, 135.658));
				bristolNorthWest.push(new THREE.Vector2(280.019, 126.905));
				bristolNorthWest.push(new THREE.Vector2(288.213, 127.945));
				bristolNorthWest.push(new THREE.Vector2(292.157, 126.753));
				bristolNorthWest.push(new THREE.Vector2(312.866, 132.202));
				bristolNorthWest.push(new THREE.Vector2(324.581, 132.849));
				bristolNorthWest.push(new THREE.Vector2(338.806, 131.558));
				bristolNorthWest.push(new THREE.Vector2(355.97, 125.468));
				bristolNorthWest.push(new THREE.Vector2(356.353, 126.129));
				bristolNorthWest.push(new THREE.Vector2(356.937, 124.953));
				bristolNorthWest.push(new THREE.Vector2(372.19, 120.869));
				bristolNorthWest.push(new THREE.Vector2(389.11, 120.028));
				bristolNorthWest.push(new THREE.Vector2(387.924, 126.772));
				bristolNorthWest.push(new THREE.Vector2(383.86, 136.094));
				bristolNorthWest.push(new THREE.Vector2(378.696, 137.906));
				bristolNorthWest.push(new THREE.Vector2(376.911, 137.152));
				bristolNorthWest.push(new THREE.Vector2(368.631, 141.101));
				bristolNorthWest.push(new THREE.Vector2(363.634, 147.795));
				bristolNorthWest.push(new THREE.Vector2(365.26, 152.556));
				bristolNorthWest.push(new THREE.Vector2(371.155, 155.21));
				bristolNorthWest.push(new THREE.Vector2(369.777, 159.781));
				bristolNorthWest.push(new THREE.Vector2(369.781, 163.305));
				bristolNorthWest.push(new THREE.Vector2(371.576, 167.365));
				bristolNorthWest.push(new THREE.Vector2(370.203, 179.092));
				bristolNorthWest.push(new THREE.Vector2(377.21, 179.608));
				bristolNorthWest.push(new THREE.Vector2(376.328, 177.036));
				bristolNorthWest.push(new THREE.Vector2(379.113, 174.185));
				bristolNorthWest.push(new THREE.Vector2(385.734, 179.677));
				bristolNorthWest.push(new THREE.Vector2(390.196, 181.588));
				bristolNorthWest.push(new THREE.Vector2(394.38, 180.78));
				bristolNorthWest.push(new THREE.Vector2(400.724, 181.711));
				bristolNorthWest.push(new THREE.Vector2(406.402, 183.166));
				bristolNorthWest.push(new THREE.Vector2(413.955, 187.599));
				bristolNorthWest.push(new THREE.Vector2(415.989, 186.569));
				bristolNorthWest.push(new THREE.Vector2(423.382, 191.377));
				bristolNorthWest.push(new THREE.Vector2(425.516, 194.092));
				bristolNorthWest.push(new THREE.Vector2(424.677, 199.165));
				bristolNorthWest.push(new THREE.Vector2(426.174, 199.422));
				bristolNorthWest.push(new THREE.Vector2(425.962, 201.694));
				bristolNorthWest.push(new THREE.Vector2(432.055, 202.671));
				bristolNorthWest.push(new THREE.Vector2(433.714, 200.656));
				bristolNorthWest.push(new THREE.Vector2(434.542, 201.6));
				bristolNorthWest.push(new THREE.Vector2(436.326, 200.509));
				bristolNorthWest.push(new THREE.Vector2(437.381, 198.586));
				bristolNorthWest.push(new THREE.Vector2(450.453, 199.263));
				bristolNorthWest.push(new THREE.Vector2(446.617, 207.618));
				bristolNorthWest.push(new THREE.Vector2(448.437, 212.709));
				bristolNorthWest.push(new THREE.Vector2(456.813, 214.56));
				bristolNorthWest.push(new THREE.Vector2(480.24, 212.586));
				bristolNorthWest.push(new THREE.Vector2(479.494, 206.711));
				bristolNorthWest.push(new THREE.Vector2(481.516, 202.373));
				bristolNorthWest.push(new THREE.Vector2(488.21, 205.263));
				bristolNorthWest.push(new THREE.Vector2(491.421, 197.704));

        for( var i = 0; i < bristolNorthWest.length; i ++ ) bristolNorthWest[ i ].multiplyScalar( 2 );

				var bristolNorthWestShape = new THREE.Shape( bristolNorthWest );

				var bristolWest = [];

				bristolWest.push(new THREE.Vector2(428.091, 288.285));
				bristolWest.push(new THREE.Vector2(427.051, 289.612));
				bristolWest.push(new THREE.Vector2(430.234, 292.518));
				bristolWest.push(new THREE.Vector2(427.94, 293.866));
				bristolWest.push(new THREE.Vector2(429.078, 296.336));
				bristolWest.push(new THREE.Vector2(438.463, 298.107));
				bristolWest.push(new THREE.Vector2(442.254, 297.071));
				bristolWest.push(new THREE.Vector2(444.303, 302.982));
				bristolWest.push(new THREE.Vector2(448.978, 302.674));
				bristolWest.push(new THREE.Vector2(452.861, 303.809));
				bristolWest.push(new THREE.Vector2(458.8, 299.413));
				bristolWest.push(new THREE.Vector2(459.563, 300.898));
				bristolWest.push(new THREE.Vector2(458.089, 312.788));
				bristolWest.push(new THREE.Vector2(455.704, 319.393));
				bristolWest.push(new THREE.Vector2(449.84, 322.869));
				bristolWest.push(new THREE.Vector2(447.027, 326.697));
				bristolWest.push(new THREE.Vector2(448.806, 335.205));
				bristolWest.push(new THREE.Vector2(447.393, 335.492));
				bristolWest.push(new THREE.Vector2(446.513, 342.084));
				bristolWest.push(new THREE.Vector2(447.571, 341.95));
				bristolWest.push(new THREE.Vector2(448.282, 343.487));
				bristolWest.push(new THREE.Vector2(450.405, 354.119));
				bristolWest.push(new THREE.Vector2(450.285, 360.46));
				bristolWest.push(new THREE.Vector2(447.373, 362.388));
				bristolWest.push(new THREE.Vector2(452.332, 362.739));
				bristolWest.push(new THREE.Vector2(447.675, 366.084));
				bristolWest.push(new THREE.Vector2(444.503, 366.433));
				bristolWest.push(new THREE.Vector2(435.508, 372.427));
				bristolWest.push(new THREE.Vector2(434.759, 376.04));
				bristolWest.push(new THREE.Vector2(436.715, 381.679));
				bristolWest.push(new THREE.Vector2(431.118, 386.354));
				bristolWest.push(new THREE.Vector2(426.604, 388.077));
				bristolWest.push(new THREE.Vector2(416.029, 389.31));
				bristolWest.push(new THREE.Vector2(405.616, 393.855));
				bristolWest.push(new THREE.Vector2(392.118, 389.964));
				bristolWest.push(new THREE.Vector2(390.995, 386.951));
				bristolWest.push(new THREE.Vector2(392.028, 378.465));
				bristolWest.push(new THREE.Vector2(388.518, 374.627));
				bristolWest.push(new THREE.Vector2(381.78, 375.095));
				bristolWest.push(new THREE.Vector2(370.862, 383.421));
				bristolWest.push(new THREE.Vector2(365.454, 384.792));
				bristolWest.push(new THREE.Vector2(352.293, 381.451));
				bristolWest.push(new THREE.Vector2(345.001, 381.957));
				bristolWest.push(new THREE.Vector2(344.483, 380.695));
				bristolWest.push(new THREE.Vector2(339.228, 381.962));
				bristolWest.push(new THREE.Vector2(323.659, 378.607));
				bristolWest.push(new THREE.Vector2(316.186, 378.402));
				bristolWest.push(new THREE.Vector2(289.762, 380.983));
				bristolWest.push(new THREE.Vector2(283.894, 378.977));
				bristolWest.push(new THREE.Vector2(278.22, 373.615));
				bristolWest.push(new THREE.Vector2(277.825, 371.543));
				bristolWest.push(new THREE.Vector2(280.532, 371.672));
				bristolWest.push(new THREE.Vector2(279.652, 370.834));
				bristolWest.push(new THREE.Vector2(280.469, 370.314));
				bristolWest.push(new THREE.Vector2(277.797, 368.939));
				bristolWest.push(new THREE.Vector2(277.492, 367.249));
				bristolWest.push(new THREE.Vector2(278.553, 367.008));
				bristolWest.push(new THREE.Vector2(275.393, 363.287));
				bristolWest.push(new THREE.Vector2(272.589, 355.78));
				bristolWest.push(new THREE.Vector2(271.66, 347.62));
				bristolWest.push(new THREE.Vector2(265.281, 336.923));
				bristolWest.push(new THREE.Vector2(266.185, 336.894));
				bristolWest.push(new THREE.Vector2(265.728, 333.465));
				bristolWest.push(new THREE.Vector2(267.497, 329.392));
				bristolWest.push(new THREE.Vector2(267.606, 323.647));
				bristolWest.push(new THREE.Vector2(289.31, 306.352));
				bristolWest.push(new THREE.Vector2(289.964, 304.472));
				bristolWest.push(new THREE.Vector2(288.504, 301.016));
				bristolWest.push(new THREE.Vector2(288.983, 298.209));
				bristolWest.push(new THREE.Vector2(297.037, 291.816));
				bristolWest.push(new THREE.Vector2(301.191, 286.725));
				bristolWest.push(new THREE.Vector2(299.46, 273.067));
				bristolWest.push(new THREE.Vector2(304.829, 273.052));
				bristolWest.push(new THREE.Vector2(308.086, 269.563));
				bristolWest.push(new THREE.Vector2(307.521, 268.192));
				bristolWest.push(new THREE.Vector2(309.753, 267.331));
				bristolWest.push(new THREE.Vector2(313.752, 271.508));
				bristolWest.push(new THREE.Vector2(328.025, 252.326));
				bristolWest.push(new THREE.Vector2(340.104, 245.391));
				bristolWest.push(new THREE.Vector2(351.549, 235.944));
				bristolWest.push(new THREE.Vector2(357.191, 233.225));
				bristolWest.push(new THREE.Vector2(360.686, 230.176));
				bristolWest.push(new THREE.Vector2(360.839, 233.758));
				bristolWest.push(new THREE.Vector2(364.262, 238.84));
				bristolWest.push(new THREE.Vector2(365.679, 238.39));
				bristolWest.push(new THREE.Vector2(366.336, 240.035));
				bristolWest.push(new THREE.Vector2(368.007, 239.484));
				bristolWest.push(new THREE.Vector2(368.53, 240.528));
				bristolWest.push(new THREE.Vector2(370.053, 239.865));
				bristolWest.push(new THREE.Vector2(372.785, 240.861));
				bristolWest.push(new THREE.Vector2(375.16, 232.847));
				bristolWest.push(new THREE.Vector2(383.108, 226.503));
				bristolWest.push(new THREE.Vector2(385.322, 228.081));
				bristolWest.push(new THREE.Vector2(389.057, 234.634));
				bristolWest.push(new THREE.Vector2(390.122, 248.977));
				bristolWest.push(new THREE.Vector2(396.931, 256.861));
				bristolWest.push(new THREE.Vector2(395.645, 263.604));
				bristolWest.push(new THREE.Vector2(395.876, 269.9));
				bristolWest.push(new THREE.Vector2(397.643, 276.888));
				bristolWest.push(new THREE.Vector2(400.784, 283.155));
				bristolWest.push(new THREE.Vector2(415.948, 299.452));
				bristolWest.push(new THREE.Vector2(424.58, 291.931));
				bristolWest.push(new THREE.Vector2(422.093, 291.159));
				bristolWest.push(new THREE.Vector2(422.704, 288.953));
				bristolWest.push(new THREE.Vector2(272.468, 363.802));
				bristolWest.push(new THREE.Vector2(269.614, 356.294));
				bristolWest.push(new THREE.Vector2(267.478, 346.419));
				bristolWest.push(new THREE.Vector2(260.517, 336.791));
				bristolWest.push(new THREE.Vector2(262.07, 336.888));
				bristolWest.push(new THREE.Vector2(268.541, 347.913));
				bristolWest.push(new THREE.Vector2(269.729, 355.755));
				bristolWest.push(new THREE.Vector2(273.27, 363.82));

				for( var i = 0; i < bristolWest.length; i ++ ) bristolWest[ i ].multiplyScalar( 2 );

				var bristolWestShape = new THREE.Shape( bristolWest );

				var bristolSouth = [];

				bristolSouth.push(new THREE.Vector2(273.27, 363.825));
				bristolSouth.push(new THREE.Vector2(275.773, 374.957));
				bristolSouth.push(new THREE.Vector2(283.97, 381.691));
				bristolSouth.push(new THREE.Vector2(291.87, 382.831));
				bristolSouth.push(new THREE.Vector2(322.728, 379.612));
				bristolSouth.push(new THREE.Vector2(341.143, 383.533));
				bristolSouth.push(new THREE.Vector2(353.807, 383.011));
				bristolSouth.push(new THREE.Vector2(366.069, 386.165));
				bristolSouth.push(new THREE.Vector2(372.712, 383.688));
				bristolSouth.push(new THREE.Vector2(382.659, 375.987));
				bristolSouth.push(new THREE.Vector2(386.08, 375.7));
				bristolSouth.push(new THREE.Vector2(389.454, 377.147));
				bristolSouth.push(new THREE.Vector2(390.808, 379.028));
				bristolSouth.push(new THREE.Vector2(389.473, 387.56));
				bristolSouth.push(new THREE.Vector2(390.464, 389.865));
				bristolSouth.push(new THREE.Vector2(392.918, 391.938));
				bristolSouth.push(new THREE.Vector2(400.389, 394.093));
				bristolSouth.push(new THREE.Vector2(399.978, 396.305));
				bristolSouth.push(new THREE.Vector2(413.45, 395.585));
				bristolSouth.push(new THREE.Vector2(421.831, 397.547));
				bristolSouth.push(new THREE.Vector2(423.739, 408.662));
				bristolSouth.push(new THREE.Vector2(422.769, 411.13));
				bristolSouth.push(new THREE.Vector2(424.049, 412.087));
				bristolSouth.push(new THREE.Vector2(422.901, 413.683));
				bristolSouth.push(new THREE.Vector2(423.341, 415.973));
				bristolSouth.push(new THREE.Vector2(431.014, 427.46));
				bristolSouth.push(new THREE.Vector2(429.411, 429.207));
				bristolSouth.push(new THREE.Vector2(431.521, 429.155));
				bristolSouth.push(new THREE.Vector2(429.458, 436.747));
				bristolSouth.push(new THREE.Vector2(426.364, 441.653));
				bristolSouth.push(new THREE.Vector2(434.952, 445.301));
				bristolSouth.push(new THREE.Vector2(429.704, 449.987));
				bristolSouth.push(new THREE.Vector2(421.432, 453.235));
				bristolSouth.push(new THREE.Vector2(427.921, 480.746));
				bristolSouth.push(new THREE.Vector2(430.154, 504.129));
				bristolSouth.push(new THREE.Vector2(431.989, 512.424));
				bristolSouth.push(new THREE.Vector2(429.933, 512.314));
				bristolSouth.push(new THREE.Vector2(430.274, 510.859));
				bristolSouth.push(new THREE.Vector2(427.069, 510.501));
				bristolSouth.push(new THREE.Vector2(424.584, 516.997));
				bristolSouth.push(new THREE.Vector2(421.289, 521.845));
				bristolSouth.push(new THREE.Vector2(423.419, 522.933));
				bristolSouth.push(new THREE.Vector2(421.076, 526.016));
				bristolSouth.push(new THREE.Vector2(418.223, 527.512));
				bristolSouth.push(new THREE.Vector2(418.216, 529.627));
				bristolSouth.push(new THREE.Vector2(415.661, 531.24));
				bristolSouth.push(new THREE.Vector2(417.131, 534.48));
				bristolSouth.push(new THREE.Vector2(411.972, 535.805));
				bristolSouth.push(new THREE.Vector2(412.534, 537.285));
				bristolSouth.push(new THREE.Vector2(410.093, 538.412));
				bristolSouth.push(new THREE.Vector2(411.06, 539.794));
				bristolSouth.push(new THREE.Vector2(410.074, 540.961));
				bristolSouth.push(new THREE.Vector2(412.58, 543.036));
				bristolSouth.push(new THREE.Vector2(411.147, 544.028));
				bristolSouth.push(new THREE.Vector2(409.878, 548.225));
				bristolSouth.push(new THREE.Vector2(408.273, 548.127));
				bristolSouth.push(new THREE.Vector2(402, 555.335));
				bristolSouth.push(new THREE.Vector2(399.415, 554.343));
				bristolSouth.push(new THREE.Vector2(399.094, 551.35));
				bristolSouth.push(new THREE.Vector2(395.625, 549.629));
				bristolSouth.push(new THREE.Vector2(394.11, 551.758));
				bristolSouth.push(new THREE.Vector2(388.672, 548.518));
				bristolSouth.push(new THREE.Vector2(384.229, 554.907));
				bristolSouth.push(new THREE.Vector2(374.946, 549.014));
				bristolSouth.push(new THREE.Vector2(372.466, 553.395));
				bristolSouth.push(new THREE.Vector2(370.617, 553.019));
				bristolSouth.push(new THREE.Vector2(370.48, 550.683));
				bristolSouth.push(new THREE.Vector2(369.178, 550.539));
				bristolSouth.push(new THREE.Vector2(369.089, 551.947));
				bristolSouth.push(new THREE.Vector2(367.24, 551.625));
				bristolSouth.push(new THREE.Vector2(367.38, 553.853));
				bristolSouth.push(new THREE.Vector2(364.911, 554.111));
				bristolSouth.push(new THREE.Vector2(360.812, 557.092));
				bristolSouth.push(new THREE.Vector2(355.548, 558.521));
				bristolSouth.push(new THREE.Vector2(355.034, 560.786));
				bristolSouth.push(new THREE.Vector2(350.084, 558.101));
				bristolSouth.push(new THREE.Vector2(350.731, 560.18));
				bristolSouth.push(new THREE.Vector2(349.085, 561.6));
				bristolSouth.push(new THREE.Vector2(346.897, 558.936));
				bristolSouth.push(new THREE.Vector2(345.512, 559.984));
				bristolSouth.push(new THREE.Vector2(341.52, 559.007));
				bristolSouth.push(new THREE.Vector2(337.352, 555.258));
				bristolSouth.push(new THREE.Vector2(338.485, 550.57));
				bristolSouth.push(new THREE.Vector2(336.452, 551.436));
				bristolSouth.push(new THREE.Vector2(335.521, 550.597));
				bristolSouth.push(new THREE.Vector2(329.202, 550.207));
				bristolSouth.push(new THREE.Vector2(328.982, 552.751));
				bristolSouth.push(new THREE.Vector2(324.594, 555.235));
				bristolSouth.push(new THREE.Vector2(321.034, 553.13));
				bristolSouth.push(new THREE.Vector2(319.737, 549.134));
				bristolSouth.push(new THREE.Vector2(315.867, 545.557));
				bristolSouth.push(new THREE.Vector2(314.119, 547.027));
				bristolSouth.push(new THREE.Vector2(311.246, 545.538));
				bristolSouth.push(new THREE.Vector2(310.07, 546.32));
				bristolSouth.push(new THREE.Vector2(303.547, 546.032));
				bristolSouth.push(new THREE.Vector2(301.407, 545.322));
				bristolSouth.push(new THREE.Vector2(301.852, 541.917));
				bristolSouth.push(new THREE.Vector2(298.633, 540.255));
				bristolSouth.push(new THREE.Vector2(297.694, 541.531));
				bristolSouth.push(new THREE.Vector2(289.518, 541.089));
				bristolSouth.push(new THREE.Vector2(289.703, 543.481));
				bristolSouth.push(new THREE.Vector2(285.406, 542.658));
				bristolSouth.push(new THREE.Vector2(285.707, 535.397));
				bristolSouth.push(new THREE.Vector2(284.399, 533.625));
				bristolSouth.push(new THREE.Vector2(278.921, 533.745));
				bristolSouth.push(new THREE.Vector2(277.906, 535.941));
				bristolSouth.push(new THREE.Vector2(275.79, 534.364));
				bristolSouth.push(new THREE.Vector2(269.233, 535.322));
				bristolSouth.push(new THREE.Vector2(269.467, 537.77));
				bristolSouth.push(new THREE.Vector2(265.588, 539.995));
				bristolSouth.push(new THREE.Vector2(264.115, 542.395));
				bristolSouth.push(new THREE.Vector2(260.245, 540.661));
				bristolSouth.push(new THREE.Vector2(258.118, 541.307));
				bristolSouth.push(new THREE.Vector2(251.431, 536.077));
				bristolSouth.push(new THREE.Vector2(251.917, 529.418));
				bristolSouth.push(new THREE.Vector2(247.825, 526.647));
				bristolSouth.push(new THREE.Vector2(246.519, 523.031));
				bristolSouth.push(new THREE.Vector2(251.89, 521.335));
				bristolSouth.push(new THREE.Vector2(255.808, 517.701));
				bristolSouth.push(new THREE.Vector2(257.93, 511.793));
				bristolSouth.push(new THREE.Vector2(254.388, 510.935));
				bristolSouth.push(new THREE.Vector2(257.486, 506.085));
				bristolSouth.push(new THREE.Vector2(261.009, 494.9));
				bristolSouth.push(new THREE.Vector2(262.615, 494.944));
				bristolSouth.push(new THREE.Vector2(263.701, 490.201));
				bristolSouth.push(new THREE.Vector2(257.629, 490.033));
				bristolSouth.push(new THREE.Vector2(254.725, 484.257));
				bristolSouth.push(new THREE.Vector2(259.459, 480.158));
				bristolSouth.push(new THREE.Vector2(258.75, 478.565));
				bristolSouth.push(new THREE.Vector2(254.767, 473.682));
				bristolSouth.push(new THREE.Vector2(250.063, 471.273));
				bristolSouth.push(new THREE.Vector2(249.564, 469.361));
				bristolSouth.push(new THREE.Vector2(246.596, 467.76));
				bristolSouth.push(new THREE.Vector2(244.262, 463.193));
				bristolSouth.push(new THREE.Vector2(247.828, 459.55));
				bristolSouth.push(new THREE.Vector2(247.187, 459.098));
				bristolSouth.push(new THREE.Vector2(251.59, 454.23));
				bristolSouth.push(new THREE.Vector2(252.725, 451.333));
				bristolSouth.push(new THREE.Vector2(252.217, 444.322));
				bristolSouth.push(new THREE.Vector2(253.612, 439.262));
				bristolSouth.push(new THREE.Vector2(254.229, 416.988));
				bristolSouth.push(new THREE.Vector2(263.97, 411.509));
				bristolSouth.push(new THREE.Vector2(261.649, 408.299));
				bristolSouth.push(new THREE.Vector2(262.93, 407.359));
				bristolSouth.push(new THREE.Vector2(262.141, 403.215));
				bristolSouth.push(new THREE.Vector2(252.778, 404.149));
				bristolSouth.push(new THREE.Vector2(238.803, 399.422));
				bristolSouth.push(new THREE.Vector2(239.346, 396.129));
				bristolSouth.push(new THREE.Vector2(241.656, 394.295));
				bristolSouth.push(new THREE.Vector2(244.074, 393.982));
				bristolSouth.push(new THREE.Vector2(247.411, 389.519));
				bristolSouth.push(new THREE.Vector2(247.017, 385.604));
				bristolSouth.push(new THREE.Vector2(250.093, 383.303));
				bristolSouth.push(new THREE.Vector2(250.082, 381.892));
				bristolSouth.push(new THREE.Vector2(256.398, 374.963));
				bristolSouth.push(new THREE.Vector2(264.513, 379.201));
				bristolSouth.push(new THREE.Vector2(270.987, 377.428));
				bristolSouth.push(new THREE.Vector2(272.562, 371.289));
				bristolSouth.push(new THREE.Vector2(274.109, 369.813));
				bristolSouth.push(new THREE.Vector2(272.468, 363.802));

				for( var i = 0; i < bristolSouth.length; i ++ ) bristolSouth[ i ].multiplyScalar( 2 );

				var bristolSouthShape = new THREE.Shape( bristolSouth );

				var bristolEast = [];

				bristolEast.push(new THREE.Vector2(499.508, 199.113));
				bristolEast.push(new THREE.Vector2(505.619, 203.179));
				bristolEast.push(new THREE.Vector2(509.248, 200.619));
				bristolEast.push(new THREE.Vector2(511.731, 201.553));
				bristolEast.push(new THREE.Vector2(515.167, 206.253));
				bristolEast.push(new THREE.Vector2(513.18, 209.29));
				bristolEast.push(new THREE.Vector2(514.607, 210.304));
				bristolEast.push(new THREE.Vector2(515.646, 214.615));
				bristolEast.push(new THREE.Vector2(520.864, 212.693));
				bristolEast.push(new THREE.Vector2(525.599, 215.692));
				bristolEast.push(new THREE.Vector2(531.979, 215.32));
				bristolEast.push(new THREE.Vector2(538.433, 214.027));
				bristolEast.push(new THREE.Vector2(543.732, 210.914));
				bristolEast.push(new THREE.Vector2(544.958, 213.874));
				bristolEast.push(new THREE.Vector2(543.355, 215.675));
				bristolEast.push(new THREE.Vector2(555.082, 225.527));
				bristolEast.push(new THREE.Vector2(554.062, 228.049));
				bristolEast.push(new THREE.Vector2(540.827, 242.934));
				bristolEast.push(new THREE.Vector2(545.984, 264.161));
				bristolEast.push(new THREE.Vector2(552.456, 281.249));
				bristolEast.push(new THREE.Vector2(553.265, 288.59));
				bristolEast.push(new THREE.Vector2(553.695, 293.211));
				bristolEast.push(new THREE.Vector2(551.957, 298.207));
				bristolEast.push(new THREE.Vector2(549.266, 297.54));
				bristolEast.push(new THREE.Vector2(548.406, 301.584));
				bristolEast.push(new THREE.Vector2(549.894, 304.117));
				bristolEast.push(new THREE.Vector2(547.3, 314.948));
				bristolEast.push(new THREE.Vector2(551.82, 316.694));
				bristolEast.push(new THREE.Vector2(549.766, 326.075));
				bristolEast.push(new THREE.Vector2(549.383, 327.257));
				bristolEast.push(new THREE.Vector2(546.857, 327.896));
				bristolEast.push(new THREE.Vector2(547.409, 329.808));
				bristolEast.push(new THREE.Vector2(544.431, 330.434));
				bristolEast.push(new THREE.Vector2(541.627, 335.891));
				bristolEast.push(new THREE.Vector2(539.578, 335.566));
				bristolEast.push(new THREE.Vector2(534.072, 338.836));
				bristolEast.push(new THREE.Vector2(533.632, 342.186));
				bristolEast.push(new THREE.Vector2(532.12, 344.315));
				bristolEast.push(new THREE.Vector2(533.961, 352.498));
				bristolEast.push(new THREE.Vector2(533.137, 357.086));
				bristolEast.push(new THREE.Vector2(531.845, 358.461));
				bristolEast.push(new THREE.Vector2(532.288, 362.594));
				bristolEast.push(new THREE.Vector2(523.988, 372.732));
				bristolEast.push(new THREE.Vector2(516.985, 375.637));
				bristolEast.push(new THREE.Vector2(514.645, 374.924));
				bristolEast.push(new THREE.Vector2(511.89, 376.586));
				bristolEast.push(new THREE.Vector2(505.327, 378.038));
				bristolEast.push(new THREE.Vector2(500.989, 384.485));
				bristolEast.push(new THREE.Vector2(493.522, 384.014));
				bristolEast.push(new THREE.Vector2(491.597, 380.926));
				bristolEast.push(new THREE.Vector2(485.939, 382.294));
				bristolEast.push(new THREE.Vector2(483.02, 384.439));
				bristolEast.push(new THREE.Vector2(482.415, 386.429));
				bristolEast.push(new THREE.Vector2(484.101, 389.078));
				bristolEast.push(new THREE.Vector2(487.413, 391.01));
				bristolEast.push(new THREE.Vector2(502.36, 387.667));
				bristolEast.push(new THREE.Vector2(510.094, 391.289));
				bristolEast.push(new THREE.Vector2(512.573, 394.338));
				bristolEast.push(new THREE.Vector2(513.157, 396.902));
				bristolEast.push(new THREE.Vector2(511.044, 421.63));
				bristolEast.push(new THREE.Vector2(515.03, 430.305));
				bristolEast.push(new THREE.Vector2(519.246, 436.003));
				bristolEast.push(new THREE.Vector2(523.379, 439.204));
				bristolEast.push(new THREE.Vector2(534.876, 442.98));
				bristolEast.push(new THREE.Vector2(542.942, 447.424));
				bristolEast.push(new THREE.Vector2(549.928, 449.073));
				bristolEast.push(new THREE.Vector2(550.433, 450.876));
				bristolEast.push(new THREE.Vector2(522.997, 440.333));
				bristolEast.push(new THREE.Vector2(518.137, 436.191));
				bristolEast.push(new THREE.Vector2(512.837, 427.806));
				bristolEast.push(new THREE.Vector2(508.726, 431.385));
				bristolEast.push(new THREE.Vector2(511.692, 431.247));
				bristolEast.push(new THREE.Vector2(514.614, 434.633));
				bristolEast.push(new THREE.Vector2(509.857, 439.821));
				bristolEast.push(new THREE.Vector2(518.483, 445.854));
				bristolEast.push(new THREE.Vector2(518.368, 455.83));
				bristolEast.push(new THREE.Vector2(519.765, 458.091));
				bristolEast.push(new THREE.Vector2(519.768, 461.725));
				bristolEast.push(new THREE.Vector2(510.598, 461.047));
				bristolEast.push(new THREE.Vector2(504.576, 464.684));
				bristolEast.push(new THREE.Vector2(499.572, 469.703));
				bristolEast.push(new THREE.Vector2(499.685, 473.014));
				bristolEast.push(new THREE.Vector2(504.34, 477.315));
				bristolEast.push(new THREE.Vector2(503.803, 478.656));
				bristolEast.push(new THREE.Vector2(496.074, 484.146));
				bristolEast.push(new THREE.Vector2(491.916, 489.404));
				bristolEast.push(new THREE.Vector2(491.423, 490.964));
				bristolEast.push(new THREE.Vector2(494.251, 492.233));
				bristolEast.push(new THREE.Vector2(493.594, 494.276));
				bristolEast.push(new THREE.Vector2(491.591, 494.06));
				bristolEast.push(new THREE.Vector2(491.475, 502.193));
				bristolEast.push(new THREE.Vector2(490.14, 503.297));
				bristolEast.push(new THREE.Vector2(490.965, 504.349));
				bristolEast.push(new THREE.Vector2(488.393, 508.511));
				bristolEast.push(new THREE.Vector2(484.914, 510.914));
				bristolEast.push(new THREE.Vector2(487.034, 514.279));
				bristolEast.push(new THREE.Vector2(480.769, 515.685));
				bristolEast.push(new THREE.Vector2(474.985, 519.761));
				bristolEast.push(new THREE.Vector2(471.592, 522.654));
				bristolEast.push(new THREE.Vector2(471.476, 525.146));
				bristolEast.push(new THREE.Vector2(468.951, 527.519));
				bristolEast.push(new THREE.Vector2(464.859, 524.643));
				bristolEast.push(new THREE.Vector2(464.054, 522.831));
				bristolEast.push(new THREE.Vector2(459.126, 521.181));
				bristolEast.push(new THREE.Vector2(455.84, 521.96));
				bristolEast.push(new THREE.Vector2(455.435, 520.214));
				bristolEast.push(new THREE.Vector2(446.031, 520.666));
				bristolEast.push(new THREE.Vector2(445.53, 518.754));
				bristolEast.push(new THREE.Vector2(438.922, 519.824));
				bristolEast.push(new THREE.Vector2(438.077, 521.375));
				bristolEast.push(new THREE.Vector2(438.568, 512.438));
				bristolEast.push(new THREE.Vector2(431.989, 512.424));
				bristolEast.push(new THREE.Vector2(430.154, 504.129));
				bristolEast.push(new THREE.Vector2(427.921, 480.746));
				bristolEast.push(new THREE.Vector2(421.432, 453.235));
				bristolEast.push(new THREE.Vector2(429.704, 449.987));
				bristolEast.push(new THREE.Vector2(434.952, 445.301));
				bristolEast.push(new THREE.Vector2(426.364, 441.653));
				bristolEast.push(new THREE.Vector2(429.458, 436.747));
				bristolEast.push(new THREE.Vector2(431.521, 429.155));
				bristolEast.push(new THREE.Vector2(429.411, 429.207));
				bristolEast.push(new THREE.Vector2(431.014, 427.46));
				bristolEast.push(new THREE.Vector2(423.341, 415.973));
				bristolEast.push(new THREE.Vector2(422.901, 413.683));
				bristolEast.push(new THREE.Vector2(424.049, 412.087));
				bristolEast.push(new THREE.Vector2(422.769, 411.13));
				bristolEast.push(new THREE.Vector2(423.739, 408.662));
				bristolEast.push(new THREE.Vector2(421.831, 397.547));
				bristolEast.push(new THREE.Vector2(413.45, 395.585));
				bristolEast.push(new THREE.Vector2(399.978, 396.305));
				bristolEast.push(new THREE.Vector2(400.389, 394.093));
				bristolEast.push(new THREE.Vector2(406.131, 395.224));
				bristolEast.push(new THREE.Vector2(416.245, 390.617));
				bristolEast.push(new THREE.Vector2(430.976, 387.869));
				bristolEast.push(new THREE.Vector2(438.314, 381.939));
				bristolEast.push(new THREE.Vector2(438.468, 379.936));
				bristolEast.push(new THREE.Vector2(436.278, 375.539));
				bristolEast.push(new THREE.Vector2(436.842, 373.222));
				bristolEast.push(new THREE.Vector2(447.675, 366.084));
				bristolEast.push(new THREE.Vector2(452.332, 362.739));
				bristolEast.push(new THREE.Vector2(447.373, 362.388));
				bristolEast.push(new THREE.Vector2(450.285, 360.46));
				bristolEast.push(new THREE.Vector2(450.405, 354.119));
				bristolEast.push(new THREE.Vector2(448.282, 343.487));
				bristolEast.push(new THREE.Vector2(447.571, 341.95));
				bristolEast.push(new THREE.Vector2(446.513, 342.084));
				bristolEast.push(new THREE.Vector2(447.393, 335.492));
				bristolEast.push(new THREE.Vector2(448.806, 335.205));
				bristolEast.push(new THREE.Vector2(447.027, 326.697));
				bristolEast.push(new THREE.Vector2(449.84, 322.869));
				bristolEast.push(new THREE.Vector2(455.704, 319.393));
				bristolEast.push(new THREE.Vector2(458.089, 312.788));
				bristolEast.push(new THREE.Vector2(459.563, 300.898));
				bristolEast.push(new THREE.Vector2(458.8, 299.413));
				bristolEast.push(new THREE.Vector2(452.861, 303.809));
				bristolEast.push(new THREE.Vector2(448.978, 302.674));
				bristolEast.push(new THREE.Vector2(444.303, 302.982));
				bristolEast.push(new THREE.Vector2(442.254, 297.071));
				bristolEast.push(new THREE.Vector2(438.463, 298.107));
				bristolEast.push(new THREE.Vector2(429.078, 296.336));
				bristolEast.push(new THREE.Vector2(427.94, 293.866));
				bristolEast.push(new THREE.Vector2(430.234, 292.518));
				bristolEast.push(new THREE.Vector2(427.051, 289.612));
				bristolEast.push(new THREE.Vector2(428.091, 288.285));
				bristolEast.push(new THREE.Vector2(431.536, 283.335));
				bristolEast.push(new THREE.Vector2(434.29, 276.089));
				bristolEast.push(new THREE.Vector2(435.332, 254.158));
				bristolEast.push(new THREE.Vector2(437.622, 247.388));
				bristolEast.push(new THREE.Vector2(440.612, 242.534));
				bristolEast.push(new THREE.Vector2(445.804, 237.849));
				bristolEast.push(new THREE.Vector2(488.352, 209.333));

				for( var i = 0; i < bristolEast.length; i ++ ) bristolEast[ i ].multiplyScalar( 2 );

				var bristolEastShape = new THREE.Shape( bristolEast );

				var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 25 };

        addShape( bristolNorthWestShape,  extrudeSettings, 0x001848, -1000, 0, -1200, 850, 0, 0, 2);
				addShape( bristolWestShape,  extrudeSettings, 0x604878, -1000, 0, -1200, 850, 0, 0, 2);
				addShape( bristolEastShape,  extrudeSettings, 0x906090, -1000, 0, -1200, 850, 0, 0, 2);
				addShape( bristolSouthShape,  extrudeSettings, 0x483078, -1000, 0, -1200, 850, 0, 0, 2);

				// DATA MATES

				// BRISLINGTON =
				var brislintonMat = new THREE.MeshLambertMaterial({color: annoyingBarbie,opacity:0.6, emissive: annoyingBarbie});
				var geometry = new THREE.BoxGeometry(25,31.9028*3,25);
				var brislinton = new THREE.Mesh(geometry, brislintonMat);
				brislinton.scale.set(3,3,3);
				brislinton.position.set(950, -80, 350);
				brislinton.rotation.x = 0.2;
				scene.add(brislinton);

				// FISHPONDS

				var fishpondsMat = new THREE.MeshLambertMaterial({color: peach,opacity:0.6, emissive: peach});
				var geometry = new THREE.BoxGeometry(25,31.9028*3,25);
				var fishponds = new THREE.Mesh(geometry, fishpondsMat);
				fishponds.scale.set(3,3,3);
				fishponds.position.set(1090, 50, -350);
				fishponds.rotation.x = 0.2;
				scene.add(fishponds);

				// NEWFOUNDLAND WAY

				var newfoundMat = new THREE.MeshLambertMaterial({color: salmon,opacity:0.6, emissive: salmon});
				var geometry = new THREE.BoxGeometry(25,31.9028*3,25);
				var newfound = new THREE.Mesh(geometry, newfoundMat);
				newfound.scale.set(3,3,3);
				newfound.position.set(-650, 90, -600);
				newfound.rotation.x = 0.2;
				scene.add(newfound);


				// PARSON ST

				var parsonMat = new THREE.MeshLambertMaterial({color: grape,opacity:0.6, emissive: grape});
				var geometry = new THREE.BoxGeometry(25,31.9028*3,25);
				var parson = new THREE.Mesh(geometry, parsonMat);
				parson.scale.set(3,3,3);
				parson.position.set(180, -90, 350);
				parson.rotation.x = 0.2;
				scene.add(parson);

				// RUPERT ST

				var rupertMat = new THREE.MeshLambertMaterial({color: dusk,opacity:0.6, emissive: dusk});
				var geometry = new THREE.BoxGeometry(25,31.9028*3,25);
				var rupert = new THREE.Mesh(geometry, rupertMat);
				rupert.scale.set(3,3,3);
				rupert.position.set(250, -40, 150);
				rupert.rotation.x = 0.2;
				scene.add(rupert);

				// WELLS ST

				var wellsMat = new THREE.MeshLambertMaterial({color: midnight,opacity:0.6, emissive: midnight});
				var geometry = new THREE.BoxGeometry(25,31.9028*3,25);
				var wells = new THREE.Mesh(geometry, wellsMat);
				wells.scale.set(3,3,3);
				wells.position.set(700, -130, 600);
				wells.rotation.x = 0.2;
				scene.add(wells);


				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setClearColor( 0x3a3a3c );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				window.addEventListener( 'resize', onWindowResize, false );

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
				document.addEventListener( 'mouseout', onDocumentMouseOut, false );

				// mouseXOnMouseDown = event.clientX - windowHalfX;
				// targetRotationOnMouseDown = targetRotation;

			}

			function onDocumentMouseMove( event ) {

				// mouseX = event.clientX - windowHalfX;
				//
				// targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

			}

			function onDocumentMouseUp( event ) {

				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

			}

			function onDocumentMouseOut( event ) {

				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
					targetRotationOnMouseDown = targetRotation;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

				}

			}

			function animate() {

				requestAnimationFrame( animate );
				controls.update();

				render();

			}

			function render() {

				group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
				renderer.render( scene, camera );

			}
