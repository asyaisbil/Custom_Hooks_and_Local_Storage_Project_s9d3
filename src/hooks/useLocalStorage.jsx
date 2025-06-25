import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [data, setData] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem(key));

        if (storedData) {
            return storedData;
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const updateStorageData = (value) => {
        setData(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [data, updateStorageData];
}
