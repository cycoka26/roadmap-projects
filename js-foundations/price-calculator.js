function calculateDiscount(price, discountPercent) {
    return price * discountPercent / 100;
}

function calculateTax(priceAfterDiscount, taxPercent) {
    return priceAfterDiscount * taxPercent / 100;
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
    const discount = calculateDiscount(price, discountPercent);
    const discountedPrice = price - discount;
    const tax = calculateTax(discountedPrice, taxPercent);

    return discountedPrice + tax;
}

function createPriceSummary(price, discountPercent, taxPercent) {
    const discount = calculateDiscount(price, discountPercent);
    const discountedPrice = price - discount;
    const tax = calculateTax(discountedPrice, taxPercent);
    const finalPrice = discountedPrice + tax;

    return {
        price: price,
        discount: discount,
        tax: tax,
        finalPrice: finalPrice
    };
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));