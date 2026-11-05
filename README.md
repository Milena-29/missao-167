# RELATÓRIO DE TESTES DE SOFTWARE

## 1. Identificação do projeto

| Informação | Descrição |
|---|---|
| **Nome do projeto:** | Academia Viva |
| **Resumo do projeto:** | Aplicação que realiza a validação de dados de cadastro de usuários, verificando nome, e-mail, telefone e modalidade de interesse. |
| **Nome do testador:** | Milena Lopes do Nascimento |
| **Data dos testes:** | 05/11/2026 |
| **Tecnologias utilizadas:** | JavaScript, Node.js, NPM, Jest, HTML e CSS |

---

## 2. Objetivo dos testes

Descreva qual foi o objetivo da realização dos testes na aplicação.

- Qual funcionalidade foi testada?
- O que os testes pretendiam verificar?
- Quais possíveis erros ou falhas deveriam ser identificados?

**Resposta:**

O objetivo dos testes foi verificar o funcionamento da função `validateLead`, responsável por validar os dados informados no formulário de cadastro de leads.

Os testes pretendiam verificar se a aplicação aceita corretamente cadastros válidos e identifica informações incorretas ou incompletas.

Foram testados diferentes cenários, incluindo nomes muito curtos, nomes contendo apenas espaços, e-mails inválidos, tipos de dados incorretos, telefones numéricos e modalidades de interesse não permitidas.

Também foi verificado se o JavaScript diferencia letras maiúsculas e minúsculas na validação das modalidades.

Dessa forma, os testes tiveram como finalidade identificar possíveis erros e garantir maior segurança e qualidade no funcionamento da aplicação.

---

## 3. Ambiente de testes

Informe as ferramentas e tecnologias utilizadas para executar os testes.

| Ferramenta/Tecnologia | Versão |
|---|---|
| JavaScript |  |
| Node.js | |
| Jest |  |
| NPM |  |
| Outras |  |

**Comando utilizado para preparar o ambiente:**

```bash
npm install
```

**Comando utilizado para executar o sistema (servidor):**

```bash
npm start
```

**Comando utilizado para executar os testes:**

```bash
npm test -- --coverage
```

---

## 4. Funcionalidades testadas

Liste as funções, métodos ou componentes da aplicação que foram submetidos aos testes.

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
|--- |-----------------------|---------|-------------------|
| 1 | `validateLead()` | `src/validation.js` | Verificar se os dados de cadastro são válidos, incluindo nome, e-mail, telefone e modalidade de interesse. |


---

## 5. Registro detalhado dos testes realizados

Registre individualmente TODOS os testes implementados.

### Teste 01 – Cadastro completo válido

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Cadastro completo válido`
- **Objetivo:** Verificar se um cadastro completo, com todos os dados preenchidos corretamente, é considerado válido.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: Ana Silva; e-mail: ana.silva@email.com; telefone: (27) 99999-9999; interesse: Online.
- **Resultado esperado:** `result.valid` deve retornar `true`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Cadastro completo válido", () => {
  const lead = {
    name: "Ana Silva",
    email: "ana.silva@email.com",
    phone: "(27) 99999-9999",
    interest: "Online"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(true);
});
```

---

### Teste 02 – Cadastro mínimo válido

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Cadastro mínimo válido`
- **Objetivo:** Verificar se um cadastro contendo apenas nome e e-mail válidos é aceito.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: João; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `true`, pois telefone e interesse são opcionais.
- **Resultado obtido:** 
- **Status:**

**Código do teste:**

```javascript
test("Cadastro mínimo válido", () => {
  const lead = {
    name: "João",
    email: "joao@email.com"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(true);
});
```

---

### Teste 03 – Nome muito curto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Nome muito curto`
- **Objetivo:** Verificar se a aplicação rejeita nomes com menos de três caracteres.
- **Tipo de cenário:** Negativo/Limite.
- **Entrada utilizada:** Nome: Jo; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Nome muito curto", () => {
  const lead = {
    name: "Jo",
    email: "joao@email.com"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 04 – Nome com espaços vazios

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Nome com espaços vazios`
- **Objetivo:** Verificar se a aplicação rejeita um nome preenchido somente com espaços em branco.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: "   "; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Nome com espaços vazios", () => {
  const lead = {
    name: "   ",
    email: "joao@email.com"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 05 – Nome com tipo incorreto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Nome com tipo incorreto`
- **Objetivo:** Verificar se a aplicação rejeita um nome informado como número, em vez de texto.
- **Tipo de cenário:** Negativo/Excepcional.
- **Entrada utilizada:** Nome: 12345; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Nome com tipo incorreto", () => {
  const lead = {
    name: 12345,
    email: "joao@email.com"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 06 – E-mail sem @

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verificar se o E-mail está sem @`
- **Objetivo:** Verificar se a aplicação rejeita um endereço de e-mail sem o caractere `@`.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: anaemail.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Verificar se o E-mail está sem @", () => {
  const lead = {
    name: "Ana",
    email: "anaemail.com"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 07 – E-mail incompleto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verificar se o E-mail está incompleto`
- **Objetivo:** Verificar se a aplicação rejeita um e-mail sem a estrutura necessária de domínio e ponto.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: email@email.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Verificar se o E-mail está incompleto", () => {
  const lead = {
    name: "Ana",
    email: "email@email"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 08 – E-mail com tipo incorreto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se o E-mail está com tipo incorreto`
- **Objetivo:** Verificar se a aplicação rejeita um e-mail informado como número, em vez de texto.
- **Tipo de cenário:** Negativo/Excepcional.
- **Entrada utilizada:** Nome: Ana; e-mail: 12345.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Verifica se o E-mail está com tipo incorreto", () => {
  const lead = {
    name: "Ana",
    email: 12345
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 09 – Telefone com tipo incorreto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se o Telefone está com tipo incorreto`
- **Objetivo:** Verificar se a aplicação rejeita um telefone informado como número, em vez de texto.
- **Tipo de cenário:** Negativo/Excepcional.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; telefone: 12345.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 
**Código do teste:**

```javascript
test("Verifica se o Telefone está com tipo incorreto", () => {
  const lead = {
    name: "Ana",
    email: "ana@email.com",
    phone: 12345
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 10 – Modalidade/interesse inválido

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se a Modalidade/interesse é inválida`
- **Objetivo:** Verificar se a aplicação rejeita uma modalidade que não está entre as opções permitidas.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; interesse: Internacional.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Verifica se a Modalidade/interesse é inválida", () => {
  const lead = {
    name: "Ana",
    email: "ana@email.com",
    interest: "Internacional"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

### Teste 11 – Modalidade com diferenciação de caixa

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se a Modalidade está com diferenciação de caixa`
- **Objetivo:** Verificar se a aplicação diferencia letras maiúsculas e minúsculas ao validar a modalidade.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; interesse: online.
- **Resultado esperado:** `result.valid` deve retornar `false`, pois a opção permitida é escrita como "Online".
- **Resultado obtido:** 
- **Status:** 

**Código do teste:**

```javascript
test("Verifica se a Modalidade está com diferenciação de caixa", () => {
  const lead = {
    name: "Ana",
    email: "ana@email.com",
    interest: "online"
  };

  const result = validateLead(lead);
  expect(result.valid).toBe(false);
});
```

---

**Importante:** Todos os 11 testes devem ser registrados, independentemente de serem aprovados ou reprovados durante a execução.

---

## 6. Resumo dos resultados

Apresente um resumo quantitativo de todos os testes executados.

| Indicador | Quantidade |
|---|---:|
| Total de testes executados | 11 |
| Testes aprovados (Passed)  |  |
| Testes reprovados (Failed) |  |

**Percentual de aprovação:**


Resultado: %

---

## 7. Evidências da execução dos testes


**Espaço para inserir a imagem:**

[Inserir aqui a captura de tela da execução dos testes no Jest.]

Inclua evidências que mostrem:

- Execução dos testes no Jest.
- Quantidade de testes aprovados e reprovados.
- Mensagens de erro, quando houver.
- Correções realizadas após a identificação de falhas, se aplicável.

---

## 8. Problemas identificados e correções realizadas

Registre os problemas encontrados durante a execução dos testes e as soluções implementadas.

| Problema identificado | Causa do problema | Solução implementada | Situação |
|---|---|---|---|
| Nomes de campos diferentes dos esperados pela função | Os testes precisam utilizar os campos `name`, `email`, `phone` e `interest`. | Adequação dos objetos de teste aos nomes utilizados na função. | Corrigido nos testes |
| Verificação incorreta do retorno da função | A função retorna um objeto com a propriedade `valid`, e não apenas um valor booleano. | Utilização de `result.valid` nas verificações do Jest. | Corrigido nos testes |
| Utilização de modalidade válida em um teste de modalidade inválida | A opção "Presencial" também faz parte das modalidades permitidas. | Substituição por "Internacional", que não é uma modalidade permitida. | Corrigido nos testes |

Caso nenhum problema tenha sido identificado durante a execução, explique.

**Resposta:**

Durante a preparação dos testes, foram identificadas algumas diferenças entre os dados utilizados nos testes e as regras esperadas pela função `validateLead`.

Foram realizados ajustes nos nomes dos campos, na verificação do retorno da função e na modalidade utilizada como exemplo de valor inválido.

Essas correções foram feitas nos testes para que eles verificassem corretamente o funcionamento do código original, sem alterar indevidamente as regras de validação da aplicação.

---

## 9. Análise dos resultados

Responda às questões:

1. Todos os testes apresentaram os resultados esperados? Justifique.
2. Quais foram os cenários mais importantes verificados durante os testes?
3. Algum teste identificou uma falha na aplicação? Qual?
4. Quais alterações foram necessárias para corrigir os problemas encontrados?
5. Existem funcionalidades que ainda precisam ser testadas? Quais?

**Respostas:**

1. A confirmação depende da execução do Jest. Os testes foram elaborados para verificar os comportamentos previstos na função `validateLead`. Após a execução, será possível confirmar se todos apresentaram os resultados esperados.

2. Os cenários mais importantes foram a aceitação de cadastros válidos, a rejeição de nomes muito curtos ou preenchidos apenas com espaços, a validação do formato do e-mail, a verificação dos tipos de dados e a identificação de modalidades não permitidas.

3. Até a execução dos testes, não é possível afirmar se algum deles identificou uma falha na aplicação. Os testes foram preparados para detectar possíveis erros nas regras de validação.

4. Foram realizados ajustes nos dados utilizados nos testes, nos nomes dos campos e na forma de verificar o retorno da função. Também foi utilizada uma modalidade realmente inválida no teste correspondente.

5. Sim. Ainda podem ser testadas outras funcionalidades da aplicação, como a função `normalizeCourseFilter`, o funcionamento do formulário de cadastro, a integração entre HTML e JavaScript e a apresentação das mensagens de erro para o usuário.

---

## 10. Conclusão

Apresente uma conclusão sobre o processo de testes realizado.

- Os testes contribuíram para identificar possíveis falhas?
- A aplicação apresentou o comportamento esperado nos cenários testados?
- Qual foi a importância dos testes unitários para a qualidade do software desenvolvido?

**Conclusão da equipe:**

Os testes unitários são importantes para verificar se as funções da aplicação apresentam o comportamento esperado diante de diferentes tipos de entrada.

Neste trabalho, foram elaborados 11 testes para a função `validateLead`, contemplando situações válidas e inválidas relacionadas ao nome, e-mail, telefone e modalidade de interesse.

A realização desses testes contribui para identificar possíveis falhas, verificar as regras de validação e aumentar a confiabilidade do sistema Academia Viva.

Após a execução do Jest, os resultados permitirão confirmar se a função respondeu corretamente a todos os cenários testados.

Dessa forma, foi possível compreender a importância dos testes unitários para melhorar a qualidade do software e reduzir erros durante o desenvolvimento.

---

**Relatório elaborado por:** Milena Lopes do Nascimento

**Data da última atualização:** 05/11/2026
