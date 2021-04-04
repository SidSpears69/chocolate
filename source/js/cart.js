const basket = document.querySelector(".basket");
const basketTable = basket.querySelector(".basket__table");
const productsInBasket = basketTable .querySelectorAll(".table-products__body-row");
const basketPriceAll = basket.querySelector(".basket__price-all");
const productsDelete = basketTable .querySelectorAll(".table-products__delete");


const sumPriceProduct = (priceAllforAllProducts) => {
  const sum = Array.prototype.reduce.call(priceAllforAllProducts, (a, b)=> {
    return a + parseInt(b.textContent);
  }, 0)
  basketPriceAll.textContent = sum;
}
productsInBasket.forEach(product => {
  const priceProduct = product.querySelector(".table-products__price-product").textContent;
  const priceAll = product.querySelector(".table-products__price-all");
  new CustomNumber(product.querySelector(".table-products__quantity"), (productsQuantity) => {
    const priceAllforAllProducts = basketTable.querySelectorAll(".table-products__price-all");
    priceAll.textContent = parseInt(priceProduct) * productsQuantity;
    sumPriceProduct(priceAllforAllProducts);
  });
})
productsDelete.forEach(item => {
  item.addEventListener("click", () => {
    const product = item.closest(".table-products__body-row");
    product.parentNode.removeChild(product);
    const newAllforAllProducts = basketTable.querySelectorAll(".table-products__price-all");
    sumPriceProduct(newAllforAllProducts);
    if(!newAllforAllProducts.length) {
      basketTable.parentNode.removeChild(basketTable);
      basket.textContent = "Нет товаров";
    }
  })
})
