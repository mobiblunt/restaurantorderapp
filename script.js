import {menuArray} from "./data.js"


document.addEventListener('click', function(e){
 // console.log(e.target.dataset.order)
    if(e.target.dataset.order){
     // console.log("workim")
       handleOrder(e.target.dataset.order) 
    }
    
})

let order = []

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

function renderOrder() {
  //console.log("here")
  let orderHtml = ``
  if(order.length) {
    order.forEach((ord) => {
     // console.log(ord)
      orderHtml += `<div class="item-price-2">$ ${ord.price}</div>
        <div class="remove-item-btn">remove</div>
        <div class="item-name-2">${ord.name}</div>`
      
      
    })
console.log(orderHtml)
    document.getElementById('order-feed').innerHTML = orderHtml
  }
  
}

function showOrder() {
  if(order.length) {
    document.getElementById("checko").classList.toggle('hidden') 
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