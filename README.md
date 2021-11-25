# Projeto 2 - Integração Backend + Mongo Atlas + Heroku

Este é o terceiro projeto do terceiro módulo da Blue EdTech que consiste em integrar backend (Node.js + Express.js) com Mongo Atlas e Heroku e um front end em React. 



# **Sobre o projeto**

O projeto consiste em 5 rotas principais e 5 subrotas. Escolhi os 5 reinos dos seres vivos.  



Temos as rotas

` /animalia` 

` /fungi` 

` /monera` 

` /plantae` 

` /protista` 



Cada uma com 5 subrotas

` GET /listall` 

Retorna um array com todos os registros. 

```
  {
    "_id": "619ec87a0cae248435140534",
    "nome": "Hipopótamo-comum",
    "especie": "Hippopotamus amphibius",
    "continente": "África",
    "distribuicaoGeografica": "Leste e noroeste da áfrica",
    "habitat": "Água doce",
    "estadoConservacao": "Vulnerável",
    "dataCriacao": "2021-11-24T23:19:22.955Z",
    "__v": 0
  }
```

- Status Code: 200.



` GET /listid/:id` 

Retorna um registro pelo seu id. 

- Status Code: 200.
- Status Code: 404.



` POST /add` 

Cria um novo registro.

```
  {
    "nome": "Hipopótamo-comum",
    "especie": "Hippopotamus amphibius",
    "continente": "África",
    "distribuicaoGeografica": "Leste e noroeste da África",
    "habitat": "Água doce",
    "estadoConservacao": "Vulnerável"
  }
```

- Status Code: 200.



` PUT /update/:id` 

Atualiza um registro pelo id. 

- Status Code: 200.
- Status Code: 400. 



` DELETE /delete/:id` 

Deleta um registro pelo id.

- Status Code: 200.
- Status Code: 400.
