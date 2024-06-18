const initialThemeState = {
    isDarkMode: false,
};

const TOGGLE_THEME = 'TOGGLE_THEME';
const SET_THEME = 'SET_THEME';

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
});

export const setTheme = (isDarkMode: boolean) => ({
    type: SET_THEME,
    payload: isDarkMode,
});

const themeReducer = (state = initialThemeState, action: any) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, isDarkMode: !state.isDarkMode };
        case SET_THEME:
            return { ...state, isDarkMode: action.payload };
        default:
            return state;
    }
};

export default themeReducer;
