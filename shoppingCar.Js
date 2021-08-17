class Product {
    constructor (id,name,price,img){
        this.id=id;
        this.name= name;
        this.price=price;
        this.img=img;
        this.quantity= quantity
    }
}

let shoppingCart=[];

const URLJSON="/productList.json" 
storageValidation();

showProductsInWindow();

function showProductsInWindow(){
    $.getJSON(URLJSON,(response,state)=>{
        if (state === "success"){
            let productList = response;
            // console.log("lo que viene de JSON es") estos estan ok
            // console.log(response); estos estan ok
            for(const product of productList){
                $(".row2").
                append(`
                <div class="col-12 col-md-3" style="margin-bottom:100px">
                    <div class="item shadow mb-4>
                        <h3 class="item-tittle for-fonts" style="font-size:1.5rem">
                            ${product.name}
                        </h3>
                        <img class="img-thumbnail" src="${product.img}"/>
                        <div class="item-details">
                            <h4 class="item-price for-fonts">
                                ${product.price} USD
                            </h4>
                            <p id="p-${product.id}" style="display:none">
                                ${product.id}
                            </p>
                            <button class="item-button btn btn-primary addToCart for-fonts" id="${product.id}">
                                AGREGAR AL CARRITO
                            </button>
                        </div>
                    </div>
                </div>`)

                $(`#${product.id}`).on('click',()=>{
                    let idButton = parseInt($(`#p-${product.id}`).text());
                    addToCart(idButton,productList);
                    storageValidation()
                })
            }
        }
    })
}

function addToCart(idProduct,products){
    if (shoppingCart.some(elem=>elem.id===idProduct)){
        let indexValue= shoppingCart.indexOf(shoppingCart.find(elem=>elem.id===idProduct));
        // console.log(indexValue);
        shoppingCart[indexValue].quantity += 1;
        Toastify({
            text: `Genial! has sumado un producto mas de ${shoppingCart[indexValue].name} `,
            backgroundColor: "green",
            className: "info",
        }).showToast();
        
    }else{
        shoppingCart.push(products[idProduct-1]);
        Toastify({
            text: "Producto agregado al carrito",
            backgroundColor: "green",
            className: "info",
        }).showToast();
    }
    localStorage.setItem('carrito de compras', JSON.stringify(shoppingCart));
    storageValidation();
}

function storageValidation(){
    if (localStorage.length !== 0){
        let cartPulled = JSON.parse(localStorage.getItem('carrito de compras'));
        shoppingCart = [...cartPulled];
        totalPurchase()
        printshoppingCart(shoppingCart);
    }
}


function printshoppingCart(shoppingCartArray){
    
    $(".shoppingCartItemsContainer").html('');
    
    shoppingCartArray.forEach(element => {
        $(".shoppingCartItemsContainer").append(`
            <div class="row shoppingCartItem${element.id}">
                <div class="col-6">
                    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <img src=${element.img} class="img-thumbnail2">
                        <h6 class="shopping-cart-item-title shoppingCartItemTitle${element.id} ml-3 mb-0" id="${element.id}">${element.name}</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-price${element.id} d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <p class="item-price mb-0 shoppingCartItemPrice">${element.price} USD</p>
                    </div>
                </div>
                <div class="col-4">
                    <div
                        class="shopping-cart-quantity${element.id} d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <input class="shopping-cart-quantity-input shoppingCartItemQuantity${element.id}" type="number" min="1"
                            value="${element.quantity}">
                        <button class="btn btn-danger buttonDelete${element.id}" id="${element.id}" type="button">X</button>
                    </div>
                </div>
            </div>`)
            $(`.buttonDelete${element.id}`).click(()=>{
                RemoveProduct(element.id);
            })
            $(`.shoppingCartItemQuantity${element.id}`).focusout(()=>{
                let inputValue = Number( $(`.shoppingCartItemQuantity${element.id}`).val())
                updatingProductQuantity(element.id,shoppingCart,inputValue)
            })
    });
}


function RemoveProduct(id){
    let indexValue= shoppingCart.indexOf(shoppingCart.find(elem=>elem.id===id));
    shoppingCart.splice(indexValue,1)
    Toastify({
        text: 'Producto eliminado del carrito',
        backgroundColor: "red",
        className: "info",
    }).showToast();
    localStorage.setItem('carrito de compras', JSON.stringify(shoppingCart));
    storageValidation()
    $("#empty-Cart").click(emptyCart);
}

function totalPurchase(){
    $('.shopping-cart-total').html('');
    
    let total=0;
    let quantityOfItems= 0;
    shoppingCart.forEach(elem=>{
        total +=elem.price*elem.quantity;
        quantityOfItems += elem.quantity;
    })
    itemsMainInfo(quantityOfItems);
    $('.shopping-cart-total').append(`
    <div class="show-totals">
        <p class="mb-0 total-compra">Total = </p>
        <p class="ml-4 mb-0 shoppingCartTotal monto-total">${total.toFixed(1)} USD</p>
    </div>
    <div>
        <button class="btn btn-danger ml-auto" type="button" data-toggle="modal"
        data-target="#comprarModal" id="empty-Cart"> Vaciar Carrito </button>    
    </div>
    <a href="https://api.whatsapp.com/send?phone=5491122554014&text=Me%20gustaría%20saber%20el%20precio%20del%20sitio%20web%20" target="_blank" rel="noopener"><button class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
    data-target="#comprarModal"> Finalizar Compra </button></a>`)
}


function updatingProductQuantity(id, shoppingCartArray, inputValue){
    let indexValue= shoppingCartArray.indexOf(shoppingCart.find(elem=>elem.id===id));
    shoppingCart[indexValue].quantity = inputValue;
    localStorage.setItem('carrito de compras', JSON.stringify(shoppingCart));
    storageValidation()
    $("#empty-Cart").click(emptyCart);
}

function emptyCart(){
    shoppingCart=[];
    localStorage.setItem('carrito de compras', JSON.stringify(shoppingCart));
    storageValidation()
}

$("#empty-Cart").click(emptyCart);

function itemsMainInfo(quantityOfItems){
    $("#itemMainInfo").html("");
    $(".car-info").prepend(`<a class="nav-item" id="itemMainInfo" href="/shoppingCar.html"><p class="totals">${quantityOfItems}</p></a>`)
}