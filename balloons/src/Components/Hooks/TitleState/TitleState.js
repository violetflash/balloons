import { useEffect } from 'react';


const TitleState = openItem => {
    useEffect(() => {
        document.title = openItem ? openItem.name : 'Сплошное надувательство';
    }, [openItem])
};

export default TitleState;
