import { useState } from 'react';

const ActiveIndexState = () => {
    const [activeIndex, setActiveIndex] = useState('mainPage');

    return { activeIndex, setActiveIndex };
}

export default ActiveIndexState;