var width = window.innerWidth;
var height = window.innerHeight;

	projector = new THREE.Projector();
	var scene = new THREE.Scene;
	scene.fog = new THREE.FogExp2(0xFFFFFF, 0.0005);
	
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//Each object or shape needs it's own Geometry, Mesh Material, Mesh instantiation, and clock for the rotation animation

var cube4Geometry = new THREE.CubeGeometry(60,60,60)
var cube4Material = new THREE.MeshLambertMaterial({color: 0x99FF55});
var cube4 = new THREE.Mesh(cube4Geometry, cube4Material);

cube4.position.y = 100;
cube4.position.x =-105;
cube4.rotation.z= .75;
scene.add(cube4);
var clock4 = new THREE.Clock;
//****************************************************************************************

var cube5Geometry = new THREE.CubeGeometry(50,50,50);
var cube5Material = new THREE.MeshLambertMaterial({color: 0x00FFFF});
var cube5 = new THREE.Mesh(cube5Geometry, cube5Material);

cube5.position.y = 110;
cube5.position.x = 40;
cube5.rotation.z = .25;
cube5.rotation.y = .25;

var clock5 = new THREE.Clock();
scene.add(cube5);
//*****************************************************************************************


var cubeGeometry = new THREE.CubeGeometry(100,100,100);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0x1ec876});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = -10;

var cube2Geometry = new THREE.CubeGeometry(50,50,50);
var cube2Material = new THREE.MeshLambertMaterial({color:0xFF66BB});
var cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
cube2.position.z = 20;
cube2.position.x = -150;

scene.add(cube);
scene.add(cube2);


var cube3Geometry = new THREE.CubeGeometry(75, 75, 75);
var cube3Material = new THREE.MeshLambertMaterial({color: 0x6677EE});
var cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
cube3.position.x = 150;
cube3.position.y = 50;
scene.add(cube3);

cube.rotation.x = .15
cube.rotation.y= Math.PI*45/180;
cube2.rotation.y = Math.PI*45/180;
cube3.rotation.y = Math.PI*45/180;








var camera = new THREE.PerspectiveCamera(45, width/height,0.1,10000);

camera.position.y = 160;
camera.position.z = 400;
camera.lookAt(scene.position);
scene.add(camera);

var skyboxGeometry = new THREE.CubeGeometry(10000,10000,10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({color:0x000000, side: THREE.BackSide});
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

scene.add(skybox);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
scene.add (pointLight);

var clock = new THREE.Clock;
var clock2 = new THREE.Clock;
var clock3 = new THREE.Clock;


//***********FINAL RENDERING**********************

function render() {
	cube.rotation.y -= clock.getDelta();
	cube2.rotation.y -= 3*(clock2.getDelta());
	cube3.rotation.y -= .5*(clock3.getDelta());
	cube4.rotation.x -= clock4.getDelta();
	
	//if cube5.rotation.z <= .25
		//{
			cube5.rotation.z -= clock5.getDelta();
		//}

	
	renderer.render(scene,camera);
	requestAnimationFrame(render);
}

render();





