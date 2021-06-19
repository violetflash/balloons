import { useState } from 'react';

const ActiveIndexState = () => {
    const [activeIndex, setActiveIndex] = useState(true);

    return { activeIndex, setActiveIndex };
}

export default ActiveIndexState;