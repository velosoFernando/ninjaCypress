// cenário 001
describe("login", () => {
  it("Deve logar com sucesso", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");

    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").type("katana123");
    cy.contains("button", "Entrar").click();

    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and("have.text", "Fernando Papito");

    cy.get('[data-cy="welcome-message"]')
      .should("be.visible")
      .and(
        "have.text",
        "Olá QA, esse é o seu Dojo para aprender Automação de Testes."
      );
  });
});

// criação do cenário 002
describe("login", () => {
  it("Não deve logar com senha inválida", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");

    cy.get("#email").type("papito@webdojo.com"); 
    cy.get("#password").type("katana321"); // alteração da senha para uma que esteja incorreta
    cy.contains("button", "Entrar").click();

    cy.contains("Acesso negado! Tente novamente.").should("be.visible"); // pega o alert quando a senha é incorreta
  });
});

// criação do cenário 003
describe("login", () => {
  it("Não deve logar com email não cadastrado", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");

    cy.get("#email").type("fernando@webdojo.com"); // alteração do email para um que não esteja cadastrado
    cy.get("#password").type("katana123");

    cy.contains("button", "Entrar").click();
    
    cy.contains("Acesso negado! Tente novamente.") // pega o alert quando o email é incorreto
      .should("be.visible");
  });
});
