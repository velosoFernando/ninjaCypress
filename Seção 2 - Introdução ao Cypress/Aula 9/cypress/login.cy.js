describe('login', ()=>{
  it('Deve logar com sucesso', ()=> {
    cy.viewport(1920, 1080) // primeiro step
    cy.visit('http://localhost:3000') // segundo step
  })
})