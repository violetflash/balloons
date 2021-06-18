import { useState } from 'react';

const UseOpenOrderState = () => {
    const [openOrder, setOpenOrder] = useState(null);

    return { openOrder, setOpenOrder };

};

export default UseOpenOrderState;
