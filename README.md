# Desafio Front-End

Projeto desenvolvido como solução do desafio proposto [Desafio Front-End](https://github.com/igorhideki/Desafio-Front-End/blob/dev/README-Desafio.md).

## Estrutura do projeto

Solução desenvolvida usado a biblioteca de criação de interfaces [ReactJS](https://reactjs.org/). O projeto está dividido da seguinte forma:

* `/` - Possui arquivos de configuração do projeto;
* `/src` - Possui os arquivos fontes, como scripts, folhas de estilos e testes;
* `/public` - Possui os arquivos de produção do projeto;
* `/endpoints` - Possui os arquivos para consumo da fake API.

### Scripts

Os scripts deste projeto estão contidos na pasta `/src` e separados da seguinte forma:

* `/components` - Possui scripts separados em arquivos com os nomes dos components;
* `/request` - Possui scripts responsáveis pelas chamadas realizadas na fake API;
* `/routers` - Possui scripts responsáveis pela configuração das rotas da aplicação;
* `/selectors` - Possui scripts responsáveis pela aplicação de filtros e seletores dos dados.

### Folhas de Estilo

Este projeto utiliza o pré-processador [Sass](https://sass-lang.com/) para criação do CSS seguindo a metodologia [BEM (Block Element Modifier)](http://getbem.com/).

A pasta `/styles` está contida na pasta `/src` e segue a seguinte estrutura:

* `/` - Na raiz possui apenas arquivo de importação dos módulos de estilo;
* `/base` - Possui os arquivos usados como base dos estilos, regras de configuração, variáveis e regras de utilidades;
* `/components` - Possui os arquivos de estilos separados por components.

#### Ícones

Os ícones utilizados são obtidos do conjunto de ferramentas de fontes e ícones [FontAwesome](https://fontawesome.com/).

## Pré-requisitos

É necessário ter [Node.js](https://nodejs.org/en/) instalado.

## Instalação e execução

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto `npm install`;
3. Rode primeiro a fake API para que aplicação possa consumir seus dados `npm run start:db`;
4. Rode o servidor de desenvolvimento `npm run start`.

## Testes

Os testes foram criados utilizando [Jest](https://facebook.github.io/jest/) e [Enzyme](http://airbnb.io/enzyme/).

Para rodar os teste utilize o comando `npm run test`.

### Arquivos de teste

Os scripts de teste estão organizados na pasta `/tests` que está contida na pasta `/src` e segue a seguinte estrutura:

* `/` - Na raiz está o arquivo de setup da ferramenta Enzyme;
* `/components` - Possui os arquivos de testes separados por components e os snapshots de cada component;
* `/fixtures` - Possui arquivos com dados para utilizar na execução dos testes.

## Build

Os arquivos para produção são gerados pelo comando `npm run build`.

Para rodar o servidor com os arquivos gerados pelo build é necessário usar o comando `npm run start:dist`.
