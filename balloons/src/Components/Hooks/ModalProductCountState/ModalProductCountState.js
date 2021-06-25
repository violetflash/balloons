import { useState } from 'react';

const ModalProductCountState = (openItem) => {
    const getCount = openItem.count ? openItem.count : 1;
    const [count, setCount] = useState(getCount);

    const onChange = e => {
        e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/^0/, 1);
        setCount(+e.target.value);
    }

    return { count, setCount, onChange };

};

export default ModalProductCountState;
