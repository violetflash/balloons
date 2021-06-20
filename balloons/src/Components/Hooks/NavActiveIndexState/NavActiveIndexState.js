import { useState } from 'react';

const NavActiveIndexState = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return { activeIndex, setActiveIndex };
}

export default NavActiveIndexState;