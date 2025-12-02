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
    cy.contains("label", "Tipo de Consultoria")
      .parent()
      .find("select")
      .select("Individual");

    cy.contains("label", "Pessoa Física")
      .find("input")
      .click()
      .should("be.checked");
    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("be.not.checked");

    cy.get('input[placeholder="000.000.000-00"]')
      .type("00329299000")
      .should("have.value", "003.292.990-00");
  });
});

// Alternativa para inserir CPF e validar:

//     cy.contains("lebel", "CPF")
//       .parent()
//       .find("input")
//       .type("00329299000")
//       .should("have.value", "003.292.990-00");