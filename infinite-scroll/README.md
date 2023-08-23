<h1>Projeto Infinite Scroll</h1>

<div align="center">| <a href="#tecnologias">Tecnologias Usadas</a> | <a href="#recursos">Rescursos</a> | <a href="#objetivo">Objetivo</a> | <a href="#aprimoramento">O que aprendi?</a> | <a href="#resumo">Resumo</a> | </div>
<br>
<div align="center">
<img src="https://hardzone.es/app/uploads-hardzone.es/2020/04/Scroll-rat%C3%B3n.jpg" src="dedo em um mouse" width="200" heigth="200">
</div>
<br>
<p>É um projeto que simula uma rede social. Temos uma página na qual sempre que rolada para a parte inferior, irá puxar e mostrar mais posts.</p>

<i>O ambiente é controlado e irei fazer uso de uma API que simula posts.</i>

<h2>O que é um Infinite Scroll?</h2>

<p>Em uma página que possui um infinite scroll, quando rolada ao final dela, você notará que não irá ter necessariamente um fim, e sim mais e mais conteudo, isso por que a página busca mais dados e mostra ele para o usuario enquanto ele rolar a página.</p>

<p>Isso evita que o usuario precise recarregar a página para ver novas postagem nesta suposta "rede social".</p>

<h2 id="tecnologias">Tecnologias usadas:</h2>
![icons8-javascript](https://user-images.githubusercontent.com/96027900/183345769-4c8b6b9e-5ca8-41b9-9827-0fb656930369.gif)
<ul>
  <li>HTML & CSS </li>
  <li> Javascript (Puro) </li>
</ul>

<h2 id="recursos">Rescursos do Javascript usados</h2>
<ul> 
  <li>Classes</li> 
  <li>Javascript Assincrono</li> 
  <li>Asyn & Await</li> 
  <li>Manipulação do DOM</li> 
  <li>Eventos</li> 
  <li>Desestruturing</li> 
  <li>Debounce</li>
</ul>
<h2 id="objetivo">Qual é o objetivo desse projeto?</h2>
<p>Simular uma rede social, na qual tem posts que o usuario poderia navegar por eles e fazendo requisições de mais posts quando necessário.</p>

<h2 id="aprimoramento">O que aprimorei enquanto contruia este projeto? 🚀</h2> 
<ul> 
  <li>Async e await e requesições com fetch.</li> 
  <li>Construção de uma Classe com varios metodos</li> 
  <li>Chamar uma função e aplicar o desestruturing no argumento enviado.</li> 
  <li>Debounce para atrasar enormes chamadas sequenciais.</li> 
  <li>Estrura de retornos de funções em metodos de classes.</li> 
  <li>Manipulação do DOM de forma mais inteligente.</li> 
  <li>Uso de iterações em arrays mais eficientes.</li>
</ul>
<h2 id="resumo">Minha forma de resolver o problema</h2>

<p>Primeiro formei uma ordem simples de objetivo principal que a aplicação deveria fazer.</p>

![mapa1](https://user-images.githubusercontent.com/96027900/183345770-3a82e531-3ab3-4d95-9b3e-3a28c0122117.png)

<p>Ela tem que trazer os 5 primeiros posts por uma requesição, e quando o usuario quiser, fazer mais requesições e puxar mais posts.</p>

<p>Depois elaborei uma sequencia mais lógica dos principais metodos que achei que a aplicação precisaria para fazer essas simples ações</p>

![mapa2](https://user-images.githubusercontent.com/96027900/183345750-718b82a6-18ff-4a7d-890d-58cde2a18c3f.png)

<p>Consiste basicamente em uma sequencia infinita, na qual se da inicio fazendo referencia ao local onde os posts irão ser inseridos, após isto, começa uma sequencia na qual se cria novos elementos com os dados trazidos de uma requesição à API, e os incrementa na página junto aos outros.</p>

<h2>Segunda Funcionalidade</h2>
<p>Pesquisar por palavras chaves e filtrar, fiz uso de uma manipulação simples no DOM, na qual filtro os posts da tela que possuam as palavras chaves em seu titulo ou corpo de texto, e manipulo o estilo para esconder e mostrar os itens.</p>

<h2>O que poderia poderia incrementar neste projeto?</h2>
<p>Refazer o layout para de uma rede social, posts mais realistas (fotos, comentarios, etc), maneiras de interagir com os posts.</p>

<p>obrigado por ler</p>
