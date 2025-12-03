describe("Tela de Login", () => {
  it("Deve realizar o login com credenciais corretas", () => {
    cy.start();
    cy.submitLoginForms("papito@webdojo.com", "katana123");
    cy.validLogin(
      "Fernando Papito",
      "Olá QA, esse é o seu Dojo para aprender Automação de Testes."
    );
  });
  it("Não deve fazer login com email não cadastrado", () => {
    cy.start();
    cy.submitLoginForms("fernando@webdojo.com", "katana123");
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
  it("Não deve fazer login com senha incorreta", () => {
    cy.start();
    cy.submitLoginForms("papito@webdojo.com", "katana132");
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
  it("Não deve fazer login com email não cadastrado e senha incorreta", () => {
    cy.start();
    cy.submitLoginForms("fernando@webdojo.com", "katana132");
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
  it("Exige a inserção do email no campo para login", () => {
    cy.start();
    cy.submitWithoutEmail("katana123");
    cy.contains("Ei, não esqueça de digitar seu email!").should("be.visible");
  });
  it("Exige a inserção da senha no campo para login", () => {
    cy.start();
    cy.submitWithoutPassword("papito@webdojo.com");
    cy.contains("Você precisa de uma senha para entrar! 🔒");
  })
});