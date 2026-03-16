import { Page } from "@playwright/test"
import { CartPageElements } from "./cart-page.elements"

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements

    constructor(page: Page) {
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickContinueShoppingButton() {
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickCheckoutButton() {
        await this.cartPageElements.buttons.checkout.click()
     }

    async clickRemoveButton(productName: string) {
        await this.cartPageElements.removebutton(productName).click()
     }
    }