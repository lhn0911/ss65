const initialState = localStorage.getItem('theme') || 'light';

const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

const ReducerTheme = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newTheme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    default:
      return state;
  }
};

export default ReducerTheme;
