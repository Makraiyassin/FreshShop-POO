

let mycart = {
    total:0,
    product:[]
};
let i = 0;
let arrayPrice =[]
let sum;

let badge=0;

document.querySelectorAll(".addtocart").forEach(element=>{

    element.addEventListener("click", function() {
        let productname= element.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.textContent;
        let productimg= element.parentNode.parentNode.parentNode.firstElementChild.children[1].attributes.src.value;
        let productprice=Number(element.parentNode.parentNode.parentNode.lastElementChild.lastElementChild.textContent.replace('$', ''));

        let result = mycart.product.find( element => element.name == productname)
        if(result){
            //====================================================================================================
            //MYCART (SLIDE MENU)

            document.querySelector(`#quantity${productname}`).textContent++

            let quantity = Number(document.querySelector(`#quantity${productname}`).textContent);
           
            document.querySelector(`#price${productname}`).textContent= Math.round((quantity*result.price)*100)/100 ;

            result.quantity = quantity

            arrayPrice.push(result.price)

            sum = arrayPrice.reduce((a, b) => a + b, 0)
            
            document.getElementById("total").innerHTML= `<strong>Total</strong>: ${(Math.round(sum*100)/100)}$`;
            mycart.total=(Math.round(sum*100)/100)

            badge++
            document.querySelector('#badge').textContent=badge
            //======================================================================================================
            //CART (PAGE)


        }else{
            //====================================================================================================
            //MYCART (SLIDE MENU)
            document.querySelector("#mycart").insertAdjacentHTML("afterbegin",
            `
            <li class="myitems">
                <a href="#" class="photo"><img src="${productimg}" class="cart-thumb" alt="" /></a>
                <h6><a href="#">${productname}</a></h6>
                <p><span id="quantity${productname}">${1}</span>x - <span id="price${productname}">${productprice}</span>$</p>
            </li>    
            `)

             mycart.product.push({name:productname,img:productimg,price:productprice, quantity:1});
    
            arrayPrice.push(Number(mycart.product[i].price))
    
            i++ 
    
            sum =arrayPrice.reduce((a, b) => a + b, 0)
            
            document.getElementById("total").innerHTML= `<strong>Total</strong>: ${(Math.round(sum*100)/100)}$`;
            mycart.total=(Math.round(sum*100)/100)

            badge++
            document.querySelector('#badge').textContent=badge
            //======================================================================================================
            //CART (PAGE)

            // document.querySelector("#mybasket").insertAdjacentHTML("afterbegin",

            // `<tr id="mybasket${productname}">
            //     <td id="imageBasket${productname}" class="thumbnail-img">
            //             <img class="img-fluid" src="${productimg}" alt="" />
            //     </td>
            //     <td id="nameBasket${productname}" class="name-pr">
            //         ${productname}
            //     </td>
            //     <td class="price-pr">
            //         <p>$ <span id="priceBasket${productname}">${productprice}</span></p>
            //     </td>
            //     <td id="quantityBasket${productname}" class="quantity-box"><input type="number" size="4" value="1" min="0" step="1" class="c-input-text qty text"></td>
            //     <td id="totalBasket${productname}" class="total-pr">
            //         <p>${productprice}</p>
            //     </td>
            //     <td class="remove-pr">
            //         <a id="removeBasket${productname}">
            //             <i class="fas fa-times"></i>
            //         </a>
            //     </td>
            // </tr>`)

        }
    })    
})
document.getElementById("order").addEventListener("click", function(){
//let url = http://localhost:3000
    fetch('/mycart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mycart)
    })

    //REINITIALISATION DU PANIER=================================================

    document.querySelectorAll(".myitems").forEach(element=>{
        element.remove()
    })
    document.getElementById("total").innerHTML= `<strong>Total</strong>: ${0}$`;
    mycart= {
        total:0,
        product:[]
    };
    i = 0;
    arrayPrice =[];
    //===========================================================================
})
