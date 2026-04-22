import { test } from '@playwright/test'
import { Logger } from '../support/logger'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'
import { standardUser } from '../pages/login-page/login-page.interfaces'
import { CheckoutPageMethods } from '../pages/checkout-page/checkout-page.methods'
import { CheckoutOverviewPageMethods } from '../pages/checkout-overview-page/checkout-overview-page.methods'


test.describe('Checkout', () => {

    test('Checkout process', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const checkoutPageMethods = new CheckoutPageMethods(page)
        const productName = 'Sauce Labs Backpack'
        const checkoutOverviewPageMethods = new CheckoutOverviewPageMethods(page)

        await Logger.logPrecondition('User is logged in and has items in the cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.clickAddCart(productName)
        await productsPageMethods.clickCartIcon()

        await cartPageMethods.clickCheckoutButton()
        await checkoutPageMethods.insertFirstName('Raquel')
        await checkoutPageMethods.insertLastName('Rentero')
        await checkoutPageMethods.insertPostalCode('28023')
        await checkoutPageMethods.clickContinueButton()
        await checkoutPageMethods.verifyCheckoutInformationIsDisplayed()


    })
})