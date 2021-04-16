/* O * é o "generator". Ele pode ser comparado como um 'async'. Porém o generator é mais potente do que aync
Essa função terá a finalidade de acessar a API, buscar as informações detalhadas do produto e cadastrar no carrinho
Basicamente essa função irá interceptar a ACTION. Quando for adicionado um produto ao carrinho,
a função "addToCart" ouvirá a ACTION, buscará a API e depois chamará o Reducer e enviar as informações para dentro.
Basicamente esse meddleaware é um passo a mais entre a ACTION e o Reducer. */

/* O 'yield' é o como se fosse o 'await' do generator. Ou seja, tudo o que está depois do 
'yield' ele aguardará a execução da sua linha ou escopo para depois xontinuar o restante do codigo  */
import { call } from 'redux-saga/effects';

import api from '../../../services/api';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
}
