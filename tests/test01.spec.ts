import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { loginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products.page.methods';

const userCredentials = loginPageData.credentials;

test('Login', async({page})=>{
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productsPageMethods = new ProductsPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password)
    await loginPageMethods.clickLoginButton()
    await productsPageMethods.clickAddCart('Sauce Labs Backpack')   
   // await commonPageMethods.openMenu()
    await page.waitForTimeout(3000)
})