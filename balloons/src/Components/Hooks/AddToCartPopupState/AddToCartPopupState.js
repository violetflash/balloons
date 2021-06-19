import { useState } from 'react';

const AddToCartPopupState = () => {
    const [addToCartPopup, setAddToCartPopup] = useState(null);

    return { addToCartPopup, setAddToCartPopup };
}

export default AddToCartPopupState;