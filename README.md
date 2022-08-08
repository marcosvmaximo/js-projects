#Projeto Infinite Scroll
(foto)
(lista)
É um projeto que simula uma rede social. Temos uma página na qual sempre que rolada para a parte inferior, irá puxar e mostrar mais posts.

(gif)

/O ambiente é controlado e irei fazer uso de uma API que simula posts./

##O que é um Infinite Scroll?

Em uma página que possui um infinite scroll, quando rolada ao final dela, você notará que não irá ter necessariamente um fim, e sim mais e mais conteudo, isso por que a página busca mais dados e mostra ele para o usuario enquanto ele rolar a página.

Isso evita que o usuario precise recarregar a página para ver novas postagem nesta suposta "rede social".

##Tecnologias usadas:
. HTML & CSS (icone)
. Javascript (Puro) (icone)

##Rescursos do Javascript usados
. Classes
. Javascript Assincrono
. Asyn & Await
. Manipulação do DOM
. Eventos
. Desestruturing
. Debounce

##Qual é o objetivo desse projeto?
Simular uma rede social, na qual tem posts que o usuario poderia navegar por eles e fazendo requisições de mais posts quando necessário.

##O que aprimorei enquanto contruia este projeto? (emoji)
Async e await e requesições com fetch.
Construção de uma Classe com varios metodos
Chamar uma função e aplicar o desestruturing no argumento enviado.
Debounce para atrasar enormes chamadas sequenciais.
Estrura de retornos de funções em metodos de classes.
Manipulação do DOM de forma mais inteligente.
Uso de iterações em arrays mais eficientes.

##Minha forma de resolver o problema

Primeiro formei uma ordem simples de objetivo principal que a aplicação deveria fazer.

(foto)

Ela tem que trazer os 5 primeiros posts por uma requesição, e quando o usuario quiser, fazer mais requesições e puxar mais posts.

Depois elaborei uma sequencia mais lógica dos principais metodos que achei que a aplicação precisaria para fazer essas simples ações

(foto)

Consiste basicamente em uma sequencia infinita, na qual se da inicio fazendo referencia ao local onde os posts irão ser inseridos, após isto, começa uma sequencia na qual se cria novos elementos com os dados trazidos de uma requesição à API, e os incrementa na página junto aos outros.

##Segunda Funcionalidade
Pesquisar por palavras chaves e filtrar, fiz uso de uma manipulação simples no DOM, na qual filtro os posts da tela que possuam as palavras chaves em seu titulo ou corpo de texto, e manipulo o estilo para esconder e mostrar os itens.

##O que poderia poderia incrementar neste projeto?
Refazer o layout para de uma rede social, posts mais realistas (fotos, comentarios, etc), maneiras de interagir com os posts.

obrigado por ler