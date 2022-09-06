import fetchCurrency from '../../helpers/fetchApi';
import { IS_LOGGED } from '../reducers/user';
import {
  IS_FETCHING,
  CURRENCY_RESPONSE,
  EXPENSES_RESPONSE,
  REMOVE_ITEM,
  EDIT_ITEM,
  MAKE_CHANGES,
} from '../reducers/wallet';

export const getUser = (email) => ({
  type: IS_LOGGED,
  email,
});

const getLoad = () => ({
  type: IS_FETCHING,
});

const getCurrency = (currency) => ({
  type: CURRENCY_RESPONSE,
  currencies: currency,
});

const getExpenses = (data, infos) => {
  delete data.USDT;
  return {
    type: EXPENSES_RESPONSE,
    expenses: {
      ...infos,
      exchangeRates: data,
    },
  };
};

export const fetchApiCoin = () => (
  (dispatch) => {
    dispatch(getLoad());
    return fetchCurrency()
      .then((data) => dispatch(getCurrency(data)));
  }
);

export const fetchApiExpenses = (infos) => (
  (dispatch) => {
    dispatch(getLoad());
    return fetchCurrency()
      .then((data) => dispatch(getExpenses(data, infos)));
  }
);

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
});

export const editItem = (index, infos) => ({
  type: EDIT_ITEM,
  index,
  infos,
});

export const makeChanges = (infos) => ({
  type: MAKE_CHANGES,
  infos,
});
