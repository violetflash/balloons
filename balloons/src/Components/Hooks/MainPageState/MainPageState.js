import { useState } from 'react';

const MainPageState = () => {
    const [mainPageOpen, setMainPageOpen] = useState(true);

    return { mainPageOpen, setMainPageOpen };
}

export default MainPageState;