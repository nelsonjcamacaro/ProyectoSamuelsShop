var productList = [
    {id:'0159D', name: 'Mariel',sizes: ['36','37','38','39/40'], colors: ['Taupe','blanco','azul perlado','gris claro', 'negro', 'rose'], price: 12.0,},
    {id:'0164D', name: 'Julia',sizes: ['35/36','37/38','39/40'], colors: ['Verde aguacate','azul perlado','dorado', 'negro', 'pardo','rose'], price: 8.0},
    {id:'0187D', name: 'Positive',sizes: ['35/36','37/38','39/40'], colors: ['Azul acido','Lila pastel','Rosado pastel', 'rose', 'verde claro'], price: 5.40},
    {id:'0168D', name: 'Celia',sizes: ['35/36','37/38','39/40'], colors: ['Amarillo','blanco','azul perlado','verde claro', 'negro', 'rose'], price: 5.90},
    {id:'0150D', name: 'Aurora',sizes: ['35/36','37/38','39/40'], colors: ['fresa','azul perlado','amarillo','fucsia', 'mora', 'negro', 'verde claro'], price: 5.10},
    {id:'0144D', name: 'Salome',sizes: ['35/36','37/38','39/40'], colors: ['blanco','azul perlado','beige', 'coca cola','negro', 'rose'], price: 6.20},
    {id:'0143D', name: 'Frida',sizes: ['35/36','37/38','39/40'], colors: ['Lila perlado','blanco','azul perlado','cobre', 'negro', 'rose','rojo'], price: 5.70},
    {id:'0154', name: 'Bianca',sizes: ['35/36','37/38','39/40'], colors: ['Bronce perlado','blanco','azul perlado','beige', 'negro', 'rose'], price: 6.20},
    {id:'167', name: 'Jimena',sizes: ['35/36','37/38','39/40'], colors: ['agua marina','lila pastel','naranja neon','rosado perlado', 'negro', 'rose'], price: 4.80},
    {id:'0113D', name: 'Sara',sizes: ['35/36','37/38','39/40'], colors: ['Amarillo','blanco','azul perlado','verde claro', 'negro', 'rose'], price: 6.20}]

class Product {
    constructor (id,name,sizes,colors,price){
        this.id= id;
        this.name= name;
        this.sizes= sizes;
        this.colors= colors;
        this.price= price;
    }

    sumarIVA (){
        return this.price*1.16
    }
} 


//                    *Modulo de creacion de productos* 
function showGeneralList(){
    alert("Bienvenido al modulo de creacion de productos\nPor favor abra su consola para ver la lista de productos")
    console.log("******************Su lista de productos actual es: ******************")
    for (let i=0; i<productList.length;i++){
        console.log("-id: "+productList[i].id+"\n-nombre del producto: "+productList[i].name+"\n-tallas: "+productList[i].sizes+"\n-colores: "+
        productList[i].colors+"\n-precio: "+productList[i].price+" USD\n\n"); 
    }
}

function createNewProduct(){
    let id=document.getElementById('productId').value;
    let name= document.getElementById('productName').value;
    let sizes= document.getElementById('productSizes').value;
    let colors= document.getElementById('productColors').value;
    let price= document.getElementById('productPrice').value;
    productList.push(new Product(id,name,sizes,colors,price));
    console.log("******************Su nuevo producto creado es******************\n-id: "+productList[productList.length-1].id+"\n-nombre del producto: "+productList[productList.length-1].name+"\n-tallas: "+productList[productList.length-1].sizes+"\n-colores: "+
    productList[productList.length-1].colors+"\n-precio: "+productList[productList.length-1].price+" USD\n\n");
}

function ShowUpdatedList(){
    console.log("******************Su lista de productos actual ordenada por nombre es: ******************")
    
    productList.sort(function(a,b){
        if(a.name>b.name){
            return 1;
        }else if (a.name<b.name){
            return -1;
        }
    });

    for (let i=0; i<productList.length;i++){
        console.log("-id: "+productList[i].id+"\n-nombre del producto: "+productList[i].name+"\n-tallas: "+productList[i].sizes+"\n-colores: "+
        productList[i].colors+"\n-precio: "+productList[i].price+" USD\n\n");
    }
}
showGeneralList();

const BUTTON= document.getElementById("createProduct");
BUTTON.addEventListener('click',createNewProduct);

const BOTON2= document.getElementById("ShowUpdatedList");
BOTON2.addEventListener('click',ShowUpdatedList);