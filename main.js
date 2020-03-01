// increment or decrement button select
const incrementMobilePrize = document.getElementById("incrementMobilePrize");
const decrementMobilePrize = document.getElementById("decrementMobilePrize");
const incrementMobileCoverPrize = document.getElementById(
  "incrementMobileCoverPrize"
);
const decrementMobileCoverPrize = document.getElementById(
  "decrementMobileCoverPrize"
);
// mobile count value select
const quantityMobile = document.getElementById("mobileCountvalue");
const mobilePrizeValue = document.getElementById("mobilePrizeValue");
const quantityMobileCover = document.getElementById("CoverCountvalue");
const CoverPrizeValue = document.getElementById("CoverPrizeValue");
// total count select
const subtotal = document.getElementById("subtotal");
const tex = document.getElementById("tex");
const total = document.getElementById("total");
const checkOut = document.getElementById("checkOut");

// incrementMobilePrize function
incrementMobilePrize.addEventListener("click", () => {
  const currentQuantityMobile = ++quantityMobile.value;
  mobile(currentQuantityMobile);
});
// decrementMobilePrize function
decrementMobilePrize.addEventListener("click", () => {
  const currentQuantityMobile = --quantityMobile.value;
  mobile(currentQuantityMobile);
});

// incrementMobileCoverPrize function
incrementMobileCoverPrize.addEventListener("click", () => {
  const currentQuantityMobileCover = ++quantityMobileCover.value;
  cover(currentQuantityMobileCover);
});

// decrementMobileCoverPrize function
decrementMobileCoverPrize.addEventListener("click", () => {
  const currentQuantityMobileCover = --quantityMobileCover.value;
  cover(currentQuantityMobileCover);
});

function mobile(currentQuantityMobile) {
  // const currentQuantityMobile = --quantityMobile.value;
  const changePrize = 1219 * currentQuantityMobile;
  mobilePrizeValue.innerHTML = changePrize;
  totalPrize();
}

function cover(currentQuantityMobileCover) {
  const changePrize = 59 * currentQuantityMobileCover;
  CoverPrizeValue.innerHTML = changePrize;
  totalPrize();
}

// total prize function
function totalPrize() {
  const totalMobilePrize = changeStringToNumber(mobilePrizeValue);
  const totalCoverPrizeValue = changeStringToNumber(CoverPrizeValue);
  const totalPrize = totalMobilePrize + totalCoverPrizeValue;
  subtotal.innerHTML = totalPrize;
  const totalTex = (tex.innerHTML = (totalPrize / 100) * 5);
  total.innerHTML = totalPrize + totalTex;
}
totalPrize();

// order button click
checkOut.addEventListener("click", () => {
  alert("Order - Successfully");
});

// string to number
function changeStringToNumber(id) {
  const value = document.getElementById(id);
  const valueNumber = parseFloat(id.innerText);
  return valueNumber;
}
