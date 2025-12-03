describe("Tela de Login", () => {
  it("Deve realizar o login corretamente", () => {
    cy.start(); //chama o comando de start
    cy.submitLoginForm("papito@webdojo.com", "katana123"); // chama o comando de preencher form e aplica as variáveis

    cy.contains("Fernando Papito").should("be.visible"); // valida texto na tela
    cy.contains(
      "Olá QA, esse é o seu Dojo para aprender Automação de Testes."
    ).should("be.visible"); // valida texto na tela

    cy.contains("h4", "Formulários") // pega o elemento h4 e usa o texto
      .parent() // procura o pai desse elemento (no caso uma div)
      .click(); // clica nesse elemento (div) já que não existe button

    cy.get("#name").type("Fernando Veloso de Oliveira"); // preenche nome
    cy.get("#email").type("fernandoveloso95@outlook.com"); // preenche email
    cy.get("#phone").type("22 99707-7837"); // preenche telefone

    cy.contains("label", "Tipo de Consultoria")
      .parent() // busca na tag pai
      .find("select") // procura pela tag select
      .select("Individual"); // seleciona a consultoria individual no dropdown

    cy.contains("label", "Pessoa Física") // pega o label de Pessoa Física
      .find('input[type = "radio"]') // procura pelo input tipo 'radio'
      .click() // clica no input
      .should("be.checked"); // checa se ele está marcado

    cy.get("#document").type("148528097-47"); // preenche o cpf do user

    const discoveryChannels = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo",
    ]; // criei um array com uma lista de itens

    discoveryChannels.forEach((channel) => {
      cy.contains("label", channel)
        .find('input[type="checkbox"]')
        .check()
        .should("be.checked");
    });

    cy.get('input[type="file"').selectFile("./cypress/fixtures/document.pdf", {
      force: true,
    });

    cy.get("#details")
      .type(
        "Vamos todos cantar de coração. A Cruz de Malta é o meu pendão. Tu tens o nome do heroico português. Vasco da Gama, a tua fama assim se fez"
      ) // escreve o texto
      .trigger("input") // força que o comando é um input
      .should(
        "have.value",
        "Vamos todos cantar de coração. A Cruz de Malta é o meu pendão. Tu tens o nome do heroico português. Vasco da Gama, a tua fama assim se fez"
      ); // valida o valor do texto

    const techSkills = [
      "Cypress",
      "Playwright",
      "Selenium",
      "HTML e CSS",
      "JavaScript",
      "Python",
    ]; // cria um array com tecnlogias

    techSkills.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]') // crio um css selector
        .type(tech) // uso a variável tech para retornar cada uma das tecnologias
        .type("{enter}"); // uso o botão enter
    });

    cy.contains("label", "termos de uso").find("input").check();

    cy.contains("button", "Enviar formulário").click();

    cy.contains(
      "Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido."
    ).should("be.visible");

    cy.contains("button", "Fechar").click();
  });
});