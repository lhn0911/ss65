
const initialState = 'Rikkei Academy';

const CHANGE_COMPANY = 'CHANGE_COMPANY';

export const changeCompany = () => ({
  type: CHANGE_COMPANY,
});

const ReducerCompany = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return 'RikkeiSoft';
    default:
      return state;
  }
};

export default ReducerCompany;
