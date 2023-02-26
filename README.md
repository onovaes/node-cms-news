# Node CMS News

Este é um aplicativo de site de notícias criado com Node.js e Express para curiosidades e testes gerais.

## Instalação

### Para executar este aplicativo, siga estas etapas:

  1. Certifique-se de ter o Node.js e o NPM instalados em seu computador.
  1. Clone este repositório para o seu computador.
  1. Na linha de comando, navegue até o diretório raiz do aplicativo e execute o comando npm install para instalar as dependências necessárias e npm start para iniciar o servidor web.

  O aplicativo agora deve estar sendo executado em http://localhost:3000.

  ```console
  # Install the dependencies
  npm install

  # Run the app
  npm start
  ```

## Funcionalidades

### Este aplicativo possui as seguintes funcionalidades:

  - [ ] Visualização de notícias em diferentes categorias (política, esportes, entretenimento, economia).
  - [ ] Criação, edição e exclusão de notícias para usuários autenticados.
  - [ ] Autenticação de usuário com e-mail e senha.
  - [ ] Proteção de rotas para usuários autenticados usando autenticação de sessão.

## Tecnologias

Este aplicativo foi criado usando as seguintes tecnologias:

    1. Node.js
    1. Express
    1. EJS
    1. MySql
    1. Bootstrap

## Contribuindo

Se você quiser contribuir para este projeto, por favor siga estas etapas:

  1. Faça um fork deste repositório.
  1. Crie um novo branch com suas modificações: git checkout -b minha-modificacao
  1. Commit suas modificações: git commit -m 'Adicionando novas funcionalidades'
  1. Push para o branch criado: git push origin minha-modificacao
  1. Crie um pull request para este repositório principal.

### TO-DOs

- [ ] Fix Categories Crud CRUD (EXCLUDE, SLUG ... )
- [ ] Seed to categories 

- [ ] Article CRUD
- [ ] Split controller code to services and routes.
- [ ] Transform pagination to be used in others controllers
- [ ] Use a config file to store variables. Add instrucion to Readme.md
- [ ] Edit Categorie logic and views
- [ ] Unit Test
- [ ] Favicon