
// key, baslangıc -> useState
// setItem(key, string hale cevrilmiş value);
import { useState } from 'react';

//useLocalStorage("dark-mode",true);
// useState gibi calisan ancak verisini localStorage uzerinde tutan bir hook

export function useLocalStorage(key, initialValue) {
    const [data, setData] = useState(() => {

        //Javascript object notation -> {"key": value}
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
