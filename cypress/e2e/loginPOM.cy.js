/// <reference types="Cypress"/>

import { loginPage } from "../page_object/login_page";

it("login with valid credentials", () =>{
    cy.visit("/login");
    loginPage.login("9ninaa5@gmail.com", "mandarina");

})