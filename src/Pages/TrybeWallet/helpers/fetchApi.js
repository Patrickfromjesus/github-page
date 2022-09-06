const url = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrency = () => (fetch(url)
  .then((response) => response.json())
);

export default fetchCurrency;
