




describe('AcessandoSite', () => {                       //descrição da função

    it('Abrindo o Site', () => {                        // função abrir site
        cy.visit('/')                                      // o elemeento "/" se refere a baseUrl indicada em cypress.json
        cy.get(':nth-child(3) > .vr-quick-navigation__link').click()    // Clica no botão PRA VOCÊ
        cy.get('.vr-button--negative').click()              // clica em ONDE USAR MEU VR
        cy.get('[id="map"]')                                // valida se o elemento MAPA foi carregado com sucesso
    })



})