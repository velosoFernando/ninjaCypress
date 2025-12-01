describe("login", () => {
  it("Deve logar com sucesso", () => {
    cy.start(); // chama o comando de navegação e tamanho de tela
    cy.submitLoginForm("papito@webdojo.com", "katana123"); // substituição do código reutilizável por um comando com a massa de testes (email e senha)
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

describe("login", () => {
  it("Não deve logar com senha inválida", () => {
    cy.start(); // chama o comando de navegação e tamanho de tela
    cy.submitLoginForm("papito@webdojo.com", "katana1232"); // substituição do código reutilizável por um comando com a massa de testes (email e senha)
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});

describe("login", () => {
  it("Não deve logar com email não cadastrado", () => {
    cy.start(); // chama o comando de navegação e tamanho de tela
    cy.submitLoginForm("fernando@webdojo.com", "katana123"); // substituição do código reutilizável por um comando com a massa de testes (email e senha)
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});