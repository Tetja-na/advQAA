function checkOrder(available, ordered) {
  if (ordered === 0) {
    console.log("Your order is empty");
    return;
  } else if (ordered > available) {
    console.log("Your order is too large, we don't have enough goods");
    return;
  } else {
    console.log("Your order is accepted");
    return;
  }
}

checkOrder(100, 0);   // Your order is empty
checkOrder(100, 150); // Your order is too large, we don’t have enough goods.
checkOrder(100, 50);  // Your order is accepted