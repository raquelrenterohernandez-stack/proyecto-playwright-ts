import {Page} from '@playwright/test'
import { CommonPageElements } from './common-page.elements'

export class CommonPageMethods{
    private page: Page
    private comonPageElements: CommonPageElements

    constructor(page: Page){
        this.page = page
        this.comonPageElements = new CommonPageElements(page)
    }

    async navigateToTheApplication(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async openMenu(){
        await this.comonPageElements.buttons.openMenu.click()
    }

    async clickAllItems(){
        await this.comonPageElements.leftMenu.allItems.click()
    }

    async clickAbout(){
        await this.comonPageElements.leftMenu.about.click()
    }

    async clickLogout(){
        await this.comonPageElements.leftMenu.logout.click()
    }

    async clickResetAppState(){
        await this.comonPageElements.leftMenu.resetAppState.click() 
    }
}