import { useState } from 'react';

const OrderItemsCounterState = () => {
    const [orderItemsCounter, setOrderItemsCounter] = useState(null);

    return { orderItemsCounter, setOrderItemsCounter};
}

export default OrderItemsCounterState;