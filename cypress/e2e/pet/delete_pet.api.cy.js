/// <reference types="cypress"/>
describe('Deletar Pet', () => {
  const payload_create_pet = require('../../fixtures/pet/create_pet_sucess.json');

  it('Deletar um Pet', () => {
    cy.reqCadastrarPet(payload_create_pet).then((res_post) => {
      expect(res_post.status).to.eq(200);

      cy.reqDeletarPet(res_post.body.id).then((res_delete) => {
        expect(res_delete.status).to.eq(200); // status code
        expect(res_delete.body.code).to.eq(200); // process code
        expect(res_delete.body.type).to.eq('unknown');
        expect(res_delete.body.message).to.eq(`${payload_create_pet.id}`);
      });
    });
  });
});
