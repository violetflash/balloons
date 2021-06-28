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

const projection = dataRules => {
    const keys = Object.keys(dataRules);
    return obj => keys.reduce((newObject, key) => {
        newObject[key] = dataRules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null)
        return newObject;
    }, {});
};



export {
    capitalizer,
    rubCurrencyFormat,
    calcProductTotal,
    getTotalQuantity,
    getTotalCartSum,
    calcRawProductTotal,
    projection
};

