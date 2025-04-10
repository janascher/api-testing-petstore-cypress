/// <reference types="cypress"/>
describe('Cadastrar Pet', () => {
  const payload_create_pet = require('../../fixtures/pet/create_pet_sucess.json');

  it('Cadastrar um Pet', () => {
    cy.reqCadastrarPet(payload_create_pet).then((res_post) => {
      expect(res_post.status).to.eq(200);
      expect(res_post.body).not.empty;
      expect(res_post.body.id).to.eq(payload_create_pet.id);
      expect(res_post.body.name).to.eq(payload_create_pet.name);
      expect(res_post.body.status).to.eq(payload_create_pet.status);
      expect(res_post.body.category.id).to.eq(payload_create_pet.category.id);
      expect(res_post.body.category.name).to.eq(payload_create_pet.category.name);
      expect(res_post.body.tags[0].id).to.eq(payload_create_pet.tags[0].id);
      expect(res_post.body.tags[0].name).to.eq(payload_create_pet.tags[0].name);

      cy.reqDeletarPet(res_post.body.id).then((res_delete) => {
        expect(res_delete.status).to.eq(200);
      });
    });
  });
});
