import { useEffect, useState } from 'react';

const UseFdb = database => {
    const [fdb, setFdb] = useState(null);


    useEffect(() => {
        const dbRef = database.ref('products');
        dbRef.on('value', snapshot => {
            setFdb(snapshot.val());
        });
    }, [database]);

    return fdb;

};

export default UseFdb;
