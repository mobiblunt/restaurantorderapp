import {menuArray} from "./data.js"

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
          <img class="ellipse-icon3" alt="" src="public/add-btn.png" />
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