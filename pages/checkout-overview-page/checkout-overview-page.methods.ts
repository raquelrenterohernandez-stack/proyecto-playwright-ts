import { Page } from "@playwright/test";
import { CheckoutOverviewPageElements } from "./checkout-overview-page.elements";   

export class CheckoutOverviewPageMethods {
    private page: Page
    private checkoutOverviewPageElements: CheckoutOverviewPageElements

    constructor(page: Page){
        this.page = page
        this.checkoutOverviewPageElements = new CheckoutOverviewPageElements(page)
    }

    async clickCancelButton(){
        await this.checkoutOverviewPageElements.buttons.cancel.click()
    }

    async clickFinishButton(){
        await this.checkoutOverviewPageElements.buttons.finish.click()
    }
}