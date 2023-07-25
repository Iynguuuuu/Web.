const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){
    loadContent();
}

function loadContent(){
    //Remove music items from cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    
    });
}

//Product item change Event
let qtyElements=document.querySelectorAll('.cart-quantity');
qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
});

//product cart

let cartBtns=document.querySelectorAll('.add-cart');
cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
});

updateTotal();


//remove item
function removeItem(){
    if(confirm('Are You Sure to remove')){
        let title=this.parentElement.querySlector('.cart-sport-title').innerHTML;
        itemList=itemList.filter(el=el.title!=title);
        this.paranetElement.remove();
        loadContent();
    }
}

//change quantity
function changeQty(){
    if(isNaN(this.value)  || this.value<1){
        this.value=1;
    }
    loadContent();
}


let itemlist=[];

//Add cart
function addCart(){
    let food=this.paranetElement;
    let title=food.querySelector('.sport-title').innerHTML;
    let price=food.querySelector('.sport-price').innerHTML;
    let imgSrc=food.querySelector('.sport-img').src;

//console.log(title,price,imgSrc);
}

let newProduct={title,price,imgSrc}

//checkk prpduct already exist in cart
if(itemList.find((el)=>el.title==newProduct.title)){
    alert("Product Already added in Cart");
    return;
}else{
    itemlist.push(newproduct);
}

let newProductElement=createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElemnt;
let cartbasket=document.querySlector('.cart-contetnt');
 cartBasket.append(element);
loadContent();



function createProduct(title,price,imgSrc){

    return`
    <div class="cart-box">
    <img src="${imgSrc}"class="cart-img">
    <div class="detail-box">
        <div class="cart-sport-title">${title}</div>
        <div class="price-box">
            <div class="cart price"${price}</div>
             <div class="class-amt">${price}</div>
        </div>
         <input type="number" value="1" class="cart-quantity">
        </div>
        <ion-icon name="trash " class="cart-remove"><</ion-icon>
</div>
 `;

}
function updateTotal()

{ 
    const cartItems=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');

    let total=0;

    cartItems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty=product.querySelector('.cart-quantity').value;
        total+=(price*qty);
        product.querySelector('.cart-amt').innerText="Rs."+(price*qty);


        });

        totalValue.innerHTML='Rs.'+total;


        //Add Product count in cart icon

        const cartcount=document.querySelector('.cart-count');
        let count=itemlist.length;
        cartcount.innerHTML=count;


    if(count==0){
        cartcount.style.display='none';
    }else{
        cartcount.style.display='block';

    }

    }
