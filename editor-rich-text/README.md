
# Editor Rich Text

O editor rich text é um projeto em javascript puro, feito para aprendizado e revisão de alguns conceitos. O editor edita o texto selecionado, é possivel deixar em negrito, italico, taxado, etc...

![demostração](https://user-images.githubusercontent.com/96027900/183812535-55856cc7-57a5-44e7-9ae4-7561d8e8dd96.gif)

## Referência

Fiz uso do método do documento ".execCommand" em todos 

 - [MDN Reference](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/execCommand)

## Funcionalidades

- Alinhamento do texto
- Manipulação do texto selecionado
- Desafazimento da ultima ação


## Aprendizados

Neste projeto fiz uso de uma classe para adicionar os métodos e funcionalidades de cada editor de texto.

Pegando o atributo data de cada botão, eu aciono o método execComand, que pega o texto selecionado e o manipula nativamente.

Se clicado novamente no mesmo botão, desfaz a ultima manipulação do texto selecionado
