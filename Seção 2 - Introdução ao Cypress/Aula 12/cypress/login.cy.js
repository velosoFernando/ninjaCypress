describe('login', ()=>{
  it('Deve logar com sucesso', ()=> {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000') // vai até o projeto web.

    cy.get('#email').type('papito@webdojo.com') // insere o email digitado
    cy.get('#password').type('katana123') // insere a senha digitada
    cy.contains('button', 'Entrar').click() // clica no botão entrar

    // versão multiline
    cy.get('[data-cy="user-name"]') // valida a presença do elemento
        .should('be.visible') // o Cypress garante a presença do elemento
        .and('have.text', 'Fernando Papito') // verifica o conteúdo inserido

    // versão inline
    
  })
})