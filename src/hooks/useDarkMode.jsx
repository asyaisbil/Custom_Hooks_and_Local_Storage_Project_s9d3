import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage('geceModu', initialValue);

    return [darkMode, setDarkMode];
}
