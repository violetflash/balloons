import { useState } from 'react';


const TitleState = () => {
    const [title, setTitle] = useState('Магазин упаковок для воздуха');

    return { title, setTitle };
};

export default TitleState;
