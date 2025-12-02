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
      .find('input[type="radio"]')
      .click()
      .should("be.checked");

    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("be.not.checked");

    cy.contains("label", "CPF")
      .parent()
      .find("input")
      .type("00329299000")
      .should("have.value", "003.292.990-00");

    const discoveryChannels = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo",
    ];

    discoveryChannels.forEach((channel) => {
      cy.contains("label", channel)
        .find('input[type="checkbox"]')
        .check()
        .should("be.checked");

      cy.get('input[type="file"]').selectFile("./cypress/fixtures/document.pdf", {
        force: true,
      }); // diz que o input é tipo file (oculto), pega o arquivo na raíz do seu armazenamento e força a operação (já que o Cy não interage com elementos ocultos).
    });
  });
});