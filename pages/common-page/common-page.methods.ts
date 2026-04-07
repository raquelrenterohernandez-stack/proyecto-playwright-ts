import {Page} from '@playwright/test'
import { CommonPageElements } from './common-page.elements'
import { Logger } from '../../support/logger'

export class CommonPageMethods{
    private page: Page
    private comonPageElements: CommonPageElements

    constructor(page: Page){
        this.page = page
        this.comonPageElements = new CommonPageElements(page)
    }

    async navigateToTheApplication(){
        await Logger.logStep('Navigate to the application')
        await this.page.goto('https://www.saucedemo.com/')
    }

    async openMenu(){
        await Logger.logStep('Open menu')
        await this.comonPageElements.buttons.openMenu.click()
    }

    async clickAllItems(){
        await Logger.logStep('Click on All Items')
        await this.comonPageElements.leftMenu.allItems.click()
    }

    async clickAbout(){
        await Logger.logStep('Click on About')
        await this.comonPageElements.leftMenu.about.click()
    }

    async clickLogout(){
        await Logger.logStep('Click on Logout') 
        await this.comonPageElements.leftMenu.logout.click()
    }

    async clickResetAppState(){
        await Logger.logStep('Click on Reset App State')
        await this.comonPageElements.leftMenu.resetAppState.click() 
    }
}