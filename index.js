console.log(document);

var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
var total = document.getElementById('total');
var like = document.querySelectorAll('.like')
var sum = document.getElementById('total');
var prices = document.querySelectorAll('.price');

console.log(plus);
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click' ,inc)
    
}
for (let i = 0; i < minus.length; i++) {
     minus[i].addEventListener('click' , dec );
    
}
for (let i = 0; i<like.length; i++) {
    like[i].addEventListener('click', changecolor);
}

function inc(event){
    var cible = event.target;
    var parent = cible.parentElement;
    var tr = parent.parentElement.parentElement;
    var unitPrice = Number(tr.querySelector('.unitPrice').innerHTML);
    console.log(unitPrice);
    console.log(tr);
   var p=  parent.querySelector('p');
   var quantity = Number(p.innerHTML);
   quantity++;
   console.log(quantity);
   p.innerHTML = quantity;
   var total = quantity * unitPrice ;
   console.log(total);
   var price = tr.querySelector('.price');
   price.innerHTML = total ;
   var somme = 0 ;
   price.innerHTML = total ;
   for (let i = 0 ; i< prices.length ; i++) {
       somme += Number(prices[i].innerHTML)
   }
   console.log(somme);
   sum.innerHTML = somme;
   }

function dec(event){
    var cible = event.target;
    var parent = cible.parentElement;
    var tr = parent.parentElement.parentElement;
    var unitPrice = Number(tr.querySelector('.unitPrice').innerHTML);
    console.log(unitPrice);
    console.log(tr);
   var p=  parent.querySelector('p');
   var quantity = Number(p.innerHTML);
   if(quantity>0){
    quantity--;
   }
  
   console.log(quantity);
   p.innerHTML = quantity;
   var total = quantity * unitPrice ;
   console.log(total);
   var price = tr.querySelector('.price');
   price.innerHTML = total ;
   var somme = 0 ;
   price.innerHTML = total ;
   for (let i = 0 ; i< prices.length ; i++) {
       somme += Number(prices[i].innerHTML)
   }
   console.log(somme);
   sum.innerHTML = somme;
}
function changecolor(event){
    var cible = event.target;
    console.log(cible);
    if (cible.style.color != "red"){
        cible.style.color = "red"
    }
     else if (cible.style.color == "red"){
         cible.style.color = "grey"
     }

    }




