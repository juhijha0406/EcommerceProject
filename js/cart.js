var login = document.getElementById('loginCart');
 
var email = localStorage.getItem('email');
//  var username = local.localStorage.getItem('username');

if(email != null){
   login.innerHTML =  '<button class="btn btn-secondary" id="loginnn" style="color: white;">'+email+'</button>';

   console.log('email');
}

let data = JSON.parse(localStorage.getItem('cart_list_item'));
let product_main_image, product_title, product_seller, product_price, product_item_quantity,
    price_total_item, price_total_qty = 0,
    price_items_price = 0,
    price_total_price;
//  console.log(data.cart_0.product_title);
let container1 = document.getElementById(" cart-Item-Container ");
let priceContainer = document.getElementById(" cart-Price-Container ");
for (let i = Object.keys(data).length; i >= 0; i--) {
    if (data[i]) {
        product_main_image = data[i].product_main_image;
        product_title = data[i].product_title;
        product_seller = data[i].product_seller;
        product_price = data[i].product_price;
        product_item_quantity = data[i].product_item_quantity;
        price_total_item = Object.keys(data).length;
        price_total_qty += parseInt(product_item_quantity);
        price_items_price += parseInt(product_price * product_item_quantity);
        price_total_price = parseInt(price_items_price - 1000);
        container1.innerHTML += `<div class=" card m-2">
      <div class=" card-body row ">
          <div class=" col-sm-3 ">
              <img style=" height: 150px ; width: 150px; " src="${product_main_image}" alt=" ">
          </div>
          <div class=" col-sm-9 ">
              <h5>${product_title}</h5>
              <h6 style=" font-size: x-small; color: green; ">Sold By : ${product_seller}
              </h6>
              <span style=" color: green; ">₹ ${product_price}</span>
              <span style=" color: green; " class=" float-right ">Item * qty : : ₹ - ${product_item_quantity*product_price}</span>

              <div><i type=" button ">
                      <svg xmlns=" http://www.w3.org/2000/svg " width=" 16 " height=" 16 "
                          fill=" currentColor " class=" bi bi-plus-circle " viewBox=" 0 0 16 16 ">
                          <path
                              d=" M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z " />
                          <path
                              d=" M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z " />
                      </svg></i>
                  <span style=" font-size:12px ; ">&nbsp; ${product_item_quantity} &nbsp; </span>
                  <i type=" button "><svg xmlns=" http://www.w3.org/2000/svg " width=" 16 " height=" 16 "
                          fill=" currentColor " class=" bi bi-dash-circle " viewBox=" 0 0 16 16 ">
                          <path
                              d=" M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z " />
                          <path d=" M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z " />
                      </svg>
                  </i>
                  <a><span class=" border border-danger pl-1 pr-1 " type=" button " style="cursor: pointer; margin-left: 4rem; color: red; font-size: smaller; ">Delete</span></a>
                  <a ><span class=" border border-dark pl-1 pr-1 " type=" button " style="text-decoration: none; margin-left: 4rem;font-size: smaller; ">See Similer Item</span></a>
              </div>
          </div>
      </div>

      </div>
      `;
    } else {
        continue;
    }
}

priceContainer.innerHTML = `<div class=" card ">
<div class=" card-header p-md-2 border border-bottom ">
    Price Details
</div>
<div class=" card-body ">
    <div>
        <div class=" m-3 ">
            <span>Total Item</span>
            <span class=" float-lg-right ">${price_total_item}</span>
        </div>
        <div class=" m-3 ">
            <span>Total Qty</span>
            <span class=" float-lg-right ">${price_total_qty}</span>
        </div>
        <div class=" m-3 ">
            <span>Item Price</span>
            <span class=" float-lg-right ">${price_items_price}</span>
        </div>
        <div class=" m-3 ">
            <span>Discount 10%</span>
            <span style=" color: green; " class=" float-lg-right ">-1000</span>
        </div>
        <div class=" m-3 ">
            <span>Delivery Charges</span>
            <span class=" float-lg-right ">35</span>
        </div>
        <div class=" card-footer font-weight-bold mt-3 ">
            <span>Total Price</span>
            <span class=" float-lg-right ">${price_total_price}</span>
        </div>
    </div>
</div>
</div>`;

