<h1>Projeto: Password Generator</h1>

O projeto **Password Generator** tem como objetivo criar senhas seguras de forma aleatória. A seguir está a documentação simplificada do projeto, juntamente com os comentários para esclarecer algumas partes do código:

**Tecnologias Utilizadas:**
- **HTML:** Para estruturar a página.
- **CSS:** Para estilizar os elementos.
- **JavaScript:** Para gerar senhas aleatórias e lidar com interações.
<br>
<hr>
<br>

**Funcionamento:**

1. **Controle de Tamanho:**
   - Um controle deslizante permite determinar o tamanho da senha.
   - O tamanho escolhido é exibido em tempo real ao lado do controle.

2. **Geração de Senha:**
   - A função `passwordGenerator` gera senhas aleatórias.
   - O tamanho da senha é definido pelo controle deslizante.
   - Senhas são criadas a partir de um conjunto de caracteres específico.

3. **Apresentação da Senha:**
   - A senha gerada é exibida na página.
   - Um botão "Copiar Senha" permite copiar a senha para a área de transferência.

4. **Cópia da Senha:**
   - A função `copyPassword` copia a senha usando `navigator.clipboard.writeText`.
   - Após a cópia, uma mensagem é exibida na área da senha.
<br>
<hr>
<br>
**Executando o Projeto Localmente:**
1. Abra o arquivo HTML em um navegador.
2. Use o controle deslizante para definir o tamanho da senha.
3. Clique em "Gerar Senha" para criar uma senha aleatória.
4. Clique em "Copiar Senha" para copiar a senha gerada.

Este projeto demonstra como criar senhas aleatórias usando JavaScript e como interagir com elementos HTML para proporcionar uma experiência de usuário simples e eficaz.
