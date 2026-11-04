
// Importação de módulos
const { validateLead } = require("../src/validation");

// Agrupamento de testes da função validateLead()
describe("Aplicação de testes unitários na função validateLead()", () => {

  // 1. Cadastro completo válido

  // Teste para verificar se um cadastro completo é considerado válido
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

  // 2. Cadastro mínimo válido

  // Teste para verificar se um cadastro mínimo (com apenas nome e e-mail) é considerado válido
  test("Cadastro mínimo válido", () => {
    const lead = {
      name: "João",
      email: "joao@email.com"
    };

    
    const result = validateLead(lead);
    expect(result.valid).toBe(true);
  });

  // 3. Nome muito curto

  // Teste para verificar se um nome muito curto é considerado inválido
  test("Nome muito curto", () => {
    const lead = {
      name: "Jo",
      email: "joao@email.com"
    };


    
    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 4. Nome com espaços vazios

  // Teste para verificar se um nome composto apenas por espaços vazios é considerado inválido
  test("Nome com espaços vazios", () => {
    const lead = {
      name: "   ",
      email: "joao@email.com"
    };

    
    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 5. Nome com tipo incorreto

  // Teste para verificar se um nome com tipo incorreto (número) é considerado inválido
  test("Nome com tipo incorreto", () => {
    const lead = {
      name: 12345,
      email: "joao@email.com"
    };

    // Chamada da função validateLead() com o objeto lead e verificação do resultado
    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 6. E-mail sem @

  // Teste para verificar se um e-mail sem o caractere "@" é considerado inválido
  test("Verificar se o E-mail está sem @", () => {
    const lead = {
      name: "Ana",
      email: "anaemail.com"
    };

    
    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 7. E-mail incompleto sem domínio e sem ponto

  // Teste para verificar se um e-mail incompleto (sem domínio e sem ponto) é considerado inválido
  test("Verificar se o E-mail está incompleto", () => {
    const lead = {
      name: "Ana",
      email: "email@email"
    };

    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 8. E-mail com tipo incorreto

  // Teste para verificar se um e-mail com tipo incorreto (número) é considerado inválido
  test("Verifica se o E-mail está com tipo incorreto", () => {
    const lead = {
      name: "Ana",
      email: 12345
    };

    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 9. Telefone com tipo incorreto

  // Teste para verificar se um telefone com tipo incorreto (número) é considerado inválido
  test("Verifica se o Telefone está com tipo incorreto", () => {
    const lead = {
      name: "Ana",
      email: "ana@email.com",
      phone: 12345
    };

    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 10. Modalidade/interesse inválido

  // Teste para verificar se uma modalidade/interesse inválido é considerado inválido
  test("Verifica se a Modalidade/interesse é inválida", () => {
    const lead = {
      name: "Ana",
      email: "ana@email.com",
      interest: "Internacional"
    };

    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

  // 11. Modalidade com diferenciação de caixa

  // Teste para verificar se uma modalidade/interesse com diferenciação de caixa é considerado inválido
  test("Verifica se a Modalidade está com diferenciação de caixa", () => {
    const lead = {
      name: "Ana",
      email: "ana@email.com",
      interest: "online"
    };

    const result = validateLead(lead);
    expect(result.valid).toBe(false);
  });

});
