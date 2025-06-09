/**
 * Available theme options
 */
export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

/**
 * Applies theme class to the document body
 * @param {string} theme - The theme to apply ('light' or 'dark')
 */
export const applyTheme = (theme) => {
    try {
        const body = document.body;
        const root = document.documentElement;

        // Remove existing theme classes from both body and root
        body.classList.remove('light-theme', 'dark-theme');
        root.classList.remove('light-theme', 'dark-theme');

        // Add current theme class to both body and root
        body.classList.add(`${theme}-theme`);
        root.classList.add(`${theme}-theme`);

        // Set data attribute for CSS custom properties
        root.setAttribute('data-theme', theme);

        // Store in localStorage
        localStorage.setItem('theme', theme);

        console.log(`Theme applied: ${theme}`);
    } catch (error) {
        console.error('Error applying theme:', error);
    }
};

/**
 * Detects user's preferred color scheme
 * @returns {string} - 'dark' if preferred, otherwise 'light'
 */
export const detectPreferredTheme = () => {
    try {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return THEMES.DARK;
        }
        return THEMES.LIGHT;
    } catch (error) {
        console.error('Error detecting preferred theme:', error);
        return THEMES.LIGHT; // Fallback to light theme
    }
};

/**
 * Gets the saved theme from localStorage or falls back to system preference
 * @returns {string} - The theme to use ('dark' or 'light')
 */
export const getSavedTheme = () => {
    try {
        const savedTheme = localStorage.getItem('theme');
        
        // Validate saved theme
        if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
            return savedTheme;
        }
        
        // Fallback to system preference
        return detectPreferredTheme();
    } catch (error) {
        console.error('Error getting saved theme:', error);
        return THEMES.LIGHT; // Fallback to light theme
    }
};

/**
 * Validates if a theme is valid
 * @param {string} theme - Theme to validate
 * @returns {boolean} - True if valid theme
 */
export const isValidTheme = (theme) => {
    return Object.values(THEMES).includes(theme);
};

/**
 * Gets the opposite theme
 * @param {string} currentTheme - Current theme
 * @returns {string} - Opposite theme
 */
export const getOppositeTheme = (currentTheme) => {
    return currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
};