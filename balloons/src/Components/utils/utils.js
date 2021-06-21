const capitalizer = word => word[0].toUpperCase() + word.slice(1);

const rubCurrencyPrice = price => {
    return price.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    });
};

const calcProductTotal = order => order.price * order.count;

const getTotalQuantity = arr => {
    return arr.reduce((accum, curr) => accum + curr.count, 0);
};

const getTotalCartSum = arr => {
    return arr.reduce((accum, curr) => accum + calcProductTotal(curr), 0);
}

export {
    capitalizer,
    rubCurrencyPrice,
    calcProductTotal,
    getTotalQuantity,
    getTotalCartSum
};

