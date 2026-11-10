# RELATÓRIO DE TESTES DE SOFTWARE

## 1. Identificação do projeto

| Informação | Descrição |
|---|---|
| **Nome do projeto** | Academia Viva |
| **Resumo do projeto** | Aplicação que realiza a validação de dados de cadastro de usuários, verificando nome, e-mail, telefone e modalidade de interesse. |
| **Nome do testador** | Milena Lopes do Nascimento |
| **Data dos testes** | 05/11/2026 |
| **Tecnologias utilizadas** | JavaScript, Node.js, NPM, Jest, HTML e CSS |

---

## 2. Objetivo dos testes

O objetivo dos testes foi verificar o funcionamento da função `validateLead()`, responsável por validar os dados informados no formulário de cadastro de leads.

Os testes tiveram como finalidade verificar se a aplicação aceita corretamente cadastros válidos e identifica informações incorretas ou incompletas.

Foram testados diferentes cenários, incluindo nomes muito curtos, nomes contendo apenas espaços, e-mails inválidos, tipos de dados incorretos, telefones numéricos e modalidades de interesse não permitidas.

Também foi verificado se o JavaScript diferencia letras maiúsculas e minúsculas na validação das modalidades.

Dessa forma, os testes buscaram identificar possíveis erros e garantir maior segurança e qualidade no funcionamento da aplicação.

---

## 3. Ambiente de testes

| Ferramenta/Tecnologia | Versão |
|---|---|
| JavaScript | ECMAScript (versão não informada) |
| Node.js | Não informada |
| Jest | Não informada |
| NPM | Não informada |
| Sistema operacional | Microsoft Windows 10.0.26200.9711 |

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

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
|---|---|---|---|
| 1 | `validateLead()` | `src/validation.js` | Verificar se os dados de cadastro são válidos, incluindo nome, e-mail, telefone e modalidade de interesse. |

---

## 5. Registro detalhado dos testes realizados

Foram implementados e executados 11 testes unitários utilizando o Jest. Todos apresentaram os resultados esperados.

### Teste 01 – Cadastro completo válido

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Cadastro completo válido`
- **Objetivo:** Verificar se um cadastro completo, com todos os dados preenchidos corretamente, é considerado válido.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: Ana Silva; e-mail: ana.silva@email.com; telefone: (27) 99999-9999; interesse: Online.
- **Resultado esperado:** `result.valid` deve retornar `true`.
- **Resultado obtido:** `true`.
- **Status:** APROVADO.

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

### Teste 02 – Cadastro mínimo válido

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Cadastro mínimo válido`
- **Objetivo:** Verificar se um cadastro contendo apenas nome e e-mail válidos é aceito.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: João; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `true`, pois telefone e interesse são opcionais.
- **Resultado obtido:** `true`.
- **Status:** APROVADO.

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

### Teste 03 – Nome muito curto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Nome muito curto`
- **Objetivo:** Verificar se a aplicação rejeita nomes com menos de três caracteres.
- **Tipo de cenário:** Negativo/Limite.
- **Entrada utilizada:** Nome: Jo; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 04 – Nome com espaços vazios

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Nome com espaços vazios`
- **Objetivo:** Verificar se a aplicação rejeita um nome preenchido somente com espaços em branco.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: "   "; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 05 – Nome com tipo incorreto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Nome com tipo incorreto`
- **Objetivo:** Verificar se a aplicação rejeita um nome informado como número, em vez de texto.
- **Tipo de cenário:** Negativo/Excepcional.
- **Entrada utilizada:** Nome: 12345; e-mail: joao@email.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 06 – E-mail sem @

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verificar se o E-mail está sem @`
- **Objetivo:** Verificar se a aplicação rejeita um endereço de e-mail sem o caractere `@`.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: anaemail.com.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 07 – E-mail incompleto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verificar se o E-mail está incompleto`
- **Objetivo:** Verificar se a aplicação rejeita um e-mail sem a estrutura necessária de domínio e ponto.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: email@email.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 08 – E-mail com tipo incorreto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se o E-mail está com tipo incorreto`
- **Objetivo:** Verificar se a aplicação rejeita um e-mail informado como número, em vez de texto.
- **Tipo de cenário:** Negativo/Excepcional.
- **Entrada utilizada:** Nome: Ana; e-mail: 12345.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 09 – Telefone com tipo incorreto

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se o Telefone está com tipo incorreto`
- **Objetivo:** Verificar se a aplicação rejeita um telefone informado como número, em vez de texto.
- **Tipo de cenário:** Negativo/Excepcional.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; telefone: 12345.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 10 – Modalidade/interesse inválido

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se a Modalidade/interesse é inválida`
- **Objetivo:** Verificar se a aplicação rejeita uma modalidade que não está entre as opções permitidas.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; interesse: Internacional.
- **Resultado esperado:** `result.valid` deve retornar `false`.
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

### Teste 11 – Modalidade com diferenciação de caixa

- **Funcionalidade testada:** `validateLead()`
- **Nome do teste no Jest:** `Verifica se a Modalidade está com diferenciação de caixa`
- **Objetivo:** Verificar se a aplicação diferencia letras maiúsculas e minúsculas ao validar a modalidade.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; interesse: online.
- **Resultado esperado:** `result.valid` deve retornar `false`, pois a opção permitida é escrita como "Online".
- **Resultado obtido:** `false`.
- **Status:** APROVADO.

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

**Importante:** Todos os 11 testes foram registrados e executados, independentemente de serem cenários positivos ou negativos. Todos foram aprovados.

---

## 6. Resumo dos resultados

Após a execução do comando `npm test -- --coverage`, foram obtidos os seguintes resultados:

| Indicador | Quantidade |
|---|---:|
| Total de testes executados | 11 |
| Testes aprovados (Passed) | 11 |
| Testes reprovados (Failed) | 0 |

**Percentual de aprovação:**

**Resultado: 100%**

Todos os testes foram executados com sucesso, sem apresentar falhas.

### 6.1. Cobertura de código

A ferramenta Jest também apresentou os seguintes indicadores de cobertura:

| Indicador | Cobertura |
|---|---:|
| Statements (instruções) | 76,47% |
| Branches (ramificações) | 72,72% |
| Functions (funções) | 50% |
| Lines (linhas) | 81,25% |

**Linhas não cobertas:** 37–39.

Os resultados demonstram que a maior cobertura foi alcançada nas linhas de código, com 81,25%. Ainda existem trechos que não foram executados durante os testes, indicando oportunidades para ampliar a cobertura.

---

## 7. Evidências da execução dos testes

[Print do resultado dos testes](test_print.png)

A execução dos testes foi realizada pelo terminal do Windows, utilizando o Jest com a opção de cobertura de código.

**Resultado apresentado no terminal:**

- Test Suites: 1 passed, 1 total.
- Tests: 11 passed, 11 total.
- Snapshots: 0 total.
- Time: 5.111 s.

**Resultado geral: 100% dos testes aprovados.**

A captura de tela da execução demonstra que todos os testes foram concluídos com sucesso e apresenta os indicadores de cobertura do código.

---

## 8. Problemas identificados e correções realizadas

Durante a preparação dos testes, foram identificadas algumas diferenças entre os dados utilizados nos testes e as regras esperadas pela função `validateLead()`.

| Problema identificado | Causa do problema | Solução implementada | Situação |
|---|---|---|---|
| Nomes de campos diferentes dos esperados pela função | Os testes precisavam utilizar os campos `name`, `email`, `phone` e `interest`. | Adequação dos objetos de teste aos nomes utilizados na função. | Corrigido nos testes |
| Verificação incorreta do retorno da função | A função retorna um objeto com a propriedade `valid`, e não apenas um valor booleano. | Utilização de `result.valid` nas verificações do Jest. | Corrigido nos testes |
| Utilização de modalidade válida em um teste de modalidade inválida | A opção "Presencial" também faz parte das modalidades permitidas. | Substituição por "Internacional", que não é uma modalidade permitida. | Corrigido nos testes |

**Resposta:**

As correções foram realizadas nos testes para que eles verificassem corretamente o funcionamento do código original, sem alterar indevidamente as regras de validação da aplicação.

Após os ajustes, os 11 testes foram executados e todos apresentaram os resultados esperados.

---

## 9. Análise dos resultados

**1. Todos os testes apresentaram os resultados esperados? Justifique.**

Sim. Todos os 11 testes foram aprovados durante a execução do Jest, representando 100% de aprovação. Isso demonstra que a função `validateLead()` apresentou os comportamentos esperados nos cenários positivos e negativos testados.

**2. Quais foram os cenários mais importantes verificados durante os testes?**

Os cenários mais importantes foram a aceitação de cadastros válidos, a rejeição de nomes muito curtos ou preenchidos apenas com espaços, a validação do formato do e-mail, a verificação dos tipos de dados e a identificação de modalidades não permitidas.

**3. Algum teste identificou uma falha na aplicação? Qual?**

Durante a execução final, nenhum dos 11 testes apresentou falha. Todos foram aprovados. Entretanto, durante a preparação dos testes, foram identificadas inconsistências nos dados utilizados e na forma de verificar o retorno da função, que foram corrigidas nos próprios testes.

**4. Quais alterações foram necessárias para corrigir os problemas encontrados?**

Foram realizados ajustes nos nomes dos campos utilizados nos objetos de teste, na verificação da propriedade `result.valid` e na modalidade utilizada como exemplo de valor inválido. Essas alterações permitiram que os testes verificassem corretamente as regras da função.

**5. Existem funcionalidades que ainda precisam ser testadas? Quais?**

Sim. Ainda podem ser testadas outras funcionalidades da aplicação, como a função `normalizeCourseFilter`, o funcionamento do formulário de cadastro, a integração entre HTML e JavaScript e a apresentação das mensagens de erro para o usuário.

Além disso, podem ser criados novos testes para aumentar a cobertura de código, principalmente nas linhas 37 a 39, que não foram cobertas durante a execução.

---

## 10. Conclusão

Os testes unitários realizados na aplicação Academia Viva apresentaram resultados positivos. Foram elaborados e executados 11 testes para a função `validateLead()`, contemplando situações válidas e inválidas relacionadas ao nome, e-mail, telefone e modalidade de interesse.

Todos os 11 testes foram aprovados, alcançando um percentual de aprovação de 100%, sem nenhuma reprovação.

A cobertura de código apresentou 76,47% de instruções, 72,72% de ramificações, 50% de funções e 81,25% de linhas.

Apesar dos resultados positivos, ainda existem trechos do código que não foram cobertos pelos testes, demonstrando a possibilidade de melhorias e da criação de novos cenários de validação.

A realização dos testes contribuiu para verificar as regras de validação, identificar inconsistências durante a preparação dos testes e aumentar a confiabilidade do sistema.

Dessa forma, foi possível compreender a importância dos testes unitários para melhorar a qualidade do software, reduzir erros e garantir que as funcionalidades desenvolvidas apresentem o comportamento esperado.

---

**Relatório elaborado por:** Milena Lopes do Nascimento

**Data da última atualização:** 10/11/2026
