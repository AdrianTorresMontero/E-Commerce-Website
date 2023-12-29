const products=[
  {name:'G2000 Gaming Headset: Experience Immersive Audio With Noise Cancelling Mic, LED Lights & Soft Memory Earmuffs',
  image:'images/product1.jpeg',
  price:'23.99'},

  {name:'MSI 31.5" FHD Curved 250Hz 1ms FreeSync Gaming Monitor',
  image:'images/product2.jfif',
  price:'199.99'},

  {name:'Gaming Wired Mouse, LED Backlit Light, USB, Ergonomic Esports Mouse',
  image:'images/product3.jpg',
  price:'11.99'},

  {name:'Razer BlackWidow V4 X Mechanical Gaming Keyboard with Razer Chroma RGB',
  image:'images/product4.webp',
  price:'110.99'},

  {name:'Lenovo - LOQ 15.6" Gaming Laptop FHD - Intel Core i5-13420H with 8GB Memory - NVIDIA GeForce RTX 3050 6GB - 1TB SSD - Storm Grey',
  image:'images/product5.jpg',
  price:'599.99'},

  {name:'Computer Camera,High-Definition Web Camera,USB Computer Web Camera,Used For PC Video Conferences, Calls, Games',
  image:'images/product6.png',
  price:'60.97'},

  {name:'USB Microphone,Condenser Computer PC Mic,Plug&Play Gaming Microphones For PS 4&5.Headphone Output&Volume Control,Mic Gain Control,Mute Button For Vocal,Podcast',
  image:'images/product7.jpg',
  price:'41.92'},

  {name:'CyberPowerPC - Gamer Master Gaming Desktop - AMD Ryzen 3 4100 - 8GB Memory - NVIDIA GeForce GTX 1650 - 500GB SSD - Black',
  image:'images/product8.jpg',
  price:'699.99'}
]

const cartIcon = document.querySelector('.icon-container')
const closeButton=document.querySelector('.close')

cartIcon.addEventListener('click',()=>{
  console.log(document.querySelector('.back').classList.add('see-back'))
});

closeButton.addEventListener('click',()=>{
  console.log(document.querySelector('.back').classList.remove('see-back'))
});

