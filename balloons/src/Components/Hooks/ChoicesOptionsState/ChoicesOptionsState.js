import { useState } from 'react';

const ChoicesOptionsState = (openItem) => {

    const setDefaultState = openItem.choice ? openItem.choice :
        openItem.choices ? openItem.choices[0] :
            [];

    const [choice, setChoice] = useState(setDefaultState);

    const changeChoice = e => {
        setChoice({
            option: e.target.value,
            price: e.target.options[e.target.selectedIndex].dataset.price
        });
    }

    return { choice, changeChoice };

};

export default ChoicesOptionsState;
