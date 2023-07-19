# Hamburgueria Kenzie - Sistema de Pedidos Online

Este projeto foi desenvolvido durante o programa de estudos da Kenzie Academy Brasil. Foi criada uma aplicação Front-End em React + TypeScript, de pedidos online para uma hamburgueria.

## Descrição

Kenzie Burger é uma hamburgueria online, que exibe uma variadades de produtos para escolher. Os usuários podem acessar uma página responsiva, fazer registro, fazer login, pesquisar por termos específicos, adicionar e excluir itens ao carrinho de compras, além de ver o total da compra.

## Funcionalidade

- **Login e Cadastro de Usuário:** Os usuários devem conseguir se cadastrar e fazer login na aplicação.

- **Zod:** Utilizado Zod em todos os formulários da aplicação, com as seguintes validações:

**Campos obrigatórios**;

**Requisitos de senha:**
Mínimo de 7 caracteres;
Pelo menos 1 caractere especial;
Pelo menos 1 número;
Pelo menos 1 letra minúscula;
Pelo menos 1 letra maiúscula.

- **React Router Dom:** Utilizado o React Router Dom para criar as rotas da aplicação.

- **Autologin - Proteção de Rotas:** Autologin implementado no contexto, garantindo que os usuários não logados não possam acessar o painel da aplicação.

- **Lista de Produtos:** Exibe a lista de produtos obtidos da API assim que o componente for montado.

- **Carrinho de compras:** Permite adicionar e remover produtos, atualizando automaticamente o valor total e a quantidade de itens no carrinho.

- **Barra de pesquisa:** Permite buscar produtos de acordo com um termo digitado.

## API

Foi utilizada a seguinte API para este projeto:
**Hamburgueria Kenzie V2 API**

URL base: https://hamburgueria-kenzie-v2.herokuapp.com

## Tecnologias Utilizadas

Aplicação feita em _Typescript + React_. Algumas bibliotecas que foram utilizadas: _React-Router-Dom_, _Styled-Components_, _React-Hook-Form_, _Zod_, _Axios_ e _react-toastify_.

## Lógica de Programação

A lógica de programação foi aplicada para manipular os elementos da página, permitindo que os usuários realizem buscas por palavras-chave, filtrem os produtos por categoria, adicionem itens ao carrinho de compras, removam produtos já adicionados e atualizem tanto a quantidade quanto o valor total presente no carrinho.

## Link

[Kenzie Burger](https://hamburgueria-v2-stafski-stafski.vercel.app/)

## Author

[Leonardo Stafski](https://github.com/stafski)

# Kenzie Burger - Online Ordering System

This project was developed during the Kenzie Academy Brasil study program. A Front-End application in React + TypeScript was created for online orders in a hamburger restaurant.

## Description

Kenzie Burger is an online hamburger restaurant that displays a variety of products to choose from. Users can access a responsive page, register, login, search for specific terms, add and remove items from the shopping cart, and view the total purchase.

## Features

- **Login and User Registration:** Users can register and log in to the application.

- **Zod:** Zod was used in all application forms with the following validations:

Mandatory fields;

Password requirements:
Minimum of 7 characters;
At least 1 special character;
At least 1 number;
At least 1 lowercase letter;
At least 1 uppercase letter.

- **React Router Dom:** React Router Dom was used to create the application's routes.

- **Autologin - Route Protection:** Autologin was implemented in the context, ensuring that non-logged-in users cannot access the application's dashboard.

- **Product List:** Displays the list of products obtained from the API as soon as the component is mounted.

- **Shopping Cart:** Allows users to add and remove products, automatically updating the total value and the number of items in the cart.

- **Search Bar:** Allows users to search for products based on specific keywords.

## API

The following API was used for this project:
**Hamburgueria Kenzie V2 API**

Base URL: https://hamburgueria-kenzie-v2.herokuapp.com

## Technologies Used

The application was built using Typescript + React. Some of the libraries used include: React-Router-Dom, Styled-Components, React-Hook-Form, Zod, and react-toastify.

## Programming Logic

Programming logic was applied to manipulate page elements, allowing users to perform keyword searches, filter products by category, add items to the shopping cart, remove previously added products, and update both the quantity and the total value of the items in the cart.

## Link

[Kenzie Burger](https://hamburgueria-v2-stafski-stafski.vercel.app/)

## Author

[Leonardo Stafski](https://github.com/stafski)
