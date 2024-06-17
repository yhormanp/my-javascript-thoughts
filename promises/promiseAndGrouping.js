const TRANSACTIONS_URL =
  'https://my-json-server.typicode.com/yhormanp/dbdemo/transactions';

function getData() {
  return fetch(TRANSACTIONS_URL).then((res) => res.json());
}

getData().then((res) => console.log('test', res));
