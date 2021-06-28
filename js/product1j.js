const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

var login = document.getElementById('loginProduct');
var email = localStorage.getItem('email');
//  var username = local.localStorage.getItem('username');

if(email != null){
    login.innerHTML =  '<button id="loginProduct" class="btn">'+email+'</button>';
    console.log('email');

}   

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

function storedata() {
    let product_main_image = document.getElementById('product-main-image').getAttribute("src");
    let product_title = document.getElementById('product-title').innerHTML;
    let product_seller = document.getElementById('product-seller').innerHTML;
    let product_price = document.getElementById('product-price').innerText;
    let product_item_quantity = document.getElementById('product-item-quantity').value;


    for (let i = 0; i < 100; i++) {

        let data = {
            [i]: {

                product_main_image: `${product_main_image}`,
                product_title: `${product_title}`,
                product_seller: `${product_seller}`,
                product_price: `${product_price}`,
                product_item_quantity: `${product_item_quantity}`
            }
        }
        if (localStorage.hasOwnProperty('cart_list_item')) {
            let a = [];
            a = JSON.parse(localStorage.getItem('cart_list_item'));
            let b = {};
            b = data[i];
            //console.log()
            if (!Object.keys(a).hasOwnProperty(i)) {
                console.log(Object.keys(a).length)
                let t = i;
                t++;
                a[t] = b;
                localStorage.setItem('cart_list_item', JSON.stringify(a));
                //console.log(a);
                //  console.log(a.length);
                break;
            }

        } else {
            localStorage.setItem('cart_list_item', JSON.stringify(data));
            break;
        }
    }

}

function toastPopUp() {
    let product_item_quantity1 = parseInt(document.getElementById('product-item-quantity').value);
    let data = JSON.parse(localStorage.getItem('cart_list_item'));
    let x = document.getElementById("snackbar");
    let product_item_quantity = 0;
    if (data !== null) {
        for (let i = Object.keys(data).length; i >= 0; i--) {
            if (data[i]) {
                product_item_quantity += parseInt(data[i].product_item_quantity);
            } else {
                continue;
            }
        }
    }
    if (product_item_quantity < 30 && (product_item_quantity1 + product_item_quantity) <= 30) {
        x.className = "show";
        x.innerHTML = "Item Added";
        storedata();
    } else {
        x.className = "show";
        x.innerHTML = `You Can't Add More then ${30-product_item_quantity} Now`;
    }
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}