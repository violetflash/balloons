import { useState } from 'react';

const UseOrderConfirm = () => {
    const [openOrderConfirm, setOpenOrderConfirm] = useState(null);

    return { openOrderConfirm, setOpenOrderConfirm };

};

export default UseOrderConfirm;
