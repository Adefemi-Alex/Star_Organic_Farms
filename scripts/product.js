// import {shopItemsData} from "./Data.js"
let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img,alt, link } = x;
      let search = basket.find((x) => x.id === id) || [];
       return `
        <div class="each-showcase col-12 col-md-6  col-lg-4 col-xl-3 mt-3" id=product-id-${id}>
          <div class="custom">
            <img src= ${img} alt=${alt} style="height:300px; object-fit:contain;">
          </div>
          <div class="showcase-info">
            <h4>${name}</h4>
            <h3>${desc}</h3>
            <div class="show-hover">
              <p>$ ${price}</p>
              <p class="details product1" onclick="window.location.href= '${link}'">DETAILS</p>
            </div>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
       `;
    
    })
    .join(""));
};
generateShop();
    // <div id=product-id-${id} class="item">
    //     <img width="220" src=${img} alt="">
    //     <div class="details">
    //       <h3>${name}</h3>
    //       <p>${desc}</p>
    //       <div class="price-quantity">
    //         <h2>$ ${price} </h2> 
            // <div class="buttons">
            //   <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            //   <div id=${id} class="quantity">
            //   ${search.item === undefined ? 0 : search.item}
            //   </div>
            //   <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            // </div>
    //       </div>
    //     </div>
    //   </div>
    


    let increment = (id) => {
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) {
        basket.push({
          id: selectedItem.id,
          item: 1,
        });
      } else {
        search.item += 1;
      }
    
      // console.log(basket);
      update(selectedItem.id);
      localStorage.setItem("data", JSON.stringify(basket));
    };
    let decrement = (id) => {
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) return;
      else if (search.item === 0) return;
      else {
        search.item -= 1;
      }
      update(selectedItem.id);
      basket = basket.filter((x) => x.item !== 0);
      // console.log(basket);
      localStorage.setItem("data", JSON.stringify(basket));
    };
    let update = (id) => {
      let search = basket.find((x) => x.id === id);
      // console.log(search.item);
      document.getElementById(id).innerHTML = search.item;
      calculation();
    };
    
    let calculation = () => {
      let cartIcon = document.getElementById("cart-count");
      cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    };
    
    calculation();