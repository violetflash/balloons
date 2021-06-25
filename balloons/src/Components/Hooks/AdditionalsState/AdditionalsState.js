import { useState } from 'react';

const getAdditions = (additionalItems) => additionalItems.map(item => ({
    name: item,
    checked: false,
}))

const AdditionalsState = openItem => {

    const setAdditions = openItem.adds ? openItem.adds :
        openItem.additional ? getAdditions(openItem.additional) :
            [];

    const [additionalItems, setAdditionalItems] = useState(setAdditions);

    const checkAdditions = index => {
        setAdditionalItems(additionalItems.map((item, idx) => {

            if (idx === index) {
                item.checked = !item.checked;
            }

            return item;
        }))

    }

    return { additionalItems, checkAdditions };

};

export default AdditionalsState;
