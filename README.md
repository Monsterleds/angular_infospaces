<p align="center">
  <img src="https://user-images.githubusercontent.com/56271517/89470927-4fd77880-d753-11ea-9558-150e6fdc33c2.png"> </img>
</p>
<br>

## Sobre o projeto
InfoSpaces é um site pessoal desenvolvido por mim com as técnologias do Angular 9, a idéia do projeto consiste em apresentar as informações obtidas de foguetes lançados (ou que irão lançar) pela spaceX, assim conseguindo obter todo o tipo de informações, como nome do foguete, data de lançamento, vídeo e etc.

<br><br>
![projeto](https://user-images.githubusercontent.com/56271517/89471768-5f57c100-d755-11ea-9138-250763dc2143.png)
<br><br>
## Por que?
Muitas vezes, eu sempre me perguntava quando aconteceria os próximos lançamentos de novos foguetes, ou até mesmo, quais foram lançados e obtiveram sucesso/fracasso, porém, 
nunca obtive sucesso em encontrar os mesmos, logo, o infoSpaces tem como objetivo sanar essa necessidade e compartilhar as informações necessárias sobre determinado foguete lançado pela spaceX.
<br><br>
## Funcionalidades
- Session

     - (Não possui autenticação com o backend, pois o foco era testar a técnologia do angular)
     
- Postagens

     - Cadastrar nova Postagem
     - Deletar Postagem
     - Listar Postagens
     - Visualizar dados da Postagem, como nome da Postagem, descrição e o valor do mesmo
     
## Começando
### Pré requisitos
Para iniciar o projeto no modo Desenvolvedor, você deve instalar o yarn, npm ou qualquer outro gerenciador de pacotes.

### Instalando

#### Clonando o repositório
Front-end:

```
$ git clone https://github.com/Monsterleds/ifun_ssr_reactjs_nextjs
```
<br>
Back-end:

```
$ git clone https://github.com/Monsterleds/ifun_backend
```

#### Instalando as dependências do Back-end
```
$ cd ifun_backend
```

```
$ yarn
```
_Ou_
```
$ npm install
```

#### Instalando as dependências do Front-end
```
$ cd ifun_ssr_reactjs_nextjs
```

```
$ yarn
```
_Ou_
```
$ npm install
```

## Conectando ao Server
Para iniciar, primeiramente você precisa startar o servidor do Back-end, quando estiver na pasta, execute o comando:
```
$ yarn dev:server
```
_Ou_
```
$ npm dev:server
```

_(lembre-se de ajustar o .env)_
## Rodando
#### Web
```
$ cd ifun_ssr_reactjs_nextjs
```
```
$ yarn dev
```
_Ou_
```
$ npm dev
```

## Construído com: 
- [Axios](https://github.com/axios/axios) - Cliente HTTP
- [Jest](https://jestjs.io/) - Testes da aplicação
- [Express](https://expressjs.com/pt-br/) - Bibliotecas básicas
- [Redis](https://github.com/redis/redis) - Cache da aplicação
- [TypeOrm](https://typeorm.io/#/) - Migrations do banco e outras funcionalidades
- [React-Dropzone](https://github.com/react-dropzone/react-dropzone) - Dropzone das imagens
- [Yup](https://github.com/jquense/yup) - Validações
- [Eslint](https://github.com/eslint/eslint) - Padronização de código
- [Prettier](https://github.com/prettier/prettier) - Padronização de código
- [React-Spring](https://www.react-spring.io/) - Animações de componentes
- [Rate-Limiter-Flexible](https://github.com/animir/node-rate-limiter-flexible) - Segurança contra força-bruta
- [Multer](https://github.com/expressjs/multer) - Formatação da imagem
- [Crypto](https://nodejs.org/api/crypto.html) - Hash da imagem
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/) - Criptografia da senha
