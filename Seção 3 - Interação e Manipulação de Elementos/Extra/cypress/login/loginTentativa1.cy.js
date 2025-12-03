describe("Tela de Login", () => {
  it("Deve realizar o login corretamente", () => {
    cy.start(); //chama o comando de start
    cy.submitLoginForm("papito@webdojo.com", "katana123"); // chama o comando de preencher form e aplica as variáveis

    cy.contains("Fernando Papito").should("be.visible");
    cy.contains("Olá QA, esse é o seu Dojo para aprender Automação de Testes.").should("be.visible");
  });
});

describe("Tela de Login", () => {
  it("Não deve realizar o login com senha incorreta", () => {
    cy.start(); // chama o comando de start
    cy.submitLoginForm("papito@webdojo.com", "katana134"); // chama o comando de preencher form e aplica as variáveis com a senha incorreta
    cy.contains("Acesso negado! Tente novamente.").should("be.visible"); // pega o elemento flutuante de texto do JS e garante que ele está na tela
  });
});

describe("Tela de Login", () => {
  it("Não deve realizar o login com email não cadastrado", () => {
    cy.start(); // chama o comando de start
    cy.submitLoginForm("fernando@webdojo.com", "katana123"); // chama o comando de preencher form e aplica as variáveis com o email não cadastrado
    cy.contains("Acesso negado! Tente novamente.").should("be.visible"); // pega o elemento flutuante de texto do JS e garante que ele está na tela
  });
});

describe("Tela de Login", () => {
  it("Não deve realizar o login com email não cadastrado e senha incorreta", () => {
    cy.start(); // chama o comando de start
    cy.submitLoginForm("fernando@webdojo.com", "katana1234"); // chama o comando de preencher form e aplica as variáveis com o email não cadastrado e senha incorreta
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});