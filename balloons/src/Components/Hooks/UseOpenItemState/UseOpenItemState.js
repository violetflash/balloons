import { useState } from 'react';

const UseOpenItemState = () => {
    const [openItem, setOpenItem] = useState(null);

    return { openItem, setOpenItem };
};

export default UseOpenItemState;
