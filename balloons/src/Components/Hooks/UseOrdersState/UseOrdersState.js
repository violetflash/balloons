import { useState } from 'react';

const UseOrdersState = () => {
    const [orders, setOrders] = useState([]);

    return { orders, setOrders };

};

export default UseOrdersState;
