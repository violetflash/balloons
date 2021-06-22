import { useState } from 'react';

const getAdditions = (additionalItems) => additionalItems && additionalItems.map(item => ({
    name: item,
    checked: false,
}))

const AdditionalsState = openItem => {
    const [additionalItems, setAdditionalItems] = useState(getAdditions(openItem.additional));

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