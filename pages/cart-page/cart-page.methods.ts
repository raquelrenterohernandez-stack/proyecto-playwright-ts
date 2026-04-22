import { expect, Page } from "@playwright/test"
import { CartPageElements } from "./cart-page.elements"
import { Logger } from "../../support/logger"

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements

    constructor(page: Page) {
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickContinueShoppingButton() {
        await Logger.logStep('Click on Continue Shopping button')
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickCheckoutButton() {
        await Logger.logStep('Click on Checkout button')
        await this.cartPageElements.buttons.checkout.click()
     }

    async clickRemoveButton(productName: string) {
        await Logger.logStep('Click on Remove button')
        await this.cartPageElements.removebutton(productName).click()
     }

     async verifyProductIsDisplayed(productName: string) {
        await Logger.logVerification(`Verify that product ${productName} is displayed in the cart`)
        const productCount = await this.cartPageElements.removebutton(productName).count()
        expect(productCount).toEqual(1)
    }

     async verifyProductIsNotDisplayed(productName: string) {
        await Logger.logVerification(`Verify that product ${productName} should not be displayed in the cart`)
        const productCount = await this.cartPageElements.removebutton(productName).count()
        expect(productCount).toEqual(0)
    }
}
    