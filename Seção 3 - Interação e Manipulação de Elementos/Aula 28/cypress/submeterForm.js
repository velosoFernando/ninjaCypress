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
      .should("not.be.checked");

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
    });

    cy.get('input[type="file"]').selectFile("./cypress/fixtures/document.pdf", {
      force: true,
    });

    cy.get(
      'textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]'
    )
      .type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      )
      .trigger("input")
      .should(
        "have.value",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      );

    const techs = [
      "Cypress",
      "Selenium",
      "WebDriverIO",
      "Playwright",
      "Robot Framework",
    ];

    techs.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech)
        .type("{enter}");

      cy.contains("label", "Tecnologias")
        .parent()
        .contains("span", tech)
        .should("be.visible");
    });

    cy.contains("label", "termos de uso").find("input").check();

    cy.contains("button", "Enviar formulário").click();

    cy.contains(
      "Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido."
    ).should("be.visible");

    cy.contains("button", "Fechar").click();
  });
});