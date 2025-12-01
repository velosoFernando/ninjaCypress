describe("Formulário de Consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");

    cy.get("#name").type("Fernando Papito");
    cy.get("#email").type("papito@webdojo.com");
    cy.get('input[placeholder="(00) 00000-0000"]') // utilizo o placeholder
      .type("22 99707-7837") // não uso máscara para definir o valor
      .should("have.value", "(22) 99707-7837"); // uso a máscara para validar
  });
});