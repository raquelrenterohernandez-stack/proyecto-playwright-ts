export class LoginPageElements{
    private page!: Page

    contructor(page: Page){
        this.page = page
    }

    get textboxes(){
        return {
            username: this.page.locator('[data-test="username"]'),
            password: this.page.locator('[data-test="password"]')
        }
    }

    get textboxes(){
        return {
            login: this.page.locator('#login-button')
        }
    }
}