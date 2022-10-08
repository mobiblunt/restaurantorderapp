import {menuArray} from "./data.js"


document.addEventListener('click', function(e){
    if(e.target.dataset.order){
       handleOrder(e.target.dataset.order) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    
})

const order = []

function handleOrder(id) {

  menuArray.forEach((item) => {
    if(item.id === id) {
      order.push(item)
    }
  })
  renderOrder()
  
}

function renderOrder() {
  let orderHtml = ``
  if(order.lenght) {
    order.forEach((ord) => {
      orderHtml += `<div class="item-price-2">$ ${ord.price}</div>
        <div class="remove-item-btn">remove</div>
        <div class="item-name-2">${ord.name}</div>`
      
      
    })

    document.getElementById('order-feed').innerHTML = orderHtml
  }
  
}

function showOrder() {
  if(ordr.length) {
    document.getElementById("order-feed").classList.toggle('hidden') 
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