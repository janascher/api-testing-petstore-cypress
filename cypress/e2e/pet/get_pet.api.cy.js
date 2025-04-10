/// <reference types="cypress"/>

describe('Consultar Pet', () => {
  const payload_create_pet = require('../../fixtures/pet/create_pet_sucess.json');


  it('Consultar um Pet', () => {
    cy.reqCadastrarPet(payload_create_pet).then((res_post) => {
      expect(res_post.status).to.eq(200);

      cy.reqConsultarPetEspecífico(res_post.body.id).then((res_get) => {
        expect(res_get.status).to.eq(200);
        expect(res_get.body).not.empty;
        expect(res_get.body.id).to.eq(payload_create_pet.id);
        expect(res_get.body.name).to.eq(payload_create_pet.name);
        expect(res_get.body.status).to.eq(payload_create_pet.status);
        expect(res_get.body.category.id).to.eq(payload_create_pet.category.id);
        expect(res_get.body.category.name).to.eq(payload_create_pet.category.name);
        expect(res_get.body.tags[0].id).to.eq(payload_create_pet.tags[0].id);
        expect(res_get.body.tags[0].name).to.eq(payload_create_pet.tags[0].name);

        cy.reqDeletarPet(res_post.body.id).then((res_delete) => {
          expect(res_delete.status).to.eq(200);
        });
      });
    });
  });
});
