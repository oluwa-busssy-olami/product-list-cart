const cartBtns = document.querySelectorAll(".cart-btn");
const clickedItems = document.querySelectorAll(".clicked-cart-btn");
const removeItems = document.querySelectorAll(".remove-item");
const addItems = document.querySelectorAll(".add-item");
const crementItems = document.querySelectorAll(".crement-item");
const cardImgs = document.querySelectorAll(".desert-card-img");

for (let i = 0; i < cartBtns.length; i++) {
  const cartBtn = cartBtns[i];
  const crementButton = clickedItems[i];
  const cardImgDesert = cardImgs[i];
  const removeItem = removeItems[i];
  const addItem = addItems[i];
  const crementItem = crementItems[i];

  let count = 0;

  // Display initial count
  crementItem.innerText = count;

  cartBtn.addEventListener("click", (e) => {
    cartBtn.style.display = "none";
    crementButton.style.display = "flex";
    cardImgDesert.style.border = "2px solid hsl(14, 86%, 42%)";
  });

  addItem.addEventListener("click", (e) => {
    count++;
    crementItem.innerText = count;
  });

  removeItem.addEventListener("click", (e) => {
    if (count > 0) {
      count--;
      crementItem.innerText = count;
    }
    // Hide crement button and reset styles if count is zero
    if (count === 0) {
      cartBtn.style.display = "block";
      crementButton.style.display = "none";
      cardImgDesert.style.border = "none";
    }
  });
}
