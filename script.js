const shopName = "Astral Express";
const currentYear = 2026;
const ratings = [4.8, 5.0, 4.2, 4.6];
const totalItems = ratings.length;
const sum = ratings.reduce((acc, curr) => acc + curr, 0);
const averageRating = (sum / totalItems).toFixed(1);
const copyRightEl = document.getElementById("copyRight");
const stockCount = 1000;
const orderTotal = 10;
const isMember = true;
const isOpen = true;
const shopMessage = isOpen ? "Open today" : "Closed today";

if (copyRightEl) {
  copyRightEl.textContent = `© ${currentYear} ${shopName}`;
}

let visitCount = 0;
let stockMessage = "";

if(stockCount > 10) {
    stockMessage = "In Stock";
} else if(stockCount >=1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else {
    stockMessage = "Sold out";
}

const stockEl = document.getElementById("stockStatus");
if (stockEl) {
  stockEl.textContent = stockMessage;
}
const shopEl = document.getElementById("shop-status");
if (shopEl) {
  shopEl.textContent = shopMessage;
}

const deliveryFee = (orderTotal >= 500 && isMember === true) ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const orderEl = document.getElementById("order-total");
if (orderEl) {
  orderEl.textContent = `₱${finalTotal} (Delivery: ₱${deliveryFee})`;
}

document.getElementById("shopName").textContent = shopName;
document.getElementById("copyRight").textContent = `© ${currentYear} ${shopName}`;
document.getElementById("total-items").textContent = totalItems;
document.getElementById("avg-rating").textContent = averageRating;
document.getElementById("stock-status").textContent = "In Stock";
document.getElementById("order-total").textContent = "P0";
document.getElementById("shop-status").textContent = "Open";

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Visit Count:", visitCount);
console.log("Total Items Calculated:", totalItems);
console.log("Average Rating Calculated:", averageRating);
console.log("Stock Status:", stockMessage);
console.log("Order Total:", orderTotal);
console.log("Shop Status:", shopMessage);
