const capitalizer = word => word[0].toUpperCase() + word.slice(1);

const rubCurrencyFormat = price => {
    return price.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    });
};

const calcProductTotal = order => {

    if (order.adds) {
        const countAdds = order.adds.filter(item => item.checked).length;
        const price = Math.ceil(order.price * 0.1);
        const TotalAddsSum = price * countAdds;

        return (order.price + TotalAddsSum) * order.count ;
    }

    return order.price * order.count;
}

const calcRawProductTotal = order => {
    return order.price * order.count;
}

const getTotalQuantity = arr => {
    return arr.reduce((accum, curr) => accum + curr.count, 0);
};

const getTotalCartSum = arr => {
    return arr.reduce((accum, curr) => accum + calcProductTotal(curr), 0);
}

export {
    capitalizer,
    rubCurrencyFormat,
    calcProductTotal,
    getTotalQuantity,
    getTotalCartSum,
    calcRawProductTotal
};

