/* O * é o "generator". Ele pode ser comparado como um 'async'. Porém o generator é mais potente do que aync
Essa função terá a finalidade de acessar a API, buscar as informações detalhadas do produto e cadastrar no carrinho
Basicamente essa função irá interceptar a ACTION. Quando for adicionado um produto ao carrinho,
a função "addToCart" ouvirá a ACTION, buscará a API e depois chamará o Reducer e enviar as informações para dentro.
Basicamente esse meddleaware é um passo a mais entre a ACTION e o Reducer. */

/* O 'yield' é o como se fosse o 'await' do generator. Ou seja, tudo o que está depois do 
'yield' ele aguardará a execução da sua linha ou escopo para depois xontinuar o restante do codigo  */

/* O 'call' chama métodos assíncrono e que retorna promises no JS. */

// O put dispara uma ACTION do Redux;

// O 'select' acessa/buscar as informações de estado dentro do SAGA.;

import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
