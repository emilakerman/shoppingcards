
const addToCartButtons = document.getElementsByTagName('button');
const payButton = document.getElementById('buttonPay');
const clearCartButton = document.getElementById('clearCartButton');
const totalSumCartText = document.getElementById('totalSumCart');
const element = document.getElementById('item1');
const shoppingCart = []; 
let totalSum = 0;

payButton.addEventListener('click', function() {
    if (totalSum != 0) {
        element.innerHTML = 'Paid: ' + totalSum +' SEK!';
        totalSumCartText.innerHTML = "Cart";
        setTimeout(function(){
            element.innerHTML = "";
            totalSum = 0;
            shoppingCart.length = 0;
        }, 2000);
    }
});
clearCartButton.addEventListener('click', function() {
    element.innerHTML = "";
    totalSumCartText.innerHTML = "Cart";
    totalSum = 0;
    shoppingCart.length = 0;
});

const buttonPressed = e => {
    let nameOfShoe = e.target.parentElement.parentElement.querySelector('h3').closest('h3').innerText;

    shoppingCart.push(nameOfShoe);

    let amount = e.target.parentElement.querySelector('h3').closest('h3').innerText.replace('SEK','');
    totalSum += parseInt(amount);


    let duplicate = element.innerHTML.includes(nameOfShoe);
    let count = (getOccurrence(shoppingCart, nameOfShoe));

    if (!duplicate) {
        totalSumCartText.innerText = 'Cart: ' + parseInt(totalSum) + ' SEK';
        element.innerHTML += "<br />" + ''+nameOfShoe+' x '+count+'';
    }
    if (duplicate) {
        totalSumCartText.innerText = 'Cart: ' + parseInt(totalSum) + ' SEK';
        //let result = element.innerHTML.replace(''+nameOfShoe+' x '+count+'', '');
        //element.innerHTML = result;
        //element.innerHTML = ''+nameOfShoe+' x '+count+'';
        element.innerHTML = ''+nameOfShoe+' x '+count+'';
    }
  }
  function getOccurrence(array, value) {
    let count = 0;
    shoppingCart.forEach((v) => (v === value && count++));
    return count;
}
for (let button of addToCartButtons) {
    button.addEventListener('click', buttonPressed);
}

