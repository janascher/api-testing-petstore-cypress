/// <reference types="cypress"/>
describe('Cadastrar Pet DDT', () => {
  const payload_create_pet_ddt = require('../../fixtures/pet/create_list_pet_sucess.json');

  payload_create_pet_ddt.forEach((payload) => {
    // POST Data Driven
    it(`Cadastrar múltiplos Pets - ${payload.name}`, () => {

      cy.reqCadastrarPet(payload).then((res_post) => {
        expect(res_post.status).to.eq(200);
        expect(res_post.body).not.empty;
        expect(res_post.body.id).to.eq(payload.id);
        expect(res_post.body.name).to.eq(payload.name);
        expect(res_post.body.status).to.eq(payload.status);
        expect(res_post.body.category.id).to.eq(payload.category.id);
        expect(res_post.body.category.name).to.eq(payload.category.name);
        expect(res_post.body.tags[0].id).to.eq(payload.tags[0].id);
        expect(res_post.body.tags[0].name).to.eq(payload.tags[0].name);
        
        cy.log('Resposta POST:', res_post.body);

        cy.reqDeletarPet(res_post.body.id).then((res_delete) => {
          expect(res_delete.status).to.eq(200);
        });
      });
    });
  });
});
