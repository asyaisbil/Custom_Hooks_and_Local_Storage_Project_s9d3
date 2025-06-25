import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);

    return [darkMode, setDarkMode];
}
