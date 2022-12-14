class LoginPage{
    get EmailInput () {
        return cy.get('.el-input__inner').eq(0);
    };

    get PasswordInput() {
        return cy.get('.el-input__inner').eq(1);
    };

    get LoginButton() {
        return cy.get('.vs-u-text--left > .vs-c-btn');
    }

    login(email,password) {
        this.EmailInput.type(email);
        this.PasswordInput.type(password);
        this.LoginButton.click()
    }
}
export const loginPage = new LoginPage()