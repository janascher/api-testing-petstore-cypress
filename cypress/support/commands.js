// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// Cypress.Commands.add('reqCadastrarPetDDT', (element) => {
//   cy.request({
//     method: 'POST',
//     url: '/pet',
//     failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
//     body: element,
//   }).then((response) => {
//     return response;
//   });
// });

Cypress.Commands.add('reqCadastrarPet', (payload) => {
  cy.request({
    method: 'POST',
    url: '/pet',
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
    body: payload,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add('reqConsultarPetEspecífico', (idPet) => {
  cy.request({
    method: 'GET',
    url: `/pet/${idPet}`,
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add('reqAtualizarPet', (payload) => {
  cy.request({
    method: 'PUT',
    url: `/pet`,
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
    body: payload,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add('reqDeletarPet', (idPet) => {
  cy.request({
    method: 'DELETE',
    url: `/pet/${idPet}`,
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
  }).then((response) => {
    return response;
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
