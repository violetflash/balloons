import { useEffect, useState } from 'react';

const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const db = await fetch('./db/db.json');
                const res = await db.json();
                setResponse(res);
            } catch(err) {
                setError(err);
            }
        }
        fetchData();
    }, []);

    return { response, error };
};

export default useFetch;
