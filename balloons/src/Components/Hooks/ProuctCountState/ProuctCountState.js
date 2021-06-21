import { useState } from 'react';

const ProductCountState = () => {
    const [count, setCount] = useState(1);

    const onChange = e => {
        e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/^0/, 1);
        setCount(+e.target.value);
    }

    return { count, setCount, onChange };

};

export default ProductCountState;
