import {menuArray} from "./data.js"


document.addEventListener('click', function(e){
 // console.log(e.target.dataset.order)
    if(e.target.dataset.order){
     // console.log("workim")
       handleOrder(e.target.dataset.order) 
    }

    if(e.target.dataset.idd){
      removeOrder(e.target.dataset.idd)
      //console.log(e.target.dataset.idd)
    }
    
})

let order = []

let isShown = false

let total = []

let totalStng = ""

function handleOrder(id) {
//console.log(id)
  menuArray.forEach((item) => {
    
    if(item.id == id) {

      let newObj = {}
      newObj = item
      //console.log(item)
      order.push(newObj)
      
      
      
      
      
    }
  })
  renderOrder()
  
}

function removeOrder(id) {
  order = order.filter((ord) => {
    ord.id != id
    
  })
  //console.log(order.length)
  renderOrder()
  }

function renderOrder() {
  
  let orderHtml = ``
  if(order.length) {
    order.forEach((ord) => {
     // console.log(ord)
      orderHtml += `<div class="item-price-2">$ ${ord.price}</div>
        <div class="remove-item-btn" data-idd="${ord.id}">remove</div>
        <div class="item-name-2">${ord.name}</div> <div class="divider3"></div>
        <div class="total-price-text">Total price:</div>
        <div id="totalH" class="total-price-div"> $ ${calcOrder()}</div>
`

      
      
    })
//console.log(orderHtml)
    document.getElementById('order-feed').innerHTML = orderHtml
    
  
 
  }
  
  
  showOrder()
}





function calcOrder() {
  
  order.forEach((ord) => {
    if(!total.includes(ord.id)){
    total.push(ord.price) 
    console.log(total)
      }
  })
  const initialValue = 0
  let totalSt = total.reduce((previousValue, currentValue) => previousValue + currentValue,
  initialValue)
  return totalSt
}






function showOrder() {
  if(order.length) {
    document.getElementById("checko").classList.remove('hidden') 
   
  } else {
    document.getElementById("checko").classList.add('hidden')
  }
}

function getFeedHtml(){
    let feedHtml = ``
    
    menuArray.forEach(function(product){
        
        
        let ingredients = ''
        
        
           product.ingredients.forEach(function(ing){
                ingredients+=`${ing} ,`
            })
        
        
          
        feedHtml += `<div class="item-1-div1">
        <div class="divider4"></div>
        <div class="add-btn-div3">
          <div class="text-div3">+</div>
          <img data-order="${product.id}" class="ellipse-icon3" alt="" src="public/add-btn.png" />
        </div>
        <div class="item-price-div3">${product.price}</div>
        <div class="item-description-div3">${ingredients}</div>
        <div class="item-graphic-div3"><img src="${product.emoji}" /></div>
        <div class="item-title-div3">${product.name}</div></div>
      `
   })
   return feedHtml 
}

function render(){
    document.getElementById('feeder').innerHTML = getFeedHtml()
}

render()
showOrder()