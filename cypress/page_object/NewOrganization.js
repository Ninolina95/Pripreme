class NewOrganization{
    get AddOrganizationButton () {
        return cy.get('vs-c-my-organization vs-c-my-organization--add-new not-sortable')
    }
    get NameInput () {
        return cy.get(input).eq(0)
    }
    get NextButton () {
        return cy.get('.el-button vs-c-button-focus el-button--success el-button--large')
    };

    get CreateButton () {
        return cy.get('.el-button vs-c-button-focus el-button--success el-button--large')
    };
    AddOrganization(name) {
        this.AddOrganizationButton.click();
        this.NameInput.type(name);
        this.NextButton.click();
        this.CreateButton.click()
    }
}
export const addOrganization = new AddOrganization()
