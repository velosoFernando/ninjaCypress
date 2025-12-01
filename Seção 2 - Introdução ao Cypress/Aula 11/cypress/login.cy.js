describe('login', ()=>{
  it('Deve logar com sucesso', ()=> {
    cy.viewport(1920, 1080) // define as dimensões da tela no teste.
    cy.visit('http://localhost:3000') // direciona para o local de teste.

    cy.get('#email').type('papito@webdojo.com') // utiliza o elemento #email (encontrado no id).
    cy.get('#password').type('katana123') // utiliza o elemento #password (encontrado no id).
    cy.contains('button', 'Entrar').click() // combina 'button' com o texto 'Entrar' e adiciona a subfunção '.click()' para clicar no botão.

    cy.wait(3000) // adiciona um wait (espera temporária) com limite de 3 segundos.
  })
})