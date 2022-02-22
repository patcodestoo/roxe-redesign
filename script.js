

 //mobilepayments
function scrollAppear(){
    let introText = document.querySelector('.fade-image');
    let introPosition = introText.getBoundingClientRect().top; //tells you position of container
    // console.log(introPosition);//it shows where it is
    let screenPosition = window.innerHeight / 2; // you can divide  to delay it 
if(introPosition < screenPosition){
  
    
    introText.classList.add('image-appear')//adds another class
}
 
}

//merchant
window.addEventListener('scroll', scrollAppear);

function scrollAppearMerchant(){
    let merchantImg = document.querySelector('.merchant-appear');
    let merchantPos = merchantImg.getBoundingClientRect().top; //tells you position of container
    // console.log(introPosition);//it shows where it is
    let merchantScrPos = window.innerHeight / 2; // you can divide  to delay it 
if(merchantPos < merchantScrPos){
  
    
    merchantImg.classList.add('merchant-fade')//adds another class
}
 
}

window.addEventListener('scroll', scrollAppearMerchant);
//banks
function scrollAppearBanks(){
    let banksImg = document.querySelector('.banks-appear');
    let banksPos = banksImg.getBoundingClientRect().top; //tells you position of container
    // console.log(introPosition);//it shows where it is
    let banksScrPos = window.innerHeight / 2; // you can divide  to delay it 
if(banksPos < banksScrPos){
  
    
    banksImg.classList.add('banks-fade')//adds another class
}
 
}

window.addEventListener('scroll', scrollAppearBanks);
//remittance
function scrollAppearRemittance(){
    let remittanceImg = document.querySelector('.remittance-appear');
    let remittancePos = remittanceImg.getBoundingClientRect().top; //tells you position of container
    // console.log(introPosition);//it shows where it is
    let remittanceScrPos = window.innerHeight / 2; // you can divide  to delay it 
if(remittancePos < remittanceScrPos){
  
    
    remittanceImg.classList.add('remittance-fade')//adds another class
}
 
}

window.addEventListener('scroll', scrollAppearRemittance);


//3D Coin
let container; //where to inject the 3d
let camera;
let renderer;
let scene; 
let roxeCoin;

//Initialize
function init(){
container = document.querySelector('.scene-3d')

//Create Scene

scene = new THREE.Scene();
const fov =45; //field of view
const aspect   = container.clientWidth / container.clientHeight; //aspect ratio
//clipping
const nearLimit = 0.01;
const farLimit = 5000;

//Camera 
camera = new THREE.PerspectiveCamera(fov,aspect,nearLimit,farLimit);
camera.position.set(-0.8,0.54,5)//x,y,z

//Light
// const ambientLight = new THREE.AmbientLight(0xffffff,6)
// scene.add(ambientLight);

//   const directionalLight = new THREE.DirectionalLight(0xffffff,5)
//   directionalLight.position.set(10,10,10);
//   scene.add(directionalLight);


var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff );
hemiLight.position.set( 0, 300, 0 );
scene.add( hemiLight );

var dirLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
dirLight.position.set( 10, 200, 500 );
scene.add( dirLight );


 //Renderer
renderer = new THREE.WebGLRenderer({antialias:true, alpha:true})
renderer.setSize(container.clientWidth , container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);


container.appendChild(renderer.domElement);
 

//Load Model

let loader = new THREE.GLTFLoader(), gltf;
loader.load('./3d/roxecoin.glb', function(gltf){
scene.add(gltf.scene);


roxeCoin = gltf.scene.children[0]; //aobject in an array
animate();
})//End of loader.load

function animate(){
requestAnimationFrame(animate);
roxeCoin.rotation.z += 0.005;
renderer.render(scene, camera);
 
}// End of animate


}//End of init()

init();

// function onwindowResize(){
// camera.aspect = container.clientWidth / container.clientHeight;
// camera.updateProjectionMatrix();

// renderer.setSize(container.clientWidth,container.clientHeight)


// }

// window.addEventListener("resize",onwindowResize);