import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import { Logger } from '../support/logger'
import { standardUser } from '../pages/login-page/login-page.interfaces'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'
import { CartPageElements } from '../pages/cart-page/cart-page.elements'

test.describe('Cart test cases', async () => {
    test('Add items to the cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const productName = 'Sauce Labs Backpack'

        Logger.logPrecondition('User is logged in')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProductsPageIsDisplayed()

        await productsPageMethods.clickAddCart(productName)
        await productsPageMethods.clickCartIcon()
        await productsPageMethods.verifyProductsPageIsDisplayed(productName)

    })

     test('Remove items from the cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Backpack'

        Logger.logPrecondition('Item is in the cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)

        await productsPageMethods.clickAddCart(productName)
        await productsPageMethods.clickCartIcon()
        await cartPageMethods.clickRemoveButton(productName)
        await cartPageMethods.verifyProductIsNotDisplayed(productName)
     })
     
})
