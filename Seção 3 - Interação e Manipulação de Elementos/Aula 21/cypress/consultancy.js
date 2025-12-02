describe("Formulário de Consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");

    cy.get("#name").type("Fernando Papito");
    cy.get("#email").type("papito@webdojo.com");
    cy.get('input[placeholder="(00) 00000-0000"]')
      .type("22 99707-7837")
      .should("have.value", "(22) 99707-7837");
    cy.get("#consultancyType").select("In Company"); // seleciono um item
    // cy.get('#consultancyType').select('inCompany'); // através do value
    // cy.contains("label", "Tipo de Consultoria") // através da escala de elemento
    //   .parente()
    //   .find("select")
    //   .select("Individual");
  });
});
