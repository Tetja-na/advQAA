function checkOrder(available, ordered) {
  if (ordered === 0) {
    console.log("Your order is empty");
    return;
  } 
 if (ordered > available) {
    console.log("Your order is too large, we don't have enough goods");
    return;
  }
    console.log("Your order is accepted");
  }

checkOrder(100,0);// Your order is empty
checkOrder(100,150);// Your order is too large, we don’t have enough goods.
checkOrder(100,50);// Your order is accepted
    