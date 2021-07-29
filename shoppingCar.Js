// var productList = [
//     {id:'0159D', name: 'Mariel',sizes: '36,37,38,39/40', colors: ['Taupe','blanco','azul perlado','gris claro', 'negro', 'rose'], price: 12.0,},
//     {id:'0164D', name: 'Julia',sizes: '35/36,37/38,39/40', colors: ['Verde aguacate','azul perlado','dorado', 'negro', 'pardo','rose'], price: 8.0},
//     {id:'0187D', name: 'Positive',sizes: '35/36,37/38,39/40', colors: ['Azul acido','Lila pastel','Rosado pastel', 'rose', 'verde claro'], price: 5.40},
//     {id:'0168D', name: 'Celia',sizes: '35/36,37/38,39/40', colors: ['Amarillo','blanco','azul perlado','verde claro', 'negro', 'rose'], price: 5.90},
//     {id:'0150D', name: 'Aurora',sizes: '35/36,37/38,39/40', colors: ['fresa','azul perlado','amarillo','fucsia', 'mora', 'negro', 'verde claro'], price: 5.10},
//     {id:'0144D', name: 'Salome',sizes: '35/36,37/38,39/40', colors: ['blanco','azul perlado','beige', 'coca cola','negro', 'rose'], price: 6.20},
//     {id:'0143D', name: 'Frida',sizes: '35/36,37/38,39/40', colors: ['Lila perlado','blanco','azul perlado','cobre', 'negro', 'rose','rojo'], price: 5.70},
//     {id:'0154', name: 'Bianca',sizes: '35/36,37/38,39/40', colors: ['Bronce perlado','blanco','azul perlado','beige', 'negro', 'rose'], price: 6.20},
//     {id:'167', name: 'Jimena',sizes: '35/36,37/38,39/40', colors: ['agua marina','lila pastel','naranja neon','rosado perlado', 'negro', 'rose'], price: 4.80},
//     {id:'0113D', name: 'Sara',sizes: '35/36,37/38,39/40', colors: ['Amarillo','blanco','azul perlado','verde claro', 'negro', 'rose'], price: 6.20}
// ]

let ShoppingCart=[];

const URLJSON="/productList.json" 

showProductsInWindow();

function showProductsInWindow(){
    $.getJSON(URLJSON,(response,state)=>{
        if (state === "success"){
            let productList = response;
            // console.log(response);
            for(const product of productList){
                $(".row").append(`                        
                
            <div class="col-12 col-md-3">
                <div class="item shadow mb-4">
                    <h3 class="item-title">${product.name}</h3>
                    <img class="img-thumbnail" src="${product.img}">
                    <div class="item-details">
                        <h4 class="item-price"> ${product.price} USD</h4>
                        <p id="p-${product.id}" style="display:none">${product.id}</p>
                        <button class="item-button btn btn-primary addToCart" id="${product.id}">AGREGAR AL CARRITO</button>
                    </div>
                </div>
            </div>`)

            $(`#${product.id}`).on('click',()=>{
                let idButton = parseInt($(`#p-${product.id}`).text());
                console.log(idButton);
                let productSelected = arrayProducts.find(product => product.id === idButton);
                // agregarProducto(productSelected);
                // validarStorage();
            })
            }
        }
    })
}


























const saveLocalStorage= (key,value) => { localStorage.setItem(key,value)}

// for (const product of productList){
//     saveLocalStorage(product.name,product.price);
// }

// let esto= localStorage.getItem('Mariel')
// console.log (esto)

// const AddToCarButton= document.querySelectorAll(".addToCart")

// AddToCarButton.forEach((AddToCarButton2) => {
//     AddToCarButton2.addEventListener('click',addToCarFunction);
// })

// const buyButton = document.querySelector('.comprarButton');
// buyButton.addEventListener('click', comprarButtonClicked);

// const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

// function addToCarFunction(e){
//     const buttonClicked= e.target;
//     const item = buttonClicked.closest('.item');

//     const itemTitle = item.querySelector('.item-title').textContent;
//     const itemPrice = item.querySelector('.item-price').textContent;
//     const itemImage = item.querySelector('.img-thumbnail').src;
    
//     addItemToShoppingCart(itemTitle, itemPrice, itemImage);
// }

// function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
//     const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
//     for (let i = 0; i < elementsTitle.length; i++) {
//         if (elementsTitle[i].innerText === itemTitle) {
//             let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
//             elementQuantity.value++;
//             $('.toast').toast('show');
//             updateShoppingCartTotal();
//             return;
//         }
//     }

//     const shoppingCartRow = document.createElement('div');
//     const shoppingCartContent = `
//     <div class="row shoppingCartItem">
//             <div class="col-6">
//                 <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
//                     <img src=${itemImage} class="img-thumbnail2">
//                     <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
//                 </div>
//             </div>
//             <div class="col-2">
//                 <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
//                     <p class="item-price mb-0 shoppingCartItemPrice">${localStorage.getItem(itemTitle)} USD</p>
//                 </div>
//             </div>
//             <div class="col-4">
//                 <div
//                     class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
//                     <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
//                         value="1">
//                     <button class="btn btn-danger buttonDelete" type="button">X</button>
//                 </div>
//             </div>
//     </div>`;

//     shoppingCartRow.innerHTML = shoppingCartContent;

//     shoppingCartItemsContainer.append(shoppingCartRow);

//     shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

//     shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

//     updateShoppingCartTotal();
// }

// function updateShoppingCartTotal() {
//     let total = 0;
//     const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

//     const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

//     shoppingCartItems.forEach((shoppingCartItem) => {
//         const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
//         const shoppingCartItemPrice = Number( shoppingCartItemPriceElement.textContent.replace('USD', ''));
//         const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
//         const shoppingCartItemQuantity = Number( shoppingCartItemQuantityElement.value);
//         total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
//     });

//     shoppingCartTotal.innerHTML = `${total.toFixed(2)} USD`;
// }

// function removeShoppingCartItem(event) {
//     const buttonClicked = event.target;
//     buttonClicked.closest('.shoppingCartItem').remove();
//     updateShoppingCartTotal();
// }

// function quantityChanged(event) {
//     const input = event.target;
//     input.value <= 0 ? (input.value = 1) : null;
//     updateShoppingCartTotal();
// }

// function comprarButtonClicked() {
//     shoppingCartItemsContainer.innerHTML = '';
//     updateShoppingCartTotal();
// }