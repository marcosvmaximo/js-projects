<h1>Projeto: Nickname Generator</h1> 🔍🔍

O projeto **Nickname Generator** foi desenvolvido com o objetivo de praticar habilidades em HTML, CSS e JavaScript, além de implementar a funcionalidade de geração de apelidos.

**Tecnologias Utilizadas:**
- **HTML:** Para estruturar a página.
- **CSS:** Para estilizar os elementos.
- **JavaScript:** Para gerar os apelidos e lidar com interações.

**Funcionamento:**

1. **Controle de Tamanho:**
   - O projeto inclui um controle deslizante que determina o tamanho do apelido.
   - O tamanho selecionado é exibido em tempo real.

2. **Geração de Apelido:**
   - A função `nickGenerator` gera apelidos.
   - O tamanho é definido pelo controle deslizante.
   - O algoritmo segue regras específicas para criar apelidos com consoantes e vogais.

3. **Geração Detalhada:**
   - Os primeiros dois caracteres do apelido seguem um padrão específico:
     - Uma consoante inicial (de um conjunto específico).
     - Uma vogal inicial (de um conjunto específico).
   - Os caracteres restantes alternam entre consoantes e vogais aleatórias.

4. **Apresentação do Apelido:**
   - O apelido gerado é exibido na página.
   - A primeira letra é transformada em maiúscula.
   - Um botão "Copiar Nick" permite copiar o apelido para a área de transferência.

5. **Cópia do Apelido:**
   - A função `copyNick` copia o apelido usando `navigator.clipboard.writeText`.

**Aprendizados e Objetivos:** 💭💭
- Manipulação do DOM com JavaScript.
- Uso de seletores para interagir com elementos HTML.
- Estilização de elementos usando CSS.
- Implementação de lógica baseada em regras para gerar apelidos.

**Executando o Projeto Localmente:**
1. Abra o arquivo HTML em um navegador.
2. Use o controle deslizante para definir o tamanho do apelido.
3. Clique em "Gerar Nick" para criar um apelido.
4. Clique em "Copiar Nick" para copiar o apelido gerado.

Este projeto exemplifica a combinação de tecnologias front-end (HTML, CSS e JavaScript) para criar uma aplicação interativa.
