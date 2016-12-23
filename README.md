# Blue Bank
Blue Bank é um projeto para testar seus conhecimentos na plataforma .NET da Microsoft.

Você basicamente irá criar uma aplicação para simular a transferência bancária entre contas cadastradas.
Esse teste consiste em avaliar seus conhecimentos na linguagem C#, ASP.NET MVC, HTML, JavaScript e CSS.

É proposto um projeto ASP.NET MVC em branco e um banco de dados SQL Express com uma tabela de conta.
O banco de dados já está populado com algumas contas, mas se sinta livre para incluir novos dados :p

## URL Acesso
Entre nesse [link](http://54.91.228.69:5000) para acessar a aplicação

## Back-End
Back-end foi desenvolvido com node + express + sequelize(ORM)

## Front-End
Desenvolvido com angularjs 2 + bootstrap.
Fiz uma modificação na biblioteca chosen para permitir requisições ajax usando Observable pattern na busca de contas favorecidas

## Melhorias
Colocar o código do angular 2 minificado e otimizado já que sua versão de desenvolvimento é bastante lenta

## Requisitos Funcionais

1. A tela deverá os seguintes campos: Agencia/Numero da conta origem e destino e valor
2. Verificar a existencia das contas informadas
3. Verificar a disponibilidade do saldo da conta de origem, o valor a ser debitado deve ser maior ou igual ao saldo disponível na conta.

## Requisitos Técnicos

1. Utilizar linguagem C#
2. Aplicar conceitos de orientação a objetos
3. Controlar transação nas operações de saque e deposito

## Diferenciais

1. Aplicar conceitos de SOLID
2. Testes unitários
3. Utilizar bibliotecas de front-end (JQuery, Bootstrap, Angular, ModuleJS, etc)
