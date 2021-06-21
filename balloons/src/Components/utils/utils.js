const capitalizer = word => word[0].toUpperCase() + word.slice(1);

const rubCurrencyPrice = price => {
    return price.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    });
};

export {
    capitalizer,
    rubCurrencyPrice,
};

