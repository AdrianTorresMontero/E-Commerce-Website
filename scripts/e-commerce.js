const products=[
  {name:'G2000 Gaming Headset: Experience Immersive Audio With Noise Cancelling Mic, LED Lights & Soft Memory Earmuffs',
  image:'images/product1.jpeg',
  price:'23.99',
  id:'1'},

  {name:'MSI 31.5" FHD Curved 250Hz 1ms FreeSync Gaming Monitor',
  image:'images/product2.jfif',
  price:'199.99',
  id:'2'},

  {name:'Gaming Wired Mouse, LED Backlit Light, USB, Ergonomic Esports Mouse',
  image:'images/product3.jpg',
  price:'11.99',
  id:'3'},

  {name:'Razer BlackWidow V4 X Mechanical Gaming Keyboard with Razer Chroma RGB',
  image:'images/product4.webp',
  price:'110.99',
  id:'4'},

  {name:'Lenovo - LOQ 15.6" Gaming Laptop FHD - Intel Core i5-13420H with 8GB Memory - NVIDIA GeForce RTX 3050 6GB - 1TB SSD - Storm Grey',
  image:'images/product5.jpg',
  price:'599.99',
  id:'5'},

  {name:'Computer Camera,High-Definition Web Camera,USB Computer Web Camera,Used For PC Video Conferences, Calls, Games',
  image:'images/product6.png',
  price:'60.97',
  id:'6'},

  {name:'USB Microphone,Condenser Computer PC Mic,Plug&Play Gaming Microphones For PS 4&5.Headphone Output&Volume Control,Mic Gain Control,Mute Button For Vocal,Podcast',
  image:'images/product7.jpg',
  price:'41.92',
  id:'7'},

  {name:'CyberPowerPC - Gamer Master Gaming Desktop - AMD Ryzen 3 4100 - 8GB Memory - NVIDIA GeForce GTX 1650 - 500GB SSD - Black',
  image:'images/product8.jpg',
  price:'699.99',
  id:'8'}
]
displayGrid();

const cartIcon = document.querySelector('.icon-container')
const closeButton=document.querySelector('.close')


cartIcon.addEventListener('click',()=>{
  console.log(document.querySelector('.back').classList.add('see-back'))
});

closeButton.addEventListener('click',()=>{
  console.log(document.querySelector('.back').classList.remove('see-back'))
});

function displayGrid(){
  let all=''
  let j=0
  products.forEach(value=>{
    let {name,image,price} = value
    let prod=`
    <div class="product-preview">
      <div class="image">
        <img class="product-image" src="${image}">
        <div class="add">
          <button class="add-button" onClick="addCart(${j++})">
            <img src="icons/shopping-cart.png" alt=""> 
            Add to cart
          </button>
        </div>
      </div>
      <div class="features">
        <p>${name}</p>
        <p>$${price}</p>
      </div>
    </div>
    `
    all+=prod;
  })
  document.querySelector('.products-grid').innerHTML = all
}

//add to cart function
let cart =[]

//function for add button
function addCart(a){
  cart.push({...products[a]})
  console.log(document.querySelector('.back').classList.add('see-back'))
  display()
}

//function for delete button
function del(a){
  cart.splice(a,1)
  display()
}

// function for displaying in cart
function display(){
  let i = 0, total=0;
  console.log(cart)
  if (cart.length===0){
    document.querySelector('.total').innerHTML= `TOTAL: $0.00`
    document.querySelector('.bar1').innerHTML=''
    document.querySelector('.cart-counter').innerHTML=0
  }else{
    document.querySelector('.cart-counter').innerHTML=cart.length
    document.querySelector('.bar1').innerHTML=cart.map(item=>{
      let {name,image,price} = item;
      total=total+parseInt(price*100);
      document.querySelector('.total').innerHTML= `TOTAL: $ ${total/100}`
      return `
      <div class="cart">
        <div class="img-cont">
          <img class="img-preview" src="${image}">
        </div>
        <div class="text-cont">
          <p class="title">${name}</p>
          <p class="price">$${price}</p>
          <p class="remove" onClick="del(${i++})">remove</p>
        </div>
      </div>`
    }).join('');
  }
}
//changing text
function change(){
  
}
