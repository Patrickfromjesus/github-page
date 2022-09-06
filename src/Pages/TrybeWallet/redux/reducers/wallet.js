export const IS_FETCHING = 'IS_FETCHING';
export const CURRENCY_RESPONSE = 'CURRENCY_RESPONSE';
export const GET_ERROR = 'GET_ERROR';
export const EXPENSES_RESPONSE = 'EXPENSES_RESPONSE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const MAKE_CHANGES = 'MAKE_CHANGES';

const INITIAL_STATE = {
  initialState: {
    id: '',
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  },
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  loading: false,
  edit: false,
  indexChange: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_FETCHING:
    return {
      ...state,
      loading: true,
    };
  case CURRENCY_RESPONSE:
    return {
      ...state,
      loading: false,
      currencies: Object.keys(action.currencies).filter((e) => e !== 'USDT'),
    };
  case GET_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case EXPENSES_RESPONSE:
    return {
      ...state,
      idToEdit: state.idToEdit + 1,
      loading: false,
      expenses: [...state.expenses, action.expenses],
    };
  case REMOVE_ITEM:
    return {
      ...state,
      idToEdit: state.idToEdit - 1,
      loading: false,
      expenses: [...state.expenses].filter((elem) => elem.id !== action.item),
    };
  case EDIT_ITEM:
    return {
      ...state,
      edit: true,
      indexChange: action.index,
      initialState: { ...action.infos },
    };
  case MAKE_CHANGES:
    return {
      ...state,
      edit: false,
      expenses: [...state.expenses].map((e, i) => (state.indexChange === i
        ? { ...e, ...action.infos } : e)),
    };
  default:
    return state;
  }
};

export default wallet;
