const shopName = "Astral Express";
const currentYear = 2026;
const ratings = [4.8, 5.0, 4.2, 4.6];
const totalItems = ratings.length;
const sum = ratings.reduce((acc, curr) => acc + curr, 0);
const averageRating = (sum / totalItems).toFixed(1);
const copyRightEl = document.getElementById("copyRight");

if (copyRightEl) {
  copyRightEl.textContent = `© ${currentYear} ${shopName}`;
}

let visitCount = 0;

document.getElementById("shopName").textContent = shopName;
document.getElementById("copyRight").textContent = `© ${currentYear} ${shopName}`;
document.getElementById("total-items").textContent = totalItems;
document.getElementById("avg-rating").textContent = averageRating;

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Visit Count:", visitCount);
console.log("Total Items Calculated:", totalItems);
console.log("Average Rating Calculated:", averageRating);
