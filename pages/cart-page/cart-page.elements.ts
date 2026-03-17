import { Page } from "@playwright/test";
export class CartPageElements {
    private page: Page

    constructor(page: Page){
        this.page = page
     }

     removebutton(productName: string) {
        return this.page.locator(`//div[.="${productName}"]//ancestor::div[@class="cart_item_label"]//button`)}

     get buttons(){
        return {
            continueShopping: this.page.locator('//a[.="Continue Shopping"]'),
            checkout: this.page.locator('#checkout')
        }
     }
    }
    