// Esse arquivo é para juntar todos os sagas dentrode um unico lugar.
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
