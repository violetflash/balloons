import { useState } from 'react';

const ProductSwitchState = () => {
    const [switcherIndex, setSwitcherIndex] = useState(0);
    return { switcherIndex, setSwitcherIndex };
};

export default ProductSwitchState;
