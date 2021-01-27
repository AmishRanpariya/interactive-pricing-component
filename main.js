let range = document.getElementById("range");
let count = document.querySelector(".pageview-count");
let price = document.querySelector(".price");
let plan=document.querySelector('#plan-type');

let discount=0;

updateAll();


plan.oninput=function(){
  if(this.checked){
    discount=0.25;
  }else{
    discount=0;
  }
  updateAll();
  
}

range.oninput = function() {
  updateAll();
};


function updateAll(){
  
  // - 10K pageviews / $8 per month
  // - 50K pageviews / $12 per month
  // - 100K pageviews / $16 per month
  // - 500k pageviews / $24 per month
  // - 1M pageviews / $36 per month

  if (range.value < 50000) {
    count.innerHTML = formatCount(range.value);
    price.textContent=`$${calculatePrice(8)}.00`;
  } else if (range.value < 100000) {
    count.innerHTML = formatCount(range.value);
    price.textContent=`$${calculatePrice(12)}.00`;
    
  } else if (range.value < 500000) {
    count.innerHTML = formatCount(range.value);
    price.textContent=`$${calculatePrice(16)}.00`;
    
  } else if (range.value < 1000000 - 10000) {
    count.innerHTML = formatCount(range.value);
    price.textContent=`$${calculatePrice(24)}.00`;
    
  } else {
    count.innerHTML = formatCount(range.value);
    price.textContent=`$${calculatePrice(36)}.00`;
  }
  
  var value = (range.value - range.min) / (range.max - range.min) * 100
  range.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)';
}

function calculatePrice(price) {
  return price * (1 - discount);
} 

function formatCount(num) {
  num = Math.floor(num / 1000);
  if (num < 1000) {
    return `${num}K`;
  } else if (num < 1000000) {
    return `${num/1000}M`
  }
}