import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { loginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import { CheckoutOverviewPageMethods } from '../pages/checkout-overview-page/checkout-overview-page.methods';
import { CheckoutPageMethods } from '../pages/checkout-page/checkout-page.methods'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'


const userCredentials = loginPageData.credentials;

test('Login', async({page})=>{
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productsPageMethods = new ProductsPageMethods(page)
    const checkoutOverviewPageMethods = new CheckoutOverviewPageMethods(page)
    const cartPageMethods = new CartPageMethods(page)
    const checkoutPageMethods = new CheckoutPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password)
    await loginPageMethods.clickLoginButton()
    await productsPageMethods.clickAddCart('Sauce Labs Backpack')  
    await productsPageMethods.clickCartIcon() 
    await cartPageMethods.clickCheckoutButton()
    await checkoutPageMethods.insertFirstName('Raquel')
    await checkoutPageMethods.insertLastName('Rentero')
    await checkoutPageMethods.insertPostalCode('28050')
    await checkoutPageMethods.clickContinueButton()
    await checkoutOverviewPageMethods.clickFinishButton()
    //await checkoutOverviewPageMethods.clickCancelButton()
    //await checkoutOverviewPageMethods.clickFinishButton()
    await page.waitForTimeout(5000)
})