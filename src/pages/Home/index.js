import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_detalhe1.jpg?ts=1584659244?ims=280x280"
          alt="Tênis"
        />

        <strong>Tênis show! Titulo muito grande que quebra varias vezes</strong>
        <span>R$140,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_detalhe1.jpg?ts=1584659244?ims=280x280"
          alt="Tênis"
        />

        <strong>Tênis show!</strong>
        <span>R$140,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_detalhe1.jpg?ts=1584659244?ims=280x280"
          alt="Tênis"
        />

        <strong>Tênis show!</strong>
        <span>R$140,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_detalhe1.jpg?ts=1584659244?ims=280x280"
          alt="Tênis"
        />

        <strong>Tênis show!</strong>
        <span>R$140,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_detalhe1.jpg?ts=1584659244?ims=280x280"
          alt="Tênis"
        />

        <strong>Tênis show!</strong>
        <span>R$140,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_detalhe1.jpg?ts=1584659244?ims=280x280"
          alt="Tênis"
        />

        <strong>Tênis show!</strong>
        <span>R$140,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
