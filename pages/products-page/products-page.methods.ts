import { Page } from "@playwright/test"
import { ProductsPageElements } from "./products-page.elements"
import { Logger } from "../../support/logger"

export class ProductsPageMethods {
    private page: Page
    private productsPageElements: ProductsPageElements

    constructor(page: Page){
        this.page = page
        this.productsPageElements = new ProductsPageElements(page)
    }
    
    async clickAddCart(productName: string){
        await Logger.logStep(`Click on Add to Cart button of "${productName}"`)
        await this.productsPageElements.addCartButton(productName).click()
    }

    async clickCartIcon(){
        await Logger.logStep('Click on Cart icon')
        await this.productsPageElements.icons.cart.click()
    }
}
