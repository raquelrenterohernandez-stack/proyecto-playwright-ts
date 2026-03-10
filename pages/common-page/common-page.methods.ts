import {Page} from '@playwright/test'
export class commonPageMethods{
    private page!: Page

    contructor(page: Page){
        this.page = page
    }

async navigateToTheApplication(){
    await this.page.goto('https://www.saucedemo.com/')
}
}